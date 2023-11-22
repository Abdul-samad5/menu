import { FC, Fragment } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
   return (
      <Fragment>
         <Header />
         {children}
         <Footer />
      </Fragment>
   );
};
export default Layout;
