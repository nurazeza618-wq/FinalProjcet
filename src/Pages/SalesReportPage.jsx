import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import { X } from "lucide-react";

const dummyData = Array(10).fill({
  orderNo: "ORDR#1234567890",
  orderDate: "Rabu, 18/09/2024 12:30:00",
  orderType: "Dine-in",
  category: "Foods",
  customer: "Anisa",
  total: "Rp 35.000",
});

const SalesReportPage = () => {
  const [data] = useState(dummyData);
  const [showExport, setShowExport] = useState(false);

  // popup detail transaksi
  const [showDetail, setShowDetail] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  // klik detail
  const handleDetailClick = (item) => {
    setSelectedData(item);
    setShowDetail(true);
  };

  // PRINT STRUK CAFE
  const handlePrint = () => {
    const printContent =
      document.getElementById("receipt-print").innerHTML;

    const printWindow = window.open("", "", "width=400,height=700");

    printWindow.document.write(`
      <html>
        <head>
          <title>Print Receipt</title>
          <style>
            body {
              font-family: Arial;
              padding: 20px;
              width: 300px;
              margin: auto;
            }

            .center {
              text-align: center;
            }

            .line {
              border-top: 1px dashed black;
              margin: 10px 0;
            }

            .row {
              display: flex;
              justify-content: space-between;
              margin: 5px 0;
              font-size: 14px;
            }

            .total {
              font-weight: bold;
              font-size: 15px;
            }

            h2 {
              margin: 0;
              font-size: 18px;
            }

            p {
              margin: 3px 0;
              font-size: 13px;
            }
          </style>
        </head>

        <body>
          ${printContent}

          <script>
            window.onload = function () {
              window.print();
              window.onafterprint = function () {
                window.close();
              };
            };
          </script>
        </body>
      </html>
    `);

    printWindow.document.close();
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="flex-1 flex flex-col">
        <TopBar />

        <div className="p-6">
          {/* HEADER */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-semibold">
              Sales Report
            </h1>

            <p className="text-sm text-gray-400">
              Today, Monday 30 September 2024
            </p>
          </div>

          {/* FILTER */}
          <div className="bg-white p-4 rounded-xl shadow mb-4 flex gap-3 items-center flex-wrap">

            <div>
              <p className="text-xs text-gray-400 mb-1">
                Start
              </p>
              <input
                type="date"
                className="border p-2 rounded-lg text-sm"
              />
            </div>

            <div>
              <p className="text-xs text-gray-400 mb-1">
                Finish
              </p>
              <input
                type="date"
                className="border p-2 rounded-lg text-sm"
              />
            </div>

            <div>
              <p className="text-xs text-gray-400 mb-1">
                Category
              </p>
              <select className="border p-2 rounded-lg text-sm">
                <option>Select category</option>
                <option>Foods</option>
                <option>Beverages</option>
              </select>
            </div>

            <div>
              <p className="text-xs text-gray-400 mb-1">
                Order Type
              </p>
              <select className="border p-2 rounded-lg text-sm">
                <option>Select order type</option>
                <option>Dine-in</option>
                <option>Take Away</option>
              </select>
            </div>

            <button className="bg-blue-500 text-white px-5 py-2 rounded-lg mt-5">
              Search
            </button>

            {/* EXPORT */}
            <div className="relative mt-5">
              <button
                onClick={() => setShowExport(!showExport)}
                className="border p-2 rounded-lg"
              >
                ⬇️
              </button>

              {showExport && (
                <div className="absolute right-0 mt-2 bg-white shadow rounded-lg text-sm w-32 z-20">
                  <button className="block w-full text-left px-3 py-2 hover:bg-gray-100">
                    Export Excel
                  </button>

                  <button className="block w-full text-left px-3 py-2 hover:bg-gray-100">
                    Export PDF
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* TABLE */}
          <div className="bg-white rounded-xl shadow p-4">
            <table className="w-full text-sm">
              <thead className="text-gray-400 border-b text-left">
                <tr>
                  <th className="py-2">No Order</th>
                  <th>Order Date</th>
                  <th>Order Type</th>
                  <th>Category</th>
                  <th>Customer Name</th>
                  <th className="text-center">Detail</th>
                </tr>
              </thead>

              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="py-2">{item.orderNo}</td>
                    <td>{item.orderDate}</td>
                    <td>{item.orderType}</td>
                    <td>{item.category}</td>
                    <td>{item.customer}</td>

                    <td className="text-center">
                      <button
                        onClick={() => handleDetailClick(item)}
                        className="text-blue-500 font-medium"
                      >
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* POPUP DETAIL + PRINT */}
      {showDetail && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">

          <div className="bg-white w-[380px] rounded-xl p-6 relative">

            {/* CLOSE */}
            <button
              onClick={() => setShowDetail(false)}
              className="absolute top-4 right-4 text-gray-400"
            >
              <X size={20} />
            </button>

            {/* RECEIPT */}
            <div id="receipt-print">

              <div className="text-center">
                <h2 className="font-bold text-lg">
                  CAFE RECEIPT
                </h2>

                <p className="text-sm text-gray-500">
                  Jl. Restaurant No.123
                </p>

                <p className="text-sm text-gray-500">
                  Telp: 0812-3456-7890
                </p>
              </div>

              <div className="border-t border-dashed my-4"></div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Order No</span>
                  <span>{selectedData?.orderNo}</span>
                </div>

                <div className="flex justify-between">
                  <span>Date</span>
                  <span>{selectedData?.orderDate}</span>
                </div>

                <div className="flex justify-between">
                  <span>Customer</span>
                  <span>{selectedData?.customer}</span>
                </div>

                <div className="flex justify-between">
                  <span>Order Type</span>
                  <span>{selectedData?.orderType}</span>
                </div>
              </div>

              <div className="border-t border-dashed my-4"></div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Gado-gado Special</span>
                  <span>Rp 20.000</span>
                </div>

                <div className="flex justify-between">
                  <span>Ice Tea</span>
                  <span>Rp 15.000</span>
                </div>
              </div>

              <div className="border-t border-dashed my-4"></div>

              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>{selectedData?.total}</span>
              </div>

              <div className="text-center text-xs text-gray-500 mt-5">
                Thank you for your order ❤️
              </div>
            </div>

            {/* BUTTON */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowDetail(false)}
                className="w-full border py-2 rounded-lg"
              >
                Close
              </button>

              <button
                onClick={handlePrint}
                className="w-full bg-blue-500 text-white py-2 rounded-lg"
              >
                Print
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default SalesReportPage;