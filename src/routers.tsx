import { createBrowserRouter } from "react-router-dom"
import App from './App';
import CreateTranscriptForm from "./containers/CreateTranscriptForm";
import Home from "./containers/Home";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "create-transcript",
        element: <CreateTranscriptForm />,
      },
    ],
  },
]);