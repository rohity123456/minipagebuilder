import React from "react";
import ReactExport from "react-data-export";
import "./index.css";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const ExcelExport = ({ data = [], name }) => {
  return (
    <div className="main-menu">
      <ExcelFile
        filename={name || "Download"}
        element={
          <button className="excel-export">
            <img className="iconPlaceholer-icon" alt="EXCEL" />
            <div className="export-button">Export Excel</div>
          </button>
        }
      >
        {data.map((sheet) => (
          <ExcelSheet
            dataSet={sheet.sheetData}
            key={sheet.sheetName}
            name={sheet.sheetName}
          />
        ))}
      </ExcelFile>
    </div>
  );
};

export default ExcelExport;
