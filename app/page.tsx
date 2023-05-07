import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-160px)] flex-col items-center justify-center gap-8 p-5 lg:gap-20">
      <h1 className="text-center text-4xl font-bold drop-shadow-2xl lg:text-8xl">
        welcome to...{" "}
      </h1>
      <Link href="/">
        <Image
          className="float mx-auto block drop-shadow-2xl dark:hidden lg:max-w-xl"
          src="/geevee-vector.svg"
          alt="GeeVee Studio"
          width={500}
          height={500}
        />
        <Image
          className="float mx-auto hidden drop-shadow-2xl dark:block"
          src="/geevee-dark-vector.svg"
          alt="GeeVee Studio"
          width={500}
          height={500}
        />
      </Link>
      <p className="max-w-2xl text-center text-sm lg:text-xl">
        at <span className="font-bold text-emerald-600">geevee</span>, we
        breathe life into lines of code, crafting innovative, robust, and
        user-friendly software solutions. we are dedicated and forward-thinking
        software developers, consistently delivering cutting-edge applications
        to various industries, helping them navigate the digital landscape.
      </p>
    </main>
  );
}
