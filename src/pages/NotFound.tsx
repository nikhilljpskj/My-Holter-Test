import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you requested could not be found on My Holter Test."
        path="/404"
      />
      <section className="page-hero">
        <div className="container narrow reveal">
          <p className="eyebrow">404</p>
          <h1>This page is not available.</h1>
          <p>
            The old route may have been removed as part of the new frontend-only
            website.
          </p>
          <Link className="text-link" to="/">
            Return home
          </Link>
        </div>
      </section>
    </>
  );
}
