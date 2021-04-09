import Post from '../services/post'

const PostAlone=(param)=>{
    let post = Post();
    console.log('posts',post)
    let {id} = param;
    id = parseInt(id)
    console.log('id',id)
    console.log('post',post[id])
    //let {title}=post[id]
    //let {body}=post[id]
    /*return(
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )*/
}

export default PostAlone