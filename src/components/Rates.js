import React, { useState, useEffect } from 'react'


import Rate from './Rate'
export default function Rates() {
    const [currencyData, updateRates] = useState({})

    function getCurrentRates(currencyCode = 'USD') {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currencyCode}`)
            .then(res => res.json())
            .then(data => updateRates(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getCurrentRates()
    }, [])

    return (
        <div>
            {/* <CurrentRate /> */}
            <Rate rates={currencyData.rates} />
        </div>
    )
}
