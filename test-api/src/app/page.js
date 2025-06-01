import Image from "next/image";
import Listing from "@/components/list/index";
import Header from "@/components/list/Header";

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime = await response.json()

  return (
    <>
    {/* Paling Populer*/}
        <section>
          <Header title="Paling Populer" linkHref="/populer" linkTitle="Lihat Semua"  />
        </section>
        <Listing api={topAnime}/>
    
    {/* Paling Terbaru*/}
        <section>
          <Header title="Paling Terbaru" linkHref="/new" linkTitle="Ikuti Sekarang"  />
        </section>
        <Listing api={topAnime}/>

     {/* Paling Ramai*/}
        <section>
          <Header title="Paling Ramai" linkHref="/ramai" linkTitle="Paling Ramai"  />
        </section>
        <Listing api={topAnime}/>

    </>
    )
}

export default Home
