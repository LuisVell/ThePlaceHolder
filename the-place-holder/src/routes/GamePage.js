import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

const GamePage = ()=>{
    return(
        <div>
            {Header('Game')}
            <h1>Ops! Parece que ainda não tem nada aqui :( <br/> Foi Mal</h1>
            {Footer('')}
        </div>
    )
}

export default GamePage