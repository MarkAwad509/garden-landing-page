import Link from "next/link";

export default function quote() {
  return (
    <div>
      <Link href="/" className="underline p-2 m-2">
        Back
      </Link>
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
        <ul id="services">
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
              id="service-lighting"
              name="lighting"
              type="checkbox"
              value="lighting"
            />
            <label htmlFor="service-lighting">Lighting</label>
          </li>
        </ul>
      </form>
    </div>
  )
}

