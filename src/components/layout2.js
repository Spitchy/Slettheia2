/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import React from 'react';
import HeaderVilkar from './header/headerVilkar.js';
import Footer from './footerVilkar.js';

export default function Layout2({ children }) {
  return (
    <Flex
      sx={{
        minHeight: '100vh',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <HeaderVilkar />
      
      <main
        sx={{
          variant: 'layout.main',
        }}
      >
        {children}
      </main>
      <Footer />
    </Flex>
  );
}
