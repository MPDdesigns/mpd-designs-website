export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>
      
      {/* HERO */}
      <section style={{ padding: "80px 10%", borderBottom: "1px solid #eee" }}>
        <h1>MPD Designs</h1>
        <p>
          Product design, testing, and WaterMark compliance for plumbing and
          water-using products.
        </p>
        <p>
          We help manufacturers, importers, and plumbers bring compliant,
          certifiable products to market — without costly redesigns or delays.
        </p>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "60px 10%" }}>
        <h2>Services</h2>
        <ul>
          <li>Concept Design & Product Strategy</li>
          <li>3D CAD & High-quality Renderings</li>
          <li>Technical Drawings for Tooling & Manufacture</li>
          <li>Pre-Tooling Compliance Reviews (WaterMark)</li>
          <li>Product Testing & Certification Support</li>
          <li>Component & Finished Product Sourcing</li>
        </ul>
      </section>

      {/* PROCESS */}
      <section style={{ padding: "60px 10%", background: "#f8f8f8" }}>
        <h2>Our Process</h2>
        <ol>
          <li>
            <strong>Discovery & Scoping:</strong> Define goals, compliance path,
            scope, milestones, and deliverables.
          </li>
          <li>
            <strong>Concept & Design:</strong> Develop concepts, CAD, and
            renderings aligned to standards.
          </li>
          <li>
            <strong>Engineering & Review:</strong> Technical drawings and
            pre-tooling compliance checks.
          </li>
          <li>
            <strong>Testing & Certification:</strong> Support through WaterMark
            testing and approval.
          </li>
        </ol>
      </section>

      {/* WHY WATERMARK FAILS */}
      <section style={{ padding: "60px 10%" }}>
        <h2>Why WaterMark Projects Fail</h2>
        <ul>
          <li>Compliance considered too late in the design process</li>
          <li>Incorrect materials or wall thicknesses</li>
          <li>Missing or incorrect test samples</li>
          <li>Unclear responsibility between designer, supplier, and certifier</li>
        </ul>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "60px 10%", background: "#111", color: "#fff" }}>
        <h2>About MPD Designs</h2>
        <p>
          MPD Designs operates at the intersection of product design,
          engineering, and certification. With deep experience in regulated
          plumbing products, we act as an independent technical authority —
          helping clients avoid redesigns, certification failures, and delayed
          market entry.
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "40px 10%", borderTop: "1px solid #eee" }}>
        <p>© MPD Designs — Australia</p>
      </footer>

    </div>
  )
}

