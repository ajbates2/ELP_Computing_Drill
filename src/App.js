import React, { Component } from 'react';
import './App.css';
import Features from './Features'
import Summary from './Summary'
import STORE from './STORE'


class App extends Component {

  static defaultProps = {
    features: STORE
  }

  constructor(props) {
    super(props)
    this.state = {
      selected: {
        Processor: {
          name: '',
          cost: 0
        },
        'Operating System': {
          name: '',
          cost: 0
        },
        'Video Card': {
          name: '',
          cost: 0
        },
        Display: {
          name: '',
          cost: 0
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
            <Summary
              currentState={this.state.selected}
              processorCost={this.state.selected.Processor.cost}
              osCost={this.state.selected['Operating System'].cost}
              cardCost={this.state.selected['Video Card'].cost}
              displayCost={this.state.selected.Display.cost} />
        </main>
      </div>
    );
  }
}

export default App;
