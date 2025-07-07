import React from "react";
import "./SalesReport.css";
import { IoFilterOutline } from "react-icons/io5";
import { GiCardboardBox } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";


const topSellingProducts = [
  {
    id: 1,
    CustomerName: "RAM",
    Type: "Wholeseller",
    TotalSales: "$788.09",
    TopProducts: "green Aplle, New Mango, Coconut",
  },
  {
    id: 2,
    CustomerName: "RAM",
    Type: "Wholeseller",
    TotalSales: "$788.09",
    TopProducts: "green Aplle, New Mango, Coconut",
  },
  {
    id: 3,
    CustomerName: "RAM",
    Type: "Wholeseller",
    TotalSales: "$788.09",
    TopProducts: "green Aplle, New Mango, Coconut",
  },
  {
    id: 4,
    CustomerName: "RAM",
    Type: "Wholeseller",
    TotalSales: "$788.09",
    TopProducts: "green Aplle, New Mango, Coconut",
  },
  {
    id: 5,
    CustomerName: "RAM",
    Type: "Wholeseller",
    TotalSales: "$788.09",
    TopProducts: "green Aplle, New Mango, Coconut",
  },
];



const dummyData = [
  {
    id: 1,
    proname: " Green Apple",
    total: 1000,
    sold:  890,
    sku: "APP5844",
  },
   {
    id: 2,
    proname: " Green Apple",
    total: 1000,
    sold:  400,
    sku: "APP5899",
  },
   {
    id: 3,
    proname: " Green Apple",
    total: 1000,
    sold:  890,
    sku: "APP5844",
  },
   {
    id: 4,
    proname: " Green Apple",
    total: 1000,
    sold:  90,
    sku: "APP8844",
  },
];

function Salesreport() {
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

        {/* Boxes */}

        <div className="box-container">
          {/* box-1 */}
          <div className="stock-card">
            <div className="stock-content">
              <div className="icon">
                <GiCardboardBox className="box-icon" />
              </div>
              <div className="text">
                <p className="title">Today,s Sales</p>
                <p className="count">
                  <b className="bold">$332.81</b>
                </p>
              </div>
            </div>

            <div className="footer">
              <hr className="divider" />
              <div className="footer-text">
                <span>
                  <b>+652</b>{" "}
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
                <p className="title">Sales This Month</p>
                <p className="count">
                  <b className="bold">$53332.81</b>
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
                <p className="title">Total Returns</p>
                <p className="count">
                  <b className="bold">$533729.62</b>
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
                    2.1% of totaol sales returned.
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

        {/* table of top Selling Products */}

        <div style={{ color: "#000000", fontWeight: "400", marginTop: "20px" }}>
          Top Selling Products
        </div>

        <div className="table-container">
          <table>
            <thead>

              <tr style={{}} className="selling-product">
                
                <th style={{ borderTopLeftRadius:"5px", textAlign: "left"}}> 
                Customer Name</th>
                <th style={{display: "flex", justifyContent:'space-between'}}>Type</th>
                <th>Total Sales</th>
                <th style={{ width: "50%", borderTopRightRadius:"5px" }}>Top Products</th>
              </tr>
            </thead>

            <tbody>
              {topSellingProducts.map((item) => (
                <tr key={item.id}>
                  
                  <td>
                    <input type="checkbox" />{item.CustomerName}
                  </td>
                  <td style={{color: "#007AFF"}}><span style={{backgroundColor:"#EFF3FF", borderRadius:"15px"}}>{item.Type}</span></td>
                  <td>{item.TotalSales}</td>
                  <td>{item.TopProducts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Top Selling Products */}

        <div style={{marginTop:"10px"}}>Top Selling Products </div>

        <div className="sell-box">
          {/* Boxes */}

          {dummyData.map((items) => {
            return (
          <div className="apple-box" key={items.id}>
            
            <div style={{color: "#000000"}}>{items.proname}</div>
            <span style={{color: "#6B7280"}}>SKU - {items.sku} • {items.total - items.sold} Kg left</span>
            {/* color gridiant */}
            <div className="color-gridiant">
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <span  style={{color: "#000000"}}> Items in stock</span>
              <span>{items.sold} kg</span>
              </div>

              
              <div style={{width:'100%', backgroundColor:'#D9D9D9', borderRadius: "10px" }}>
              <div style={{border: "1px solid gray", height: "10px", borderRadius: "10px", width:`${(items.sold / items.total) * 100}%` }} className="grident"></div>
              </div>
              
            </div>
          </div>
          );
          })}

          <div className="view">
            <span>View More </span> <span><FaArrowRight className="more-arrow"/></span>
          </div>
        </div>

      </div>
    </>
  );
}

export default Salesreport;
