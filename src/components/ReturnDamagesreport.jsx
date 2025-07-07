
import React, { useState, useEffect } from "react";
import { IoFilterOutline } from "react-icons/io5";
import { GiCardboardBox } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const allPurchaseOrder = [
  {
    id: 1,
    trackingid: "AS-09001",
    productName: "lappy", 
    inspectedBy : "Aman Kumar",
    ModeofPayment: "UPI",
    reason:"Damage While Delivery",
    Status: "Pending"
  },
   {
    id: 2,
    trackingid: "AS-09001",
    productName: "lappy", 
    inspectedBy : "Aman Kumar",
    ModeofPayment: "UPI",
    reason:"Damage While Delivery",
    Status: "Completed"
  },
   {
    id: 3,
   trackingid: "AS-09001",
    productName: "lappy", 
    inspectedBy : "Aman Kumar",
    ModeofPayment: "UPI",
    reason:"Damage While Delivery",
    Status: "Rejected"
  },
   {
    id: 4,
   trackingid: "AS-09001",
    productName: "lappy", 
    inspectedBy : "Aman Kumar",
    ModeofPayment: "COD",
    reason:"Damage While Delivery",
    Status: "Pending"
  },
  {
    id: 5,
   trackingid: "AS-09001",
    productName: "lappy", 
    inspectedBy : "Aman Kumar",
    ModeofPayment: "Card",
    reason:"Damage While Delivery",
    Status:"Others"
  },
];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "completed";
      case "Pending":
        return "pending";
      case "Rejected":
        return "rejected";
      case "Processing":
        return "processing";
      case "Others":
        return "others"
      default:
        return "";
    }
  };



function ReturnDamagesreport() {
  const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
  
    const totalPages = Math.ceil(allPurchaseOrder.length / itemsPerPage);
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = allPurchaseOrder.slice(startIndex, startIndex + itemsPerPage);
  
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
        </div>

        <div className="box-container">
          {/* box-1 */}
          <div className="stock-card">
            <div className="stock-content">
              <div className="icon">
                <GiCardboardBox className="box-icon" />
              </div>
              <div className="text">
                <p className="title">Return and Replacement</p>
                <p className="count">
                  <b className="bold">55</b>
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
                <p className="title">Damaged Products </p>
                <p className="count">
                  <b className="bold">34</b>
                </p>
              </div>
            </div>

            <div className="footer">
              <hr className="divider" />
              <div className="footer-text">
                <div className="span-footer">
                  {/* <span>
                               <b>+322</b>
                             </span> */}
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

         
        </div>

        <div style={{ marginTop: "15px" }}>Return or Damages Product</div>

        {/* Table */}

        <div>
          <table>
            <thead>
              <tr>
                <th style={{ borderTopLeftRadius: "8px", width: "8%" }}>Tracking ID</th>
                <th style={{ width: "30%" }}> Product name</th>
                <th> Inspected By</th>
                <th>Mode of Payment </th>
                <th>Reasons</th>
                <th style={{ borderTopRightRadius: "8px" }}>Status</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((order) => {
                return (
                  <tr key={order.id}>
                    <td
                      style={{ borderBottom: "1px solid #ccc", padding: "8px" }}
                    ><IoIosArrowForward />
                      {order.trackingid}
                    </td>
                    <td style={{ borderBottom: "1px solid #ccc" }}>
                      {order.productName}
                    </td>
                    <td style={{ borderBottom: "1px solid #ccc" }}>
                      {order.inspectedBy}
                    </td>
                    <td style={{ borderBottom: "1px solid #ccc" }}>
                      {order.ModeofPayment}
                    </td>
                    <td style={{ borderBottom: "1px solid #ccc" }}>
                      ${order.reason}/-
                    </td>
                    <td style={{ borderBottom: "1px solid #ccc" }}>
                      <span
                        className={`status-badge ${getStatusColor(
                          order.Status
                        )}`}
                      >
                        
                        {order.Status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

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
      </div>
    </>
  );
}

export default ReturnDamagesreport;
