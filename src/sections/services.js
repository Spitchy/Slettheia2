/** @jsx jsx */
import { Fragment } from "react";
import { jsx, Box, Container, Grid } from "theme-ui";
import TrackVisibility from "react-on-screen";
import SectionHeading from "components/section-heading";
import Service from "components/cards/service";
import StatItem from "components/cards/stat-item";
import icon1 from "assets/images/services/1.png";
import icon2 from "assets/images/services/2.png";
import icon3 from "assets/images/services/3.png";
import icon4 from "assets/images/services/4.png";
import icon5 from "assets/images/services/5.png";
import icon6 from "assets/images/services/6.png";
import dotPattern from "assets/images/dot-pattern.png";

const data = {
  services: [
    {
      id: 1,
      icon: icon1,
      title: "Trampolinepark & Basketballkurver",
      desc: `Er under prosjektering, og vi gleder oss til at dette kommer på plass forhåpentligvis i slutten av 2022.`,
      link: "#",
    },
    {
      id: 2,
      icon: icon2,
      title: "Nye klatrestativ",
      desc: `Klatrestativene barna har hatt er blitt fjernet fordi de var for utslitt. Vi trenger nye klatrestativ, budsjett kr. 200.000.-`,
      link: "#",
    },
    {
      id: 3,
      icon: icon3,
      title: "Flerbruksbane",
      desc: `Flerbruksbanen har hull, og trenger gjerde langs langsiden. Det er også et ønske om å bytte ut målene. Budsjett kr. 200.000.-`,
      link: "#",
    },
    {
      id: 4,
      icon: icon4,
      title: "Fotballbanen",
      desc: `Grunnen under fotballbanen er svært ujevn, det må skiftes ut masse og legges nytt kunstgress. Budsjett kr. 1.000.000.-`,
      link: "#",
    },
    {
      id: 5,
      icon: icon5,
      title: "Ballbingen",
      desc: `Ballbingen er rustet istykker, og vi må ha nytt dekke. Budsjett kr. 600.000.`,
      link: "#",
    },
    {
      id: 6,
      icon: icon6,
      title: "Flere husker",
      desc: `Skolegården trenger flere husker og fugleredehusker, budsjett kr. 200.000.-`,
      link: "#",
    },
  ],

  stats: [
    {
      id: 1,
      value: 254,
      suffix: "",
      title: "Successful Project",
    },
    {
      id: 2,
      value: 3783,
      suffix: "",
      title: "People Impacted",
    },
    {
      id: 3,
      value: 8,
      suffix: "M",
      title: "Money Donated",
    },
    {
      id: 4,
      value: 60,
      suffix: "+",
      title: "Volunteer Involved",
    },
  ],
};

const Services = () => {
  return (
    <Box as="section" id="ønsker" sx={styles.section}>
      <Container>
        <SectionHeading slogan="ØNSKER" title="Hva vi ønsker oss" />
        <Grid sx={styles.serviceGrid}>
          {data.services.map((item) => (
            <Service key={item.id} service={item} />
          ))}
        </Grid>
        {/*
        <Grid sx={styles.statsGrid}>
          {data.stats.map((stat) => (
            <TrackVisibility key={stat.id} once>
              <StatItem stat={stat} />
            </TrackVisibility>
          ))}
          </Grid> */}
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    pt: [8, null, null, 8, 10, null, 15],
    pb: [7, null, null, null, 10, null, 14],
    background: `url(${dotPattern}) no-repeat right bottom`,
  },
  serviceGrid: {
    backgroundColor: "white",
    boxShadow: "0px 0px 25px rgba(54, 91, 125, 0.04)",
    borderRadius: 10,
    gap: [8, null, null, "60px 40px", "50px 30px", "60px 40px"],
    justifyContent: "center",
    gridTemplateColumns: [
      "repeat(1, 250px)",
      null,
      null,
      "repeat(2, 260px)",
      "repeat(3, 258px)",
      "repeat(3, 300px)",
    ],
    pt: [8, null, null, 16],
    pb: [8, null, null, 15],
  },
  statsGrid: {
    gap: [6, null, null, "60px 30px", "60px 80px", "60px 110px"],
    justifyContent: "center",
    gridTemplateColumns: [
      "repeat(2, 120px)",
      null,
      null,
      "repeat(4, 130px)",
      "repeat(4, 150px)",
    ],
    mt: [10],
  },
};
