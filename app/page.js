const API_KEY = process.env.API_KEY
import Results from "./components/Results"
export default async function Home({searchParams}) {
  const genre = searchParams.genre

  const res = await fetch(`https://api.themoviedb.org/3/${genre==='fetchTopRated'?'movie/top_rated':'trending/all/day'}?api_key=${API_KEY}`, { cache: 'no-store' })

  if(!res.ok) {
    throw new Error("Failed to fetch data")
  }
  const data = await res.json()
  const results = data.results
  return (
   <Results results={results}/>
  )
}
