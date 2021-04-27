import {Posts, Post} from '../services/post'
import Image from '../services/images'
import PostStyle from '../styles/onlypostStyle'

const PostAlone=(param)=>{
    let id = parseInt(param.id);
    const post = Post(id)

    //Encher post.body com mais texto
    let body=post.body;
    for(let i=0;i<10;i++){
        body+=post.body;
    }
    
    return(
        <PostStyle>
            <h2>{post.title}</h2>
            <p>{body}</p>
            {Image(500,500,30)}
        </PostStyle>
    )
}

export default PostAlone