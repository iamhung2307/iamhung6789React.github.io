import ClickToTop from '../clickToTop/ClickToTop';
import Nav from './components/Nav';
import { Footer } from './components/Footer';

export const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
      <ClickToTop />
    </>
  );
};
