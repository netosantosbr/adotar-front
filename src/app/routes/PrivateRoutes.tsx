import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path={"/*"} element={<Navigate to={"/pets"} />} />
      <Route path={"/pets/*"} element={<>pets list</>}></Route>
    </Routes>
  );
};

export default PrivateRoutes;
