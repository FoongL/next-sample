import Link from "next/link";

export default function PokemonDetail({ pokeDetail }) {
  console.log(pokeDetail);
  return (
    <div>
      <h1>Welcome to the {pokeDetail.name} page:</h1>
      <Link href="/">Click me for the home page</Link>
      <h3>Abilities:</h3>
      <ul>
        {pokeDetail.abilities.map((ability, index) => {
          return <li key={index}>{ability.ability.name}</li>;
        })}
      </ul>
    </div>
  );
}

export async function getStaticProps(context) {
  // const data = await fetch(
  //   `https://pokeapi.co/api/v2/pokemon/${context.params.name}`
  // );
  const data = await fetch(`http://localhost:3000/api/getOnePokemon/${context.params.name}`)
  const pokeDetail = await data.json();
  return {
    props: {
      pokeDetail,
    }, // will be passed to the page component as props
  };
}

export const getStaticPaths = async () => {
  const data = await fetch('http://localhost:3000/api/getAllPokemon')
  // const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const pokeList = await data.json();
  const names = pokeList.results.map((pokemon) => pokemon.name);
  const paths = names.map((name) => ({ params: { name: String(name) } }));

  // paths = [{params:{name: 'bulbasaur'}}, {params:{name: 'ivysaur'}}]
  return {
    paths,
    fallback: false,
  };
};
