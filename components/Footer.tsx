import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-7">
      <div className="mx-auto w-full max-w-7xl md:flex md:items-center md:justify-between">
        <span className="sm:text-center">
          © {new Date().getFullYear()}{" "}
          <Link href="#" className="hover:underline">
            geevee
          </Link>
        </span>
        <u className="flex flex-wrap items-center gap-4">
          <li>
            <Link href="#" className="hover:underline md:mr-6">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline md:mr-6">
              Privacy
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline md:mr-6">
              Beans
            </Link>
          </li>
        </u>
      </div>
    </footer>
  );
}
