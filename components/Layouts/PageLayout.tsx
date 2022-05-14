import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import React from 'react';

const PageLayout: React.FC = ({ children }) => (
  <div className='w-full font-arabic pb-48'>
    <NavBar />
    <main>{children}</main>
    <Footer />
  </div>
);

export default PageLayout;
