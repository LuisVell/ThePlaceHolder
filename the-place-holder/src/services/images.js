const Image=(lag, alt)=>{
    let link='https://picsum.photos/'+lag+'/'+alt
    return(
        <img src={link}></img>
    )
}


export default Image