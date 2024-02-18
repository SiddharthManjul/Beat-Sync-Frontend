import React from "react";
import Link from "next/link";
import ArtistCard from "@/components/artistCard";
import AudienceCard from "@/components/audienceCard";

const Home = () => {
  return (
    <>
      <div className="h-screen">
        <div className="top-12 relative">
          <div className="mx-auto container my-12">
            <ArtistCard />
          </div>
          <hr color="white" className="h-1 mx-12 rounded-full"/>
          <div className="mx-auto container mt-12">
            <AudienceCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
