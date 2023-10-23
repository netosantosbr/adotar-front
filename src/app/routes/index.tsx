import React from "react";
import PublicRoutes from "./PublicRoutes";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import App from "../App";
import { useAppSelector } from "../hook/redux/useRedux";

const Router = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='error/*' element={<>error page</>} />
          <Route path='logout' element={<>logout</>} />

          {user ? (
            <>
              <Route path='/*' element={<PrivateRoutes />} />
              <Route index element={<Navigate to='/dashboard' />} />
            </>
          ) : (
            <>
              <Route path='auth/*' element={<PublicRoutes />} />
              <Route path='*' element={<Navigate to='/auth' />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
