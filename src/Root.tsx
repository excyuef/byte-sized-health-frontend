import { Outlet } from "react-router";
import "./Root.css";
import Nav from "./views/components/NavBar.tsx";
import Footer from "./views/components/Footer.tsx";

function Root() {
  return (
    <>
      <div className="mx-2 md:mx-8 lg:mx-32 xl:mx-60 flex flex-col gap-40 overflow-hidden xl:overflow-visible">
        <Nav />
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default Root;
