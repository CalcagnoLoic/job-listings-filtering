import headerHero from "../../../public/assets/img/bg-header-desktop.svg";
import headerHeroMobile from "../../../public/assets/img/bg-header-mobile.svg";

const Component = () => {
  const isMobile = window.innerWidth <= 768 ? true : false;

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
