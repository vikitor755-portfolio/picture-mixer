import React from 'react';
import { Container, styled, Typography } from '@mui/material';
import theme from '../../theme';
// import logoImage from "../../../public/logo.svg"

const Branding = () => {
    return (
        <>
            <Container sx={{display: "flex", width: "100%", justifyContent: "center"}}>

                <img src={`${process.env.PUBLIC_URL}/logo.svg`}/>
                <Typography component="p" textAlign={"center"}
                sx={{margin: theme.spacing(5)}}>
                    <Typography sx={{color: "#22b14c"}} variant='h2' component="span">Pict</Typography>
                    <Typography sx={{color: "#ed1c24"}} variant='h2' component="span">ure</Typography>
                    <Typography sx={{color: "#00b2f4"}} variant='h2' component="span"> Mas</Typography>
                    <Typography sx={{color: "#000000"}} variant='h2' component="span">her</Typography>
                    
                </Typography>
                <img src={`${process.env.PUBLIC_URL}/logo.svg`} style={{transform: "scaleY(-1)"}}/>
            </Container>
        </>
    )
};

export default Branding;
