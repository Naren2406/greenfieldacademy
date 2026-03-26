export default function App() {

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "Arial", background: "#f0fdf4", textAlign: "center" }}>

      <header style={{ background: "green", color: "white", padding: "20px" }}>
        <h1>Greenfield Academy</h1>
        <p>Nurturing Young Minds for a Better Future</p>
      </header>

      <section style={{ padding: "30px" }}>
        <h2>Welcome to Greenfield Academy</h2>
        <p>Quality education with strong values.</p>
        <button onClick={scrollToContact} style={{ padding: "10px 20px", background: "green", color: "white", border: "none" }}>
          Apply Now
        </button>
      </section>

      <section style={{ padding: "30px" }}>
        <h2>Subjects</h2>
        <p>Mathematics | Science | Social Science | English</p>
      </section>

      <section style={{ padding: "30px" }}>
        <h2>Principal's Message</h2>
        <p>"At Greenfield Academy, we shape future leaders."</p>
        <b>Ms. Puja Lakshmi</b>
      </section>

      <section id="contact" style={{ padding: "30px" }}>
        <h2>Contact Us</h2>
        <p>Email: info@greenfieldacademy.edu</p>
        <p>Phone: +91 8977942722</p>
        <p>Address: Jayabheri Park, Ruby Block, Kompally, Hyderabad</p>
      </section>

    </div>
  );
}
