import React, { Component } from "react";
import EditorSection from "./components/EditorSection";
import PreviewSetion from "./components/PreviewSection";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="px-10 py-5 bg-black grid gap-52 grid-cols-[0.7fr_1fr] h-screen">
        <EditorSection />
        <PreviewSetion />
      </main>
    )
  }
}

export default App;