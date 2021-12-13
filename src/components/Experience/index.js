import React from 'react';
import { 
    ExperienceWrapper,
    ExperienceVideoWrapper,
    ExperienceInformation,
    InformationHeader,
    InformationHeaderTitle,
    InformationHeaderText,
    InformationBody,
    InformationBodyResult,
    ResultTitle,
    ResultText,
    InformationFooter
 } from './styles'
 import ExperienceVideo from './../ExperienceVideo'

export default function Experience() {
    return (
        <ExperienceWrapper>
            <ExperienceInformation>
                <InformationHeader>
                    <InformationHeaderTitle>
                        our experience 
                        with several clients
                    </InformationHeaderTitle>
                    <InformationHeaderText>
                        see the video on the side, how is our experience in the field, 
                        able to solve your problem well
                    </InformationHeaderText>
                </InformationHeader>
                <InformationBody>
                    <InformationBodyResult>
                        <ResultTitle>5000</ResultTitle>
                        <ResultText>
                            Tasks successfully 
                            complete
                        </ResultText>
                    </InformationBodyResult>
                    <InformationBodyResult>
                        <ResultTitle>3</ResultTitle>
                        <ResultText>
                            Avg. quotes <br/>
                            per task
                        </ResultText>
                    </InformationBodyResult>
                    <InformationBodyResult>
                        <ResultTitle>6 Hrs</ResultTitle>
                        <ResultText>
                            Avg. time to 
                            receive offer
                        </ResultText>
                    </InformationBodyResult>
                </InformationBody>
                <InformationFooter>find service</InformationFooter>
            </ExperienceInformation>
            <ExperienceVideoWrapper>
                {/* <ExperienceVideo/> */}
            </ExperienceVideoWrapper>
        </ExperienceWrapper>
    )
}