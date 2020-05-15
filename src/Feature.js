import React, { Component } from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class Feature extends Component {

    render() {
        return (
            <div className="feature__item">
                <input
                    type="radio"
                    id={this.props.id}
                    className="feature__option"
                    name={this.props.type}
                    onClick={this.props.click}
                />
                <label
                    htmlFor={this.props.id}
                    className="feature__label">
                    {this.props.featureName} | {USCurrencyFormat.format(this.props.cost)}
            </label>
            </div>
        )
    }
}

export default Feature