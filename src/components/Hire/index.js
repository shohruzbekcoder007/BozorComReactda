import React from 'react'
import {
    HireWrapper,
    HireText,
    HireImage,
    HireTextHeader,
    HireTextHeaderBottom,
    HireTextBody,
    HireTextBodyList,
    HireTextBodyListItem,
    ListItemNumber,
    ListItemText,
    HireTextFooter
} from './styles'
import hire_image from './../../assets/img/mask_group.png'

export default function Hire() {
    return (
        <HireWrapper>
            <HireText>
                <HireTextHeader>
                    Why should you <br/>
                    hire us?
                </HireTextHeader>
                <HireTextHeaderBottom>
                Not all plumbing companies can guarantee <br/>
                the price up front and see how many professions <br/>
                we provide so that your problem is solved
                </HireTextHeaderBottom>
                <HireTextBody>
                    <HireTextBodyList>
                        <HireTextBodyListItem>
                            <ListItemNumber>1</ListItemNumber>
                            <ListItemText>Home Cleaning</ListItemText>
                        </HireTextBodyListItem>
                        <HireTextBodyListItem>
                            <ListItemNumber>2</ListItemNumber>
                            <ListItemText>Full House Removals</ListItemText>
                        </HireTextBodyListItem>
                        <HireTextBodyListItem>
                            <ListItemNumber>3</ListItemNumber>
                            <ListItemText>Items Removals</ListItemText>
                        </HireTextBodyListItem>
                        <HireTextBodyListItem>
                            <ListItemNumber>4</ListItemNumber>
                            <ListItemText>Furniture Assembly</ListItemText>
                        </HireTextBodyListItem>
                        <HireTextBodyListItem>
                            <ListItemNumber>5</ListItemNumber>
                            <ListItemText>Handyman</ListItemText>
                        </HireTextBodyListItem>
                        <HireTextBodyListItem>
                            <ListItemNumber>6</ListItemNumber>
                            <ListItemText>Home Gardening</ListItemText>
                        </HireTextBodyListItem>
                    </HireTextBodyList>
                </HireTextBody>
                <HireTextFooter>find service</HireTextFooter>
            </HireText>
            <HireImage>
                <img src={hire_image} alt="hire images"/>
            </HireImage>
        </HireWrapper>
    )
}
