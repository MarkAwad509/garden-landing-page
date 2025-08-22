import Link from "next/link";

export default function quote() {
  return (
    <div>
      <Link href="/" className="underline p-2 m-2">
        Back
      </Link>
      <form>
        <label>
          First Name:
        </label>
        <input name="firstName" type="text" />
        <label>
          Last Name:
        </label>
        <input name="lastName" type="text" />
        <label>
          Email:
        </label>
        <input name="email" type="text" />
        <label>
          Phone #:
        </label>
        <input name="phone" type="text" />
        <label>
          Services needed:
        </label>
        <ul>
          <input name="Remodeling" type="checkbox" value="Remodeling" />
          <input name="Remodeling" type="checkbox" />
          <input name="Remodeling" type="checkbox" />
          <input name="Remodeling" type="checkbox" />
        </ul>
      </form>
    </div>
  )
}