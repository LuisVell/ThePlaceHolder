import Header from '../components/header.js'
import Footer from '../components/Footer.js'
import menuLateral from '../components/menulateral.js'
import PRS from '../components/game'
import GridLayout from '../styles/grid'

const GamePage = ()=>{
    return(
        <GridLayout>
            {Header('Game')}       
            <div class="util">{PRS()}</div>
            {menuLateral()}
            {Footer('')}
        </GridLayout>
    )
}

export default GamePage