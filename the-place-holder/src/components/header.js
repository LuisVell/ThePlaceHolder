import MainHeader from '../styles/headerStyle'

function Header(pgName) {
    return(
        <div>
            <MainHeader>
                <div>
                    <a href='/'><h1>The Place Holder</h1></a>
                    <h3>{pgName}</h3>
                </div>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/game'>Game</a></li>
                </ul>
            </MainHeader>
        </div>
    )
}
export default Header;