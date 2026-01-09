import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src={logo}
                alt="AI 360° Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="font-display font-bold text-lg gradient-text">
                AI 360°
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Build real-world solutions for social good using Gen AI in just 45 minutes.
              Empowering students to create impactful civic solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/problems" className="text-muted-foreground hover:text-primary transition-colors">
                  Problem Statements
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>© 2026 AI 360°</p>
          <p className="mt-2">
            Powered by{" "}
            <a
              href="https://futurecitiesatlab.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-all"
            >
              Future Cities & Assistive Technology Lab
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;