import Image from "next/image";
import logo from "/public/logo.svg";

const Logo = () => {
  return <Image height={130} width={130} alt="Logo" src={logo} />;
};

export default Logo;
