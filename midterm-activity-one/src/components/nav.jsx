function Navigation() {
  const path = typeof window !== "undefined" ? window.location.pathname : "/";

  return (
    <header className="navigation">
      <div className="nav-inner">
        <div className="brand">Student Portal</div>

        <nav className="links" aria-label="Main navigation">
          <a href="/" aria-current={path === "/" ? "page" : undefined}>
            Home
          </a>
          <a href="/students" aria-current={path === "/students" ? "page" : undefined}>
            Students
          </a>
          <a href="/about" aria-current={path === "/about" ? "page" : undefined}>
            About
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;