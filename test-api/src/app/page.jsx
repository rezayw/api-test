import Listing from "@/components/list";
import Header from "@/components/list/Header";

const Page = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  const topAnime = await res.json();

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
