import BackLink from "../../components/BackLink";

export default function Quote() {
  return (
    <div>
      <BackLink />
      <h1 id="quote" className="text-2xl font-semibold p-2">
        Get a Free Quote Here.
      </h1>
      <form>
        <label htmlFor="firstName">
          First Name:
        </label>
        <input id="firstName" name="firstName" type="text" />
        <label htmlFor="lastName">
          Last Name:
        </label>
        <input id="lastName" name="lastName" type="text" />
        <label htmlFor="email">
          Email:
        </label>
        <input id="email" name="email" type="email" />
        <label htmlFor="phone">
          Phone #:
        </label>
        <input id="phone" name="phone" type="tel" />
        <p>Services needed:</p>
        <ol id="services">
          <li>
            <input
              id="service-remodeling"
              name="remodeling"
              type="checkbox"
              value="remodeling"
            />
            <label htmlFor="service-remodeling">Remodeling</label>
          </li>
          <li>
            <input
              id="service-maintenance"
              name="maintenance"
              type="checkbox"
              value="maintenance"
            />
            <label htmlFor="service-maintenance">Maintenance</label>
          </li>
          <li>
            <input
              id="service-hardscaping"
              name="hardscaping"
              type="checkbox"
              value="hardscaping"
            />
            <label htmlFor="service-hardscaping">Hardscaping</label>
          </li>
          <li>
            <input
              id="service-landscaping"
              name="landscaping"
              type="checkbox"
              value="landscaping"
            />
            <label htmlFor="service-landscaping">Landscaping</label>
          </li>
          <li>
            <input
              id="service-pavers"
              name="pavers"
              type="checkbox"
              value="pavers"
            />
            <label htmlFor="service-pavers">Pavers</label>
          </li>
          <li>
            <input
              id="service-lighting"
              name="lighting"
              type="checkbox"
              value="lighting"
            />
            <label htmlFor="service-lighting">Lighting</label>
          </li>
        </ol>
        <button className="btn btn-primary p-2 mx-3 my-5 bg-emerald-400 hover:bg-emerald-600 rounded-lg transition-all">
          Submit
        </button>
      </form>
    </div>
  );
}
