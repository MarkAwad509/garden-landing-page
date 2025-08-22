import BackLink from "@/components/BackLink";

export default function quote() {
  return (
    <div>
      <BackLink />
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
  );
}
