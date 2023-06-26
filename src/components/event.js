import { useParams, Outlet } from "react-router-dom";

function Event() {
  return (
    <div>
      <h2>Event</h2>
      <Outlet />
    </div>
  );
}

export default Event;
