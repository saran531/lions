import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png.jpeg";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);

  const location = useLocation();

  const servicesLinks = [
    ["All Services", "/services"],
    ["Scaffolding Works", "/services/scaffolding-works"],
    ["Insulation Works", "/services/insulation-works"],
    ["Safety Net", "/services/safety-net"],
    ["Building Construction Works", "/services/building-construction-works"],
    ["Supply of Man Power", "/services/supply-of-man-power"],
    ["Security Supply", "/services/security-supply"],
  ];

  const projectLinks = [
    ["All Projects", "/project"],
    ["Scaffolding Projects", "/projects/scaffolding-projects"],
    ["Insulation Projects", "/projects/insulation-projects"],
    ["Safety Catch Net Projects", "/projects/safety-catch-net-projects"],
  ];

  const aboutLinks = [
    ["About Company", "/about"],
    ["Gallery", "/about/gallery"],
  ];

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenGroup(null);
  };

  const toggleGroup = (group) => {
    setOpenGroup((prev) => (prev === group ? null : group));
  };

  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("mobile-nav-open", mobileOpen);

    return () => {
      document.body.classList.remove("mobile-nav-open");
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-[#ff7a00] bg-[#061b3a] text-white shadow-lg">
      <div className="mx-auto flex h-[76px] sm:h-[88px] lg:h-[100px] max-w-[1600px] items-center justify-between">
        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex h-full w-[190px] sm:w-[230px] lg:w-[280px] items-center justify-center bg-white px-4 sm:px-6 lg:px-8"
        >
          <img
            src={logo}
            alt="Company Logo"
            className="h-[66px] sm:h-[78px] lg:h-[90px] w-[165px] sm:w-[200px] lg:w-[230px] object-contain"
          />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden items-center gap-10 px-8 text-[18px] font-bold lg:flex">
          <Link to="/" className="hover:text-[#ff7a00] transition">
            Home
          </Link>

          {/* ABOUT */}
          <DesktopDropdown title="About">
            {aboutLinks.map(([label, path]) => (
              <Link
                key={path}
                to={path}
                className="block px-5 py-3 hover:bg-[#ff7a00] hover:text-white"
              >
                {label}
              </Link>
            ))}
          </DesktopDropdown>

          {/* SERVICES */}
          <DesktopDropdown title="Lions Services">
            {servicesLinks.map(([label, path]) => (
              <Link
                key={path}
                to={path}
                className="block px-5 py-3 hover:bg-[#ff7a00] hover:text-white"
              >
                {label}
              </Link>
            ))}
          </DesktopDropdown>

          {/* PROJECTS */}
          <DesktopDropdown title="Project Lions">
            {projectLinks.map(([label, path]) => (
              <Link
                key={path}
                to={path}
                className="block px-5 py-3 hover:bg-[#ff7a00] hover:text-white"
              >
                {label}
              </Link>
            ))}
          </DesktopDropdown>

          <Link to="/contact" className="hover:text-[#ff7a00] transition">
            Contact
          </Link>

          <Link to="/blogs" className="hover:text-[#ff7a00] transition">
            Blogs
          </Link>
        </nav>

        {/* DESKTOP BUTTON */}
        <Link
          to="/contact"
          className="mr-10 hidden rounded-full bg-[#ff7a00] px-10 py-4 text-[18px] font-bold transition hover:bg-white hover:text-[#061b3a] lg:inline-flex"
        >
          Get Quote
        </Link>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="mr-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 transition hover:bg-white/10 sm:mr-6 lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden ${
          mobileOpen ? "block" : "hidden"
        } absolute left-0 right-0 top-full max-h-[calc(100vh-76px)] overflow-y-auto border-t border-white/10 bg-[#061b3a] shadow-2xl`}
      >
        <nav className="space-y-1 px-4 py-5 text-[16px] font-semibold">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="block rounded-lg px-4 py-3 hover:bg-white/10"
          >
            Home
          </Link>

          {/* ABOUT */}
          <MobileNavGroup
            title="About"
            open={openGroup === "about"}
            onToggle={() => toggleGroup("about")}
          >
            {aboutLinks.map(([label, path]) => (
              <Link
                key={path}
                to={path}
                onClick={closeMobileMenu}
                className="block rounded-lg px-4 py-3 text-white/85 hover:bg-white/10"
              >
                {label}
              </Link>
            ))}
          </MobileNavGroup>

          {/* SERVICES */}
          <MobileNavGroup
            title="Lions Services"
            open={openGroup === "services"}
            onToggle={() => toggleGroup("services")}
          >
            {servicesLinks.map(([label, path]) => (
              <Link
                key={path}
                to={path}
                onClick={closeMobileMenu}
                className="block rounded-lg px-4 py-3 text-white/85 hover:bg-white/10"
              >
                {label}
              </Link>
            ))}
          </MobileNavGroup>

          {/* PROJECTS */}
          <MobileNavGroup
            title="Project Lions"
            open={openGroup === "projects"}
            onToggle={() => toggleGroup("projects")}
          >
            {projectLinks.map(([label, path]) => (
              <Link
                key={path}
                to={path}
                onClick={closeMobileMenu}
                className="block rounded-lg px-4 py-3 text-white/85 hover:bg-white/10"
              >
                {label}
              </Link>
            ))}
          </MobileNavGroup>

          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className="block rounded-lg px-4 py-3 hover:bg-white/10"
          >
            Contact
          </Link>

          <Link
            to="/blogs"
            onClick={closeMobileMenu}
            className="block rounded-lg px-4 py-3 hover:bg-white/10"
          >
            Blogs
          </Link>

          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className="mt-4 block w-full rounded-full bg-[#ff7a00] py-3.5 text-center font-bold transition hover:bg-white hover:text-[#061b3a]"
          >
            Get Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}

function DesktopDropdown({ title, children }) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 hover:text-[#ff7a00] transition">
        {title}
        <ChevronDown className="h-4 w-4" />
      </button>

      <div className="absolute left-0 top-full hidden min-w-[280px] overflow-hidden rounded-b-xl bg-white text-[#061b3a] shadow-2xl group-hover:block">
        {children}
      </div>
    </div>
  );
}

function MobileNavGroup({ title, open, onToggle, children }) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left hover:bg-white/10"
      >
        <span>{title}</span>

        <ChevronDown
          className={`h-5 w-5 transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="ml-4 border-l border-white/15 pl-3 py-1">
          {children}
        </div>
      )}
    </div>
  );
}

export default Header;