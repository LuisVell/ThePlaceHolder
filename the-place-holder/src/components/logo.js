import LogoStyle from '../styles/LogoStyle'

const Logo = (PgName) =>{
    return(
        <LogoStyle>
            <a href='/'><h1>The Place Holder</h1></a>
            <h3>{PgName}</h3>
        </LogoStyle>
    )
}
export default Logo