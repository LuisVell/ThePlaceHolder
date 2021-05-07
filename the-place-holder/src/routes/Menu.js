import Logo from '../components/logo'
import MnPrinStyle from '../styles/MnPrinStyle'

const Menu = () =>{
    return(
        <MnPrinStyle>
            <div>
                {Logo()}
            </div>
            <ul>
                <li><a href='/home'>Home</a></li>
                <li><a href='/game'>Game</a></li>
            </ul>
        </MnPrinStyle>
    )

}

export default Menu