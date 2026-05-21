import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

export default function About() {
  return (
    <>
      <SiteHeader />
      <main className="section">
        <div className="shell">
          <span className="eyebrow">About</span>
          <h1 className="section-heading">Outdoor work planned around real life.</h1>
          <p className="lede">
            Since 2007, Panda Pavers & Gardening has created outdoor living
            environments with synthetic turf, paver installations, outdoor
            kitchens, lighting, planting, and maintenance-minded design.
          </p>
          <div className="grid grid-3 mt-34">
            <article className="card">
              <h3>Practical planning</h3>
              <p>
                Every project starts with the way the space needs to function:
                access, shade, pets, entertaining, maintenance, and drainage.
              </p>
            </article>
            <article className="card">
              <h3>Coordinated scopes</h3>
              <p>
                Pavers, turf, planting, and lighting are selected to work together
                instead of competing for space or causing avoidable rework.
              </p>
            </article>
            <article className="card">
              <h3>Clean finishes</h3>
              <p>
                The goal is a yard that looks finished on day one and stays easier
                to care for through regular use.
              </p>
            </article>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
