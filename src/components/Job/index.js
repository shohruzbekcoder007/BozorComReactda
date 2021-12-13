import React from 'react'
import {
    JobWrapper,
    JobInformation,
    JobInformationText,
    InformationButton
} from './styles'

export default function Job() {
    return (
        <JobWrapper>
            <JobInformation>
                <JobInformationText>
                    Looking for a job to earn extra 
                    money? Come join us, become 
                    reliable professionals
                </JobInformationText>
                <InformationButton>Join now</InformationButton>
            </JobInformation>
        </JobWrapper>
    )
}
