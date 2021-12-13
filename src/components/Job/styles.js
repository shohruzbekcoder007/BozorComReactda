import styled from "styled-components";
import image_hero1 from './../../assets/img/image_hero1.png'

export const JobWrapper = styled.div`
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 20px 80px 4px rgba(5, 9, 19, 0.05);
    border-radius: 10px;
    padding-right: 40px;
    background-image: url(${image_hero1});
    background-repeat: no-repeat;
    background-position: bottom left;
    display: flex;
    justify-content: flex-end;
`;

export const JobInformation = styled.div`
    display: inline-block;
    width: 652px;
`;

export const JobInformationText = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: #021633;
    margin-top: 70px;
    text-align: left;
    margin-bottom: 40px;
`;

export const InformationButton = styled.button`
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
    margin-bottom: 70px;
`;