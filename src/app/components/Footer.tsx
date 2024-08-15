const Footer = () => {
  return (
    <footer className="bg-green-500 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-4 text-center">
            <span>Kirehe -Rwanda</span>
            <span className="hidden sm:inline mx-2">|</span>
            <span>Tel : +250 788667469</span>
            <span className="hidden sm:inline mx-2">|</span>
            <span>info@realgreengoldltd.com</span>
          </div>
          <div className="w-full max-w-2xl border-t border-white my-4"></div>
          <div className="text-sm">
            Copyright © {new Date().getFullYear()} realgreengoldltd.com
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;