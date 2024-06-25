import Image from "next/image";

const Footer = () => {
  return (
    <div className="-mt-24 relative">
      <div className="bg-[url('/imgs/shapes/wave-shape-bg-color.png')] bg-center bg-no-repeat bg-cover w-full h-[130px]"></div>

      <div className="container mx-auto xl:px-28 px-5 ">
        <div className="grid grid-cols-12 gap-24 py-11">
          <div className="col-span-7">
            <div className="flex gap-2 items-center mb-9">
              <div>
                <Image src="/imgs/logo.png" alt="logo" width={50} height={50} />
              </div>
              <div className="text-lg">
                <p className="underline">Renaissance</p>
                <p>Décapage</p>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="flex items-center">
                <div>
                  <h5 className="text-white font-bold mb-3 text-lg">Nous trouvez c&apos;est facile !</h5>
                  <p>Centre commercial Loubet</p>
                  <p>9 Avenue de Toulouse</p>
                  <p>31240, L&apos;Union</p>
                  <p>05 62 89 20 05</p>
                </div>
              </div>
              <div>
                <Image src="/imgs/footer/locationmap.png" alt="maps" width={387} height={161} className="rounded-xl" />
              </div>
            </div>
          </div>
          <div className="col-span-5">
            <div className="flex justify-between">
              <div>
                <h5 className=" mb-9 text-lg">Pages</h5>
                <ul className="flex flex-col gap-6">
                  <li>
                    <a href="#">Accueil</a>
                  </li>
                  <li>
                    <a href="#">Services Rénovations</a>
                  </li>
                  <li>
                    <a href="#">Robinetterie</a>
                  </li>
                  <li>
                    <a href="#">Qui sommes-nous ?</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className=" mb-9 text-lg">Informations</h5>
                <ul className="flex flex-col gap-6">
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of Service</a>
                  </li>
                  <li>
                    <a href="#">404 Not found</a>
                  </li>
                  <li>
                    <a href="#">Cookies</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-[#2C2E2F]" />
        <div>
          <div className="flex justify-between py-7">
            <p>
              Copyright © Product | Powered by <span className="text-white">renaissance-decapage</span>™ by{" "}
              <span className="text-white">ArtyEase</span>™
            </p>
            <ul className="flex gap-4">
              <li>
                <a href="#">
                  <Image src="/imgs/footer/ig.png" alt="ig" width={34} height={34} />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src="/imgs/footer/yt.png" alt="yt" width={34} height={34} />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src="/imgs/footer/tiktok.png" alt="tiktok" width={34} height={34} />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src="/imgs/footer/in.png" alt="linkedin" width={34} height={34} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
