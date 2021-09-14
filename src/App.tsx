import { Toaster } from "react-hot-toast";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {

  return (
    <>
      <Toaster />
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
