import React from "react";

const Layout = ({ children }: { children: Readonly<React.ReactNode> }) => {
  return <main className="relative">{children}</main>;
};

export default Layout;
