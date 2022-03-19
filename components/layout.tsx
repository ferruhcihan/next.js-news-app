import Navbar from "./navbar";

interface ILayout {
  children: any;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div className="page-container">
      <Navbar />
      {children}
    </div>
  );
};
export default Layout;
