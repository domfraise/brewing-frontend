import React, {Component} from 'react'
import Salts from "./Salts";
import Ions from "./Ions";

class WaterProfile extends Component {

    constructor() {
        super();
        this.render = this.render.bind(this)
        this.setResult = this.setResult.bind(this)
        this.state = {
            result: {
                ppms: {},
                weights: {}
            },
            ions: [
                {"ion": "cl", "desired": 212, "plusminus":10, "multiplyer": 1, "actual": null},
                {"ion": "s04", "desired": 212, "plusminus":10, "multiplyer": 1, "actual": null},
                {"ion": "ca", "desired": 212, "plusminus":10, "multiplyer": 1, "actual": null},
                {"ion": "mg", "desired": 212, "plusminus":10, "multiplyer": 1, "actual": null},
                {"ion": "na", "desired": 212, "plusminus":10, "multiplyer": 1, "actual": null},
                {"ion": "hc03", "desired": 212, "plusminus":10, "multiplyer": 1, "actual": null}

            ]
        }
    }

    setResult(result) {
        this.setState({result: result})
    }

    render(){
        return (
            <section className="section columns">
                <Ions ions={this.state.ions} ppms={this.state.result.ppms} setResult={this.setResult}/>
                <Salts weights={this.state.result.weights}/>
            </section>
        )
    }
}



export default WaterProfile;