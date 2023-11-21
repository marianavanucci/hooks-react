import React from 'react'
import PageTitle from '../../components/layout/PageTitle'

// faz a troca de informacao de forma mais simples
// que comunicacao direta ou indireta de pai e filho
const UseContext = (props) => {
    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
        </div>
    )
}

export default UseContext
