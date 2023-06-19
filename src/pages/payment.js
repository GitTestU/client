import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "../component/payment/AddressForm";
import PaymentForm from "../component/payment/PaymentForm";
import Review from "../component/payment/Review";
import PaymentIcon from "@mui/icons-material/Payment";
import Chip from "@mui/material/Chip";
import CreditCard from "../component/payment/CreditCard";
import Form from "../component/payment/form";

const steps = ["Lessor Information", "Payment details", "Review your Rent"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <Form />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Payment() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [creditCard, setCreditCard] = React.useState({
    cardNumber: "",
    cardHolder: "",
    expirationDate: "",
  });

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handlePaymentFormSubmit = (creditCardData) => {
    setCreditCard(creditCardData);
    handleNext();
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <PaymentIcon />
          </Typography>
        </Toolbar>
      {activeStep === steps.length - 2 && (
          <Box display="flex" alignItems="center" justifyContent="center" >
            <CreditCard />
          </Box>
        )}
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 ,marginTop : "16%"}}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Payment
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end"  , alignItems:"flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1
                    ? "Complite Rent Car"
                    : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        
      </Container>
    </ThemeProvider>
  );
}
