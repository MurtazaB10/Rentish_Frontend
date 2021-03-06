import React from "react";
import { useFormikContext } from "formik";
import { Typography, Grid } from "@material-ui/core";
import ProductDetails from "./ProductDetails";
import ShippingDetails from "./ShippingDetails";
import PaymentDetails from "./PaymentDetails";

export default function ReviewOrder(props) {
  const { values: formValues } = useFormikContext();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <ProductDetails setTotal={props.set} />
      <Grid container spacing={2}>
        <ShippingDetails formValues={formValues} />
      </Grid>
    </React.Fragment>
  );
}
