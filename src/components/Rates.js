import React, { useState, useEffect, useRef } from 'react'


import Rate from './Rate'

import currencyJSON from '../currency.json'
import '../styles/Rates.css'


export default function Rates() {
    const [currencyData, updateRates] = useState([])
    const [currentRate, updateRate] = useState(1)
    const rateInput = useRef()
    function getCurrentRates(currencyCode = 'USD') {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currencyCode}`)
            .then(res => res.json())
            .then(data => {
                const currencyCode = Object.keys(data.rates)
                const newData = [];
                currencyJSON.forEach(item => {
                    if (currencyCode.indexOf(item.currencyCode) !== -1) {
                        newData.push({
                            currencyCode: item.currencyCode,
                            currencyName: item.currencyName,
                            currencyCountry: item.currencyCountry,
                            currencyRate: data.rates[item.currencyCode],
                            showInfo: false
                        })
                    }
                })
                updateRates(newData)
            })
            .catch(err => console.log(err))
    }


    useEffect(() => {
        getCurrentRates()
    }, [])

    function recalculateRates() {
        let number = parseInt(rateInput.current.value)
        if (number) {
            updateRate(number)
        }
    }

    return (
        <div>
            <h3> Current Exchange Rate for the U.S. Dollar $<input ref={rateInput} type='text' className='enterAmount' placeholder='1' onChange={recalculateRates} /></h3>

            <ul className='rates-list-container' >
                {currencyData.map(data => <Rate key={Math.random() * 1000} data={data} rate={currentRate} />)}
            </ul>

        </div>
    )
}
