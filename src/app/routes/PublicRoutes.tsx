import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            auth page content
            <Outlet />
          </>
        }
      >
        <Route path={"login"} element={<>login page it is</>} />
        <Route path={"register"} element={<>register page it is</>} />
        <Route index element={<>login page it is</>} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
