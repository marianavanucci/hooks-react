import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

// gera efeito colateral = se muda um dado em algum lugar 
//vai gerar uma mudanca em outro

function calcFatorial (num) {
    const n = parseInt(num)
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {

    const [ number, setNumber ] = useState(1)
    const [ fatorial, setFatorial] = useState(1)

    //setFatorial(calcFatorial(number)) nao funciona, gera loops infinitos

    useEffect( function() {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function(){
        if (fatorial > 100000){
            document.title = 'Eita!!'
        }
    },[fatorial])

    //ex 02

    const [ status, setStatus ] = useState('Ímpar') 

    useEffect( function () {
        setStatus( number % 2 === 0 ? 'Par' : 'Ímpar')
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title='Exercicio 01'></SectionTitle>
            <div className="center">
                    <div>
                        <span className="text">Fatorial:</span>
                        <span className="text red">{fatorial === -1 ? 'Nao existe' : fatorial }</span>
                    </div>
                <input type="number" className="input"
                    value={number}
                    onChange={ e => setNumber(e.target.value) } />
            </div>

            <SectionTitle title='Exercicio 02'></SectionTitle>
            <div className="center">
                <div>
                <span className="text">Status: </span>
                <span className="text red">{status}</span>
                </div>
            </div>


            



        </div>
    )
}

export default UseEffect
