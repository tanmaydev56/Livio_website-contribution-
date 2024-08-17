import PropTypes from 'prop-types';
import Header from './components/navigationBar';
import Footer from './components/BlackBox';

const Layout = ({ children }) => (
  <>
    {<Header />}
    {children}
    {<Footer />}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};


export default Layout;
