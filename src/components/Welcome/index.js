import React from 'react'
import { observer } from "mobx-react";
import { WelcomeWrapper } from './styles';

const Welcome = () => {
    return (
        <WelcomeWrapper>
            <p>Home page</p>
        </WelcomeWrapper>
    )
}

export default observer(Welcome);