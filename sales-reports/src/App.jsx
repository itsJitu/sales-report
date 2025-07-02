
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import FinancialReport from "./components/FinancialReport";
import PurchaseReport from "./components/PurchaseReport";
import ReturnDamagereport from "./components/ReturnDamagesreport";
import SalesReport from "./components/Salesreport";
import StockMovementsreport from "./components/StockMovementsReport";
import StockReports from "./components/StockReport";
import First from "./components/First";


const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,

    children: [
      {
        index: true,
        element: <StockReports />,
      },
      {
        path: "/StockMovementsReport",
        element: <StockMovementsreport />,
      },
      {
        path: "/salesReport",
        element: <SalesReport />,
      },
      {
        path: "/PurchaseReport",
        element: <PurchaseReport />,
      },
      {
        path: "/ReturnDamagesreport",
        element: <ReturnDamagereport />,
      },
      {
        path: "/FinancialReport",
        element: <FinancialReport />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
