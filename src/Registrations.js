import {getRegistrations} from './data';
import { NavLink, Outlet, useSearchParams } from "react-router-dom";

export default function Registrations() { 
  let registrations = getRegistrations();
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="Registrations">
      <h1>Registrations</h1>
      <nav>

      <input value={searchParams.get("filter") || ""}
      onChange = {(event) => {
        let filter = event.target.value;
        if (filter) {
          setSearchParams({filter: filter});
        } else {
          setSearchParams({});
        }
      }}/>

      {registrations.filter((registration) => {
        let filter = searchParams.get("filter");
        if(!filter) return true;
        let name = registration.name.toLowerCase();
        return name.startsWith(filter.toLowerCase());
      }).map((reg) => (
        <NavLink style={({isActive}) => {
          return {
            display: "block",
            padding: "10px",
            background: isActive ? "lightblue" : "white",
            textDecoration: "none",
            color: "black",
            borderBottom: "1px solid black",
            textAlign: "center",
            width: "100%",
            textTransform: "uppercase",
            fontSize: "1.2em",
            fontWeight: "bold",
          }
        }} to={`/registrations/${reg.id}`} key={reg.id}>{reg.name}</NavLink>
      ))}
      </nav>
      <Outlet />
    </div>
  );
}