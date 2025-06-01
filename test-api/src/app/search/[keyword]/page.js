import Listing from "@/components/list";
import Header from "@/components/list/Header";

const Page = async ({ params }) => {
  const { keyword } = params
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
  const searchAnime = await response.json()

  return (
    <>
      <section>
        <Header title={`Pencarian untuk "${keyword}"`} linkHref="/populer" linkTitle="Lihat Semua" />
      </section>
      <Listing api={searchAnime} />
    </>
  );
};

export default Page
