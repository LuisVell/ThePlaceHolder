import Header from '../components/header.js'
import Posts from '../services/posts'

function Home() {
    return (
      <div>
        {Header('Home')}
        <Posts />
      </div>
    );
}

export default Home;