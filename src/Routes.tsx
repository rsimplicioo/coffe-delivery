import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { DefaultLayout } from "./Layouts/DefaultLayout";
import { CompleteOrder } from "./pages/CompleteOrder";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/completeOrder" element={<CompleteOrder />} />
      </Route>
    </Routes>
  );
}
