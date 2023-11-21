// import React, { useReducer } from 'react'
// import PageTitle from '../../components/layout/PageTitle'

// import { inicialState, reducer } from '../../store/'
// import {numberAdd2} from '../../store/actions/number'




// const UseReducer = (props) => {

//     const [state, dispatch] = useReducer(reducer, inicialState)

//     return (
//         <div className="UseReducer">
//             <PageTitle
//                 title="Hook UseReducer"
//                 subtitle="Uma outra forma de ter estado em componentes funcionais!"
//             />
//             <div className="center">
//                 {state.user ? 
//                     <span className="text">{state.user.name }</span> 
//                     : <span className="text">Sem usuário</span>
//                 }
                
//                 <span className="text">{state.number}</span>
//                 <div>
//                     <button className="btn"
//                     onClick={ ()=> dispatch({type: 'login', payload: 'Maria'})}>Login</button>
//                     <button className="btn"
//                     onClick={ ()=> numberAdd2(dispatch)}>+2</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default UseReducer
