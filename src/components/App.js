import {useState} from 'react';
import '../css/App.css';

function App() {
  const [result, setResult] = useState({ppms: {}, weights: {}})

  return (
    <div className="App">
    <head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <title>Brewing</title>
    </head>
      <h1 className="title mt-5"> Brewing - Salts </h1>
      <section className="section columns">
        <Ions ions={ions} ppms={result.ppms} setResult={setResult}/>
        <Salts salts={salts} weights={result.weights}/>
      </section>
    </div>
  );
}

const ions = [
  {"ion": "cl", "desired": 212, "plusminus":10, "multiplyer": 1, "actual": null},
  {"ion": "s04", "desired": 212, "plusminus":10, "multiplyer": 1, "actual": null},
  {"ion": "ca", "desired": 212, "plusminus":10, "multiplyer": 1, "actual": null},
  {"ion": "mg", "desired": 212, "plusminus":10, "multiplyer": 1, "actual": null},
  {"ion": "na", "desired": 212, "plusminus":10, "multiplyer": 1, "actual": null},
  {"ion": "hc03", "desired": 212, "plusminus":10, "multiplyer": 1, "actual": null}

]

const salts = [
  {"name": "CaCl2", "weight": 10}
]

function calculate (setResult){
  console.log("calculating")
  fetch("https://powerful-inlet-02477.herokuapp.com/calculate",
    {method: "POST",
    body: JSON.stringify(ions)})
    .then((response) => response.json())
    .then(setResult)


}

function Salts({weights}){
  return (
    <div className="column">
      <h2 className="subtitle mb-4"> Salts in 10L </h2>
        <table className="table card is-fullwidth">
          <th>
            Salt
          </th>
          <th>
            Weight(g)
          </th>
          {Object.entries(weights).map(([name, weight], _)  =>
            <tr>
              <td>{name}</td>
              <td>{weight}</td>
            </tr>)}
        </table>
    </div>
  )
}

function Ions({ions, setResult, ppms}) {
  return (
    <div className="column">
      <h2 className="subtitle mb-4">Ion Configuration</h2>
        <table className="table card is-fullwidth">
          <th>
            Ion
          </th>
          <th>
            Desired
          </th>
          <th>
            +/-
          </th>
          <th>
            multiplyer
          </th>
          <th>
            Actual
          </th>

          {ions.map(ion =>
            <tr>
              <td>{ion.ion}</td>
              <td> <input type="text" value={ion.desired}/> </td>
              <td> <input type="text" value={ion.plusminus}/> </td>
              <td> <input type="text" value={ion.multiplyer}/> </td>
              <td>{ppms[ion.ion]}</td>
            </tr>)}

        </table>
      <div className={"container"}>

      </div>
      <button className="button" onClick={() => calculate(setResult)}> Calculate </button>
    </div>
  )
}

export default App;
