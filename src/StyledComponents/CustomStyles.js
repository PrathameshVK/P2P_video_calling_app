import { makeStyles } from '@material-ui/core';

export const useStyles=makeStyles({
    field:{
        width: 400,
        border: '#008037'
    },
    btn:{
        color: '#fff',
        backgroundColor: '#008037',
        height: 50,
        width: 400,
        '&:hover':{
            backgroundColor: '#09a04b',
        }
    },
    cssLabel: {
        color : '#008037'
      }, 
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
          borderColor: '#008037',
        }
    },
    cssFocused: {
        borderWidth: '1px',
        borderColor:  '#008037',
    },
    root: {
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: '#008037',
        }
    },
    input: {
        color: '#008037'
    },
    notchedOutline: {
        borderWidth: '1px',
        borderColor:  '#008037',
        '&:hover':{
            borderColor: '#008037'
        }
    }
})