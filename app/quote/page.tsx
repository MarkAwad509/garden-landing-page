import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

const services = [
  "Remodeling",
  "Maintenance",
  "Hardscaping",
  "Landscaping",
  "Pavers",
  "Lighting",
];

export default function Quote() {
  return (
    <>
      <SiteHeader />
      <main className="section">
        <div className="shell split">
          <div>
            <span className="eyebrow">Quote request</span>
            <h1 id="quote" className="section-heading">
              Tell us what you want to change outside.
            </h1>
            <p className="lede">
              Share the basics for your yard and the services you need. The form is
              ready for a production endpoint once an email, CRM, or form provider
              is selected.
            </p>
          </div>
          <form className="card quote-form" method="post" action="#" aria-describedby="quote-note">
            <div className="grid grid-2">
              <div className="field">
                <label htmlFor="firstName">First name</label>
                <input id="firstName" name="firstName" type="text" autoComplete="given-name" required />
              </div>
              <div className="field">
                <label htmlFor="lastName">Last name</label>
                <input id="lastName" name="lastName" type="text" autoComplete="family-name" required />
              </div>
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" required />
            </div>
            <fieldset>
              <legend className="fieldset-label">Services needed</legend>
              <div className="checkbox-grid">
                {services.map((service) => {
                  const id = `service-${service.toLowerCase()}`;
                  return (
                    <label htmlFor={id} key={service}>
                      <input id={id} name="services" type="checkbox" value={service.toLowerCase()} />
                      {service}
                    </label>
                  );
                })}
              </div>
            </fieldset>
            <div className="field">
              <label htmlFor="message">Project notes</label>
              <textarea
                id="message"
                name="message"
                placeholder="Yard size, city, project goals, timeline, or materials you already have in mind"
                required
              />
            </div>
            <p id="quote-note" className="lede form-note">
              Connect this form to a production endpoint before launch.
            </p>
            <button className="button" type="submit">
              Submit Request
            </button>
          </form>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
