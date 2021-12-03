import React, { 
    useState 
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
import { observer } from "mobx-react";

const Header = () => {

    const [active, setActive] = useState(1);

    const handleActiveLink = (value) => {
        setActive(value);
    }

    return (
        <HeaderWrapper>
            <HeaderLogo src={logo}/>
            <HeaderSecretLogo>
                <img src={burger} />
            </HeaderSecretLogo>
            <HeaderMenu>
                <HeaderMenuLeft>
                    <HeaderLeftLink 
                        to="/" 
                        onClick={()=>handleActiveLink(1)} 
                        active={active == 1 ? "active": ''}
                    >
                        {texts[globalState.language].browse}
                    </HeaderLeftLink>
                    <HeaderLeftLink 
                        to="/blog"
                        onClick={()=>handleActiveLink(2)}
                        active={active == 2 ? "active": ''}
                    >
                        {texts[globalState.language].blog}
                    </HeaderLeftLink>
                    <HeaderLeftLink 
                        to="/write_review"
                        onClick={()=>handleActiveLink(3)}
                        active={active == 3 ? "active": ''}
                    >
                        {texts[globalState.language].write_review}
                    </HeaderLeftLink>
                </HeaderMenuLeft>
                <HeaderSeparater/>
                <HeaderMenuRight>
                    <HeaderRightLink 
                        to="/login"
                        onClick={()=>handleActiveLink(4)}
                        active={active == 4 ? "active": ''}
                    >
                        {texts[globalState.language].login}
                    </HeaderRightLink>
                    <HeaderRightLink 
                        to="/signup"
                        onClick={()=>handleActiveLink(5)}
                        active={active == 5 ? "active": ''}
                    >
                        {texts[globalState.language].signup}
                    </HeaderRightLink>
                    <RegisterLink 
                        onClick={()=>handleActiveLink(0)}
                        to="/register_pro"
                    >
                        {texts[globalState.language].register_pro}</RegisterLink>
                </HeaderMenuRight>
            </HeaderMenu>
        </HeaderWrapper>
    )
}

export default observer(Header);