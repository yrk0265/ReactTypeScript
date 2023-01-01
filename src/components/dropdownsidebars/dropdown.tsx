import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { maxWidth } from '@mui/system';
import { alpha, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import './dropdown.css';

export default function DropDowns() {
    //const classes = useStyles();
    const [country, setCountry] = React.useState('');
    const [accounts, setAccounts] = React.useState('');
    const [group, setGroup] = React.useState('');
    return (
        <div className="Dropdown">
        <FormControl fullWidth className="overrides">
        <InputLabel id="demo-simple-select-label">Select country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          label="Age"
        >
          <MenuItem value={10}>India</MenuItem>
          <MenuItem value={20}>USA</MenuItem>
          <MenuItem value={30}>UK</MenuItem>
        </Select>
        </FormControl>
        <FormControl fullWidth className="overrides">
        <InputLabel id="demo-simple-select-label">All accounts</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={accounts}
          label="Age"
        >
          <MenuItem value={10}>acc1</MenuItem>
          <MenuItem value={20}>acc2</MenuItem>
          <MenuItem value={30}>acc3</MenuItem>
        </Select>
        </FormControl>
        <FormControl fullWidth className="overrides">
        <InputLabel id="demo-simple-select-label">All groups</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={group}
          label="Age"
        >
          <MenuItem value={10}>grp1</MenuItem>
          <MenuItem value={20}>grp2</MenuItem>
          <MenuItem value={30}>grp3</MenuItem>
        </Select>
        </FormControl>
        </div>);
}