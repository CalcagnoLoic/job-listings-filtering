interface LogoCompany {
  logo: string;
  company: string;
}

const Component = ({ logo, company }: LogoCompany) => (
  <img
    src={logo}
    alt={company}
    className="top-5 mb-3 mr-6 h-12 w-12 self-start md:static md:h-[88px] md:w-[88px] lg:mb-0 lg:self-center"
  />
);

export default Component;
