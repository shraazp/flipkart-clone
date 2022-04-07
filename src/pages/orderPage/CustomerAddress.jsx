/* eslint-disable no-unused-expressions */
/**
 * Component consisting  of functions related to delivery address of customer
 * @author:Shravya P
 */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box, Grid, TextField, Button,
} from '@material-ui/core';
import {
  FormLabel, FormControl, FormControlLabel, Radio, RadioGroup,
} from '@mui/material';
import useStyle from './Styles';
import useForm from '../../utils/useForm';
import { setAddresss, updateAddresss, getAddresss } from '../../services/addressService';
import setAddress from '../../actions/addressActions';
import { getEmail } from '../../utils/Common';

function CustomerAddress() {
  const dispatch = useDispatch();
  const email = getEmail();
  const classes = useStyle();
  const [edit, setEdit] = useState(false);
  const {
    values,
    handleChange,
    handleSubmit,
  } = useForm();
  const addressList = useSelector((state) => state.allAddress.address);
  const address = addressList.length > 0 ? addressList[0].attributes : {};
  const data = {
    data: {
      name: values.name,
      mobile: values.mobile,
      pincode: values.pincode,
      address: values.address,
      city: values.city,
      state: values.state,
      locality: values.locality,
      landmark: values.landmark,
      alternatePhone: values.alternate,
      type: values.type,
      email,
    },
  };
  const updateAddressDetails = () => {
    updateAddresss(data, addressList[0].id);
    getAddresss().then((res) => { dispatch(setAddress(res)); });
  };
  const addAddress = () => {
    setAddresss(data);
    getAddresss().then((res) => { dispatch(setAddress(res)); });
  };
  const handleClick = () => {
    Object.keys(address).length > 0 ? updateAddressDetails() : addAddress();
    setEdit(false);
  };
  return (
    <Grid item lg={12} md={12} sm={12} xs={12} className={classes.leftComponent}>
      <Box className={classes.header}>
        <span className={classes.number}>2</span>
        <div className={classes.login}>DELIVERY ADDRESS</div>
        { !edit ? <button type="button" className={classes.change} onClick={() => { setEdit(true); }}>change</button> : null}
      </Box>
      <div className={classes.formContainer}>
        <Grid
          container
          spacing={3}
          className={classes.form}
        >
          <Grid
            item
            xs={12}
            sm={6}
          >
            <TextField InputProps={{ className: classes.formInput }} required id="name" name="name" label=" name" value={values.name || address.name || ''} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
          >
            <TextField InputProps={{ className: classes.formInput }} required id="mobile" name="mobile" label="10-digit mobile number" fullWidth variant="outlined" value={values.mobile || address.mobile || ''} onChange={handleChange} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
          >
            <TextField InputProps={{ className: classes.formInput }} required id="pincode" name="pincode" label=" pincode" fullWidth variant="outlined" value={values.pincode || address.pincode || ''} onChange={handleChange} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
          >
            <TextField InputProps={{ className: classes.formInput }} required id="locality" name="locality" label="locality" fullWidth variant="outlined" value={values.locality || address.locality || ''} onChange={handleChange} />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <TextField InputProps={{ className: classes.address }} id="address" name="address" label="Address (Area and street) " fullWidth variant="outlined" value={values.address || address.address || ''} onChange={handleChange} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
          >
            <TextField InputProps={{ className: classes.formInput }} required id="city" name="city" label="City/district/town" fullWidth variant="outlined" value={values.city || address.city || ''} onChange={handleChange} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
          >
            <TextField InputProps={{ className: classes.formInput }} id="state" name="state" label="state" fullWidth variant="outlined" value={values.state || address.state || ''} onChange={handleChange} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
          >
            <TextField InputProps={{ className: classes.formInput }} id="alternate" name="alternate" label="Alternate Phone(Optional)" fullWidth variant="outlined" value={values.alternate || address.alternatePhone || ''} onChange={handleChange} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
          >
            <TextField InputProps={{ className: classes.formInput }} id="landmark" name="landmark" label="landmark(optional)" fullWidth variant="outlined" value={values.landmark || address.landmark || ''} onChange={handleChange} />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <FormControl component="fieldset">
              <FormLabel component="legend">Address Type</FormLabel>
              <RadioGroup row aria-label="type" name="type" onChange={handleChange} value={values.type || address.type || ''}>
                <FormControlLabel value="home" control={<Radio />} label="Home (All day delivery)" />
                <FormControlLabel value="work" control={<Radio />} label="Work (Delivery between 10 AM - 5 PM)" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
          >
            {edit ? (
              <Button className={classes.button} style={{ background: '#fb641b', color: '#fff' }} variant="contained" onSubmit={handleSubmit} onClick={handleClick}>
                Save and Deliver Here
              </Button>
            ) : null }
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}
export default CustomerAddress;
