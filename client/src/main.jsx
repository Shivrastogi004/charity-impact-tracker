import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter } from 'react-router-dom';
import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<div className="text-2xl font-bold bg-red-500 text-white">Oops! Page not found</div>,
  },
  
]);

ReactDOM.render(
  <TransactionsProvider>
    <App/>
  </TransactionsProvider>,
  document.getElementById("root"),
);
