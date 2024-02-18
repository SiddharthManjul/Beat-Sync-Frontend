"use client";

import React from "react";
import Image from "next/image";

import SongAPI from "@/services/data";

const SongCard = () => {
  return (
    <>
      <div>
        <div className="bg-black">
          <ul className="m-auto container">
            {SongAPI.map(({ id, image, songName, artistName }) => (
              <li key={id} className="flex flex-row  bg-blue-400 m-4 rounded-lg">
                <Image
                  width="100"
                  height="100"
                  className="rounded-lg"
                  src={image}
                  alt="Images"
                ></Image>
                <div className="items-center ml-2 mt-6 font-anta text-cyan-900 text-lg">
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
