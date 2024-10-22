import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import Output from "../Views/Output";

export default function DataAssignment({ jsonData, yardData }) {
  
  const [objectData, setObjectData] = useState([]);
  const [yardLogData, setYardLogData] = useState([]);
  
  useEffect(() => { 
    setYardLogData(yardData);
    
    if (jsonData && yardData && jsonData.length > 0) {
      const updatedData = jsonData.slice(2);  // Avoid using `shift`, directly slice the array
      let newObjectData = updatedData.map((element) => {
        let obj = {};
        const regexCommodity = /^[ADMPFV]+$/;
        const regexCMV = /^CMV\d+$/;
        const regexCarrier = /^OB-[A-Z]+/;
        const regexServiceLevel = /^OB-\d{2}-.+$/;
        
        Object.entries(element).forEach(([key, value]) => {
          if (regexCMV.test(value)) {
            obj["CMV"] = value.slice(3); // Extract CMV
          }
          if (regexCarrier.test(value) && !regexServiceLevel.test(value)) {
            obj["Carrier"] = value;
          }
          if (regexCommodity.test(value)) {
            obj["Commodity"] = value;
          }
          if (!regexCarrier.test(value) && regexServiceLevel.test(value)) {
            obj["Service Level"] = value;
          }
          if (key === "__EMPTY_10") { // Check for the specific key for Trailer#
            obj["Trailer#"] = value; // Add Trailer# to obj
          }
        });
        return obj;
      });

      setObjectData(newObjectData);
    }

  }, [jsonData, yardData]);

  if (!jsonData || jsonData.length === 0) {
    return <div>Waiting on Data</div>; // This is moved outside useEffect and returned conditionally
  }
  
  return (
    <div>
      {/* Uncomment when Output component is used */}
      <Output LogInfo={objectData} />
      <p>{console.log(yardLogData)}</p>
    </div>
  );
}


const trailerInformation = [
  {
    "Trailer Number": 3611,
    "Size of Trailer": 36,
    "Door Type": "Roll-up",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Type of trailer": "36' Tandem  ",
  },
  {
    "Trailer Number": 3612,
    "Size of Trailer": 36,
    "Door Type": "Roll-up",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Decaled",
    "Type of trailer": "36' Tandem  ",
  },
  {
    "Trailer Number": 3614,
    "Size of Trailer": 36,
    "Door Type": "Roll-up",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Type of trailer": "36' Tandem  ",
  },
  {
    "Trailer Number": 3617,
    "Size of Trailer": 36,
    "Door Type": "Roll-up",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Type of trailer": "36' Tandem  ",
  },
  {
    "Trailer Number": 3618,
    "Size of Trailer": 36,
    "Door Type": "Roll-up",
    "Reefer Single/Multi": "Multi -Temp",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Type of trailer": "36' Tandem  ",
  },
  {
    "Trailer Number": 3619,
    "Size of Trailer": 36,
    "Door Type": "Roll-up",
    "Reefer Single/Multi": "Multi -Temp",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Type of trailer": "36' Tandem  ",
  },
  {
    "Trailer Number": 3620,
    "Size of Trailer": 36,
    "Door Type": "Roll-up",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Type of trailer": "36' Tandem  ",
  },
  {
    "Trailer Number": 3621,
    "Size of Trailer": 36,
    "Door Type": "Roll-up",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "No",
    "Decalled or Undec": "Decaled",
    "Type of trailer": "36' Tandem  ",
  },
  {
    "Trailer Number": 3623,
    "Size of Trailer": 36,
    "Door Type": "Roll-up",
    "Reefer Single/Multi": "Multi -Temp",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Type of trailer": "36' Tandem  ",
  },
  {
    "Trailer Number": 3624,
    "Size of Trailer": 36,
    "Door Type": "Roll-up",
    "Reefer Single/Multi": "Multi -Temp",
    "Perishable Load": "Yes",
    "Frozen Load": "No",
    "Decalled or Undec": "Undecaled",
    "Type of trailer": "36' Tandem  ",
  },
  {
    "Trailer Number": 3625,
    "Size of Trailer": 36,
    "Door Type": "Roll-up",
    "Reefer Single/Multi": "Multi -Temp",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Type of trailer": "36' Tandem  ",
  },
  {
    "Trailer Number": 3626,
    "Size of Trailer": 36,
    "Door Type": "Roll-up",
    "Reefer Single/Multi": "Multi -Temp",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Type of trailer": "36' Tandem  ",
  },
  {
    "Trailer Number": 3627,
    "Size of Trailer": 36,
    "Door Type": "Roll-up",
    "Reefer Single/Multi": "Multi -Temp",
    "Perishable Load": "Yes",
    "Frozen Load": "No",
    "Decalled or Undec": "Undecaled",
    "Type of trailer": "36' Tandem  ",
  },
  {
    "Trailer Number": 3631,
    "Size of Trailer": 36,
    "Door Type": "Roll-up",
    "Reefer Single/Multi": "Multi -Temp",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Decaled",
    "Type of trailer": "36' Tandem  ",
  },
  {
    "Trailer Number": 3632,
    "Size of Trailer": 36,
    "Door Type": "Roll-up",
    "Reefer Single/Multi": "Multi -Temp",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Decaled",
    "Type of trailer": "36' Tandem  ",
  },
  {
    "Trailer Number": 3655,
    "Size of Trailer": 36,
    "Door Type": "Roll-up",
    "Reefer Single/Multi": "Reefer out of service",
    "Perishable Load": "No",
    "Frozen Load": "No",
    "Decalled or Undec": "Decaled",
    "Type of trailer": "36' Tandem  ",
  },
  {
    "Trailer Number": 3699,
    "Size of Trailer": 36,
    "Door Type": "Roll-up",
    "Reefer Single/Multi": "Multi -Temp",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Decaled",
    "Type of trailer": "36' Tandem  ",
    Comments: "With tail gate",
  },
  {
    "Trailer Number": 48056,
    "Size of Trailer": 48,
    "Door Type": "Roll-up",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "No",
    "Decalled or Undec": "Undecaled",
    "Type of trailer": "48' Tandem  ",
  },
  {
    "Trailer Number": 48057,
    "Size of Trailer": 48,
    "Door Type": "Roll-up",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Decaled",
    "Type of trailer": "48' Tandem  ",
  },
  {
    "Trailer Number": 48063,
    "Size of Trailer": 48,
    "Door Type": "Roll-up",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Decaled",
    "Type of trailer": "48' Tandem  ",
  },
  {
    "Trailer Number": 48064,
    "Size of Trailer": 48,
    "Door Type": "Roll-up",
    "Reefer Single/Multi": "Multi -Temp",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Type of trailer": "48' Tandem  ",
  },
  {
    "Trailer Number": 48065,
    "Size of Trailer": 48,
    "Door Type": "Barn Door",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Decaled",
    "Type of trailer": "48' Tandem  ",
  },
  {
    "Trailer Number": 48066,
    "Size of Trailer": 48,
    "Door Type": "Barn Door",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Decaled",
    "Type of trailer": "48' Tandem  ",
  },
  {
    "Trailer Number": 48067,
    "Size of Trailer": 48,
    "Door Type": "Roll-up",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Type of trailer": "48' Tandem  ",
  },
  {
    "Trailer Number": 48068,
    "Size of Trailer": 48,
    "Door Type": "Roll-up",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Decaled",
    "Type of trailer": "48' Tandem  ",
  },
  {
    "Trailer Number": 48069,
    "Size of Trailer": 48,
    "Door Type": "Roll-up",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Decaled",
    "Type of trailer": "48' Tandem  ",
  },
  {
    "Trailer Number": 48073,
    "Size of Trailer": 48,
    "Door Type": "Roll-up",
    "Reefer Single/Multi": "Multi -Temp",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Type of trailer": "48' Tandem  ",
  },
  {
    "Trailer Number": 45821,
    "Size of Trailer": 53,
    "Door Type": "Barn Door",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Rental /Owned": "Rental",
    "Type of trailer": "53' TANDEM  ",
  },
  {
    "Trailer Number": 46286,
    "Size of Trailer": 53,
    "Door Type": "Barn Door",
    "Reefer Single/Multi": "Reefer out of service",
    "Rental /Owned": "Rental",
    "Type of trailer": "53' TANDEM  ",
  },
  {
    "Trailer Number": 50396,
    "Size of Trailer": 53,
    "Door Type": "Barn Door",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Rental /Owned": "Rental",
    "Type of trailer": "53' TANDEM  ",
  },
  {
    "Trailer Number": 50399,
    "Size of Trailer": 53,
    "Door Type": "Barn Door",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Rental /Owned": "Rental",
    "Type of trailer": "53' TANDEM  ",
  },
  {
    "Trailer Number": 53052,
    "Size of Trailer": 53,
    "Door Type": "Roll-up",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Decaled",
    "Type of trailer": "53' TANDEM  ",
  },
  {
    "Trailer Number": 53053,
    "Size of Trailer": 53,
    "Door Type": "Roll-up",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Type of trailer": "53' TANDEM  ",
  },
  {
    "Trailer Number": 53081,
    "Size of Trailer": 53,
    "Door Type": "Barn Door",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Type of trailer": "53' TANDEM  ",
  },
  {
    "Trailer Number": 53082,
    "Size of Trailer": 53,
    "Door Type": "Barn Door",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Type of trailer": "53' TANDEM  ",
  },
  {
    "Trailer Number": 53083,
    "Size of Trailer": 53,
    "Door Type": "Barn Door",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Type of trailer": "53' TANDEM  ",
  },
  {
    "Trailer Number": 53084,
    "Size of Trailer": 53,
    "Door Type": "Barn Door ",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Type of trailer": "53' TANDEM  ",
  },
  {
    "Trailer Number": 53085,
    "Size of Trailer": 53,
    "Door Type": "Barn Door",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Type of trailer": "53' TANDEM  ",
  },
  {
    "Trailer Number": 53087,
    "Size of Trailer": 53,
    "Door Type": "Roll-up",
    "Reefer Single/Multi": "Multi -Temp",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Type of trailer": "53' TANDEM  ",
  },
  {
    "Trailer Number": 53088,
    "Size of Trailer": 53,
    "Door Type": "Barn Door",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Decaled",
    "Type of trailer": "53' TANDEM  ",
  },
  {
    "Trailer Number": 53089,
    "Size of Trailer": 53,
    "Door Type": "Barn Door",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Decaled",
    "Type of trailer": "53' TANDEM  ",
  },
  {
    "Trailer Number": 53090,
    "Size of Trailer": 53,
    "Door Type": "Barn Door",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Decaled",
    "Type of trailer": "53' TANDEM  ",
  },
  {
    "Trailer Number": 53100,
    "Size of Trailer": 53,
    "Door Type": "Barn Door",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Decaled",
    "Type of trailer": "53' TANDEM  ",
  },
  {
    "Trailer Number": 53101,
    "Size of Trailer": 53,
    "Door Type": "Barn Door",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Decaled",
    "Type of trailer": "53' TANDEM  ",
  },
  {
    "Trailer Number": 53102,
    "Size of Trailer": 53,
    "Door Type": "Barn Door",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Decaled",
    "Type of trailer": "53' TANDEM  ",
  },
  {
    "Trailer Number": 71484,
    "Size of Trailer": 53,
    "Door Type": "Barn Door",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Rental /Owned": "Rental",
    "Type of trailer": "53' TANDEM  ",
  },
  {
    "Trailer Number": 71490,
    "Size of Trailer": 53,
    "Door Type": "Barn Door",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Rental /Owned": "Rental",
    "Type of trailer": "53' TANDEM  ",
  },
  {
    "Trailer Number": 74396,
    "Size of Trailer": 53,
    "Door Type": "Barn Door",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Rental /Owned": "Rental",
    "Type of trailer": "53' TANDEM  ",
  },
  {
    "Trailer Number": 77029,
    "Size of Trailer": 53,
    "Door Type": "Barn Door",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Rental /Owned": "Rental",
    "Type of trailer": "53' TANDEM  ",
  },
  {
    "Trailer Number": 78895,
    "Size of Trailer": 53,
    "Door Type": "Barn Door",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Rental /Owned": "Rental",
    "Type of trailer": "53' TANDEM  ",
  },
  {
    "Trailer Number": 80203,
    "Size of Trailer": 53,
    "Door Type": "Barn Door",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Rental /Owned": "Rental",
    "Type of trailer": "53' TANDEM  ",
    Comments: "Out of service",
  },
  {
    "Trailer Number": 80248,
    "Size of Trailer": 53,
    "Door Type": "Barn Door",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Rental /Owned": "Rental",
    "Type of trailer": "53' TANDEM  ",
  },
  {
    "Trailer Number": 81879,
    "Size of Trailer": 53,
    "Door Type": "Barn Door",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Rental /Owned": "Rental",
    "Type of trailer": "53' TANDEM  ",
  },
  {
    "Trailer Number": 81880,
    "Size of Trailer": 53,
    "Door Type": "Barn Door",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Rental /Owned": "Rental",
    "Type of trailer": "53' TANDEM  ",
  },
  {
    "Trailer Number": 91487,
    "Size of Trailer": 53,
    "Door Type": "Barn Door",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Rental /Owned": "Rental",
    "Type of trailer": "53' TANDEM  ",
    Comments: "Reefer Fan issue",
  },
  {
    "Trailer Number": 89090,
    "Size of Trailer": 53,
    "Door Type": "Barn Door",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Rental /Owned": "Rental",
    "Type of trailer": "53' TANDEM  ",
  },
  {
    "Trailer Number": 80185,
    "Size of Trailer": 53,
    "Door Type": "Barn Door",
    "Reefer Single/Multi": "Single Reefer",
    "Perishable Load": "Yes",
    "Frozen Load": "Yes",
    "Decalled or Undec": "Undecaled",
    "Rental /Owned": "Rental",
    "Type of trailer": "53' TANDEM  ",
  },
];