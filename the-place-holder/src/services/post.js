import axios from 'axios'
import { useEffect, useState } from 'react'


const Post=()=>{
    const [posts, setPosts]=useState([])

    useEffect(()=>{
        const getPost = async ()=>{
            const {data:posts} = await axios.get('http://jsonplaceholder.typicode.com/posts')
            setPosts(posts)
            console.log("executado")
        }
        getPost();
    },[])
    return posts
}

export default Post;