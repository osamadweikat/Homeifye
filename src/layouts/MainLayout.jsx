import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout({ showFooter = true }) {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <>
      <Navbar openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
      <Outlet context={{ openDropdown, setOpenDropdown }} />
      {showFooter && <Footer />}
    </>
  );
}
