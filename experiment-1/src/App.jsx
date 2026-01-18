import DashBoard from "./pages/DashBoard.jsx";
import Log from "./pages/Log.jsx";
// import useWindowState  from "./hooks/UseWindowState.jsx";

 

function App() {
  // const [width , height] = useWindowState;
  return (<>
    <DashBoard />
    <p>Welcome to EcoTrack!</p>
    {/* <p>{width}and {height}</p> */}
    <Log />
  </>
    
  )
}

export default App
