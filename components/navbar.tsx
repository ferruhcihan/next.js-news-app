import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center h-16">
      <div
        className="m-6 cursor-pointer hover:text-gray"
        onClick={() => router.push("/")}
      >
        Home
      </div>
      <div
        className="m-6 cursor-pointer hover:text-gray"
        onClick={() => router.push("/feed/1")}
      >
        Feed
      </div>
      <div
        className="m-6 cursor-pointer hover:text-gray"
        onClick={() => router.push("/dom")}
      >
        DOM
      </div>
      <div
        className="m-6 cursor-pointer hover:text-gray"
        onClick={() =>
          (window.location.href = "https://twitter.com/ferruhcihan")
        }
      >
        Twitter
      </div>
    </div>
  );
};

export default Navbar;
