import React, { useState, useEffect  } from 'react'
import { ThemeProvider } from "theme-ui";
import { useRouter } from 'next/router'
import { jsx, Box, Container } from "theme-ui";
import theme from "theme";
import PaymentForm from "../components/payment-form"

export default function vippsPayment(props) {

    return (
        <ThemeProvider theme={theme}>
            <Box sx={styles.contentWrapper}>
                <PaymentForm/>
            </Box>
        </ThemeProvider>
    );
}


const styles = {
    contentWrapper: {
        width:"35%",
        margin:"5% auto 0 auto"
    },
    
  };