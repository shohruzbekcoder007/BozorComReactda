import React from 'react'
import { observer } from "mobx-react";
import {
    WelcomeWrapper,
    WelcomeTop,
    MainWelcomeText,
    WelcomeTextBottom,
    WelcomeForm,
    FindServise,
    Hero,
    SorchInput,
    WelcomeBottom,
    WelcomeBottomText,
    Suggest,
    SuggestItem,
    SuggestItemImg,
    SuggestItemTeaxt
} from './styles';
import { globalState } from './../../globalState';
import texts from './welcome-list.json';
import suggest1 from './../../assets/img/suggest1.png';
import suggest2 from './../../assets/img/suggest2.png';
import suggest3 from './../../assets/img/suggest3.png';
import suggest4 from './../../assets/img/suggest4.png';

const Welcome = () => {
    return (
        <WelcomeWrapper>
            <WelcomeTop>
                <MainWelcomeText 
                    dangerouslySetInnerHTML={ {__html: texts[globalState.language].main_text} } 
                />
                <WelcomeTextBottom>
                    {texts[globalState.language].text_bottom}
                </WelcomeTextBottom>
                <WelcomeForm>
                    <FindServise>
                        {texts[globalState.language].find_service}
                    </FindServise>
                    <Hero>
                        {texts[globalState.language].hero}
                    </Hero>
                    <SorchInput placeholder={texts[globalState.language].search_placeholder}/>
                </WelcomeForm>
            </WelcomeTop>
            <WelcomeBottom>
                <WelcomeBottomText>
                    {texts[globalState.language].bottom_main_text}
                </WelcomeBottomText>
                <Suggest>
                    <SuggestItem>
                        <SuggestItemImg>
                            <img src={suggest1} alt="suggest"/>
                        </SuggestItemImg>
                        <SuggestItemTeaxt>{texts[globalState.language].conveniences.discover}</SuggestItemTeaxt>
                    </SuggestItem>
                    <SuggestItem>
                        <SuggestItemImg>
                            <img src={suggest2} alt="suggest"/>
                        </SuggestItemImg>
                        <SuggestItemTeaxt>{texts[globalState.language].conveniences.free}</SuggestItemTeaxt>
                    </SuggestItem>
                    <SuggestItem>
                        <SuggestItemImg>
                            <img src={suggest3} alt="suggest"/>
                        </SuggestItemImg>
                        <SuggestItemTeaxt>{texts[globalState.language].conveniences.day}</SuggestItemTeaxt>
                    </SuggestItem>
                    <SuggestItem>
                        <SuggestItemImg>
                            <img src={suggest4} alt="suggest"/>
                        </SuggestItemImg>
                        <SuggestItemTeaxt>{texts[globalState.language].conveniences.suggest}</SuggestItemTeaxt>
                    </SuggestItem>
                </Suggest>
            </WelcomeBottom>
        </WelcomeWrapper>
    )
}

export default observer(Welcome);