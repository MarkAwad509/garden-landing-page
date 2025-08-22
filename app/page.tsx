import Link from "next/link";

export default function Home() {
  return (
    <header className="header">
      <h1 className="text-2xl font-semibold text-emerald-400 bg-gray-600 p-2">
        Panda Pavers & Gardening
      </h1>

      <nav>
        <ul>
          <li>
            <Link href="/about" className="underline p-2 m-2">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services" className="underline p-2 m-2">
              Services
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="underline p-2 m-2">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/testimonials" className="underline p-2 m-2">
              Testimonials
            </Link>
          </li>
          <li>
            <Link href="/quote" className="p-2 mx-3 my-5 bg-emerald-400 hover:bg-emerald-600 rounded-lg transition-all">
              Get a Quote
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
