import styled from "styled-components";
import graphic_elment from './../../assets/img/graphic_elment.png'

export const AboutUsWrapper = styled.div`
    width: 100%;
    margin-bottom: 200px;
`

export const AboutUsHeader = styled.div`
    width: 100%;
    background-image: url(${graphic_elment});
    background-repeat: no-repeat;
    background-position: center left;
    text-align: center;
    margin-bottom: 57px;
`;

export const AboutUsHeaderTitle = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 55px;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: #021633;
    margin-bottom: 20px;
`;

export const AboutUsHeaderText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: rgba(2, 22, 51, 0.5);
    max-width: 457px;
    display: inline-block;
`;

export const AboutUsBody = styled.div`
    width: 100%;
    padding-bottom: 130px;
    background-image: url(${graphic_elment});
    background-repeat: no-repeat;
    background-position: bottom right;
    text-align: center;
    
`;

export const AboutUsBodyImageWrapper = styled.div`
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    padding: 12px;
    border-radius: 10px;
`;