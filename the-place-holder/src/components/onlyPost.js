import Posts from '../services/post'

const PostAlone=(param)=>{
    let id = param.id;
    const allPosts=Posts()
    
    return(
        <div>
                {allPosts.map((com)=>{
                    if(com.id==id){
                        return(
                            <div>
                                    <h2>{com.title}</h2>
                                    <p>{com.body}</p> 
                            </div>
                        )
                    }else{
                        return(null)
                    }
                })}
        </div>
    )
}

export default PostAlone