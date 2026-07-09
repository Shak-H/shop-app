import { PropsWithChildren } from "react";

import MainHeader from "./MainHeader";

type LayoutProps = PropsWithChildren<{
  searchTerm: string;
  onSearchChange: (value: string) => void;
}>;

const Layout = ({ children, searchTerm, onSearchChange }: LayoutProps) => {
  return (
    <>
      <MainHeader searchTerm={searchTerm} onSearchChange={onSearchChange} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
