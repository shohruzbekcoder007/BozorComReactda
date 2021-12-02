import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export const HeaderWrapper = styled.div`
    Width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 630px) {
        flex-wrap: wrap;
    }
`;

export const HeaderLogo = styled.img`
    display: inline-block;
`;

export const HeaderMenu = styled.div`
    display: flex;
    justify-content: space-between;
    color: #021633;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    @media (max-width: 630px) {
        width: 100%;
        flex-wrap: wrap;
        font-size: 19px;
    }
`;

export const HeaderMenuLeft = styled.div`
    display: inline-block;
    padding-right: 6px;
    display: flex;
    align-items: center;
    @media (max-width: 630px) {
        width: 100%;
        display: block;
        padding: 10px 0 10px 0;
        text-align: center;
    }
`;

export const HeaderSeparater = styled.div`
    width: 2px;
    height: 32px;
    background-color: #F0E2CE;
    @media (max-width: 630px) {
        width: 100%;
        height: 2px;
    }
`;

export const HeaderMenuRight = styled.div`
    display: inline-block;
    padding-left: 12px;
    display: flex;
    align-items: center;
    @media (max-width: 630px) {
        width: 100%;
        display: block;
        padding: 10px 0 10px 0;
        text-align: center;
    }
`;

export const HeaderLeftLink = styled(Link)`
    display: inline-block;
    margin-right: 48px;
    position: relative;
    color: #021633;
    font-weight: ${props => props.active ? "bold" : "normal"};
    ::after {
        display: ${props => props.active ? "inline-block" : "none"};
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 24.5px;
        height: 1px;
        background-color: #000000;
        content: ""
    }
    @media (max-width: 770px) {
        margin-right: 20px;
    }
    @media (max-width: 630px) {
        width: 100%;
        flex-wrap: wrap;
        margin: 0;
        padding: 10px 0;
        ::after{
            display: none;
        }
    }
`;

export const HeaderRightLink = styled(Link)`
    display: inline-block;
    margin-left: 24px;
    position: relative;
    color: #021633;
    font-weight: ${props => props.active ? "bold" : "normal"};
    ::after {
        display: ${props => props.active ? "inline-block" : "none"};
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 24.5px;
        height: 1px;
        background-color: #000000;
        content: ""
    }
    @media (max-width: 770px) {
        margin-left: 10px;
    }
    @media (max-width: 630px) {
        width: 100%;
        flex-wrap: wrap;
        margin: 0;
        padding: 10px 0;
        ::after{
            display: none;
        }
    }
`;

export const RegisterLink = styled(Link)`
    display: inline-block;
    margin-left: 24px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 32px;
    color: #FFFFFF;
    padding: 4px 12px 4px 12px;
    background: #001730;
    border-radius: 5px;
    text-transform: uppercase;
    @media (max-width: 630px) {
        margin: 0;
        align-items: center;
    }
`;

export const HeaderSecretLogo = styled.span`
    display: none;
    cursor: pointer;
    @media (max-width: 630px){
        display: inline-block;
    }
`;