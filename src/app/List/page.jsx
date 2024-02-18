import Image from "next/image";
import SongCard from "@/components/songCard";
import { SearchInput } from "@/components/search";

export default function List() {
  return (
    <div>
      <SearchInput defaultValue={null} />
      <SongCard />
    </div>
  );
}
