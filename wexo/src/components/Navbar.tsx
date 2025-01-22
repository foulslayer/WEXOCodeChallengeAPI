import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between bg-violet-600 p-4">
        <h1 className="w-full">
          <ul className="flex flex-row text-white items-stretch w-full">
            <img src="/wexologo.svg" alt="Logo" className="w-24"></img>
            <li className="flex-1 flex items-center justify-center">
              <Link href="/">Start</Link>
            </li>
            <li className="flex-1 flex items-center justify-center">
              <Link href="/genre/action">Action</Link>
            </li>
            <li className="flex-1 flex items-center justify-center">
              <Link href="/genre/comedy">Comedy</Link>
            </li>
            <li className="flex-1 flex items-center justify-center">
              <Link href="/genre/thriller">Thriller</Link>
            </li>
            <li className="flex-1 flex items-center justify-center">
              <Link href="/genre/war">War</Link>
            </li>
            <li className="flex-1 flex items-center justify-center">
              <Link href="/genre/romance">Romance</Link>
            </li>
            <li className="flex-1 flex items-center justify-center">
              <Link href="/genre/drama">Drama</Link>
            </li>
            <li className="flex-1 flex items-center justify-center">
              <Link href="/genre/crime">Crime</Link>
            </li>
            <li className="flex-1 flex items-center justify-center">
              <Link href="/genre/documentary">Documentary</Link>
            </li>
            <li className="flex-1 flex items-center justify-center">
              <Link href="/genre/horror">Horror</Link>
            </li>
          </ul>
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
