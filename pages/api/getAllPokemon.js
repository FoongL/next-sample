export default async function handler(req, res) {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    const output = await data.json()
    res.status(200).json(output)
  }
  