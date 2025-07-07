import "./FinancialReport.css";
import React, { useState, useEffect } from "react";
import "./purchaseReport.css";
import { IoFilterOutline } from "react-icons/io5";
import { GiCardboardBox } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";

ChartJS.register(ArcElement, Legend);

function FinancialReport() {
  const categories = [
    { name: "TV", percent: 30, color: "#0057ff" },
    { name: "Air Conditioner", percent: 30, color: "#00cfff" },
    { name: "Freeze", percent: 30, color: "#3b82f6" },
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
        borderWidth: 0,
        cutout: "70%",
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
                  <b className="bold">$55,986,186.90            </b>
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
                  <b className="bold">$3,493  </b>
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
                      <b><IoIosArrowForward /> 5</b>
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

       
      

      <div>
          {/* Inventory Value by Category Section */}

            <div className="inventry">
              <span>Inventory Value by category</span>
            </div>

            <div className="circle-graph">
                <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
            <div style={{ width: "250px", height: "250px" }}>
              <Doughnut data={chartData} 
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
           
              {categories.map((item, index) => (
                <div key={index} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <input type="checkbox" checked readOnly />
                  <span style={{ width: "170px" }}>{item.name} ({item.percent}%)</span>
                  <div style={{
                    flex: 1,
                    height: "6px",
                    background: "#e5e7eb",
                    borderRadius: "4px",
                    overflow: "hidden"
                  }}>
                    <div style={{
                      display: "flex",
                      width: "75%",
                      height: "100%",
                      backgroundColor: item.color
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
            </div>
      </div>

   </div> 
  );
}

export default FinancialReport;
