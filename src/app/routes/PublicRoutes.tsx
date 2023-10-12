import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Login from "../modules/auth/pages/login";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route path={"login"} element={<Login />} />
        <Route path={"registro"} element={<>register page it is</>} />
        <Route index element={<Login />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
