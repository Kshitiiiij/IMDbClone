import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SpinnerInfinity } from 'spinners-react'

export default function Card({result}) {
  return (
    <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border-slate-400 transition-shadow duration-200 group'>
      <Link href={`/movie/${result.id}`}>
        <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster.path}`} width={500} height={300}
        className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200'
        placeholder='blur'
        blurDataURL='/spinner.svg'
        ></Image>
      </Link>
    </div>
  )
}
