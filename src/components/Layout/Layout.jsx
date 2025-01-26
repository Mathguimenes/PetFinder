import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="layout" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar  />
      <main style={{ flex: 1 }} className="layout-content">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;