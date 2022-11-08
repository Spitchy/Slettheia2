/** @jsx jsx */
import { jsx, Box, Container, Heading, Button, Text } from "theme-ui";
import { Progress } from "theme-ui";
import { rgba } from "polished";

const milestone = () => {
  return (
    <Box id="fremdrift" as="section" sx={styles.section}>
      <Container sx={styles.container}>
        <Box sx={styles.framdrift} /*bgImage={parallax} strength={200}*/>
          <Box sx={styles.info}>
            <Text as="p" sx={styles.cardTitle}>
              Pristilbud: (alle tall inkl. mva)
            </Text>
            <Text as="p" sx={styles.cardTitle}>
              Trampolinepark Kr. 372.000,-
            </Text>
            <Text as="p" sx={styles.cardTitle}>
              - Tippemidler Kr 186.000,-
            </Text>
            <Text as="p" sx={styles.cardTitle}>
              Skolens Andel Kr 186.000,-
            </Text>
          </Box>
          <Box sx={styles.card2}>
            <Text as="p" sx={styles.cardTitle}>
              Fremdrift
            </Text>
            <Heading sx={styles.goal}>0,-</Heading>
            <Text as="p" sx={styles.collected}>
              Vi har samlet 0,- kr i donasjoner
            </Text>
            <Progress max={1} value={0 / 228500} sx={styles.progress}>
              0%
            </Progress>

            <Text as="span" sx={styles.lastDonation}>
              Sist oppdatert 18.10.2022
            </Text>
            {/*<Button>fau@slettheiaskole.no</Button>*/}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default milestone;

const styles = {
  section: {
    pt: [6, null, null, 8, null, null, 15],
    pb: [8, null, null, 8, null, null, 13],
  },
  container: {
    "@media only screen and (max-width: 1920px)": {
      px: 0,
    },
  },
  framdrift: {
    pt: [10, null, null, 12],
    pb: [10, null, null, 12],
    px: [6, null, null, 0],
    display: [null, null, null, "flex"],
    borderRadius: [5, null, null, 7],
    justifyContent: "flex-center",
  },
  info: {
    backgroundColor: rgba("#FFFFFF", 0.95),
    borderRadius: 8,
    color: "black",
    marginRight: [0, null, null, 10, 14, 18],
    minWidth: [null, null, null, 375],
    padding: ["40px 30px 50px", null, null, null, "45px 40px 55px"],
    textAlign: "center",
    p: {
      fontWeight: 500,
      fontSize: ["15px", null, null, 3],
      lineHeight: 1.68,
    },
    button: {
      backgroundColor: "#FFFFFF",
      fontSize: [1, null, null, 2],
      mt: [3, null, null, 5, 8],
      minHeight: [45, null, null, 60],
      width: "100%",
    },
  },
  card2: {
    backgroundColor: rgba("#FFFFFF", 0.95),
    borderRadius: 8,
    color: "black",
    marginRight: [0, null, null, 10, 14, 18],
    minWidth: [null, null, null, 375],
    padding: ["40px 30px 50px", null, null, null, "45px 40px 55px"],
    textAlign: "center",
    p: {
      fontWeight: 500,
      fontSize: ["15px", null, null, 3],
      lineHeight: 1.68,
    },
    button: {
      backgroundColor: "#FFFFFF",
      fontSize: [1, null, null, 2],
      mt: [3, null, null, 5, 8],
      minHeight: [45, null, null, 60],
      width: "100%",
    },
  },
  goal: {
    fontSize: [11, null, null, 14, 16],
    fontWeight: 700,
    lineHeight: 0.66,
    m: ["20px 0", null, null, "30px 0"],
  },
  progress: {
    backgroundColor: rgba("#C0C0C0", 0.4),
    color: "green",
    height: 6,
    mt: [4],
    mb: [2],
  },
  lastDonation: {
    display: "block",
    fontWeight: 500,
    fontSize: "15px",
    lineHeight: 2,
    color: rgba("black", 0.7),
  },
};
