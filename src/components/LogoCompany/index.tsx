interface LogoCompany {
  logo: string;
  company: string;
}

const Component = ({ logo, company }: LogoCompany) => (
  <img
    src={logo}
    alt={company}
    className="mb-3 mr-6 h-[88px] w-[88px] self-start lg:self-center lg:mb-0"
  />
);

export default Component;
