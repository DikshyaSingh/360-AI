import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "About",
    path: "/about",
    submenu: [
      { name: "About Challenge", path: "/about" },
      { name: "Cheat Sheet", path: "/cheat-sheet" }
    ]
  },
  { name: "Problems", path: "/problems" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const location = useLocation();

  const isAboutActive = location.pathname === "/about" || location.pathname === "/cheat-sheet";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="glass-card mx-4 mt-4 md:mx-8">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src={logo}
                alt="AI 360° Logo"
                className="w-10 h-10 object-contain transition-transform group-hover:scale-105"
              />
              <span className="font-display font-bold text-lg gradient-text">
                AI 360°
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.path} className="relative">
                  {link.submenu ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setAboutDropdownOpen(true)}
                      onMouseLeave={() => setAboutDropdownOpen(false)}
                    >
                      <button
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-1 ${isAboutActive
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          }`}
                      >
                        {link.name}
                        <ChevronDown className="w-4 h-4" />
                      </button>

                      <AnimatePresence>
                        {aboutDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-48 glass-card rounded-lg shadow-lg overflow-hidden"
                          >
                            {link.submenu.map((sublink) => (
                              <Link
                                key={sublink.path}
                                to={sublink.path}
                                className={`block px-4 py-3 font-medium transition-all duration-300 ${location.pathname === sublink.path
                                    ? "text-primary bg-primary/10"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                  }`}
                              >
                                {sublink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${location.pathname === link.path
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <a
                href="#"
                className="ml-2 px-5 py-2 rounded-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40"
              >
                Submit Your Prototype
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-border"
            >
              <div className="px-4 py-3 space-y-1 flex flex-col">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${location.pathname === "/"
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${location.pathname === "/about"
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                >
                  About Challenge
                </Link>

                <Link
                  to="/cheat-sheet"
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 pl-8 rounded-lg font-medium transition-all duration-300 ${location.pathname === "/cheat-sheet"
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                >
                  Cheat Sheet
                </Link>

                <Link
                  to="/problems"
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${location.pathname === "/problems"
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                >
                  Problems
                </Link>

                <a
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                >
                  Submit Your Prototype
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;