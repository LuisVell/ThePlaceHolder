import Posts from '../services/post'
import PostDiv from '../styles/postsStyle'

const PostsRender=()=>{
    const allPosts=Posts()
    return(
        <div>
            <h1>Postagens recentes</h1>
           <PostDiv>  
                {allPosts.map((com)=>{
                    return(
                        <div key={com.id}>
                            <h2><a href={'/post/'+com.id}>{com.title}</a></h2>
                            <p>{com.body}</p> 
                        </div>
                    )
                })}
            </PostDiv>
        </div>
    )
}

export default PostsRender