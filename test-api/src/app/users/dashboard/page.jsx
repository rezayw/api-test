import Image from "next/image";
import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  return (
      <div className="mt-8 text-amber-50 flex flex-col justify-center items-center">
          <h5 className="text-2xl font-bold">Welcome, {user.name}</h5>
          {user?.image ?(
          <Image
              src={user.image}
              alt="User Avatar"
              width={100}
              height={100}
              className="rounded-full mx-auto"
          />
          ) : null }
          <div className="flex flex-wrap gap-4 py-8">
            <Link 
            href="/users/dashboard/collection"
            className=" bg-amber-300 
                        text-amber-50
                        font-bold
                        px-4
                        py-3
                        text-xl"
            >My Collection</Link>
            <Link 
            href="/users/dashboard/comment"
            className=" bg-amber-300 
                        text-amber-50
                        font-bold
                        px-4
                        py-3
                        text-xl"
            >My Comment</Link>
          </div>
    </div>
  );
};

export default Page;
