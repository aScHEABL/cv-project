import React, { Component } from "react";
import EditorSection from "./components/EditorSection";
import PreviewSetion from "./components/PreviewSection";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="grid grid-cols-[1fr_1fr] h-screen">
        <EditorSection />
        <PreviewSetion />
      </main>
    )
  }
}

export default App;