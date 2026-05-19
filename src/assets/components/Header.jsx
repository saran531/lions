import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png.jpeg";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const location = useLocation();

  const servicesLinks = [
    ["Scaffolding Works", "/services/scaffolding-works"],
    ["Insulation Works", "/services/insulation-works"],
    ["Safety Net", "/services/safety-net"],
    ["Building Construction Works", "/services/building-construction-works"],
    ["Supply of Man Power", "/services/supply-of-man-power"],
    ["Security Supply", "/services/security-supply"],
  ];

  const projectLinks = [
    ["Scaffolding Projects", "/projects/scaffolding-projects"],
    ["Insulation Projects", "/projects/insulation-projects"],
    ["Safety Catch Net Projects", "/projects/safety-catch-net-projects"],
  ];

  const closeMobileMenu = () => setMobileOpen(false);
  const toggleGroup = (group) => {
    setOpenGroup((current) => (current === group ? null : group));
  };

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setMobileOpen(false);
      setOpenGroup(null);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("mobile-nav-open", mobileOpen);

    return () => {
      document.body.classList.remove("mobile-nav-open");
    };
  }, [mobileOpen]);

  return (
    <header className="w-full bg-[#061b3a] text-white sticky top-0 z-50 shadow-md border-b-4 border-[#ff7a00]">
      <div className="max-w-[1600px] mx-auto h-[76px] sm:h-[88px] lg:h-[92px] xl:h-[100px] flex items-center justify-between relative">
        <Link
          to="/"
          className="h-full w-[190px] sm:w-[230px] lg:w-[220px] xl:w-[280px] bg-white flex items-center justify-center px-4 sm:px-6 lg:px-5 xl:px-8"
          onClick={closeMobileMenu}
        >
          <img
            src={logo}
            alt="Company Logo"
            className="w-[165px] sm:w-[200px] lg:w-[190px] xl:w-[230px] h-[66px] sm:h-[78px] lg:h-[82px] xl:h-[90px] object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-4 xl:gap-10 text-[15px] xl:text-[18px] font-bold px-4 xl:px-8">
          <Link to="/" className="hover:text-[#ff7a00]">
            Home
          </Link>

          <div className="relative group">
            <Link to="/about" className="hover:text-[#ff7a00]">
              About ▾
            </Link>
            <div className="absolute left-0 top-full hidden group-hover:block w-[220px] bg-white text-[#061b3a] shadow-lg">
              <Link
                to="/about/gallery"
                className="block px-5 py-3 hover:bg-[#ff7a00] hover:text-white"
              >
                Gallery
              </Link>
            </div>
          </div>

          <div className="relative group">
            <Link to="/services" className="hover:text-[#ff7a00]">
              Lions Services ▾
            </Link>
            <div className="absolute left-0 top-full hidden group-hover:block w-[320px] bg-white text-[#061b3a] shadow-lg">
              {servicesLinks.map(([label, path]) => (
                <Link
                  key={path}
                  className="block px-5 py-3 hover:bg-[#ff7a00] hover:text-white"
                  to={path}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative group">
            <Link to="/project" className="hover:text-[#ff7a00]">
              Project Lions ▾
            </Link>
            <div className="absolute left-0 top-full hidden group-hover:block w-[320px] bg-white text-[#061b3a] shadow-lg">
              {projectLinks.map(([label, path]) => (
                <Link
                  key={path}
                  className="block px-5 py-3 hover:bg-[#ff7a00] hover:text-white"
                  to={path}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/contact" className="hover:text-[#ff7a00]">
            Contact
          </Link>
          <Link to="/blogs" className="hover:text-[#ff7a00]">
            Blogs
          </Link>
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex bg-[#ff7a00] px-6 xl:px-10 py-3.5 xl:py-4 rounded-full text-[15px] xl:text-[18px] font-bold hover:bg-white hover:text-[#061b3a] transition mr-4 xl:mr-10 whitespace-nowrap"
        >
          Get Quote
        </Link>

        <button
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/5 mr-4 sm:mr-6 hover:bg-white/10 transition"
          onClick={() => setMobileOpen((current) => !current)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`lg:hidden ${mobileOpen ? "block" : "hidden"} absolute left-0 right-0 top-full max-h-[calc(100vh-76px)] overflow-y-auto bg-[#061b3a] border-t border-white/10 shadow-2xl`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 space-y-1 text-[16px] sm:text-[17px] font-semibold">
          <Link to="/" className="block px-4 py-3 rounded-lg hover:bg-white/10" onClick={closeMobileMenu}>
            Home
          </Link>

          <MobileNavGroup
            title="About"
            open={openGroup === "about"}
            onToggle={() => toggleGroup("about")}
          >
            <Link to="/about" className="block px-4 py-3 rounded-lg text-white/85 hover:bg-white/10" onClick={closeMobileMenu}>
              About Company
            </Link>
            <Link to="/about/gallery" className="block px-4 py-3 rounded-lg text-white/85 hover:bg-white/10" onClick={closeMobileMenu}>
              Gallery
            </Link>
          </MobileNavGroup>

          <MobileNavGroup
            title="Lions Services"
            open={openGroup === "services"}
            onToggle={() => toggleGroup("services")}
          >
            <Link to="/services" className="block px-4 py-3 rounded-lg text-white/85 hover:bg-white/10" onClick={closeMobileMenu}>
              All Services
            </Link>
            {servicesLinks.map(([label, path]) => (
              <Link key={path} to={path} className="block px-4 py-3 rounded-lg text-white/85 hover:bg-white/10" onClick={closeMobileMenu}>
                {label}
              </Link>
            ))}
          </MobileNavGroup>

          <MobileNavGroup
            title="Project Lions"
            open={openGroup === "projects"}
            onToggle={() => toggleGroup("projects")}
          >
            <Link to="/project" className="block px-4 py-3 rounded-lg text-white/85 hover:bg-white/10" onClick={closeMobileMenu}>
              Project Track Record
            </Link>
            {projectLinks.map(([label, path]) => (
              <Link key={path} to={path} className="block px-4 py-3 rounded-lg text-white/85 hover:bg-white/10" onClick={closeMobileMenu}>
                {label}
              </Link>
            ))}
          </MobileNavGroup>

          <Link to="/contact" className="block px-4 py-3 rounded-lg hover:bg-white/10" onClick={closeMobileMenu}>
            Contact
          </Link>
          <Link to="/blogs" className="block px-4 py-3 rounded-lg hover:bg-white/10" onClick={closeMobileMenu}>
            Blogs
          </Link>

          <Link
            to="/contact"
            className="block mt-4 w-full text-center bg-[#ff7a00] py-3.5 rounded-full font-bold hover:bg-white hover:text-[#061b3a] transition"
            onClick={closeMobileMenu}
          >
            Get Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}

function MobileNavGroup({ title, open, onToggle, children }) {
  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        className="flex w-full items-center justify-between px-4 py-3 rounded-lg hover:bg-white/10 text-left font-semibold"
        onClick={onToggle}
      >
        <span>{title}</span>
        <ChevronDown className={`h-5 w-5 transition ${open ? "rotate-180" : ""}`} />
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
