import { useEffect, useState } from 'react'
import {Posts} from '../services/post'
import {PostDiv, PostHDiv, MenuPosts} from '../styles/postsStyle'

let max=10;
let min=0;

const PostsRender=()=>{
    const [srcText, setSrc]=useState('');
    const [posts, setposts]=useState([{title:'', body:''}])
    const originalposts= Posts()

    const Next=()=>{
        max+=10
        min+=10
        if(max>originalposts.length){
            max=originalposts.length===0?10:originalposts.length
            min=originalposts.length<10?0:originalposts.length-10
        }
        setposts(originalposts.slice(min,max))
    }

    const Back=()=>{
        max-=10
        min-=10
        if(min<0){
            max=10
            min=0
        }
        setposts(originalposts.slice(min,max))
    }

    //Define posts após a atualização de originalposts
    useEffect(()=>{setposts(originalposts.slice(0,max))},[originalposts])
   
    //Buscador
    const Search = (event) =>{
        event.preventDefault()
        console.log('search:',srcText)
        const filterPosts = originalposts.filter((post)=>{
            return post.title.includes(srcText)
        })
        setposts(filterPosts)
    }

    //Mudança de texto no input
    const Change = (event)=>{
        setSrc(event.target.value)
        setposts(originalposts.slice(min,max))
    }

    return(
        <div>
            <PostHDiv>
                <h1>Postagens recentes</h1>
                <form onSubmit={Search}>
                    <input type='text' value={srcText} placeholder='Buscar' onChange={Change}></input>
                    <button type='submit'>Enviar</button>
                </form>
            </PostHDiv>
           <PostDiv>  
                {posts.map((com)=>{
                    return(
                        <div key={com.id}>
                            <a href={'/post/'+com.id}>
                                <h2>{com.title}</h2>
                                <p>{com.body}</p> 
                            </a>
                        </div>
                    )
                })}
            </PostDiv>
            <MenuPosts>
            <button onClick={Back}>Anterios</button><h5>Pagina: {max/10}</h5><button onClick={Next}>Proxima</button>
            </MenuPosts>
        </div>
    )
}

export default PostsRender