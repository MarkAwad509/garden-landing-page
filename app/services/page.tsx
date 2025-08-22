import BackLink from "../../components/BackLink";

export default function Services() {
  return (
    <div>
      <BackLink />
      <h1 className="text-2xl font-semibold p-2">
        Services
      </h1>
      <ul>
        <li>
          <h2 className="text-lg font-normal p-2">Remodeling</h2>
        </li>
        <li>
          <h2 className="text-lg font-normal p-2">Maintenance</h2>
        </li>
        <li>
          <h2 className="text-lg font-normal p-2">Hardscaping</h2>
        </li>
        <li>
          <h2 className="text-lg font-normal p-2">Landscaping</h2>
        </li>
        <li>
          <h2 className="text-lg font-normal p-2">Pavers</h2>
        </li>
        <li>
          <h2 className="text-lg font-normal p-2">Lighting</h2>
        </li>
      </ul>
    </div>
  );
}
