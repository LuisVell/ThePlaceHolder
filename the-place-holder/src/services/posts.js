import axios from 'axios'
import { useEffect, useState } from 'react'

import PostDiv from '../styles/postsStyle'

const Posts=()=>{
    const [posts, setPosts]=useState([])

    useEffect(()=>{
        const getPost = async ()=>{
            const {data:posts} = await axios.get('http://jsonplaceholder.typicode.com/posts')
            setPosts(posts)
            console.log("executado")
        }
        getPost();
    },[])
    return(
        <div>
           <h1>Postagens recentes</h1>
           <PostDiv>
                {posts.map((com)=>{
                    return(
                        <div key={com.id}>
                            <h2>{com.title}</h2>
                            <p>{com.body}</p> 
                        </div>
                    )
                })}
            </PostDiv>
        </div>
    )
}

export default Posts;