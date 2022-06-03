import React, { useEffect, useState } from "react";

const Domain = () => {

    const [ domainValue, setDomainValue ] = useState ('Domain ')
    const [ availablelity, setAvailablelity ] = useState ('')

    const get_value = (e) => {
        setDomainValue (e.target.value)
        if (domainValue === '') {
            setDomainValue ('Domain')
            setAvailablelity ('')
        }
    }

    useEffect ( () => {
        fetch ( ` https://domain-availability.whoisxmlapi.com/api/v1?apiKey=at_Ii54JD1ndo6B3srz0SVv8kIAzN0Nu&domainName=${ domainValue }&credits=DA ` )
        .then ((response) => {
            return response.json()
        })
        .then ((data) => {
            const allData = data.DomainInfo.domainAvailability;
            setAvailablelity (allData.toLowerCase())
        })
    } )

    return (
        <>
            <h1 className="text-center mt-5">Domain Search</h1>
            <div className="container text-center mt-4">
                <input type="text" className="form-control" onKeyUp={ get_value } placeholder="Search Available Domain ......" />
                <h2 className="mt-4"><strong style={ {color: '#ff2a00', textDecoration: 'underline'} }>{ domainValue }</strong> is <span style={ { color : '#1151d3' } }>{ availablelity }</span></h2>
            </div>
        </>
    )
}

export default Domain