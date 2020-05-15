import React, { Component } from 'react';
import Feature from './Feature'
import slugify from 'slugify'


class Features extends Component {
    render() {
        let featureTypeArray = this.props.featureTypeObject;
        return (
            <fieldset className="feature">
                <legend className="feature__name">
                    <h3>{this.props.featureName}</h3>
                </legend>
                {featureTypeArray.map((object, index) => {
                    return (
                        <Feature 
                        key={index}
                        featureName={object.name}
                        id={slugify(JSON.stringify(object))}
                        type={this.props.featureName}
                        cost={object.cost}
                        click={() =>
                        this.props.changeState(object, this.props.featureName)}
                         />
                    )
                })}
            </fieldset>
        )}
    }


export default Features