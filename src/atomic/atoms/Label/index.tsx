import { Container } from "./style";

export interface ILabel {
    text: string;

    underline?: boolean
}

function Label(params: ILabel) {
    const { text, underline = false } = params;

    return (
        <Container underline={underline} text={text}>
            {text}
        </Container>
    )
}

export default Label;