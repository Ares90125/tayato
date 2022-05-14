import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import React from 'react';

const PageLayout: React.FC = ({ children }) => (
  <>
    <NavBar />
    <main>{children}</main>
    <Footer />
  </>
);

export default PageLayout;
