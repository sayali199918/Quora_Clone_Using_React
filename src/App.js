import React from "react";
import "./App.css";
import Quora from "./component/Quora";

import { BrowserRouter, Route, Link, Redirect} from "react-router-dom";
import Navbar from "./component/Navbar";
import QuoraAnswer from "./component/QuoraAnswer";

function App() {
  return (
    <div className="App">
      {/* <Quora /> */}
      {/* <MyCompoenent /> */}
      <Navbar />

      <BrowserRouter>
        <Link to="/QuoraAnswer">Quora</Link>
          {/* <NavMenu /> */}
          
            {/* <Route exact={true} path="/component/Answer" component={AssignmentTurnedInOutlinedIcon} /> */}

            <Route exact={true} path="/" component={Quora} />
            <Route exact={true} path="/QuoraAnswer" component={QuoraAnswer} />

            
            
          
        </BrowserRouter>
      
    </div>
  );
}

// function NavMenu() {
//   return (
//     <div className="navbar navbar-expand-lg navbar-dark bg-dark text-light d-flex justify-content-center">
//       <Link
//         to="/component/Answer"
//         className="text-light px-5 font-weight-bold text-decoration-none"
//       >
//         {" "}
//         Answer{" "}
//       </Link>
//     </div>
//   );
// }

export default App;
