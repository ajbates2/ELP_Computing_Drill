import React, { Component } from 'react';
import Options from './Options'
import Total from './Total'

class Summary extends Component {
    
    render() {
        const selected = Object.keys(this.props.currentState)

        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {selected.map((option, index) =>
                    <Options
                        key={index}
                        optionType={option}
                        optionValue={this.props.currentState[option]} />
                )}
                <Total
                    processorCost={this.props.processorCost}
                    osCost={this.props.osCost}
                    cardCost={this.props.cardCost}
                    displayCost={this.props.displayCost} />
            </section>
        );
    }
}

export default Summary