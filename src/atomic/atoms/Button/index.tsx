import { Container } from "./style";


interface IButtom {
    text: string;
    onClick: () => void
}

function Buttom (params:IButtom) {
    const {text, onClick} = params;
    return(
        <Container onClick={onClick}> 
            {text}   
        </Container>
    )
    
}

export default Buttom;