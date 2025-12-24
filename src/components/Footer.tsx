const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Yash Garg. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with passion and dedication
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
