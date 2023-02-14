import React, { Component } from "react";
import EditorSection from "./components/EditorSection";
import PreviewSetion from "./components/PreviewSection";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      PD: {
        firstName: '',
        lastName: '',
        address: '',
        website: '',
        email: '',
        phoneNumber: '',
        intro: '',
      },

    }

    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(e) {

  }

  render() {
    return (
      <main className="px-10 py-5 bg-black flex justify-between items-start h-max gap-32">
        <EditorSection context={this.state} />
        <PreviewSetion context={this.state} />
        <div className="flex-1"></div>
      </main>
    )
  }
}

export default App;