import {Posts, Post} from '../services/post'
import Image from '../services/images'

const PostAlone=(param)=>{
    let id = parseInt(param.id);
    const post = Post(id)
    
    return(
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
           {Image(500,500)}
        </div>
    )
}

export default PostAlone