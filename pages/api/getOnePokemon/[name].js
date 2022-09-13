export default async function handler({ query: { name } }, res) {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const output = await data.json();
  res.status(200).json(output);
}
