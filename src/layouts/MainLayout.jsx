import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout({ showFooter = true, theme = "dark" }) {
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <>
      <Navbar
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
        variant={theme}
      />
      <Outlet context={{ openDropdown, setOpenDropdown }} />
      {showFooter && <Footer />}
    </>
  );
}
