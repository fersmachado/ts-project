import { useRouter } from "next/router";
import Buttom from "../../atoms/Button";
import Label from "../../atoms/Label";
import { Container, Left } from "./style";


interface IHeader {
    menuActive: string

}

function Header(params: IHeader) {
    const { menuActive = "" } = params;


    const router = useRouter();

    return (
        <Container>
            <Left>
                <a onClick={() => router.push("/")}>
                    <Label underline={menuActive == "Home"} text="Home"></Label>
                </a>
                <a onClick={() => router.push("/perfil")}>
                    <Label underline={menuActive == "Perfil"} text="Perfil"></Label>
                </a>
                <a onClick={() => router.push("/configuracao")}>
                    <Label underline={menuActive == "Configuracao"} text="Configuracao"></Label>
                </a>
            </Left>
            <Buttom onClick={() => router.push("/login")} text="Sair"></Buttom>
        </Container>
    )
}

export default Header;