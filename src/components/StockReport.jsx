import React, { useState, useEffect } from "react";
import "./StockeReport.css";
import { IoFilterOutline } from "react-icons/io5";
import { GiCardboardBox } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";
import { GrDocumentPdf } from "react-icons/gr";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";


const dummyData = [
  {
    id: 1,
    productName: "Lenovo",
    quantity: "2",
    category: "pc",
    location: "patna",
    totalinventeryvalue: "48966",
  },
  {
    id: 2,
    productName: "fan",
    quantity: "100",
    category: "electric",
    location: "himalaya",
    totalinventeryvalue: "500",
  },
  {
    id: 3,
    productName: "camera",
    quantity: "150",
    category: "security",
    location: "delhi",
    totalinventeryvalue: "9000",
  },
  {
    id: 4,
    productName: "Lenovo",
    quantity: "2",
    category: "pc",
    location: "patna",
    totalinventeryvalue: "48966",
  },
  {
    id: 5,
    productName: "fan",
    quantity: "100",
    category: "electric",
    location: "himalaya",
    totalinventeryvalue: "500",
  },
  {
    id: 6,
    productName: "camera",
    quantity: "1",
    category: "security",
    location: "delhi",
    totalinventeryvalue: "9000",
  },
  {
    id: 7,
    productName: "camera",
    quantity: "1",
    category: "security",
    location: "delhi",
    totalinventeryvalue: "9000",
  },
  {
    id: 8,
    productName: "Lenovo",
    quantity: "2",
    category: "pc",
    location: "patna",
    totalinventeryvalue: "48966",
  },
  {
    id: 9,
    productName: "fan",
    quantity: "100",
    category: "electric",
    location: "himalaya",
    totalinventeryvalue: "500",
  },
  {
    id: 10,
    productName: "camera",
    quantity: "1",
    category: "security",
    location: "delhi",
    totalinventeryvalue: "9000",
  },
  {
    id: 11,
    productName: "camera",
    quantity: "1",
    category: "security",
    location: "delhi",
    totalinventeryvalue: "9000",
  },
];

function StockReport() {
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



const handleDownloadPDF = () => {
  const doc = new jsPDF();

  // Add title
  doc.text("Stock Report", 14, 15);

  // Define columns
  const tableColumn = ["Product Name", "Quantity", "Category", "Location", "Total Value"];

  // Define rows
  const tableRows = dummyData.map((item) => [
    item.productName,
    item.quantity,
    item.category,
    item.location,
    `$${item.totalinventeryvalue}/-`,
  ]);

  // ✅ Correct usage of autoTable (pass doc as first argument)
  autoTable(doc, {
    head: [tableColumn],
    body: tableRows,
    startY: 20,
    styles: { fontSize: 10 },
    headStyles: {
      fillColor: [0, 122, 255],
      textColor: "#ffffff"
    },
    theme: "striped"
  });

  // Save file
  doc.save("stock-report.pdf");
};

  // Save the PDF
  
// };


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

              <option>Last 10 Days</option>

              <option>Last 30 Days</option>
            </select>
          </div>
        </div>

        {/* Boxes */}

        <div className="box-container">
          {/* box-1 */}
          <div className="stock-card">
            <div className="stock-content">
              <div className="icon">
                <GiCardboardBox className="box-icon" />
              </div>
              <div className="text">
                <p className="title">Low Stocks</p>
                <p className="count">
                  <b className="bold">77 items</b>
                </p>
              </div>
            </div>

            <div className="footer">
              <hr className="divider" />
              <div className="footer-text">
                <span>
                  <b>+62</b>
                </span>
                <span className="footer-text-color">
                  items are below 10% of Total OTY
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
                <p className="title">Out of Stocks</p>
                <p className="count">
                  <b className="bold">554 items</b>
                </p>
              </div>
            </div>

            <div className="footer">
              <hr className="divider" />
              <div className="footer-text">
                <div className="span-footer">
                  <span>
                    <b>+322</b>
                  </span>
                  <span className="footer-text-color">
                    items Out of Stock this Week
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

        {/* Table Container */}

        <div>
          <div style={{ color: "#000000", display:'flex', justifyContent:'space-between', alignItems: "center"}}>
            <p>Current Stocks</p> 
            <button onClick={handleDownloadPDF} style={{ background: "none", border: "none", cursor: "pointer" }}>
  <GrDocumentPdf style={{ fontSize: "20px", color: "red"}} />
</button>

          </div>

          <div className="table-div">
            <table>
              <thead>
                <tr className="table-stock">
                  <th
                    style={{
                      textAlign: "left",
                      borderTopLeftRadius: "5px",
                      width: "70%",
                    }}
                  >
                    Product Name & SKU
                  </th>
                  <th>Quantity(Unit)</th>
                  <th>Category</th>
                  <th>location</th>
                  <th style={{ borderTopRightRadius: "5px" }}>
                    Total Inventory Value
                  </th>
                </tr>
              </thead>

              <tbody>
                {currentData.map((item) => (
                  <tr className="content" key={item.id}>
                    <td className="table-details">
                      <div className="checkbox">
                        <div>
                          <input type="checkbox" />
                        </div>
                        <div>
                          <span style={{ color: "#007AFF" }}>
                            {item.productName}
                          </span>
                          <br /> <span style={{ color: "#6B7280" }}>(SKU)</span>
                        </div>
                      </div>
                    </td>    
                    <td className="table-details">{item.quantity} Units</td>
                    <td className="table-details">{item.category}</td>
                    <td className="table-details">{item.location}</td>
                    <td className="table-details">
                      ${item.totalinventeryvalue}/-
                    </td>
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

export default StockReport;
