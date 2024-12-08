import React from "react";

class Timer extends React.Component {
  // The constructor method is used to initialize the state and bind methods.
  constructor(props) {
    // super(props) is necessary to call the constructor of the parent class (React.Component).
    // It allows access to `this.props` and ensures proper inheritance behavior.
    super(props);

    // Initializing the state with the current date and time
    this.state = { data: new Date() };
  }

  // Lifecycle method called after the component is mounted in the DOM
  componentDidMount() {
    // Setting up a timer that updates the state every second
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  // Lifecycle method called just before the component is removed from the DOM
  componentWillUnmount() {
    // Clearing the timer to prevent memory leaks
    clearInterval(this.timerId);
  }

  // Method to update the state with the current date and time
  tick() {
    this.setState({ data: new Date() });
  }

  render() {
    return (
      <div id="main">
        <h1>Class Based Component</h1>
        {/* Displaying the current time */}
        <div>{this.state.data.toLocaleTimeString()}</div>
      </div>
    );
  }
}

export default Timer;


// Constructor:

// The constructor is a special method in JavaScript classes used to initialize an object when it is created.
// In React, the constructor is used to:
// Initialize the component's state.
// Bind event handlers (though this is not done here because arrow functions are used in setInterval).
// super(props):

// This is required when using a constructor in a class component that extends another class (in this case, React.Component).
// It calls the parent class's constructor method and allows you to access this.props inside the constructor.
// Without calling super(props), you would encounter an error because this would not be initialized properly.
// Why They're Necessary:
// Without the constructor and super, the component cannot initialize its state properly in the class-based approach.
// super ensures that the base class (React.Component) behaves as expected, enabling inheritance and proper usage of this within the component.
