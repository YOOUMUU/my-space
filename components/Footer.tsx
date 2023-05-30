const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-gray-950 text-white">
      <div className="container text-center space-x-4 align-middle">
        Copyright ©️ {year} YOOUMUU
      </div>
    </div>
  );
};

export default Footer;
