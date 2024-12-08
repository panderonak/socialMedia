import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  HomePage,
  SignUpPage,
  LogInPage,
  ProfilePage,
  UserDetailPage,
} from "./pages/index.js";
import userProfileManagement from "./freeAPI/profile.js";
import { AuthLayout } from "./components/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route
        // loader={}
        path="profile"
        element={
          <AuthLayout authentication={true}>
            <ProfilePage />
          </AuthLayout>
        }
      />
      {/* <Route path="personal-detail" element={<PersonalDetailPage />} /> */}
      <Route
        path="sign-up"
        element={
          <AuthLayout authentication={false}>
            <SignUpPage />
          </AuthLayout>
        }
      />
      <Route
        path="log-in"
        element={
          <AuthLayout authentication={false}>
            <LogInPage />
          </AuthLayout>
        }
      />
      <Route
        path="user-detail"
        element={
          <AuthLayout authentication={true}>
            <UserDetailPage />
          </AuthLayout>
        }
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
);
