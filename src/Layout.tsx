import { Outlet } from "react-router-dom";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Header from "./components/Header";

function Layout() {
  return (
    <div className="page-layout">
      <aside>
        <Aside />
      </aside>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
