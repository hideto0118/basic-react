import React from "react";

import Title from "./Header/Title"

export default class Header extends React.Component {
  handleChange(e){
    const greeting = e.target.value;
    this.props.changeGreeting(greeting);
  }

  render() {
    return (
      <div>
        <Title greeting={this.props.greeting} />
        <input value={this.props.greeting} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}


// import React from "react";

// import Title from "./Header/Title";

// export default class Header extends React.Component {
//   handleChange(e) {
//     const title = e.target.value;
//     this.props.changeTitle(title);
//   }

//   render() {
//     return (
//       <div>
//         <Title title={this.props.title} />
//         <input value={this.props.title} onChange={this.handleChange.bind(this)} />
//       </div>
//     );
//   }
// }
