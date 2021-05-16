import '../css/App.css';
import WaterProfile from "./WaterProfile";

function App() {
  return (
    <div className="App">
    <head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <title>Brewing</title>
    </head>
      <h1 className="title mt-5"> Brewing - Salts </h1>

      <WaterProfile/>
    </div>
  );
}

export default App;
