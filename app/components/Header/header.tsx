{/*import Style from "./header.module.css";
import Link from "next/link";
// import Image from "next/image";
const Header = ( ) => {
    return(
        <div className={Style.navbar}>
          <div className="image-container"></div>

            <h1 className={Style.name}>Card Display</h1>
            <ul className={Style.list}>
                <li className={Style.lit}>
                    <Link href="./">Home</Link>
                </li>
                <li className={Style.lit}>
                    <Link href="./about">About</Link>
                </li>
                <li className={Style.lit}>
                    <Link href="">Cards</Link>
                </li>
                <li className={Style.lit}>
                    <Link href="">Animated Cards</Link>
                </li>
                <li className={Style.lit}>
                    <Link href="">Contact</Link>
                </li>
        
        </ul>
        </div>
    );
}
export default Header;*/}

import Style from "./header.module.css";
import Link from "next/link";
import Image from "next/image"; // Uncomment Image import

const Header = () => {
  return (
    <div className={Style.navbar}>
      <div className="image-container">
        {/* Replace the div with the Image component */}
        <Image
          src="/clone/Logo.jpg" // Replace with the correct path to your image
          alt="Logo"
          width={100} // Adjust size as needed
          height={100}
        />
      </div>

      <h1 className={Style.name}>Card Display</h1>
      <ul className={Style.list}>
        <li className={Style.lit}>
          <Link href="./">Home</Link>
        </li>
        <li className={Style.lit}>
          <Link href="./about">About</Link>
        </li>
        <li className={Style.lit}>
          <Link href="">Cards</Link>
        </li>
        <li className={Style.lit}>
          <Link href="">Animated Cards</Link>
        </li>
        <li className={Style.lit}>
          <Link href="">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
