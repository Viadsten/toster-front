import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import routes from "@/routes";
import App from "@/App";
import "@/global";
import Home from "./pages";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { NotFound } from "./pages/NotFound";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { store } from "./shared/store";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { NoAuthRoute } from "./components/NoAuthRoute";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./shared/styles/index.css";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <NextUIProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<NoAuthRoute />}>
            <Route path="sign-in" index element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
    <ToastContainer />
  </Provider>,
);
