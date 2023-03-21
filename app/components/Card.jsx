import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Card({ result }) {
  return (
    <div
      className="cursor-pointer sm:p-3 
      mx-5
    sm:hover:shadow-[#242526] sm:shadow-md rounded-lg sm:border-[#242526] transition-shadow duration-200 group"
    >
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster.path
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          placeholder="blur"
          blurDataURL="loadimg"
          alt="image"
        ></Image>
        <div className="p-2">
          <p className="line-clamp-2 text-lg">{result.overview}</p>
        </div>
      </Link>
    </div>
  );
}
