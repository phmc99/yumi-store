import { Toaster } from "react-hot-toast";
import InfoClient from "./components/InfoClient";
import { CepCard } from "./components/CepSearch";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {

  return (
    <>
      <Toaster />
      <Routes />
      <GlobalStyle />
       {/* <CepCard /> */}
       {/* <InfoClient /> */}
     
    </>
  );
}

export default App;
