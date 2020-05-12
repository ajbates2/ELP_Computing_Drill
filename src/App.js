import React, { Component } from 'react';
import './App.css';
import Features from './Features'
import Summary from './Summary'
import Total from './Total'

class App extends Component {

  static defaultProps = {
    features: []
  }

  constructor() {
    super()
    this.state = {
      selected: {
        Processor: {
          name: '',
          cost: ''
        },
        'Operating System': {
          name: '',
          cost: ''
        },
        'Video Card': {
          name: '',
          cost: ''
        },
        Display: {
          name: '',
          cost: ''
        }
      }
    }
  }

  handleState = (selected, featureName) => {
    this.setState({
      selected: { ...this.state.selected, [featureName]: selected }
    })
  }

  render() {
    const features = Object.keys(this.props.features)
    const selected = Object.keys(this.state.selected)

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            {features.map((feature, index) =>
              <Features
                key={index}
                featureTypeObject={this.props.features[feature]}
                featureName={feature}
                changeState={this.handleState} />
            )}
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            {selected.map((option, index) =>
              <Summary
                key={index}
                optionType={option}
                optionValue={this.state.selected[option]} />
            )}
            <Total
              processorCost={this.state.selected.Processor.cost}
              osCost={this.state.selected['Operating System'].cost}
              cardCost={this.state.selected['Video Card'].cost}
              displayCost={this.state.selected.Display.cost} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
