"use client";

import React from "react";
import Image from "next/image";

const SongAPI = [
  {
    id: 1,
    image: "/images/starboy.png",
    songName: "Starboy",
    artistName: "The Weekend",
  },
  {
    id: 2,
    image: "/images/purpleLamborghini.jpg",
    songName: "Purple Lamborghini",
    artistName: "Skrillex",
  },
];

const SongCard = () => {
  return (
    <>
      <div>
        <div className="bg-black">
          <ul className="m-auto container">
            {SongAPI.map(({ id, image, songName, artistName }) => (
              <li key={id} className="flex flex-row  bg-gray-400 m-4 rounded-lg">
                <Image
                  width="100"
                  height="100"
                  className="rounded-lg"
                  src={image}
                  alt="Images"
                ></Image>
                <div className="items-center">
                  <h1>{songName}</h1>
                  <p>{artistName}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SongCard;
