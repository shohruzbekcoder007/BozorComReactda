import styled from "styled-components";

export const PoularWrapper = styled.div`
    width: 100%;
`;

export const PoularText = styled.p`
    width: 100%;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 55px;
    align-items: center;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: #021633;
    text-align: center;
    margin-bottom: 70px;
`;

export const PopularItemWrapper = styled.div`
    width: 356px;
    background: #FCFCFC;
    border-radius: 10px;
    padding: 15px;
    ::hover: {
        box-shadow: 0px 12px 35px rgba(5, 9, 19, 0.05);
    }
`;

export const PopularItemImage = styled.div`
    width: 326px;
    height: 241px;
`;

export const ItemImage = styled.img`
    display: inline-block;
    width: 100%;
    height: 100%;
`;

export const PopularItemText = styled.div`
    width: 100%;
    height: 116px;
    overflow: hidden;
    margin-bottom: 9px
`;

export const ItemTextParagriph = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    color: #021633;
    margin-top: 20px;
    margin-bottom: 12px;
`;

export const ItemTextInformation = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: rgba(2, 22, 51, 0.5);
`;

export const AllServices = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 32px;
    text-align: center;
    color: #001730;
    margin-top: 87px;
    cursor: pointer;
`; 