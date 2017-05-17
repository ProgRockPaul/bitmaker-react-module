// bring in React and Component from React

import React, {Component} from 'react'; //This imports React methods and the Component class from the React library.



// define our Hello component
class Hello extends Component { //This is the component we're creating. In this example, we are creating a "Hello" component. Component is the React library class we inherit from to create our component definitions. Here, we are creating a new Component subclass called Hello. Because it "extends" or "inherits from" Component, our Hello class gets to reuse code and capabilities from React.Component.




  // what should the component render?
  render () {
    // make sure to return some UI
    return (
    <div>
      <h1>It is time for tea.</h1>
    </div>
    )
  }
}

export default Hello
