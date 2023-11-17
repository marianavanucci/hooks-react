import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseMemo = (props) => {

    const [n1, setn1] = useState(0)
    const [n2, setn2] = useState(0)
    const [n3, setn3] = useState(0)

    //comentario



    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />

            <div className="center">
                <input type="text" className="input"
                value={n1} onChange={ e => setn1(parseInt(e.target.value))} />
                <input type="text" className="input"
                value={n2} onChange={ e => setn2(parseInt(e.target.value))} />
                <input type="text" className="input"
                value={n3} onChange={ e => setn3(parseInt(e.target.value))} />
            </div>
        </div>
    )
}

export default UseMemo
