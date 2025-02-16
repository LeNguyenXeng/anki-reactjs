import Footer from "./Footer";
import Menu from "./Menu";
import "../css/Footer.css"

function Layout({ children }) {
  return (
    <>
      <Menu />
      <main>{children}</main>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
export default Layout;
