import { useEffect, useState } from "react";
import headerHero from "../../../public/assets/img/bg-header-desktop.svg";
import headerHeroMobile from "../../../public/assets/img/bg-header-mobile.svg";

const Component = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="bg-breakerBay">
      <img
        src={isMobile ? headerHeroMobile : headerHero}
        alt="header-wrapper"
        className="h-[156px] w-screen"
      />
    </header>
  );
};
export default Component;
