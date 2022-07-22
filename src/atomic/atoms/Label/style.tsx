import styled from "styled-components";
import { ILabel } from ".";

export const Container = styled.div<ILabel>`
    color: black;

    ${(props) => {
        if(props.underline) {
            return `text-decoration: underline;`; 
        }
    }}
`