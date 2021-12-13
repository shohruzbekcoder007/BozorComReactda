import styled from "styled-components";
import graphic from './../../assets/img/graphic.png'

export const ExperienceWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    padding-top: 123px;
    padding-bottom: 121px;
    justify-content: space-between;
    background-image: url(${graphic});
    background-repeat: no-repeat;
    background-position: top right;
    margin-bottom: 216px;
`;
    
export const ExperienceInformation = styled.div`
    margin-top: 11px;
    width: 443px;
    display: inline-block;
`;

export const InformationHeader = styled.div`
    display: inline-block;
    margin-bottom: 52px;
`;

export const InformationHeaderTitle = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 55px;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: #021633;
    margin-bottom: 20px;
`;

export const InformationHeaderText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: flex-end;
    color: rgba(2, 22, 51, 0.5);
`;

export const InformationBody = styled.div`
    width: 100%;
    display: flex;
    align-items: fle-start;
    justify-content: space-between;
    margin-bottom: 48px;
`;

export const InformationBodyResult = styled.div`
    display: inline-block;
    max-width: 132px;
`;

export const ResultTitle = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 55px;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: #DD1700;
`;

export const ResultText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: rgba(2, 22, 51, 0.5);
    mix-blend-mode: normal;
`;

export const InformationFooter = styled.button`
    display: inline-block;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    text-transform: uppercase;
    padding: 16px 24px;
    background: #001730;
    box-shadow: 0px 15px 25px rgba(255, 27, 0, 0.07);
    border-radius: 5px;
    color: #FFFFFF;
`;

export const ExperienceVideoWrapper = styled.div`
    padding: 11px 9px 8px 9px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    display: inline-block;
`;