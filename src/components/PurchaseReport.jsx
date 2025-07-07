import React, { useState, useEffect } from "react";
import { IoFilterOutline } from "react-icons/io5";
import { GiCardboardBox } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";

const allPurchaseOrder = [
  {
    id: 1,
    invoiceid: "AS-09001",
    productName: "lappy",
    placedBy: "Aman Kumar",
    orderDate: "Today",
    totalAmount: 2292,
    Status: "Pending"
  },
   {
    id: 2,
    invoiceid: "AS-09001",
    productName: "lappy",
    placedBy: "Aman Kumar",
    orderDate: "Today",
    totalAmount: 2292,
    Status: "Completed"
  },
   {
    id: 3,
    invoiceid: "AS-09001",
    productName: "lappy",
    placedBy: "Aman Kumar",
    orderDate: "Today",
    totalAmount: 2292,
    Status: "Rejected"
  },
   {
    id: 4,
    invoiceid: "AS-09001",
    productName: "lappy",
    placedBy: "Aman Kumar",
    orderDate: "Today",
    totalAmount: 2292,
    Status: "Processing"
  },
  {
    id: 5,
    invoiceid: "AS-09001",
    productName: "lappy",
    placedBy: "Aman Kumar",
    orderDate: "Today",
    totalAmount: 2292,
    Status: "Others"
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

  

function PurchaseReport() {
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
                <p className="title">Total Purchase</p>
                <p className="count">
                  <b className="bold">$3,58,732.81</b>
                </p>
              </div>
            </div>

            <div className="footer">
              <hr className="divider" />
              <div className="footer-text">
                <span>
                  <b>+652</b>
                  <span className="footer-text-color">
                    items added this week
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
                <p className="title">Pending Order</p>
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

          {/* Box-3 */}
          <div className="stock-card">
            <div className="stock-content">
              <div className="icon">
                <GiCardboardBox className="box-icon" />
              </div>
              <div className="text">
                <p className="title">Delivery Delays</p>
                <p className="count">
                  <b className="bold">55</b>
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
                    55 items Delivery got delayed this week
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

        <div style={{marginTop:"15px"}}>All Purchase order</div>

        {/* Table */}

        <div>
          <table>
            <thead>
              <tr>
                <th style={{borderTopLeftRadius: "8px"}}>Invoice ID</th>
                <th style={{width: "40%"}}> Product name</th>
                <th> Placed By</th>
                <th>Order Date</th>
                <th>Total Amount</th>
                <th style={{borderTopRightRadius:"8px"}}>Status</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((order) => {
                return (
                <tr key={order.id}>
                  <td style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>
              <input type="checkbox" /> {order.invoiceid}
            </td>
            <td style={{ borderBottom: "1px solid #ccc",  }}>
              {order.productName}
            </td>
            <td style={{ borderBottom: "1px solid #ccc",  }}>
              {order.placedBy}
            </td>
            <td style={{ borderBottom: "1px solid #ccc",  }}>
              {order.orderDate}
            </td>
            <td style={{ borderBottom: "1px solid #ccc",  }}>
              ${order.totalAmount}/-
            </td>
            <td style={{ borderBottom: "1px solid #ccc"  }} >
             <span className={`status-badge ${getStatusColor(order.Status)}`}> {order.Status}</span>
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
                <option value={3} className="pageNo">3</option>
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


export default PurchaseReport;
