import styled from "styled-components";
import image_hero from './../../assets/img/image_hero.png';

export const WelcomeWrapper = styled.div`
    width: 100%;
    background-image: url(${image_hero});
    background-repeat: no-repeat;
    background-position: top right;
    padding-top: 61px;
    margin-bottom: 220px;
`;

export const WelcomeTop = styled.div`
    display: inline-block;
`;

export const MainWelcomeText = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 70px;
    line-height: 89px;
    color: #021633;
    letter-spacing: 0.01em;
`;

export const WelcomeTextBottom = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    line-height: 34px;
    color: rgba(2, 22, 51, 0.5);
    margin: 20px 0px;
    order: 1;
`;

export const WelcomeForm = styled.div`
    width: 465px;
    display: flex;
    justify-content: space-between;
    padding-top: 22px;
    flex-flow: wrap;
`;

export const FindServise = styled.button`
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #FFFFFF;
    padding: 16px 29px 16px 24px;
    background: #001730;
    box-shadow: 0px 15px 25px rgba(255, 27, 0, 0.07);
    border-radius: 5px;
    border: none;
    margin-bottom: 30px;
`;

export const Hero = styled.button`
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #001730;
    border: 1px solid #001730;
    box-sizing: border-box;
    filter: drop-shadow(0px 15px 25px rgba(255, 27, 0, 0.07));
    border-radius: 5px;
    padding: 16px 24px 16px 24px;
    margin-bottom: 30px;
`;

export const SorchInput = styled.input`
    width: 100%;
    height: 64px;
    border: 1px solid #001730;
    border-radius: 5px;
    padding: 16px 19px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 34px;
    color: #959EA9;
    background-color: transparent;
    outline: none;
    margin-bottom: 224px;
`;

export const WelcomeBottom = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 34px 70px rgba(7, 6, 26, 0.04);
    border-radius: 10px;
    width: 100%;
    padding: 41px 26px 36px 26px;
`;

export const WelcomeBottomText = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 55px;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 48px;
`;

export const Suggest = styled.div`
    width: 100%;
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
`;

export const SuggestItem = styled.div`
    display: inline-block;
    text-align: center;
    display: flex;
    flex-flow: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SuggestItemImg = styled.div`
    width: 80px;
    height: 80px;
    display: inline-block;
    background: #001730;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
`;

export const SuggestItemTeaxt = styled.p`
    max-width: 203px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 32px;
    text-align: center;
    color: rgba(2, 22, 51, 0.5);
    width: 100%;
`;