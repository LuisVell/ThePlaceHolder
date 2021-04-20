

const PostAlone=(param)=>{
    let {id}=param
    console.log(id)

    //const post=Post(id);
    //console.log(post[id]);

    let title ="null";//Post[id].title
    let body ="null";//Post[id].body

    return(
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )
}

export default PostAlone