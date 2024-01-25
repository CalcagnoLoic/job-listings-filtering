interface CardLayout {
  isFeatured: boolean;
  id: number;
  children: JSX.Element[];
}

const Layout = ({ isFeatured, id, children }: CardLayout) => (
  <section
    className={`${isFeatured ? "border-l-8 border-l-breakerBay" : " "} wrapper-main-content`}
    key={id}
  >
    {children}
  </section>
);

export default Layout;
