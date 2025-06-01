import Image from "next/image";
import Listing from "@/components/list/index";
import Header from "@/components/list/Header";

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime = await response.json()

  return (
    <>
        <section>
        <Header title="Paling Populer" linkHref="/populer" linkTitle="Lihat Semua"  />
        </section>
        <Listing api={topAnime}/>
    </>
    )
}

export default Home
