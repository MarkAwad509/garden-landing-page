import { Hammer, Lightbulb, Shovel, Sprout, Trees, Wrench } from "lucide-react";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

const services = [
  ["Remodeling", "Full-yard refreshes, outdoor living updates, and practical layout improvements.", Wrench],
  ["Maintenance", "Seasonal cleanup and upkeep planning for planted and hardscaped areas.", Shovel],
  ["Hardscaping", "Stone surfaces, edging, pathways, retaining details, and usable patio areas.", Hammer],
  ["Landscaping", "Planting, soil, borders, and yard structure that supports the overall design.", Trees],
  ["Pavers", "Driveways, walkways, patios, and transitions installed with attention to base and finish.", Sprout],
  ["Lighting", "Path, accent, and outdoor living lighting for safer evening use.", Lightbulb],
] as const;

export default function Services() {
  return (
    <>
      <SiteHeader />
      <main className="section">
        <div className="shell">
          <span className="eyebrow">Services</span>
          <h1 className="section-heading">The core trades for a complete yard.</h1>
          <p className="lede">
            Choose a focused service or combine several into one coordinated plan
            for the front yard, backyard, side yard, or outdoor living area.
          </p>
          <div className="grid grid-3 mt-34">
            {services.map(([title, text, Icon]) => (
              <article className="card" key={title}>
                <span className="icon" aria-hidden="true">
                  <Icon size={22} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
