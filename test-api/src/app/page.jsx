import Listing from "@/components/list";
import Header from "@/components/list/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime","limit=8")
  let recommendationAnime = await getNestedAnimeResponse("recommendations/anime","entry")
  recommendationAnime = reproduce(recommendationAnime, 4)
  
  return (
    <>
      <section>
        <Header title="Populer" linkHref="/populer" linkTitle="Lihat Semua" />
        <Listing api={topAnime} />
      </section>
      <section>
        <Header title="Rekomendasi" linkHref="/rekomendasi" linkTitle="Lihat Semua" />
        <Listing api={recommendationAnime} />
      </section>
    </>
  )
}

export default Page
