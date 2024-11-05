import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data-with-examples";
import Header from "./Components/Headers";
import CoreConcepts from "./Components/CoreConcepts";
import TabButton from "./Components/TabButton";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("please click on button");
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
            {CORE_CONCEPTS.map((data) => (
              <CoreConcepts {...data} />
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
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>States</TabButton>
          </menu>
          {selected}
        </section>
      </main>
    </div>
  );
}

export default App;
