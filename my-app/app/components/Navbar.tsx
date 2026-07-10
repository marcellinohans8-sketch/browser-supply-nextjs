import Link from "next/link";
import { Rocket } from "lucide-react";
import { FaYoutube, FaXTwitter } from "react-icons/fa6";

const menus = [
  { title: "Templates", href: "#" },
  { title: "Live examples", href: "#" },
  { title: "Support", href: "#" },
  { title: "Blog", href: "#" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-5 z-50 px-6">
      <nav className="mx-auto flex h-[74px] w-full items-center justify-between rounded-2xl border border-white/10 bg-[#111116]/80 px-8 backdrop-blur-2xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
            <Rocket size={18} />
          </div>

          <span className="text-lg font-semibold tracking-tight text-white">
            Browser.supply
          </span>
        </Link>

        {/* Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {menus.map((menu) => (
            <Link
              key={menu.title}
              href={menu.href}
              className="text-[15px] text-zinc-300 hover:text-white transition"
            >
              {menu.title}
            </Link>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10">
            <FaXTwitter size={15} />
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10">
            <FaYoutube size={16} />
          </button>

          <button className="rounded-xl bg-zinc-800 px-5 py-2.5 text-sm font-semibold hover:bg-zinc-700 transition">
            Bundle
          </button>
        </div>
      </nav>
    </header>
  );
}
