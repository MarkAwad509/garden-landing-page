import { Star } from "lucide-react";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

const testimonials = [
  {
    quote:
      "The scope was clear, the crew kept the work area organized, and the finished patio made the yard much easier to use.",
    name: "Residential patio client",
  },
  {
    quote:
      "They helped us balance turf, planting, and pavers so the space looks finished without adding more maintenance.",
    name: "Backyard remodel client",
  },
  {
    quote:
      "The lighting plan changed how we use the yard at night. Walkways and seating areas feel intentional now.",
    name: "Outdoor lighting client",
  },
];

export default function Testimonials() {
  return (
    <>
      <SiteHeader />
      <main className="section">
        <div className="shell">
          <span className="eyebrow">Testimonials</span>
          <h1 className="section-heading">What clients value after the work is done.</h1>
          <p className="lede">
            Replace these anonymized summaries with verified customer reviews when
            final review permissions are available.
          </p>
          <div className="grid grid-3 mt-34">
            {testimonials.map((testimonial) => (
              <article className="card" key={testimonial.name}>
                <span className="icon" aria-hidden="true">
                  <Star size={22} />
                </span>
                <h3>{testimonial.quote}</h3>
                <p>{testimonial.name}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
