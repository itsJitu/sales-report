import "./FinancialReport.css";
import React, { useState, useEffect } from "react";
import "./purchaseReport.css";
import { IoFilterOutline } from "react-icons/io5";
import { GiCardboardBox } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Legend, ArcElement } from "chart.js";

import {
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Legend,
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Tooltip,
  Filler
);

const valuationData = [
  {
    id: 1,
    category: "Freeze",
    Inventory: "652.98",
  },
  {
    id: 2,
    category: "Home theater",
    Inventory: "652.98",
  },
  {
    id: 3,
    category: "mobile Accesories",
    Inventory: "652.98",
  },
  {
    id: 4,
    category: "FreeHome theater",
    Inventory: "652.98",
  },
  {
    id: 5,
    category: "Music player",
    Inventory: "652.98",
  },
  {
    id: 6,
    category: "Tv",
    Inventory: "652.98",
  },
  {
    id: 7,
    category: "Ac",
    Inventory: "652.98",
  },
];

function FinancialReport() {
  const splineLabels = [
    "12 Jun",
    "13 Jun",
    "14 Jun",
    "15 Jun",
    "16 Jun",
    "17 Jun",
    "18 Jun",
  ];
  const splineData = {
    labels: splineLabels,
    datasets: [
      {
        label: "Profit Margin",
        data: [23, 25, 22, 39, 37, 46, 41], // example data
        borderColor: "#007AFF",
        backgroundColor: "rgba(0, 122, 255, 0.1)",
        fill: true,
        tension: 0.4, // smooth line
        pointRadius: 0,
      },
    ],
  };

  const splineOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 10,
        max: 50,
        ticks: {
        stepSize: 10, 
        callback: (value) => value + "%",
        padding: 2,
      },
        grid: {
          display: true,
        }
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
          drawTicks: false,
        }
      }
    },
  };

  const categories = [
    { name: "TV", percent: 40, color: "#0057ff" },
    { name: "Air Conditioner", percent: 30, color: "#00cfff" },
    { name: "Freeze", percent: 50, color: "#3b82f6" },
    { name: "Fan", percent: 30, color: "#1d4ed8" },
    { name: "Computer", percent: 30, color: "#38bdf8" },
    { name: "Washing Machine", percent: 30, color: "#60a5fa" },
  ];

  const chartData = {
    labels: categories.map((item) => item.name),
    datasets: [
      {
        data: categories.map((item) => item.percent),
        backgroundColor: categories.map((item) => item.color),
        borderWidth: 4,
        borderColor: " #ffffff",
      },
    ],
  };
  return (
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
      </div>

      <div className="box-container">
        {/* box-1 */}
        <div className="stock-card">
          <div className="stock-content">
            <div className="icon">
              <GiCardboardBox className="box-icon" />
            </div>
            <div className="text">
              <p className="title">Total Stock Value</p>
              <p className="count">
                <b className="bold">$55,986,186.90 </b>
              </p>
            </div>
          </div>

          <div className="footer">
            <hr className="divider" />
            <div className="footer-text">
              <span>
                <b>55</b>
                <span className="footer-text-color">
                  times Delivery got delayed this week
                </span>
              </span>
              <div>
                <FaArrowRight
                  style={{ fontSize: "15px" }}
                  className="arrow-icon"
                />
              </div>
            </div>
          </div>
        </div>

        {/* box-2 */}
        <div className="stock-card">
          <div className="stock-content">
            <div className="icon">
              <GiCardboardBox className="box-icon" />
            </div>
            <div className="text">
              <p className="title">Average Daily Transaction</p>
              <p className="count">
                <b className="bold">$3,493 </b>
              </p>
            </div>
          </div>

          <div className="footer">
            <hr className="divider" />
            <div className="footer-text">
              <div className="span-footer">
                <span className="footer-text-color">
                  Highest order on 5th, 12th & 20th
                </span>
              </div>
              <div>
                <FaArrowRight
                  style={{ fontSize: "15px" }}
                  className="arrow-icon"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Box-3 */}
        <div className="stock-card">
          <div className="stock-content">
            <div className="icon">
              <GiCardboardBox className="box-icon" />
            </div>
            <div className="text">
              <p className="title">profit Margin (last Month)</p>
              <p className="count">
                <b className="bold">12%</b>
              </p>
            </div>
          </div>

          <div className="footer">
            <hr className="divider" />
            <div className="footer-text">
              <div className="span-footer">
                <span className="footer-text-color">
                  Highest Order on 5th, 12th & 20th
                </span>
              </div>
              <div>
                <FaArrowRight
                  style={{ fontSize: "15px" }}
                  className="arrow-icon"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Box-4*/}
        <div className="stock-card">
          <div className="stock-content">
            <div className="icon">
              <GiCardboardBox className="box-icon" />
            </div>
            <div className="text">
              <p className="title">Stock Turnover (Last Month) </p>
              <p className="count">
                <b className="bold">5.2%</b>
              </p>
            </div>
          </div>

          <div className="footer">
            <hr className="divider" />
            <div className="footer-text">
              <div className="span-footer">
                <span>
                  <b>
                    <IoIosArrowForward /> 5
                  </b>
                </span>
                <span className="footer-text-color">
                  Count as Excellent inventory flow
                </span>
              </div>
              <div>
                <FaArrowRight
                  style={{ fontSize: "15px" }}
                  className="arrow-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inventory Value by Category Section */}
      <div style={{ display: "flex", width: "100%", gap: "15px" }}>
        <div style={{ width: "70%" }}>
          <div>
            <div className="inventry">
              <span>Inventory Value by category</span>
            </div>

            {/* circle-graph*/}
            <div>
              <div style={{ display: "flex" }}>
                <div className="circle-graph" style={{ width: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "",
                        height: "",
                        marginTop: "10px",
                        padding: "20px 10px",
                      }}
                    >
                      <Doughnut
                        data={chartData}
                        options={{
                          plugins: {
                            legend: {
                              display: false,
                            },
                          },
                          cutout: "70%",
                        }}
                      />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        flex: 1,
                      }}
                    >
                      {categories.map((item, index) => (
                        <div
                          key={index}
                          style={{
                            alignItems: "center",
                            gap: "10px",
                            padding: "10px 10px",
                          }}
                        >
                          <input type="checkbox" checked readOnly />
                          <span style={{ width: "170px" }}>
                            {item.name} ({item.percent}%)
                          </span>
                          <div
                            style={{
                              flex: 1,
                              height: "6px",
                              background: "#e5e7eb",
                              borderRadius: "4px",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                width: "75%",
                                height: "100%",
                                backgroundColor: item.color,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>

              <div
                style={{
                  background: "#fff",
                  padding: "20px",
                  marginTop: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 1px 5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h3 style={{ marginBottom: "10px" }}>Profit Margin</h3>
                <Line data={splineData} options={splineOptions} />
              </div>
              
            </div>
          </div>
        </div>

        <div style={{ display: "flex", width: "30%", marginTop: "15px" }}>
          <div style={{ padding: "5px" }}>
            <span className="valuation"> Inventory Valuation </span>

            {/* Table */}
            <div
              className="table-value"
              style={{ borderRadius: "8px", overflow: "hidden" }}
            >
              <table style={{ borderRadius: "10px" }}>
                <thead>
                  <tr>
                    <th style={{ width: "60%" }}>category</th>
                    <th style={{ textAlign: "left" }}>Inventory Value</th>
                  </tr>
                </thead>
                <tbody>
                  {valuationData.map((prod) => (
                    <tr style={{ borderBottom: "1px solid gray" }}>
                      <td>
                        <span style={{ color: "#007AFF" }}>
                          {prod.category}
                        </span>
                        <br />
                        <span style={{ color: "#6B7280" }}>
                          (18 Sub-categories)
                        </span>
                      </td>
                      <td style={{}}>${prod.Inventory}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancialReport;
