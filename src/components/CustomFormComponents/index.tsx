import { Container, darken, FormControl, styled, Typography } from "@mui/material";
import { FC } from "react";
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
            height: 100vh;
            justify-content: center;
        `
        );

    const SpacedFormControl = styled(FormControl)(
        ({theme}) => 
            `
            margin-top: ${theme.spacing(5)}
            `
    );

    interface titleProps {
        text: string
    }

    const FormTitle: FC<titleProps> = (props: titleProps) => {
    return <Typography sx={{textAlign: "center"}} variant="h3" component="h1">{props.text}</Typography>
    };

export {FormContainer, CustomNavLink, SpacedFormControl, FormTitle};