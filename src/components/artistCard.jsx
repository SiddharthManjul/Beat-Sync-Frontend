import React from "react";
import Image from "next/image";
import Link from "next/link";

const ArtistCard = () => {
  return (
    <main>
      <Link href="/List">
        <div className="flex justify-center">
          <Image
            width="300"
            height="300"
            className="rounded-lg"
            src="/images/artists.jpg"
            alt="Images"
          ></Image>
          <p className="text-3xl absolute z-10 backdrop-blur-xl px-2 rounded-lg mt-44 text-yellow-400">
            Artist
          </p>
        </div>
      </Link>
    </main>
  );
}

export default ArtistCard