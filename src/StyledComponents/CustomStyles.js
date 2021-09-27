import { makeStyles } from '@material-ui/core';
import { theme } from './Theme';

export const useStyles=makeStyles({
    field:{
        border: '#008037',
        ["@media (min-height:320px) and (max-width: 480px)"]: {
            width: 200
          },
        ["@media (min-width: 481px) and (max-width: 767px)"]: {
            width: 300,
          },
        ["@media (min-width: 768px) and (max-width: 1024px)"]: {
            width: 300,
        },
        ["@media (min-width: 1025px) and (max-width: 1280px)"]:{
            width: 300,
        },
        ["@media screen and (min-width: 1281px)"]:{
            width: 400
        }
    },
    btn:{
        color: '#fff',
        backgroundColor: '#008037',
        height: 50,
        width: 400,
        '&:hover':{
            backgroundColor: '#09a04b',
        },
        ["@media (min-height:320px) and (max-width: 480px)"]: {
            width: 200,
            height: 30
          },
        ["@media (min-width: 481px) and (max-width: 767px)"]: {
            width: 300,
            height: 40
          },
        ["@media (min-width: 768px) and (max-width: 1024px)"]: {
            width: 300,
            height: 40
        },
        ["@media (min-width: 1025px) and (max-width: 1280px)"]:{
            width: 300,
            height: 40
        },
        ["@media screen and (min-width: 1281px)"]:{
            width: 400,
            height: 50
        }
    },
    cssLabel: {
        color : '#008037',
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
          borderColor: '#008037'
        }
    },
    input: {
        color: '#008037',
        height: 40
    },
    notchedOutline: {
        borderWidth: '1px',
        borderColor:  '#008037',
        '&:hover':{
            borderColor: '#008037'
        }
    }
})