import MainHeader from '../styles/headerStyle'
import Logo from '../components/logo'

function Header(pgName) {
    return(
            <MainHeader>
                {Logo(pgName)}
                <ul>
                    <li><a href='/home'>Home</a></li>
                    <li><a href='/game'>Game</a></li>
                </ul>
            </MainHeader>
    )
}
export default Header;