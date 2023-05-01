import { Outlet } from "react-router-dom";

export const AuthRoutes = () => {
  return (
    <>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};