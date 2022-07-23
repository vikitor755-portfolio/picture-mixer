import { Button, Container, FormControl, FormHelperText, Input, InputLabel, styled, Typography } from '@mui/material';
import { color, darken } from '@mui/system';
import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import theme from '../../theme';

const FormContainer = styled(Container)( 
    `
        display: flex;
        width: 100vw;
        flex-direction: column;
    `
    );
    const CustomNavLink = styled(NavLink)(
        ({ theme }) => `
            color: ${theme.palette.primary.main};
            text-decoration: none;

            :hover {
                color: ${darken(theme.palette.primary.main, 0.2)};
            }
          `,
        );

const LoginForm: FC = () => {
    return(
            <FormContainer>

                <Typography sx={{textAlign: "center"}} variant="h3" component="h1">Login</Typography>

                <FormControl sx={{marginTop: theme.spacing(7)}}>
                    <InputLabel htmlFor="email">Email address</InputLabel>
                    <Input id="email" type="email" required/>
                </FormControl>
                
                <FormControl sx={{marginTop: theme.spacing(7)}}>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input id="password" type="password" required/>
                </FormControl>

                <Button sx={{marginTop: "20px"}} variant='outlined'>
                            Login
                </Button>
                <FormHelperText>Don't have an account? <CustomNavLink to="/register">Register</CustomNavLink></FormHelperText>

            </FormContainer>
        )
};

export default LoginForm;
