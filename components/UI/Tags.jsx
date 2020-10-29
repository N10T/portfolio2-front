/* eslint-disable no-use-before-define */
import React from 'react';
// import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: 500,
//     '& > * + *': {
//       marginTop: theme.spacing(3),
//     },
//   },
// }));

export default function Tags({setTags}) {
//   const classes = useStyles();

  return (
    
      <Autocomplete
        multiple
        id="tags-outlined"
        options={top100Films}
        // getOptionLabel={(option) => option.title}
        // defaultValue={[top100Films[0]]}
        onChange={(event,value)=>setTags(value)}
        
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Filtre par entreprise"
            placeholder="Entreprise"
          />
        )}
      />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = ['Ironhack','UCPA','Orange Maple'];
