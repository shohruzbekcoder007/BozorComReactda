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
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default function Header() {

    const [text, setText] = useState(texts[globalState.language]);

    useEffect(()=>{
        setText(texts[globalState.language])
    },[globalState.language])

    return (
        <Router>
            <HeaderWrapper>
                <HeaderLogo src={logo}/>
                <HeaderSecretLogo>
                    <img src={burger} />
                </HeaderSecretLogo>
                <HeaderMenu>
                    <HeaderMenuLeft>
                        <HeaderLeftLink to="/browse" active>{text.browse}</HeaderLeftLink>
                        <HeaderLeftLink to="/blog">{text.blog}</HeaderLeftLink>
                        <HeaderLeftLink to="/write_review">{text.write_review}</HeaderLeftLink>
                    </HeaderMenuLeft>
                    <HeaderSeparater/>
                    <HeaderMenuRight>
                        <HeaderRightLink to="/login">{text.login}</HeaderRightLink>
                        <HeaderRightLink to="/signup">{text.signup}</HeaderRightLink>
                        <RegisterLink to="/register_pro">{text.register_pro}</RegisterLink>
                    </HeaderMenuRight>
                </HeaderMenu>
            </HeaderWrapper>
        </Router>
    )
}
