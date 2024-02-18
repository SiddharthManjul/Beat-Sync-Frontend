import Image from "next/image";
import SongCard from "@/components/songCard";
import { SearchInput } from "@/components/search";

const ArtistList = () => {
  return (
    <div>
      <SearchInput defaultValue={null} />
      <SongCard />
    </div>
  );
}

export default ArtistList;

