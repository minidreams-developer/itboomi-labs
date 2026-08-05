function Home() {
  const styles = {
    container: {
      minHeight: "100vh",
      background: "#f8fafc",
      fontFamily: "Inter, Arial, sans-serif",
      color: "#1f2937",
      display: "flex",
      flexDirection: "column",
    },

    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 8%",
      borderBottom: "1px solid #e5e7eb",
    },

    logo: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#2563eb",
    },

    nav: {
      display: "flex",
      gap: "24px",
    },

    link: {
      textDecoration: "none",
      color: "#374151",
      fontSize: "16px",
      fontWeight: "500",
    },

    hero: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "40px 20px",
    },

    title: {
      fontSize: "56px",
      fontWeight: "700",
      marginBottom: "20px",
      maxWidth: "800px",
      lineHeight: "1.2",
    },

    subtitle: {
      fontSize: "18px",
      color: "#6b7280",
      maxWidth: "650px",
      lineHeight: "1.7",
      marginBottom: "40px",
    },

    buttonGroup: {
      display: "flex",
      gap: "16px",
    },

    primaryBtn: {
      padding: "14px 28px",
      border: "none",
      borderRadius: "10px",
      background: "#2563eb",
      color: "#fff",
      fontSize: "16px",
      cursor: "pointer",
      fontWeight: "600",
    },

    secondaryBtn: {
      padding: "14px 28px",
      border: "1px solid #d1d5db",
      borderRadius: "10px",
      background: "#fff",
      color: "#111827",
      fontSize: "16px",
      cursor: "pointer",
      fontWeight: "600",
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.navbar}>
        <div style={styles.logo}>Dinesh</div>

        <nav style={styles.nav}>
          <a href="/" style={styles.link}>
            Home
          </a>
          <a href="/" style={styles.link}>
            About
          </a>
          <a href="/" style={styles.link}>
            Services
          </a>
          <a href="/" style={styles.link}>
            Contact
          </a>
        </nav>
      </header>

      <section style={styles.hero}>
        <h1 style={styles.title}>Build Modern React Applications</h1>

        <p style={styles.subtitle}>
          Create fast, responsive, and beautiful web experiences with clean
          architecture and a minimal design.
        </p>

        <div style={styles.buttonGroup}>
          <button style={styles.primaryBtn}>Get Started</button>

          <button style={styles.secondaryBtn}>Learn More</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
