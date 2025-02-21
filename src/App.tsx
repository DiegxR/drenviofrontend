import { HeroUIProvider } from "@heroui/system";
import "./App.css";
import { Router } from "./modules/Router";

function App() {
  return (
    <HeroUIProvider>
      <Router />
    </HeroUIProvider>
  );
}

export default App;
