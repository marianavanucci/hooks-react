import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import '../../components/layout/SectionTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

const UseRef = (props) => {

    const [ count, inc, dec] = useCounter (10)
    const url = 'http://files.cod3r.com.br/curso-react/estados.json'

    const response = useFetch(url)

    function showStates(states){
        return states.map( state => <li key={state.nome}>{state.nome} - {state.sigla}</li>)
    }

    // fetch('http://files.cod3r.com.br/curso-react/estados.json')
    // .then(resp => resp.json())
    // .then(json => console.log(json))

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
        <SectionTitle title='Exercício 01'></SectionTitle>
        <div className="center">

            <span className="text">{count}</span>

            <div>
                <button className="btn"
                onClick={ () => inc ()}>Inc</button>
                <button className="btn"
                onClick={ () => dec ()}>Dec</button>
            </div>

        </div>

        <SectionTitle title='Exercício 02'></SectionTitle>
        <div className="center"></div>
            <ul>
                {response.data ? showStates(response.data) : false }
            </ul>
        </div>
    )
}

export default UseRef
