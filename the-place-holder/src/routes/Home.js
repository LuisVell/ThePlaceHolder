import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import PostsRender from '../components/posts'

function Home() {
    return (
      <div>
        {Header('Home')}
        <PostsRender />
        {Footer('Home')}
      </div>
    );
}

export default Home;