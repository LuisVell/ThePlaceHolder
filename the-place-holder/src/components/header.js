import '../styles/header.css'

function Header(pgName) {
    return(
        <div>
            <header>
                <h1>The Place Holder</h1><h3>{pgName}</h3>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='https://example.com'>Pagina EXMP</a></li>
                </ul>
            </header>
        </div>
    )
}
export default Header;