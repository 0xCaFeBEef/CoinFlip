import "./styles.css";
import CoinContainer from "./CoinContainer";

export default function App() {
  return (
    <div className="App">
      <h1>Let's flip a coin</h1>
      {/* <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg" /> */}
      <CoinContainer />
    </div>
  );
}
