import React from "react";

import Header from "./Header";
import Footer from "./Footer"

export default class Layout extends React.Component {
  constructor(){
    super();
    this.state={
      greeting: "Welcome",
    };
  }

  changeGreeting (greeting){
    this.setState({greeting});
  }


  render() {

    return(
      <div>
        <Header changeGreeting={this.changeGreeting.bind(this)} greeting={this.state.greeting}/>
        <Footer />
      </div>
      );
  }
}

// import React from "react";

// import Footer from "./Footer";
// import Header from "./Header";

// export default class Layout extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       title: "Welcome",
//     };
//   }

//   changeTitle(title) {
//     this.setState({title});
//   }

//   render() {
//     return (
//       <div>
//         <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
//         <Footer />
//       </div>
//     );
//   }
// }
