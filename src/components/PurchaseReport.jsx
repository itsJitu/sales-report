import React from "react";
import "./purchaseReport.css";
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
  
]

function PurchaseReport() {
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
              {allPurchaseOrder.map((order) => {
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
              {order.totalAmount}
            </td>
            <td style={{ borderBottom: "1px solid #ccc",  }}>
              {order.Status}
            </td>
                </tr>
                );
              })}

            </tbody>
          </table>

        </div>
      </div>
    </>
  );
}

export default PurchaseReport;
