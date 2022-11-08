import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Subscribe from "sections/subscribe";
import Services from "sections/services";
import VideoIntro from "sections/video-intro";
import WorldMap from "sections/world-map";
import Milestones from "sections/milestones";
import Blog from "sections/blog";
import Framdrift from "sections/framdrift";
import Doner from "sections/Doner";

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Slettheia Skole"
          description="Slettheia skole er en barneskole i Vågsbygd. Skolen rommer 300 elever fra 1-7. trinn, og er et viktig samlingssted for bydelen også på ettermiddager, i helger og i ferier. Nå ser vi at uteområdene forfaller, og elevene inviterer oss (ev. byen/alle) inn på en kikk:"
        />
        <Banner />
        <VideoIntro />
        <Services />
        <Doner />
        {/*<WorldMap />*/}
        <Framdrift />
        {/*<Milestones />*/}
        <Blog />
        {/*<Subscribe />*/}
      </Layout>
    </ThemeProvider>
  );
}
