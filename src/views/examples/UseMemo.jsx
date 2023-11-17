import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseMemo = (props) => {

    const [n1, setn1] = useState(0)
    const [n2, setn2] = useState(0)
    const [n3, setn3] = useState(0)


    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
        </div>
    )
}

export default UseMemo
