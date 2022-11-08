import React from "react";
import paint2 from "assets/images/paint2.svg";
import { Text, Heading } from "theme-ui";

function description() {
  return (
    <div>
      <Heading sx={styles.title}>
        Slettheia skole trenger vår{" "}
        <span sx={{ background: `url(${paint2})` }}>hjelp</span>...
      </Heading>
      <Text as="p" sx={styles.summary}>
        Foreldreutvalget til Slettheia skole har satt opp denne hjemmesiden så
        foreldrene til barna som går på skolen får et innblikk i skolehverdagen
        for elevene. Slettheia skole sitt uteområdet er i svært dårlig
        forfatning, og FAU har som mål å samle inn midler så vi kan ruste opp
        skolens uteområde. Vi henvender oss til næringslivet, stiftelser og fond
        som for å samle inn penger som går uavkortet til oppgradering av
        skolegården. Skolegården er ikke bare viktig for trivselen i
        skolehverdagen, men også på ettermiddag, helger og ferier er skolegården
        svært viktig for nærmiljøet.
      </Text>
    </div>
  );
}

export default description;
const styles = {
  title: {
    color: "textSecondary",
    fontWeight: "bold",
    fontSize: [6, null, null, 12, 8, 11],
    lineHeight: 1.4,
    letterSpacing: "heading",
    mb: [4, null, null, 5],
    pt: [8, null, null, 8, 8, 8],
    textAlign: ["center", null, null, null, "left"],
  },
};
