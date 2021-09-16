import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useHistory } from "react-router";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, [history]);
  return (
    <>
      <Toaster />
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
