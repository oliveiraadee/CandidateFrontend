import styled from "styled-components";

export const Div = styled.div`
    display:flex;
    justify-content: center;
`;

export const Form = styled.form`
    margin-bottom: 3vh;
    justify-self: center;
    align-self: center;
    height: 100vh;
    overflow-y: scroll;
`

export const Radio = styled.input.attrs({ type: 'radio' })`
    width: 2vw;
    height: 2vh;
`;

export const Input = styled.input.attrs({ type: 'text' })`
    width: 30vw;
    height: 5vh;
    margin-bottom: 3vh;
    font-size: 3vh
`;

export const Submit = styled.input.attrs({ type: 'submit' })`
    width: 40vw;
    height: 5vh;
    margin-bottom: 3vh;
    font-size: 3vh
`;

export const TextArea = styled.textarea`
    width: 40vw;
    height: 15vh;
    margin-bottom: 3vh;
    font-size: 3vh
`;

export const Select = styled.select`
    width: 40vw;
    height: 5vh;
    margin-bottom: 3vh;
    font-size: 3vh
`;


export const Label = styled.label`
    
`;

export const Title = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Subtitle = styled.h4`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`;
