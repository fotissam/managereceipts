import { currentYear, author } from "../data";
export function Footer() {
  return (
    <footer className="App-footer">
      <div className="container d-flex justify-content-center mt-3 py-4 bg-light rounded-4">
        <div className="col-12 text-center">
          <span>
            Copyright {currentYear} - {author}
          </span>
        </div>
      </div>
    </footer>
  );
}
