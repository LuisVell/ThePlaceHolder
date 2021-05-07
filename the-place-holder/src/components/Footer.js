import MainFooter from '../styles/footerStyle'

const Footer=(pgName)=>{
    return(
        <MainFooter>
            <h4><a href={'/'+pgName}>{pgName}</a></h4>
            <h6>Por:LuisVellar</h6>
        </MainFooter>
    )
}

export default Footer