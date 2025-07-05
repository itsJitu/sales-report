import React, { useState, useEffect } from "react";
import { IoFilterOutline } from "react-icons/io5";
import "./StockMovement.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

const stockData = [
  { date: "12 Jun", stockIn: 180, stockOut: 260 },
  { date: "13 Jun", stockIn: 80, stockOut: 110 },
  { date: "14 Jun", stockIn: 420, stockOut: 230 },
  { date: "15 Jun", stockIn: 340, stockOut: 300 },
  { date: "16 Jun", stockIn: 290, stockOut: 350 },
  { date: "17 Jun", stockIn: 150, stockOut: 310 },
  { date: "18 Jun", stockIn: 360, stockOut: 390 },
];

const dummyData = [
  {
    id: 1,
    Date: "26/06/2025",
    productName: "Lenovo",
    From: "--",
    To: "WH 03",
    quantity: "987 KG",
    Transfervalue: "48966",
  },
  {
    id: 2,
    Date: "26/06/2025",
    productName: "Lenovo",
    From: "--",
    To: "WH 03",
    quantity: "987 KG",
    Transfervalue: "48966",
  },
  {
    id: 3,
    Date: "26/06/2025",
    productName: "Lenovo",
    From: "--",
    To: "WH 03",
    quantity: "987 KG",
    Transfervalue: "48966",
  },
  {
    id: 4,
    Date: "26/06/2025",
    productName: "Lenovo",
    From: "--",
    To: "WH 03",
    quantity: "987 KG",
    Transfervalue: "48966",
  },
];

function StockMovementsReport() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(dummyData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = dummyData.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      <div className="container">
        <div className="header">
          {/* search-bar */}
          <div className="search">
            <input
              type="Search"
              placeholder="Search items here..."
              className="search-bar"
            />
            <IoFilterOutline />
          </div>

          {/* Sorting & input */}
          <div className="select">
            <select className="sort">
              <option>Last 7 Days</option>
            </select>
          </div>
        </div>

        {/* Bar Chart Container */}
        <div
          style={{
            backgroundColor: "#f9fafb",
            borderRadius: "12px",
            padding: "20px",
            width: "100%",
            maxWidth: "800px",
            margin: "20px 0px",
          }}
        >
          {/* Top: Title + Custom Legend */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <div style={{ fontWeight: "600", fontSize: "16px" }}>
              Stock Activity
            </div>

            {/* stock In */}
            <div
              style={{
                display: "flex",
                gap: "15px",
                fontSize: "14px",
                alignItems: "center",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                {/* square */}
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: "#81BDFF",
                  }}
                ></div>

                <span>Stock In</span>
              </div>

              {/* Stock Out */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  marginRight: "30px",
                }}
              >
                {/* square */}
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: "#007AFF",
                  }}
                ></div>

                <span>Stock Out</span>
              </div>
            </div>
          </div>

          {/* Bar Chart */}
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={stockData}
              margin={{ top: 10, right: 30, left: 10, bottom: 30 }}
            >
              {/* Solid grid lines */}
              <CartesianGrid stroke="#e0e0e0" vertical={false} />

              <XAxis dataKey="date" tick={{ fontSize: 12 }}>
                <Label
                  value="Days"
                  offset={-10}
                  position="insideBottom"
                  style={{ fontWeight: "bold" }}
                />
              </XAxis>

              <YAxis
                tick={{ fontSize: 12 }}
                domain={[0, 500]}
                ticks={[0, 100, 200, 300, 400, 500]}
              >
                <Label
                  value="No. of Units"
                  angle={-90}
                  position="insideLeft"
                  offset={12}
                  style={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                    textAnchor: "middle",
                  }}
                />
              </YAxis>

              <Bar
                dataKey="stockIn"
                fill="#81BDFF"
                radius={[4, 4, 0, 0]}
                name="Stock In"
                barSize={25}
              />
              <Bar
                dataKey="stockOut"
                fill="#1e90ff"
                radius={[4, 4, 0, 0]}
                name="Stock Out"
                barSize={25}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div>Transfer Report</div>

        {/* table data */}

        <div className="table-div">
          <table>
            <thead>
              <tr className="table-stock">
                <th className="checkbox-header"></th> {/* visually blank */}
                <th>Date</th>
                <th style={{ width: "50%" }}>Product Name & SKU</th>
                <th>From</th>
                <th>To</th>
                <th>Quantity(Unit)</th>
                <th>Transfer Value</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((item) => (
                <tr className="table-transfer" key={item.id}>
                  <td className="checkbox-cell">
                    <input type="checkbox" />
                  </td>
                  <td>{item.Date}</td>
                  <td>{item.productName}</td>
                  <td>{item.From}</td>
                  <td>{item.To}</td>
                  <td>{item.quantity}</td>
                  <td>{item.Transfervalue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* pagination */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            background: "white",
            padding: "15px 25px",
          }}
        >
          {/* Left Side: Per Page Selector */}
          <div
            className="foot"
            style={{ display: "flex", gap: "10px", alignItems: "center" }}
          >
            <span style={{ color: "#6B7280" }}>Result Per Page</span>
            <select
              className="page-border"
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1); // Reset to first page when changing limit
              }}
            >
              <option value={3} className="pageNo">
                3
              </option>
            </select>
          </div>

          {/* Right Side: Pagination Buttons */}
          <div className="footer-button">
            {/* Previous Button */}
            <button
              className="button"
              onClick={handlePrevious}
              disabled={currentPage === 1}
              style={{
                borderTopLeftRadius: "8px",
                borderBottomLeftRadius: "8px",
              }}
            >
              Previous
            </button>

            {/* Page - 1 */}
            {currentPage > 1 && (
              <button
                className="button"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                {String(currentPage - 1).padStart(2, "0")}
              </button>
            )}

            {/* Current Page */}
            <button
              className="button"
              disabled
              style={{
                backgroundColor: "#007AFF",
                color: "white",
              }}
            >
              {String(currentPage).padStart(2, "0")}
            </button>

            {/* Page + 1 */}
            {currentPage < totalPages && (
              <button
                className="button"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                {String(currentPage + 1).padStart(2, "0")}
              </button>
            )}

            {/* Next Button */}
            <button
              className="button"
              onClick={handleNext}
              disabled={currentPage === totalPages}
              style={{
                borderTopRightRadius: "8px",
                borderBottomRightRadius: "8px",
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StockMovementsReport;
