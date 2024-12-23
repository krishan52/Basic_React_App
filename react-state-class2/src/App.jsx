import './App.css'
import LudoBoard from './LudoBoard'
import TodoLIst from './TodoList'
import Lottery from './Lottery'
import { sum } from "./helper"

function App() {

  let winCondition = (ticket) => {
    return ticket.every((num) => num === ticket[0]);
  }

  return (
    <>
      <Lottery n={3} winCondition={winCondition}/>
    </>
  )
}

export default App