import Joker from '../components/JokeGenerator';

function Home() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Welcome to Funny Bones!</h1>
      <div>
        <Joker />
      </div>
    </div>
  );
}

export default Home;
