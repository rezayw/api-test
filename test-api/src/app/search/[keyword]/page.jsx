import Listing from "@/components/list";
import Header from "@/components/list/Header";

const Page = async ({ params }) => {
  const { keyword } = params
  const decodedKeyword = decodeURI(keyword) //decode ascii
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
  const searchAnime = await response.json()

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
