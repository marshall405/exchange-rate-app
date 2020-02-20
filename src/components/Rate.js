import React from 'react'

import '../styles/Rate.css'
import currencyJSON from '../currency.json'

export default function Rate({ rates }) {
    const ratesObj = new Object(rates)
    const codes = Object.keys(ratesObj).sort((a, b) => a[0] > b[0]);

    return (
        <ul className='rates-list-container'>
            {codes.map(code => {
                return (
                    <li key={code}>
                        <span>{code}</span>: ${rates[code]}
                    </li>
                )
            })}
        </ul>
    )
}
