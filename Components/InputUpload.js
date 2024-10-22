import React, { useState } from "react";
import * as XLSX from "xlsx";
import DataAssignment from "./DataAssignment";

export default function InputUpload() {
  const [file, setFile] = useState(null);
  const [jsonOutboundData, setJsonOutboundData] = useState([]);
  const [yardLog, setYardLog] = useState([]);

  function handleUpload() {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "array" });
        const sheetNameZero = workbook.SheetNames[0];
        const worksheetZero = workbook.Sheets[sheetNameZero];
        const jsonZero = XLSX.utils.sheet_to_json(worksheetZero);
        setJsonOutboundData(jsonZero);
        const sheetNameFour = workbook.SheetNames[4];
        const worksheetFour = workbook.Sheets[sheetNameFour];
        const jsonFour = XLSX.utils.sheet_to_json(worksheetFour);
        setYardLog(jsonFour);
      };
      reader.readAsArrayBuffer(file);
    }
  }

  function handleChange(e) {
    setFile(e.target.files[0]);
  }
  return (
    <div>
      <p>Outbound Log File for any given date:</p>
      <input accept=".xls, .xlsx, .xlsm" type="file" onChange={handleChange} />
      <br />
      <button onClick={handleUpload}>Submit</button>
      <div>
        {jsonOutboundData.length !== 0 && (
          <DataAssignment jsonData={jsonOutboundData} yardData={yardLog} />
        )}
      </div>
    </div>
  );
}
