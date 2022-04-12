
import { Outlet,Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
      <Link to="/registrations">Registrations</Link> | {""}
      <Link to="/">Home</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
