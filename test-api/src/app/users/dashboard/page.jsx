import Image from "next/image";
import { authUserSession } from "@/libs/auth-libs";

const Page = async () => {
  const user = await authUserSession();

  return (

    <div className="text-center text-amber-50">
      {user ? (
                <div className="text-shadow-amber-50">
                <h3>DASHBOARD</h3>
                <h5>Welcome, {user.name}...</h5>
                <Image
                    src={user.image}
                    alt="User Avatar"
                    width={100}
                    height={100}
                    className="rounded-full mx-auto"
                />
                </div>
            ) : (
                <div>
                <h3>Dashboard</h3>
                <h5>Please Sign In to access your dashboard.</h5>
                </div>
      )}
    </div>
  );
};

export default Page;
