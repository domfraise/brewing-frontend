import React, {Component} from 'react'
import Salts from "./Salts";
import Ions from "./Ions";

class WaterProfile extends Component {

    constructor() {
        super();
        this.render = this.render.bind(this)
        this.setResult = this.setResult.bind(this)
        this.setDesired = this.setDesired.bind(this)
        this.state = {
            result: {
                ppms: {},
                weights: {}
            },
            ions: {
                0:{"ion": "cl", "desired": 212, "plusminus":10, "multiplyer": 1, "key": 0},
                1:{"ion": "s04", "desired": 212, "plusminus":10, "multiplyer": 1, "key": 1},
                2:{"ion": "ca", "desired": 212, "plusminus":10, "multiplyer": 1, "key": 2},
                3:{"ion": "mg", "desired": 212, "plusminus":10, "multiplyer": 1, "key": 3},
                4:{"ion": "na", "desired": 212, "plusminus":10, "multiplyer": 1, "key": 4},
                5:{"ion": "hc03", "desired": 212, "plusminus":10, "multiplyer": 1, "key": 5}
            }
        }
    }

    setResult(result) {
        this.setState({result: result})
    }

    setDesired(key, newvalue) {
        const currentState = this.state
        currentState.ions[key].desired = newvalue
        this.setState({currentState})
    }
    setPlusMinus(key, newvalue) {
        const currentState = this.state
        currentState.ions[key].plusminus = newvalue
        this.setState({currentState})
    }

    setMultiplyer(key, newvalue) {
        const currentState = this.state
        currentState.ions[key].multiplyer = newvalue
        this.setState({currentState})
    }

    render(){
        return (
            <section className="section columns">
                <Ions ions={this.state.ions}
                      ppms={this.state.result.ppms}
                      setResult={this.setResult}
                      setDesired={this.setDesired}
                      setPlusMinus={this.setPlusMinus}
                      setMultiplyer={this.setMultiplyer}
                />
                <Salts weights={this.state.result.weights}/>
            </section>
        )
    }
}



export default WaterProfile;