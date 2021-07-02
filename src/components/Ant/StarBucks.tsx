import React from 'react'
import {Container,useStyles} from "./styles"
import { useHistory } from 'react-router';

const StarBucks:React.FC = () => {

const classes = useStyles();
const history = useHistory();

const handleLogin = () =>{
    history.push('/Home');
}
    return (

<>
<div className={classes.container}>

<div className={classes.header}>
ASAS
</div>

<div className={classes.nav}>
ASAS
</div>

<div className={classes.article}>
adsa
</div>

<div className={classes.socialFooter}>
asda
</div>

<div className={classes.footer}>
asda
</div>


</div>
</>
    )
}

export default StarBucks
