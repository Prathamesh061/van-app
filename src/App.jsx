import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vanLoader } from "./pages/vans/Vans";
import VanDetail, { loader as VanDetailLoader } from "./pages/vans/VanDetail";
import Dashboard from "./pages/Host/Dashboard";
import Reviews from "./pages/Host/Reviews";
import Income from "./pages/Host/Income";
import HostLayout from "./components/HostLayout";
import HostVans, { loader as hostVansLoader } from "./components/HostVans";
import HostVanDetail, {
  loader as HostVanDetailLoader,
} from "./components/HostVanDetail";
import Error from "./components/Error";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing";
import Login, {
  loader as loginLoader,
  action as actionLoader,
  action,
} from "./pages/Login";

import "../server";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import { requireAuth } from "../utils";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={actionLoader}
      />
      <Route
        path="vans"
        element={<Vans />}
        loader={vanLoader}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        element={<VanDetail />}
        loader={VanDetailLoader}
        errorElement={<Error />}
      />

      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async ({ request }) => {
            await requireAuth(request);
          }}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => {
            await requireAuth(request);
          }}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => {
            await requireAuth(request);
          }}
        />
        <Route
          path="vans"
          element={<HostVans />}
          loader={hostVansLoader}
          errorElement={<Error />}
        />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          errorElement={<Error />}
          loader={HostVanDetailLoader}
        >
          <Route index element={<HostVanInfo />} errorElement={<Error />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
export default function App() {
  return <RouterProvider router={router} />;
}
