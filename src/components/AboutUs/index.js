import React from 'react'
import {
    AboutUsWrapper,
    AboutUsHeader,
    AboutUsHeaderTitle,
    AboutUsHeaderText,
    AboutUsBody,
    AboutUsBodyImageWrapper
} from './styles'
import AboutUsVideo from './../AboutUsVideo'


export default function AboutUs() {
    return (
        <AboutUsWrapper>
            <AboutUsHeader>
                <AboutUsHeaderTitle>
                    What do they say about us?
                </AboutUsHeaderTitle>
                <AboutUsHeaderText>
                    Check out the video below to see exactly how our customers feel 
                    the experience with us.
                </AboutUsHeaderText>
            </AboutUsHeader>
            <AboutUsBody>
                <AboutUsBodyImageWrapper>
                    {/* <AboutUsVideo/> */}
                </AboutUsBodyImageWrapper>
            </AboutUsBody>
        </AboutUsWrapper>
    )
}
