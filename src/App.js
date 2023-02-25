import React from "react";
import EditorSection from "./components/EditorSection";
import PreviewSetion from "./components/PreviewSection";

const App = () => {
  return (
    <main className="px-10 py-5 bg-black flex justify-between items-start h-max gap-32">
      <EditorSection />
      <PreviewSetion />
      <div className="flex-1"></div>
    </main>
  )
}

export default App;