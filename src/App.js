import { useMediaQuery } from "react-responsive";
import Desktop from "./sites/Desktop";
import Tablet from "./sites/Tablet";
import Mobile from "./sites/Mobile";

function App() {
  const isMobile = useMediaQuery({
    query: "(max-width: 786px)"
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1224px)"
  });

  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)"
  });

  
  return (
    <div className="App">
      {
        //If screen is mobile, show mobile
        isMobile ? 
        <Mobile /> :

        //If screen is tablet, show tablet
        isTablet ? 
        <Tablet /> :

        //Else show desktop
        <Desktop />
      }
    </div>
  );
}

export default App;
