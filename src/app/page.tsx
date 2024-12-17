import { Tinos } from "next/font/google";
import Link from "next/link";
const tinos = Tinos({
  weight:"700",
  subsets:["latin"]
})

export default function Home() {
  return (
    <div className={`bg-blue-400 h-screen w-screen `}>
      <h1 className={`text-center text-5xl ${tinos.className} `}>This is Fetching data from api of posts</h1>
      <Link href={"/postCards"}>
        <div className="p-3 m-3 border-black border-2 rounded-md w-max">
          Take me to PostCards
        </div>
      </Link>
    </div>
  );
}
