import Image from "next/image";
import Link from "next/link";

const Listing = ({ api }) => {
  if (!api?.data || api.data.length === 0) {
    return (
      <div className="px-4 py-8 text-center text-gray-500">
        Tidak ada hasil ditemukan.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4 py-6">
      {api.data.map((anime) => (
        <Link
          key={anime.mal_id}
          href={`/${anime.mal_id}`}
          className="cursor-pointer group bg-white rounded shadow hover:shadow-lg transition"
        >
          <div className="relative w-full aspect-[2/3] overflow-hidden rounded-t">
            <Image
              src={anime.images.webp.image_url}
              alt={anime.title}
              width={350}
              height={525}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <h3 className="font-semibold text-sm md:text-base p-3 truncate">
            {anime.title}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default Listing;
