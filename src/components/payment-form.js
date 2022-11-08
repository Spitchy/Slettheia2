/** @jsx jsx */
import {
  jsx,
  Box,
  Text,
  Message,
  Image,
  Label,
  Input,
  Button,
  Heading,
  Spinner,
  Checkbox,
  Alert,
  Close,
  Field,
  Grid,
} from "theme-ui";
import { rgba } from "polished";
import React, { useState, useEffect } from "react";
import paint2 from "assets/images/paint2.svg";
import fetch from "node-fetch";
import { useRouter } from "next/router";
import Vipps from "assets/images/icons/vipps.png";
import dotPattern from "assets/images/dot-pattern.png";
// const axios = require("axios");
import axios from "axios";

const presetAmounts = [200, 500, 1000, 2000];

const PaymentForm = (props) => {
  const router = useRouter();

  const [token, setToken] = useState("");
  const [mobile, setMobile] = useState("");
  const [amount, setAmount] = useState("");
  const [loader, setLoader] = useState(false);
  const [landingPage, setLandingPage] = useState("");
  const [error, setError] = useState({
    status: false,
    message: "Something Went Wrong! Please Try Again Later!",
  });

  useEffect(() => {
    if (router.query.amount != "" || router.query.amount != undefined) {
      setAmount(router.query.amount);
    }
    var mytoken = localStorage.getItem("token");
    if (mytoken != "" || mytoken != undefined) {
      setToken(mytoken);
    }
  }, [props, token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mobile != "" && amount != "" && token != "" && error.status == false) {
      setLoader(true);
      getLandingPageUrl(mobile, amount, token);
    } else {
      setError({
        ...error,
        status: true,
        message: "Vennligst skriv inn gyldig telefonnummer",
      });
    }
  };

  async function getLandingPageUrl(mobile, amount, token) {
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
          setLandingPage(data.data.url);
          window.location.href = data.data.url;
          // router.push({
          //     pathname: data.data.url,
          // })
        }
      } else {
        setError({
          ...error,
          status: true,
          message: "Noe gikk galt. Prøv igjen senere.",
        });
      }
    }
    setLoader(false);
  }

  function phoneValidation(number) {
    const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    return !(regex.test(number) === false);
  }

  const handleMobileNumber = (e) => {
    if (!phoneValidation(e.target.value) || e.target.value.length > 10) {
      setError({
        ...error,
        status: true,
        message: "Vennligst skriv inn gyldig telefonnummer ",
      });
    } else {
      setError({
        ...error,
        status: false,
      });
    }
    setMobile(e.target.value);
  };

  return (
    <Box sx={styles.formWrapper}>
      <Spinner
        sx={styles.loader}
        style={loader ? { display: "block" } : { display: "none" }}
      />

      <Heading
        sx={styles.title}
        style={!loader ? { display: "block" } : { display: "none" }}
      >
        Please Enter Mobile Number
      </Heading>
      <Box
        as="form"
        sx={styles.form}
        onSubmit={handleSubmit}
        style={!loader ? { display: "block" } : { display: "none" }}
      >
        <Box sx={styles.otherAmount}>
          <Input
            id=""
            placeholder="Mobile Number"
            onChange={handleMobileNumber}
            value={mobile}
          />
          <Message
            sx={styles.error}
            style={error.status ? { display: "block" } : { display: "none" }}
          >
            {error.message}
          </Message>
          <Box sx={styles.buttonGroup}>
            <Button variant="primary" sx={styles.submit}>
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentForm;

const styles = {
  formWrapper: {
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
  },
  title: {
    color: "textSecondary",
    fontWeight: "bold",
    fontSize: [6, null, null, 12, 8, 11],
    lineHeight: 1.4,
    letterSpacing: "heading",
    mb: [4, null, null, 5],
    textAlign: ["center", null, null, null, "left"],
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
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: ["7px", null, null, 2],
    mb: [3],
    label: {
      color: "textSecondary",
      border: (t) => `1px solid ${t.colors.borderColor}`,
      borderRadius: 5,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: [1, 2, null, 3],
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
    mt: [2, null, null, 2],
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
