import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import "./MainLayout.css";
// import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="content-area">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
