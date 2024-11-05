import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data-with-examples";
import Header from "./Components/Headers";
import CoreConcepts from "./Components/CoreConcepts";
import TabButton from "./Components/TabButton";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState(null);
  function handleSelect(value) {
    setSelected(value);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((data, index) => (
              <CoreConcepts key={index} {...data} />
            ))}
            {/* <CoreConcepts data={CORE_CONCEPTS[0]} />
            <CoreConcepts data={CORE_CONCEPTS[1]} />
            <CoreConcepts data={CORE_CONCEPTS[2]} />
            <CoreConcepts data={CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selected === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selected === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selected === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selected === "state"}
              onSelect={() => handleSelect("state")}
            >
              States
            </TabButton>
          </menu>
          {!selected && <p>Please select a topic</p>}
          {selected && (
            <div id="tab-content">
              <h3>{EXAMPLES[selected].title}</h3>
              <p>{EXAMPLES[selected].description}</p>
              <pre>
                <code>{EXAMPLES[selected].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
