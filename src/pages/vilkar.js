import React from "react";
import Layout2 from "components/layout2";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Banner from "sections/bannervilkar";

export default function Vilkar() {
    return (
    <ThemeProvider theme={theme}>
        <Layout2>
        <SEO
          title="Slettheia Skole Vilkår for Vipps"
          description="Vilkår for Vipps donasjoner til Slettheia Skole .no"
        />
        {/*<p>testtekst</p>*/}
        <Banner />
        </Layout2>
    </ThemeProvider>
        );
    }
    