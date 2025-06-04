import Listing from "@/components/list";
import Header from "@/components/list/Header";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async ({ params }) => {
  const { keyword } = params
  const decodedKeyword = decodeURI(keyword) //decode ascii
  const searchAnime = await getAnimeResponse("anime",`q=${decodedKeyword}`)

  return (
    <>
      <section>
        <Header title={`Pencarian untuk ${decodedKeyword}`} linkHref="/populer" linkTitle="Lihat Semua" />
      </section>
      <Listing api={searchAnime} />
    </>
  );
};

export default Page
