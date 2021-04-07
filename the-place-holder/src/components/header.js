import { MainHeader, UlHeader } from '../styles/headerStyle'

function Header(pgName) {
    return(
        <div>
            <MainHeader>
                <div>
                    <h1>The Place Holder</h1>
                    <h3>{pgName}</h3>
                </div>
                <UlHeader>
                    <li><a href='/'>Home</a></li>
                    <li><a href='https://example.com'>Pagina EXMP</a></li>
                </UlHeader>
            </MainHeader>
        </div>
    )
}
export default Header;