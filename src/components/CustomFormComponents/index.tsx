import { Container, darken, FormControl, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

    const CustomNavLink = styled(NavLink)(
        ({ theme }) => `
            color: ${theme.palette.primary.main};
            text-decoration: none;

            :hover {
                color: ${darken(theme.palette.primary.main, 0.2)};
            }
        `,
        );

    const FormContainer = styled(Container)( 
        `
            display: flex;
            width: 100vw;
            flex-direction: column;
            height: 70vh;
            justify-content: center;
        `
        );

    const SpacedFormControl = styled(FormControl)(
        ({theme}) => 
            `
            margin-top: ${theme.spacing(5)}
            `
    );

export {FormContainer, CustomNavLink, SpacedFormControl};