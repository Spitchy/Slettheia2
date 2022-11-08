/** @jsx jsx */
import {
  jsx,
  Box,
  Text,
  Radio,
  Image,
  Label,
  Input,
  Button,
  Heading,
  Spinner,
  Checkbox,
  Alert,
  Message,
  Close,
} from "theme-ui";
import { rgba } from "polished";
import { useState } from "react";
import paint2 from "assets/images/paint2.svg";
import fetch from "node-fetch";
import Vipps from "assets/images/icons/vipps.png";
import dotPattern from "assets/images/dot-pattern.png";
// const axios = require("axios");
import axios from "axios";
import { useRouter } from "next/router";

const presetAmounts = [100, 200, 1000, 2000, 5000];

const DonationForm = () => {
  const Router = useRouter();
  const [state, setState] = useState({
    donationType: "onetime",
    amount: "",
    joinCommunity: true,
  });

  const [token, setToken] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState({
    status: false,
    message: "Noe gikk galt! Prøv igjen senere!",
  });

  async function get_token() {
    try {
      setError({
        ...error,
        status: false,
      });
      const res = await fetch("/api/getToken", {
        method: "GET",
      });
      const data = await res.json();
      if (data.length != 0) {
        if (data.status && data.data.access_token) {
          setToken(data.data.access_token);
          localStorage.setItem("token", data.data.access_token);
          getLandingPageUrl("0", state.amount * 100, data.data.access_token);
          // Router.push({
          //     pathname: '/vippsPayment',
          //     query:{
          //         amount : state.amount
          //     }
          // })
          // 100 200 500 1000 5000
        }
      }
    } catch (err) {
      setLoader(false);
      setError({
        ...error,
        status: true,
        message: "Noe gikk galt! Prøv igjen senere! ",
      });
    }
  }

  const getToken = async () => {};

  const handleDonationType = (e) => {
    setState({
      ...state,
      donationType: e.target.value,
    });
  };

  const handleAmount = (e) => {
    const pattern = /^([0-9]*)$/;
    if (pattern.test(e.target.value)) {
      setError({
        ...error,
        status: false,
      });
      setState({
        ...state,
        amount: Number(e.target.value),
      });
    } else {
      setError({
        ...error,
        status: true,
        message: "Vennligst oppgi et gyldig nummer ",
      });
    }
  };

  async function getLandingPageUrl(mobile, amount, token) {
    console.log(amount);
    const res = await fetch(
      "/api/getLandingPage?data=" +
        JSON.stringify({ mobile: mobile, amount: amount, token: token }),
      {
        method: "get",
      }
    );
    const data = await res.json();
    if (data.length != 0) {
      setError({
        ...error,
        status: false,
      });
      if (data.status && data.data.length != "") {
        if (data.data.url != "" && data.data.url != undefined) {
          window.location.href = data.data.url;
          // router.push({
          //     pathname: data.data.url,
          // })
        }
      } else {
        setError({
          ...error,
          status: true,
          message: "Noe gikk galt! Prøv igjen senere",
        });
      }
    }
    setLoader(false);
  }

  const handleCheckbox = (e) => {
    setState({
      ...state,
      joinCommunity: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.amount != "" || state.amount != 0) {
      setLoader(true);
      get_token();
    } else {
      setError({
        ...error,
        status: true,
        message: "Vennligst skriv inn ønsket sum",
      });
    }
  };

  return (
    <Box sx={styles.formWrapper}>
      <Alert
        variant="highlight"
        mb={2}
        style={error.status ? { display: "block" } : { display: "none" }}
      >
        {error.message}
      </Alert>
      <Spinner
        sx={styles.loader}
        style={loader ? { display: "block" } : { display: "none" }}
      />
      <Image width="100" height="50" src={Vipps} alt="Vipps" sx={styles.logo} />
      <Heading
        sx={styles.title}
        style={!loader ? { display: "block" } : { display: "none" }}
      >
        Støtt Saken
      </Heading>
      <Text
        sx={styles.subtitle}
        style={!loader ? { display: "block" } : { display: "none" }}
      >
        Skriv inn en ønsket sum
      </Text>
      <Box
        as="form"
        sx={styles.form}
        onSubmit={handleSubmit}
        style={!loader ? { display: "block" } : { display: "none" }}
      >
        <Box sx={styles.relative}>
          <Input
            sx={styles.input}
            id="other-amount"
            placeholder=""
            onChange={handleAmount}
            value={state.amount}
          />
          <Text sx={styles.amountPostFix}>,- Kr</Text>
        </Box>
        <Message
          sx={styles.error}
          style={error.status ? { display: "block" } : { display: "none" }}
        >
          {error.message}
        </Message>
        {/*
        <Box
          as="form"
          sx={styles.form}
          onSubmit={handleSubmit}
          style={!loader ? { display: "block" } : { display: "none" }}
        >
          <Box sx={styles.presetAmounts}>
            {presetAmounts.map((amount, i) => (
              <Label
                key={i}
                className={state.amount === amount ? "active" : ""}
              >
                <Radio
                  value={amount}
                  name="amount"
                  onChange={handleAmount}
                  defaultChecked={state.amount === amount}
                />
                {amount},-
              </Label>
            ))}
          </Box>
        </Box>
            */}
      </Box>
      <Button variant="primary" sx={styles.submit}>
        Doner nå
      </Button>
      <Text
        sx={styles.subtitle2}
        style={!loader ? { display: "block" } : { display: "none" }}
      >
        Pengene går uavkortet til FAU.
      </Text>
    </Box>
  );
};

{
  /*<Heading
        sx={styles.title}
        style={!loader ? { display: "block" } : { display: "none" }}
      >
        Doner for å hjelpe uteområdet på slettheia skole
      </Heading>*/
}
{
  /*<Box sx={styles.otherAmount}>
          <Label htmlFor="other-amount" variant="styles.srOnly">
            Annen sum
          </Label>
          <Input
            id="other-amount"
            placeholder="Annen sum"
            onChange={handleAmount}
            value={state.amount}
          />
        </Box>
        <Box sx={styles.buttonGroup}>
          <Button variant="primary" sx={styles.submit}>
            Doner nå
          </Button>
          <Text as="span">eller</Text>
          <Button variant="muted" sx={styles.googlePay}>
            Doner med
            <Image width="60" height="30" src={Vipps} alt="Vipps" />
          </Button>
        </Box>*/
}

export default DonationForm;

const styles = {
  formWrapper: {
    textAlign: "center",
    borderRadius: 10,
    backgroundColor: "white",
    boxShadow: "0px 24px 50px rgba(54, 91, 125, 0.05)",
    p: ["26px", null, null, "35px 40px 50px"],
    position: "relative",
    "::before, ::after": {
      background: `url(${dotPattern}) no-repeat right top`,
      content: [null, null, null, null, null, `''`],
      position: "absolute",
      width: 302,
      height: 347,
      zIndex: -1,
    },
    "::before": {
      left: "-60px",
      bottom: 15,
    },
    "::after": {
      right: "-41px",
      top: "-30px",
    },
  },
  error: {
    backgroundColor: "#00000000",
    border: "none",
    padding: "0",
    color: "red",
    marginTop: "10px",
    mb: "10px",
  },
  amountPostFix: {
    position: "absolute",
    top: "30%",
    right: "5%",
    color: "#979797",
  },
  relative: {
    position: "relative",
  },
  logo: {
    textAlign: "center",
    margin: "0 auto",
  },
  input: {
    background: "#efefef",
    mb: "20px",
    ":focus": {
      border: "none",
      boxShadow: "0 0 0 2px #ff5b24",
    },
  },
  submit: {
    background: "#ff5b24",
    borderRadius: "40px",
    mb: "15px",
  },
  title: {
    margin: "0 auto",
    color: "textSecondary",
    fontWeight: "bold",
    fontSize: [6, null, null, 12, 8, 11],
    lineHeight: 1.4,
    letterSpacing: "heading",
    // mb: [4, null, null, 5],
    textAlign: ["center", null, null, null, "center"],
  },
  subtitle: {
    margin: "0 auto",
    color: "#8b8b8b",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: 1.4,
    letterSpacing: "heading",
    mb: [4, null, null, 5],
    mt: [2, null, null, 2],
    textAlign: ["center", null, null, null, "center"],
  },
  subtitle2: {
    margin: "0 auto",
    color: "#8b8b8b",
    fontWeight: "light",
    fontSize: "18px",
    lineHeight: 1.4,
    letterSpacing: "heading",
    mb: [4, null, null, 5],
    mt: [4, null, null, 5],
    textAlign: ["center", null, null, null, "center"],
  },
  form: {
    label: {
      alignItems: "center",
      cursor: "pointer",
      fontWeight: 400,
    },
  },
  radioGroup: {
    display: "flex",
    alignItems: ["flex-start", null, null, "center"],
    flexDirection: ["column", null, null, "row"],
    mb: [5, null, null, 5],
    "> label": {
      alignItems: "center",
      fontSize: [1, null, null, "15px"],
      width: "auto",
      "+ label": {
        ml: [null, null, null, 4],
        mt: [2, null, null, 0],
      },
    },
  },
  presetAmounts: {
    display: "grid",
    alignItems: "center",
    marginBottom: 15,
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: ["7px", null, null, 2],
    mb: [3],
    label: {
      color: "textSecondary",
      border: (t) => `1px solid ${t.colors.borderColor}`,
      borderRadius: 5,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: [1, 1, null, 1],
      lineHeight: 1.11,
      minHeight: [40, null, null, null, 50, 60],
      padding: 0,
      textAlign: "center",
      transition: "0.3s ease-in-out 0s",
      "> div": {
        position: "absolute",
        height: 0,
        opacity: 0,
        visibility: "hidden",
        width: 0,
      },
      "&.active": {
        backgroundColor: "#F5F4FF",
        borderColor: "primary",
        color: "#7B72F0",
      },
    },
  },
  otherAmount: {
    mb: [3, null, null, 4],
    input: {
      minHeight: [45, null, null, 60, 50, 60],
      "::placeholder": {
        color: rgba("#02073E", 0.35),
      },
    },
  },
  checkbox: {
    display: "flex",
    justifyContent: "center",
    label: {
      span: {
        fontSize: [0, 1],
      },
    },
  },
  buttonGroup: {
    mt: [5, null, null, 8],
    span: {
      display: "flex",
      justifyContent: "center",
      color: rgba("#000", 0.4),
      fontWeight: "bold",
      fontSize: 1,
      lineHeight: 2.87,
    },
    button: {
      minHeight: [45, null, null, 60, 50, 60],
      width: "100%",
    },
  },
  googlePay: {
    backgroundColor: "#EDF2F7",
    minHeight: 60,
    py: 0,
    fontSize: [1, null, null, 2],
    img: {
      mr: 2,
      maxWidth: [23, 25, null, null, 25, "100%"],
    },
  },
  loader: {
    textAlign: "center",
    margin: "0 auto",
  },
};
