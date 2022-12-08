import MainHeader from "./MainHeader";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
};

export default Layout;
