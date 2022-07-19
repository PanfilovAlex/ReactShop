export function Footer() {
  return (
    <footer className="page-footer indigo accent-1">
      <div className="footer-copyright">
        <div className="container" style={{ margin: "10px 10px" }}>
          © {new Date().getFullYear()} Copyright Text
        </div>
        <a
          className="grey-text text-lighten-4 right"
          href="#!"
          style={{ margin: "10px 10px" }}
        >
          More Links
        </a>
      </div>
    </footer>
  );
}
