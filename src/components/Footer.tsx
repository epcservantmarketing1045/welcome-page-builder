import logo from "@/assets/epc-logo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-5 pb-10 text-center">
      <div className="container">
        <img
          src={logo}
          alt="EPC Servant Marketing"
          className="w-20 h-20 object-contain mx-auto mb-3 opacity-95 drop-shadow-[0_14px_22px_rgba(0,0,0,0.45)]"
        />
        <p className="text-muted-foreground/55 text-sm">
          © {currentYear} EPC Servant Marketing. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
