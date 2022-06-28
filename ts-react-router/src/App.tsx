import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Page404 } from "./pages";

import routes from "./router";

const App = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<></>}>
        <Routes>
          {routes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              element={
                <route.layout>
                  <route.component />
                </route.layout>
              }
            />
          ))}
          <Route element={<Page404 />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
