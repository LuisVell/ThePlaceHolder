import axios from 'axios'
import { useEffect, useState } from 'react'


const Posts=()=>{
    const [posts, setPosts]=useState([])

    useEffect(()=>{
        const getPosts = async ()=>{
            const {data:posts} = await axios.get('http://jsonplaceholder.typicode.com/posts/')
            setPosts(posts)
        }
        getPosts();
    },[])
    return posts
}

export default Posts;