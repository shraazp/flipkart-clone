import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import './Login.scss';

export default function Login(props) {
  const { open, setOpen } = props;
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" className="x-icon">✕</button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent className="Login-container">
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
Login.propTypes = {
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
