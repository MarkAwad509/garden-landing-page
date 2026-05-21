import {
  ArrowRight,
  CheckCircle2,
  Hammer,
  Lightbulb,
  Sprout,
  Star,
  Trees,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const services = [
  {
    icon: Hammer,
    title: "Pavers & Hardscaping",
    text: "Driveways, patios, walkways, retaining details, and durable stone surfaces with clean installation standards.",
  },
  {
    icon: Sprout,
    title: "Synthetic Turf",
    text: "Low-maintenance lawn areas, pet-friendly turf, and usable green space designed around drainage and daily wear.",
  },
  {
    icon: Trees,
    title: "Landscape Remodeling",
    text: "Planting, edging, grading, and outdoor layouts that turn underused yards into practical living areas.",
  },
  {
    icon: Lightbulb,
    title: "Outdoor Lighting",
    text: "Path, accent, and feature lighting that makes patios, gardens, and walkways easier to use after sunset.",
  },
];

const proof = [
  "Planning from first walkthrough to final cleanup",
  "Material recommendations matched to your yard and maintenance goals",
  "Clear scopes for pavers, turf, planting, lighting, and outdoor kitchens",
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="hero-media">
            <Image
              src="/patio-garden-hero.png"
              alt="Backyard patio with pavers, turf, planting, and landscape lighting"
              fill
              priority
              sizes="100vw"
            />
          </div>
          <div className="shell hero-content">
            <span className="eyebrow">Outdoor living since 2007</span>
            <h1>Panda Pavers & Gardening</h1>
            <p>
              Pavers, turf, planting, lighting, and outdoor living spaces designed
              to make your yard easier to use, easier to maintain, and better to
              come home to.
            </p>
            <div className="hero-actions">
              <Link href="/quote" className="button">
                Request a Quote <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link href="/portfolio" className="button button-secondary">
                View Work
              </Link>
            </div>
            <div className="stats" aria-label="Company highlights">
              <div className="stat">
                <strong>2007</strong>
                <span>Serving homeowners since</span>
              </div>
              <div className="stat">
                <strong>6</strong>
                <span>Core outdoor services</span>
              </div>
              <div className="stat">
                <strong>1</strong>
                <span>Project team from plan to finish</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <span className="eyebrow">What we build</span>
            <h2 className="section-heading">
              Outdoor spaces with structure, shade, color, and clean edges.
            </h2>
            <p className="lede">
              From one focused upgrade to a complete yard remodel, the work starts
              with how you want to use the space and finishes with practical
              materials built for the property.
            </p>
            <div className="grid grid-3 mt-34">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article className="card" key={service.title}>
                    <span className="icon" aria-hidden="true">
                      <Icon size={22} />
                    </span>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="shell split">
            <div>
              <span className="eyebrow">Project approach</span>
              <h2 className="section-heading">One plan for the full yard.</h2>
              <p className="lede">
                Pavers, turf, planting, and lighting perform best when they are
                planned together. Panda Pavers & Gardening coordinates the visible
                finish with drainage, access, maintenance, and long-term use.
              </p>
              <ul className="check-list">
                {proof.map((item) => (
                  <li key={item}>
                    <CheckCircle2 color="var(--brand)" size={20} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Image
              src="/patio-garden-hero.png"
              alt="Stone patio, synthetic turf, planting, and low-voltage lighting"
              className="feature-image"
              width={720}
              height={520}
              sizes="(max-width: 860px) 100vw, 50vw"
            />
          </div>
        </section>

        <section className="section">
          <div className="shell grid grid-2">
            <article className="card">
              <span className="icon" aria-hidden="true">
                <Star size={22} />
              </span>
              <h3>The patio finally feels like part of the house.</h3>
              <p>
                A clear plan, tidy installation, and finished yard that matched
                the scope discussed before work began.
              </p>
            </article>
            <article className="card">
              <h3>Ready to price your project?</h3>
              <p>
                Share the yard size, services you need, and any timeline details.
                The quote request form is set up for the information needed to
                prepare a useful first response.
              </p>
              <div className="mt-22">
                <Link href="/quote" className="button">
                  Start Quote
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
