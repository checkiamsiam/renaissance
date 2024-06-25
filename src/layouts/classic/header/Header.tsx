import DeleteWithCounting from "@/components/icons/DeleteWithCounting";
import UserIcon from "@/components/icons/UserIcon";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed top-0 w-full backdrop-blur-2xl z-50">
      <div className="container mx-auto px-5 ">
      <div className="flex justify-between items-center py-6">
        <div className="flex gap-2 items-center">
          <div>
            <Image src="/imgs/logo.png" alt="logo" width={40} height={40} className="grayscale" />
          </div>
          <div className="text-sm">
            <p>Renaissance</p>
            <p>Décapage</p>
          </div>
        </div>

        <nav>
          <ul className="flex items-center 2xl:gap-10 gap-5">
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/">Services Rénovations</Link>
            </li>
            <li>
              <Link href="/">Robinetterie</Link>
            </li>
            <li>
              <Link href="/">Radiateur</Link>
            </li>
            <li>
              <Link href="/">Qui sommes-nous ?</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center 2xl:gap-14 gap-8">
          <button className="flex gap-[6px] items-center">
            <UserIcon />
            <p>Mon compte</p>
          </button>
          <button className="flex gap-[6px] items-center">
            <DeleteWithCounting />
            <p>Mon panier</p>
          </button>
        </div>
      </div>
      <hr className="border-[#2C2E2F]" />
    </div>
    </div>
  );
};

export default Header;
