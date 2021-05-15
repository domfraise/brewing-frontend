import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState({ppms: {}, weights: {}})

  useEffect(() => console.log(result), [])

  return (
    <div className="App">
    <head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <title>Brewing</title>
    </head>
      <h1 class="title mt-5"> Brewing - Salts </h1>
      <div className={"level"}>
        <Ions ions={ions} ppms={result.ppms} setResult={setResult}/>
        <Salts salts={salts} weights={result.weights}/>
      </div>
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
  let response =  fetch("https://powerful-inlet-02477.herokuapp.com/calculate",
    {method: "POST",
    headers: {
      // 'Content-Type': 'application/json'
    },
    body: JSON.stringify(ions)})
    .then((response) => response.json())
    .then(setResult)


}

function Salts({salts, weights}){
  return (
    <section className="section level-item">
      <h2 class="subtitle mb-4"> Salts in 10L </h2>
        <table class="table card is-fullwidth">
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

    </section>
  )
}

function Ions({ions, setResult, ppms}) {
  return (
    <section class="section level-item">
      <h2 class="subtitle mb-4">Ion Configuration</h2>
        <table class="table card is-fullwidth">
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
      <button class="button" onClick={() => calculate(setResult)}> Calculate </button>
    </section>
  )
}

export default App;
