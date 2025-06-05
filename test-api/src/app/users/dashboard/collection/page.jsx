import Link from "next/link"
import Image from "next/image"
import Header from "@/components/Dashboard/Header"

const Page = () => {
    return (
      <section className="mt-4">
        <Header title={"My Collection"}/>
        <div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/" className="relative border-2 border-amber-50">
                <Image width={350} height={350} className="w-full"/>
                <div className="absolute flex items-center justify-center bottom-0 w-full bg-amber-50 h-16">
                    <h5 className="text-xl text-center"> Judul Anime</h5>
                </div>
            </Link>
             <Link href="/" className="relative border-2 border-amber-50">
                <Image width={350} height={350} className="w-full"/>
                <div className="absolute flex items-center justify-center bottom-0 w-full bg-amber-50 h-16">
                    <h5 className="text-xl text-center"> Judul Anime</h5>
                </div>
            </Link>
             <Link href="/" className="relative border-2 border-amber-50">
                <Image width={350} height={350} className="w-full"/>
                <div className="absolute flex items-center justify-center bottom-0 w-full bg-amber-50 h-16">
                    <h5 className="text-xl text-center"> Judul Anime</h5>
                </div>
            </Link>
             <Link href="/" className="relative border-2 border-amber-50">
                <Image width={350} height={350} className="w-full"/>
                <div className="absolute flex items-center justify-center bottom-0 w-full bg-amber-50 h-16">
                    <h5 className="text-xl text-center"> Judul Anime</h5>
                </div>
            </Link>
             <Link href="/" className="relative border-2 border-amber-50">
                <Image src="" alt="" width={350} height={350} className="w-full"/>
                <div className="absolute flex items-center justify-center bottom-0 w-full bg-amber-50 h-16">
                    <h5 className="text-xl text-center"> Judul Anime</h5>
                </div>
            </Link>
            </div>
        </div>
      </section>
    )
}

export default Page