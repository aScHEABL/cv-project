import React, { Component } from "react";
import EditorSection from "./components/EditorSection";
import PreviewSetion from "./components/PreviewSection";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="px-10 py-5 bg-black flex justify-between items-start h-max gap-32">
        <EditorSection />
        <PreviewSetion />
        <div className="flex-1"></div>
      </main>
    )
  }
}

export default App;