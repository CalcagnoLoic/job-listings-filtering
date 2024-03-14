interface CardLayout {
  isFeatured: boolean;

  children: JSX.Element[];
}

const Layout: React.FC<CardLayout> = ({ isFeatured,  children }) => (
  <section
    className={`${isFeatured ? "border-l-8 border-l-breakerBay" : null} wrapper-main-content`}
  >
    {children}
  </section>
);

export default Layout;
