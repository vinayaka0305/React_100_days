import React from "react";

class CounterClass extends React.Component {
  // Constructor method for initializing state and binding methods
  constructor(props) {
    super(props); // Calls the parent class (React.Component) constructor
    this.state = { count: 0 }; // Initializing state with a `count` property

    // Binding the `increase` method to ensure correct `this` context
    this.increase = this.increase.bind(this);
  }

  // Method to handle incrementing the count
  increase() {
    // Updates the `count` in state by incrementing it by 1
    this.setState({ count: this.state.count + 1 });
  }

  // Render method to display the component's UI
  render() {
    return (
      <div id="main">
        {/* Display the current count */}
        <h2>Count: {this.state.count}</h2>
        
        {/* Button to trigger the `increase` method when clicked */}
        <button onClick={this.increase}>Increment</button>
      </div>
    );
  }
}

export default CounterClass;
