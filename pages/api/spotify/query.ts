// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

type QueryResult = {
  artists: string
  title: string
  spotifyId: string
  previewUrl: string
  duration: number
  album: string
  albumArt: {
    height: number
    url: string
    width: number
  }[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<QueryResult[]>) {
  const response = await fetch(process.env.SPOTIFY_QUERY_URL + '?query=' + req.query.query)
  
  const d = await response.json()

  const data: QueryResult[] = []

  d.body.tracks.items.forEach((item: any) => {
    console.log(item)
    const song = {
      artists: item.artists.map((artist: any) => artist.name).join(', '),
      title: item.name,
      spotifyId: item.uri,
      previewUrl: item.preview_url,
      duration: item.duration_ms,
      album: item.album.name,
      albumArt: item.album.images,

    }
    data.push(song)
  })

  res.status(200).json(data)
}
