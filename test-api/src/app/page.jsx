import Listing from "@/components/list";
import Header from "@/components/list/Header";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime","limit=8")

  return (
    <>
      <section>
        <Header title="populer" linkHref="/populer" linkTitle="Lihat Semua" />
      </section>
      <Listing api={topAnime} />
    </>
  );
}

export default Page
