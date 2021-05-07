import { useEffect, useState } from 'react'
import {Post, Posts} from '../services/post'
import {PostDiv, PostHDiv} from '../styles/postsStyle'

const PostsRender=()=>{
    const [srcText, setSrc]=useState('');
    const [posts, setposts]=useState([{title:'', body:''}])
    const originalposts= Posts()

    //Define posts após a atualização de originalposts
    useEffect(()=>{setposts(originalposts)},[originalposts])
   
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
        setposts(originalposts)
    }

    return(
        <div>
            <PostHDiv>
                <h1>Postagens recentes</h1>
                <form onSubmit={Search}>
                    <input type='text' value={srcText} onChange={Change}></input>
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
        </div>
    )
}

export default PostsRender