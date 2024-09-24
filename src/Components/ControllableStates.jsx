import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { CompareContext } from '../Contexts/CompareContext';
import { useContext } from 'react';

export default function ControllableStates({teams,label,value ,setValue}) {

  return (
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        id="controllable-states-demo"
        options={teams}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
  );

}

