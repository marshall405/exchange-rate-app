import React, { useRef } from 'react'

import '../styles/Rate.css'


export default function Rate({ data, rate }) {
    const li = useRef()

    function handleClick() {
        let showDiv = li.current.nextElementSibling
        if (window.getComputedStyle(showDiv).display === 'none') {
            showDiv.style.display = 'block'
        }
    }
    return (
        <div style={{ position: "relative" }}>
            <li ref={li} onClick={handleClick}> <span>{data.currencyCode}</span>: ${(data.currencyRate * rate).toFixed(2)}</li>
            <div className='show'>
                <label>
                    <span>Currency Name:</span>{data.currencyName}
                </label>
                <br />
                <label>
                    <span>Country:</span> {data.currencyCountry}
                </label>
            </div>

        </div>
    )
}
