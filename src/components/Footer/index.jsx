export const Footer = () => {
  return (
    <footer className="page-footer light-blue accent-2">
      <div className="container">
        <div className="footer-copyright light-blue accent-2">
          <div className="container">
            © {new Date().getFullYear()} Lisitsyn Alexander
            <a
              className="grey-text text-lighten-4 right"
              href="https://github.com/SashaLisitsyn/fortnite-shop"
            >
              Repo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
