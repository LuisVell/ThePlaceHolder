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

const Post=(id)=>{
    const [post, setPost]=useState({})
    useEffect(()=>{
        const getPost = async (id)=>{
            const {data:post} = await axios.get('http://jsonplaceholder.typicode.com/posts/'+id)
            setPost(post)
        }
        getPost(id);
    },[])
    return post
}


export {Posts, Post};