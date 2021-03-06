import Navbar from "./navbar";

interface ILayout {
  children: any;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div className="container m-auto">
      <Navbar />
      {children}
    </div>
  );
};
export default Layout;
