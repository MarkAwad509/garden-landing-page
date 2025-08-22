import Link from "next/link";

export default function testimonials() {
  return (
    <div>
      <Link href="/" className="underline p-2 m-2">
        Back
      </Link>
      <p>Testimonial 1</p>
      <p>Testimonial 2</p>
      <p>Testimonial 3</p>
      <p>Testimonial 4</p>
      <p>Testimonial 5</p>
    </div>

  );
}