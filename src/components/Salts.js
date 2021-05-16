import React, {Component} from 'react'

class Salts extends Component {

    constructor() {
        super();
        this.render = this.render.bind(this);
    }

    render() {
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
                    {Object.entries(this.props.weights).map(([name, weight], _)  =>
                        <tr key={name}>
                            <td>{name}</td>
                            <td>{weight}</td>
                        </tr>)}
                </table>
            </div>
        )
    }
}

export default Salts;
