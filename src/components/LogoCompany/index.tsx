interface LogoCompany {
  logo: string;
  company: string;
}

const Component: React.FC<LogoCompany> = ({ logo, company }) => (
  <img src={logo} alt={company} className="logo" />
);

export default Component;
