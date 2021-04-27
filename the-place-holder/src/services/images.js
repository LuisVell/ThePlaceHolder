const Image=(lag, alt, tam)=>{
    let link='https://picsum.photos/'+lag+'/'+alt
    let alternativo='texto alternativo recebido da API'
    tam=tam+'%'
    return(
        <img src={link} alt={alternativo} width={tam}></img>
    )
}


export default Image