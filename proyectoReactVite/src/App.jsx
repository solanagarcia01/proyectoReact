import './App.css'
import TwitterFollowCard from './TwitterFollowCard';

function App() {
  return (
      <section className="App">
      <TwitterFollowCard isFollowing= {true} userName="solanagarcia" name="Solana Garcia"/>
      <TwitterFollowCard isFollowing= {false} userName="pheralb" name="Pablo Hernandez"/>
      <TwitterFollowCard isFollowing userName="elonmusk" name ="Elon Musk"/>
      </section>    
  );
}

export default App;