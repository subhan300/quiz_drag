import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
}));

export default function GroupedSelect() {
  const classes = useStyles();
  const [option,setOption]=useState("");
  const handleChange=(e)=>{
     setOption(e);
    //  navigate to that page 
  }
  console.log("option : ",option)
  return (
    <div>
        <br /><br />
      <FormControl className={classes.formControl}>
        {/* <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel> */}
        <Select onChange={(e)=>handleChange(e.target.value)} native defaultValue="" id="grouped-native-select">
          <option  aria-label="None" value="" />
          <optgroup label="Science">
            <option value="science">ATOMS</option>
            {/* <option value={2}>Option 2</option> */}
          </optgroup>
          <optgroup label="Technology">
            <option value="technology">Artificial Intelligence</option>
            {/* <option value={4}>Option 4</option> */}
          </optgroup>
        </Select>
      </FormControl>
    
    </div>
  );
}