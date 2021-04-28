import Logo from '../components/logo'
import MenuStyle from '../styles/menuStyle'

const Menu = () =>{
    return(
        <MenuStyle>
            <div>
                {Logo()}
            </div>
            <ul>
                <li><a href='/home'>Home</a></li>
                <li><a href='/game'>Game</a></li>
            </ul>
        </MenuStyle>
    )

}

export default Menu