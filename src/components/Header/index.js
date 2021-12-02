import React, {
    useState,
    useEffect
} from 'react'
import { 
    HeaderWrapper,
    HeaderLogo,
    HeaderMenu,
    HeaderMenuLeft,
    HeaderMenuRight,
    HeaderLeftLink,
    HeaderRightLink,
    HeaderSeparater,
    RegisterLink,
    HeaderSecretLogo
} from './styles'
import  logo  from './../../assets/img/logo_horvic.png'
import  burger  from './../../assets/img/header-logo.png'
import { globalState } from './../../globalState';
import texts from './header-list.json';

export default function Header() {

    const [text, setText] = useState(texts[globalState.language]);

    useEffect(()=>{
        setText(texts[globalState.language])
    },[globalState.language])

    return (
        <HeaderWrapper>
            <HeaderLogo src={logo}/>
            <HeaderSecretLogo>
                <img src={burger} />
            </HeaderSecretLogo>
            <HeaderMenu>
                <HeaderMenuLeft>
                    <HeaderLeftLink active>{text.browse}</HeaderLeftLink>
                    <HeaderLeftLink>{text.blog}</HeaderLeftLink>
                    <HeaderLeftLink>{text.write_review}</HeaderLeftLink>
                </HeaderMenuLeft>
                <HeaderSeparater/>
                <HeaderMenuRight>
                    <HeaderRightLink>{text.login}</HeaderRightLink>
                    <HeaderRightLink>{text.signup}</HeaderRightLink>
                    <RegisterLink>{text.register_pro}</RegisterLink>
                </HeaderMenuRight>
            </HeaderMenu>
        </HeaderWrapper>
    )
}
