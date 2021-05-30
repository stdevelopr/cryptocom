import { Wrapper } from "./Footer.styles"
import { ImWhatsapp } from 'react-icons/im';
import { IconContext } from "react-icons";

function Footer({description, contact}) {
    return (
        <Wrapper>
            <div>
                {description}
            </div>

            <div>
                <IconContext.Provider value={{ color: "green"}}>
                    <ImWhatsapp /><span>{contact}</span>
                </IconContext.Provider>
            </div>
        </Wrapper>
    )
}

export default Footer