import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Login from "../modules/auth/pages/login";
import Register from "../modules/auth/pages/register";

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
        <Route path={"cadastro"} element={<Register />} />
        <Route index element={<Login />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
