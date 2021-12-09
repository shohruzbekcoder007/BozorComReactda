import styled from "styled-components";

export const HireWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    padding-top: 79px;
    padding-bottom: 126px;
    justify-content: space-between;
`;

export const HireText = styled.div`
    display: inline-block;
`;

export const HireTextHeader = styled.p`
    display: inline-block;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: #021633;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 55px;
    margin-bottom: 20px;
`;

export const HireTextHeaderBottom = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: rgba(2, 22, 51, 0.5);
    margin-bottom: 52px;
`;

export const HireTextBody = styled.div`
    display: inline-block;
    margin-bottom: 12px;
`;

export const HireTextBodyList = styled.ul`
    position: relative;
    ::after {
        content: "";
        display: inline-block;
        position: absolute;
        left: 25px;
        top: 0;
        width: 1px;
        height: 100%;
        border: 0.5px dashed #000000;
    }
`;

export const HireTextBodyListItem = styled.li`
    margin-bottom: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const ListItemNumber = styled.span`
    display: inline-block;
    width: 50px;
    height: 50px;
    background: #FFFFFF;
    border-radius: 50%;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ListItemText = styled.span`
    display: inline-block;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 32px;
    color: #021633;
    padding-left: 52px;
`;

export const HireTextFooter = styled.button`
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

export const HireImage = styled.div`
    display: inline-block;
    width: 633px;
    height: 913px;
    ackground: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    padding: 19px 13px;
    background: #FFFFFF;
    img {
        width: 100%;
        height: 100%;
        display: inline-block;
        background: #FFFFFF;
        border: 1px solid #F2F2F2;
        border-radius: 10px;
    }
`;