import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-160px)] flex-col items-center justify-center gap-20">
      <h1 className="text-center text-8xl font-bold drop-shadow-2xl">
        welcome to...{" "}
      </h1>
      <Link href="/">
        <Image
          className="float mx-auto block h-auto w-auto drop-shadow-2xl dark:hidden"
          src="/geevee-trim.png"
          alt="GeeVee Studio"
          width={500}
          height={500}
        />
        <Image
          className="float mx-auto hidden h-auto w-auto drop-shadow-2xl dark:block"
          src="/geevee-dark.png"
          alt="GeeVee Studio"
          width={500}
          height={500}
        />
      </Link>
      <p className="max-w-2xl text-center text-xl">
        at <span className="font-bold text-emerald-600">geevee</span>, we
        breathe life into lines of code, crafting innovative, robust, and
        user-friendly software solutions. we are dedicated and forward-thinking
        software developers, consistently delivering cutting-edge applications
        to various industries, helping them navigate the digital landscape.
      </p>
    </main>
  );
}
