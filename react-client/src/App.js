import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Controller from "./components/Controller";
import backgroundImage from './background.png';

function App() {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        display: 'flex',
        height: '100vh',
        backgroundPosition: 'center',
    };

  return (
    <div className="App" style={backgroundStyle}>
        <Controller />
    </div>
  );
}

export default App;
