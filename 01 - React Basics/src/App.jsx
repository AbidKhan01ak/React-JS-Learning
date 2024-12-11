import React, { useState } from "react";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  const [selectTopic, setSelectedTopic] = useState("");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic</p>;
  if (selectTopic && EXAMPLES[selectTopic]) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectTopic].title}</h3>
        <p>{EXAMPLES[selectTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectTopic].code}</code>
        </pre>
      </div>
    );
  } else if (selectTopic) {
    tabContent = <p>Content for the selected topic is unavailable.</p>;
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectTopic === "variables"}
              onSelect={() => handleSelect("variables")}
            >
              Variables
            </TabButton>
            <TabButton
              isSelected={selectTopic === "controlFlow"}
              onSelect={() => handleSelect("controlFlow")}
            >
              Control Flow
            </TabButton>
            <TabButton
              isSelected={selectTopic === "functions"}
              onSelect={() => handleSelect("functions")}
            >
              Functions
            </TabButton>
            <TabButton
              isSelected={selectTopic === "dataStructures"}
              onSelect={() => handleSelect("dataStructures")}
            >
              Data Structures
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;