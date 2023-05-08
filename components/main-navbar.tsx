import ModeToggle from "@/components/mode-toggle";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/5 backdrop-blur-lg dark:bg-gray-800/5">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            className="flex cursor-pointer flex-row items-center gap-2"
            href="/"
          >
            <Image
              className="block dark:invert"
              src="/geevee-vector.svg"
              alt="GeeVee Studio"
              width={50}
              height={50}
            />
            <h1 className="relative hidden flex-row items-baseline gap-1 text-2xl font-bold lg:flex">
              <span className="sr-only">geevee studio</span>
              <span className="tracking-tight hover:cursor-pointer">
                geevee<span className="text-emerald-600">studio</span>
              </span>
              {/* <sup className="absolute left-[calc(100%+.1rem)] top-0 text-xs font-bold text-black">
                  [BETA]
                </sup> */}
            </h1>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12"></div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <div className="flex items-center gap-4">
            <Link href="/portfolio">
              <span className="cursor-pointer text-sm font-semibold leading-6">
                portfolio
              </span>
            </Link>
            <Link href="/contact">
              <span className="cursor-pointer text-sm font-semibold leading-6">
                contact
              </span>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
