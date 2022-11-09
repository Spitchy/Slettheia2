/** @jsx jsx */
import { useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { jsx, Box, Container, Grid, Button, Heading, Text } from "theme-ui";
import Modal, { CloseButton } from "components/modal/modal";
import ResponsiveIframe from "components/responsive-iframe";
import Image from "components/image";
import videoBanner from "assets/images/video-banner.PNG";
import dotPattern from "assets/images/dot-pattern.png";
import play from "assets/images/icons/play.png";
import paint1 from "assets/images/paint1.svg";
import paint2 from "assets/images/paint2.svg";
{
  /*
const list = [
  "Medical and vision",
  "Life insurance",
  "HSAs and FSAs",
  "Commuter benefits",
];
*/
}
const VideoIntro = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box as="section" id="video" sx={styles.section}>
      <Container>
        <Box>
          <Box sx={styles.videoWrapper}>
            <Modal isOpen={isOpen}>
              <CloseButton
                onClick={() => setIsOpen(false)}
                size="24px"
                color="#fff"
              />
              <ResponsiveIframe
                src="https://player.vimeo.com/video/749687098?autoplay=1&color=28DDB2&title=0&byline=0&portrait=0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </Modal>

            <Image
              src={videoBanner}
              width="1235"
              height="698"
              className="video-banner"
              alt="video banner"
            />
            <Button
              variant="text"
              sx={styles.playPause}
              onClick={() => setIsOpen(true)}
            >
              <Image width="22" height="22" src={play} alt="play" /> Se videoen
            </Button>
          </Box>
          {/*
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
              Vi trenger{" "}
              <span sx={{ background: `url(${paint1})` }}>hjelp</span> fra
              kjente og nære til å{" "}
              <span sx={{ background: `url(${paint2})` }}>fikse</span> opp
              Slettheia Skole.
            </Heading>
            <Text as="p" sx={styles.summary}>
              Slettheia skole er en barneskole i Vågsbygd. Skolen rommer 300
              elever fra 1-7. trinn, og er et viktig samlingssted for bydelen
              også på ettermiddager, i helger og i ferier. Nå ser vi at
              uteområdene forfaller, og elevene inviterer deg inn på en kikk:
            </Text>
            {/*
            <Grid sx={styles.list} as="ul">
              {list.map((item, i) => (
                <Text as="li" key={i}>
                  <IoIosCheckmarkCircle
                    sx={{ color: "primary", mr: 2 }}
                    size="20px"
                  />
                  {item}
                </Text>
              ))}
            </Grid>
              
          </Box>
        */}
        </Box>
      </Container>
    </Box>
  );
};

export default VideoIntro;

const styles = {
  section: {
    pt: [7, null, null, 6, null, null, 13],
    pb: [0, null, null, 8, null, null, 11],
    background: `url(${dotPattern}) no-repeat left bottom`,
  },
  videoWrapper: {
    textAlign: "center",
    position: "relative",
    display: "flex",
    alignItems: "center",
    mt: [2, null, null, 0, 4, 0],
    ".video-banner": {
      maxWidth: ["100%", null, null, null, null, "100%"],
    },
  },
  content: {
    px: [null, null, null, 8, 0],
  },
  playPause: {
    color: "white",
    fontWeight: 700,
    position: "absolute",
    padding: "0px",
    bottom: [40, null, null, 70, 100],
    left: "50%",
    transform: "translateX(-50%)",
    ":focus": {
      outline: 0,
    },
    img: {
      mr: "16px",
    },
  },
};
