import { Wrapper } from "./Footer.styles"
import { ImWhatsapp } from 'react-icons/im';
import { IconContext } from "react-icons";

function Footer() {
    return (
        <Wrapper>
            <div>
                Informações da loja...
            </div>

            <div>
                <IconContext.Provider value={{ color: "green"}}>
                    <ImWhatsapp /><span>Whatsapp: XXX-XXX</span>
                </IconContext.Provider>
            </div>
        </Wrapper>
    )
}

export default Footer