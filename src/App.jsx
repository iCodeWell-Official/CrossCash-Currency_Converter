import "./App.css";
import CurrencyConverter from "./components/CurrencyConverter";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="min-h-screen bg-[url('/img/bg.webp')] bg-cover flex flex-col items-center justify-center">
      <Logo />
      <div className="container">
        <CurrencyConverter />
      </div>
    </div>
  );
}

export default App;
