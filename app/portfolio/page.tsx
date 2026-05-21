import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

export default function Portfolio() {
  return (
    <>
      <SiteHeader />
      <main className="section">
        <div className="shell split">
          <div>
            <span className="eyebrow">Portfolio</span>
            <h1 id="portfolio" className="section-heading">
              Clean transitions from patio to garden.
            </h1>
            <p className="lede">
              Portfolio photography should be updated with real completed project
              images before launch. This page is structured to feature finished
              pavers, turf, planting, lighting, and outdoor living work.
            </p>
            <div className="mt-28">
              <Link href="/quote" className="button">
                Discuss a Similar Project
              </Link>
            </div>
          </div>
          <Image
            src="/patio-garden-hero.png"
            alt="Sample finished patio and garden project"
            className="feature-image"
            width={720}
            height={520}
            sizes="(max-width: 860px) 100vw, 50vw"
          />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
