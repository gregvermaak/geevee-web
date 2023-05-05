import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-7">
      <div className="lg:text-md mx-auto flex w-full max-w-7xl items-center justify-between text-sm">
        <span className="sm:text-center">
          © {new Date().getFullYear()}{" "}
          <Link href="#" className="hover:underline">
            geevee
          </Link>
        </span>
        <u className="flex flex-wrap items-center gap-4">
          <li>
            <Link href="#" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Privacy
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Beans
            </Link>
          </li>
        </u>
      </div>
    </footer>
  );
}
