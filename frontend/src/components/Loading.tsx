import { Spinner } from "react-bootstrap";

export function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
      <Spinner animation="border" />
    </div>
  );
}