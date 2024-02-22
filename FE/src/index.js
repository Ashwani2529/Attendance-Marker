import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Qrs from './qrcodes';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Card from './card';
import MarkAttend from './markAttend';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element:  <App/> ,
  },
  {
    path: "/mark-attend",
    element:  <MarkAttend/> ,
  },
  {
    path: "/user/:enroll",
    element:  <Card/> ,
  },
  {
    path: "/all-qrs",
    element:  <Qrs/> ,
  },
]);
// import "@fortawesome/fontawesome-free/css/all.min.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
