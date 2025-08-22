import Link from "next/link";

export default function About() {
    return (
      <div>
        <Link href="/" className="underline p-2 m-2">
          Back
        </Link>
        <h1>About us</h1>
        <p>Since 2007, we&#39;ve been creating extraordinary outdoor living environments that enhance lives. From custom synthetic turf and paver installations to outdoor kitchens and lighting – we bring beauty and functionality to every project.</p>
      </div>

    );
}
