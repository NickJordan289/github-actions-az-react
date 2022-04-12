import {useParams } from "react-router-dom";
import { getRegistration } from "./data";

export default function Registration() {
  let params = useParams();
  let reg = getRegistration(parseInt(params.id,10));
  return (
    <p>{reg.name}</p>
  );
}