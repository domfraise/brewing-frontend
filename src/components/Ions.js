import React, {Component} from 'react'

class Ions extends Component {
    constructor() {
        super();
        this.render = this.render.bind(this)
        this.calculate = this.calculate.bind(this)
    }

    calculate (setResult){
        console.log("calculating")
        fetch("https://powerful-inlet-02477.herokuapp.com/calculate",
            {method: "POST",
                body: JSON.stringify(Object.values(this.props.ions))})
            .then((response) => response.json())
            .then((response) => setResult(response))
            .catch((e) => console.log(e))

    }

    render() {
        return (
            <div className="column">
            <h2 className="subtitle mb-4">Ion Configuration</h2>
            <table className="table card is-fullwidth">
                <thead>
                    <tr>
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
                    </tr>
                </thead>
                <tbody>
                {Object.values(this.props.ions).map(ion =>
                    <tr key={ion.key}>
                        <td>{ion.ion}</td>
                        <td> <input type="text"
                                    value={ion.desired}
                                    onChange={(e) => this.props.setDesired(ion.key, e.target.value)}
                        /> </td>
                        <td> <input type="text"
                                    value={ion.plusminus}
                                    onChange={(e) => this.props.setPlusMinus(ion.key, e.target.value)}
                        /> </td>
                        <td> <input type="text"
                                    value={ion.multiplyer}
                                    onChange={(e) => this.props.setMultiplyer(ion.key, e.target.value)}


                        /> </td>
                        <td>{this.props.ppms[ion.ion]}</td>
                    </tr>)}

                </tbody>


            </table>
            <button className="button" onClick={() => this.calculate(this.props.setResult)}> Calculate </button>
        </div>
        )
    }
}

export default Ions