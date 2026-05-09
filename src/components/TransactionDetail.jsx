import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const TransactionDetail = ({ isOpen, onClose, data }) => {
  const printRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "Struk Transaksi",
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">

      {/* MODAL (TIDAK IKUT PRINT) */}
      <div className="bg-white w-[400px] rounded-2xl p-6 shadow-lg relative no-print">

        <button
          onClick={handlePrint}
          className="absolute top-3 left-4 bg-blue-500 text-white px-3 py-1 rounded"
        >
          Print
        </button>

        <button
          onClick={onClose}
          className="absolute top-3 right-4"
        >
          ✕
        </button>

        <h2 className="text-center font-semibold mb-4">
          Transaction Detail
        </h2>

        {/* PREVIEW DI LAYAR */}
        <div className="text-sm space-y-2">
          <p>No Order: {data?.orderNo}</p>
          <p>Date: {data?.orderDate}</p>
          <p>Customer: {data?.customer}</p>
        </div>
      </div>

      {/* 🔥 KHUSUS PRINT (INI YANG AKAN KELUAR) */}
      <div className="hidden">
        <div ref={printRef} className="p-6 w-[300px] text-sm">

          <h2 className="text-center font-bold mb-3">
            Transaction Detail
          </h2>

          <p>No Order: {data?.orderNo}</p>
          <p>Date: {data?.orderDate}</p>
          <p>Customer: {data?.customer}</p>

          <hr className="my-2" />

          <div className="flex justify-between">
            <span>Gado-gado Special</span>
            <span>Rp 20.000</span>
          </div>

          <p className="text-xs">1 x Rp 20.000</p>

          <hr className="my-2" />

          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>Rp 25.000</span>
          </div>

          <p className="text-center mt-4">Terima Kasih</p>

        </div>
      </div>

    </div>
  );
};

export default TransactionDetail;