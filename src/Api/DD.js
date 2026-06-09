const BASE_URL = 'https://futuramaapi.com/apicharacters'

export async function getCharacters() {
  const response = await fetch(`${BASE_URL}/characters`)

  if (!response.ok) {
    throw new Error(`Erro ao buscar personagens: ${response.status}`)
  }

  const data = await response.json()
  // data = { info: { count, pages, next, prev }, results: [] }
  return data.items
}
