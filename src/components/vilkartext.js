import React from "react";
import { Text, Heading } from "theme-ui";

function vilkar() {
  return (
    <div>
      <Heading sx={styles.title}>
        Vilkår
      </Heading>
      <Text as="p" sx={styles.summary}>
      <p className="font-bold">Om tjenesten:</p>

      <p>slettheiaskole.no er driftet av Foreldreutvalget (FAU) på Slettheia skole. For å enkelt nå ut til givere så har vi satt opp denne løsningen for å samle inn penger for å kunne oppgradere uteområdet på Slettheia skole. Pengene som samles inn går uavkortet til formålet, og FAU er dugnadsbasert.</p>
<br />
      <p className="font-bold">Parter:</p>
      <p>Kristiansand Kommune</p>
     <p> 
Slettheiveien 22
4626 Kristiansand</p>
<p>Organisasjonsnummer: 820 852 982</p>

<p>Epost: fau@slettheiaskole.no</p>
<p>Telefonnummer: 977 47000 (FAU leder Joachim Nygaard)</p>
<br />
<p>Giver (kjøper) er den personen som foretar betalingen.</p>
<br />
<p className="font-bold">Priser:</p>
<p>Vi har forhåndsutfylt summer som kan velges, alternativt så kan man skrive inn summen man ønsker å donere.</p>
<br />
<p className="font-bold">Levering:</p>
<p>Når betaling er mottatt for du en bekreftelse på transaksjonen.</p>
<br />
<p className="font-bold">Angrerett:</p>
<p>Det er ikke noe angrerett på donasjon/givertjenesten.</p>
<br />
<p className="font-bold">Retur:</p>
<p>Vi sender ikke noe fysisk vare, så retur er ikke relevant.</p>
<br />
<p>Reklamasjonshåndtering er ikke relevant, da dette er en frivillig givertjeneste der det ikke er noe motytelser mot det som doneres. Alle forhold relatert til tjenesten reguleres av norsk regg med Kristiansand Tingrett som verneting.</p>
<br />
<br />
<br />
<p className="font-light"><i>Sist oppdatert 17.11.22</i></p>
      </Text>
    </div>
  );
}

export default vilkar;
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
