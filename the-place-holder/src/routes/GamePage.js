import Header from '../components/header.js'
import Footer from '../components/Footer.js'
import menuLateral from '../components/menulateral.js'
import GridLayout from '../styles/grid'

const GamePage = ()=>{
    return(
        <GridLayout>
            {Header('Game')}       
            <div class="util"><h1>Ops! Parece que ainda não tem nada aqui :( <br/> Foi Mal</h1></div>
            {menuLateral()}
            {Footer('')}
        </GridLayout>
    )
}

export default GamePage