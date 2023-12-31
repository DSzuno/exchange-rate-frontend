import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export const ExchangeRateConfirmationDialog = ({
  symbol,
  isOpen,
  onClose,
  onAgree,
}) => {
  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Change base symbol to {symbol}?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Do you want to change the base symbol to <u>{symbol}</u>? The exchange rates will reload.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>No</Button>
        <Button onClick={onAgree}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};
