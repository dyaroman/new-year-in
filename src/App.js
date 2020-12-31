import "./App.scss";
import SevenSegment from "./components/SevenSegment/SevenSegment";

function App() {
  return (
    <div className="App">
      <SevenSegment digit={4} />
      <SevenSegment digit={2} />
    </div>
  );
}

export default App;
