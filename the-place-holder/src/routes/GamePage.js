import Header from '../components/header.js'
import Footer from '../components/Footer.js'
import menuLateral from '../components/menulateral.js'
import TTT from '../components/game'
import GridLayout from '../styles/grid'

const GamePage = ()=>{
    return(
        <GridLayout>
            {Header('Game')}       
            <div class="util">{TTT()}</div>
            {menuLateral()}
            {Footer('')}
        </GridLayout>
    )
}

export default GamePage