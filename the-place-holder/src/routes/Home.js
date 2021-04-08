import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Posts from '../services/Posts'

function Home() {
    return (
      <div>
        {Header('Home')}
        <Posts />
        {Footer('Home')}
      </div>
    );
}

export default Home;