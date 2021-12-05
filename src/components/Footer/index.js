import React from 'react'
import { setLanguage } from './../../globalState';

export default function Footer() {
    return (
        <div style={{paddingTop: "100px", paddingBottom: "100px"}}>
            <button onClick={()=>{setLanguage("eng")}}>eng</button>
            <button onClick={()=>{setLanguage("ru")}}>ru</button>
            <button onClick={()=>{setLanguage("uz")}}>uz</button>
            <button onClick={()=>{setLanguage("uzc")}}>uzc</button>
        </div>
    )
}
