import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButons from './UseCallbackButtons'

const UseCallback = (props) => {
    const [ count, setCount] = useState(0)

    function inc (delta) {
        setCount(count + delta)
    }


    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <div className="center">
                <span className="text">{count}</span>

                <UseCallbackButons inc={inc} ></UseCallbackButons>
            </div>
        </div>
    )
}

export default UseCallback
