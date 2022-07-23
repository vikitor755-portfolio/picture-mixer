import { Button, FormHelperText, Input, InputLabel, Typography } from '@mui/material';
import React, { FC } from 'react';
import Branding from '../Branding';
import {CustomNavLink, FormContainer, FormTitle, SpacedFormControl} from '../CustomFormComponents';

const RegisterForm: FC = () => {
    return(
            <FormContainer>
                <Branding></Branding>

                <FormTitle text="Register"></FormTitle>

                <SpacedFormControl>
                    <InputLabel htmlFor="email">Email address</InputLabel>
                    <Input id="email" type="email" required/>
                </SpacedFormControl>
                
                <SpacedFormControl>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input id="password" type="password" required/>
                </SpacedFormControl>

                <SpacedFormControl>
                    <InputLabel htmlFor="confirm-password">Confirm password</InputLabel>
                    <Input id="confirm-password" type="password" required/>
                </SpacedFormControl>

                <Button sx={{marginTop: "20px"}} variant='outlined'>
                            Login
                </Button>
                <FormHelperText>Already have an account? <CustomNavLink to="/">Login</CustomNavLink></FormHelperText>

            </FormContainer>
        )
};

export default RegisterForm;
