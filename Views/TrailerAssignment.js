import React, { useState } from "react";

const trailerData = [
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

export default function TrailerAssignment() {
  

    const [commodity, setCommodity] = useState("");
    const [serviceLevel, setServiceLevel] = useState("");
    const [matchedTrailer, setMatchedTrailer] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
    
    
        // Updated regex to capture the load type and door type
        const serviceLevelMatch = serviceLevel.match(/OB-(\d{2})-(P|F|MULTI)-(\w+)(?:-(ROLL)?)?(?:-(UND)?)?$/);
        if (!serviceLevelMatch) {
            alert("Invalid service level format");
            return;
        }

        const [_, trailerSize, loadType, serviceType, doorType] = serviceLevelMatch;

        console.log(doorType);
        console.log(loadType);
        console.log(trailerData.find((trailer) => {
            const isCorrectSize = trailer["Size of Trailer"] === parseInt(trailerSize);
            const isCorrectDoorType = doorType 
            ? trailer["Door Type"].toLowerCase().includes(doorType.toLowerCase()) 
            : true; // If no door type specified, skip the check
            const isUndecaled = serviceType === "UND";
            const isCorrectDecalStatus = trailer["Decalled or Undec"] == "Undecaled"? true: false;
            
         return isCorrectSize && isCorrectDoorType && isCorrectDecalStatus} ))
    
    
        const matchingTrailer = trailerData.find((trailer) => {
            const isCorrectSize = trailer["Size of Trailer"] === parseInt(trailerSize);
            const isCorrectDoorType = doorType ? trailer["Door Type"].toLowerCase().includes(doorType.toLowerCase()) : true;
    
            let hasCorrectLoad = true;
    
        let reeferType;
        if (loadType == /multi/i) {
            reeferType = "Multi Reefer";
        } else if (loadType == /p/i) {
            reeferType = "Perishable";
        } else if (loadType == /f/i) {
            reeferType = "Frozen";
        }
            // Reefer load logic
            if (reeferType == "Multi Reefer") {
                hasCorrectLoad = trailer["Reefer Single/Multi"].includes("Multi -Temp");
            } else if (reeferType = "Perishable") {
                hasCorrectLoad = trailer["Perishable Load"] === "Yes";
            } else if (reeferType = "Frozen") {
                hasCorrectLoad = trailer["Frozen Load"] === "Yes";
            }
    
            // Check for decal/undecal status
            const isUndecaled = serviceType === "UND";
            const isCorrectDecalStatus = trailer["Decalled or Undec"] == "Undecaled"? true: false ;
    
            return isCorrectSize && isCorrectDoorType && hasCorrectLoad && isCorrectDecalStatus;
        });
    
        console.log("Matching Trailer:", matchingTrailer); // Debugging log
    
        setMatchedTrailer(matchingTrailer || null);
    };
    
        return (
          <div>
            <h1>Trailer Matcher</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Commodity (APDMVF): </label>
                <input
                  type="text"
                  value={commodity}
                  onChange={(e) => setCommodity(e.target.value)}
                  placeholder="Enter APDMVF"
                  required
                />
              </div>
              <div>
                <label>Service Level (OB-XX-TDM, OB-XX-TDM-ROLL, etc.): </label>
                <input
                  type="text"
                  value={serviceLevel}
                  onChange={(e) => setServiceLevel(e.target.value)}
                  placeholder="Enter service level"
                  required
                />
              </div>
              <button type="submit">Match Trailer</button>
            </form>
      
            {matchedTrailer ? (
              <div>
                <h2>Matched Trailer</h2>
                <p>Trailer Number: {matchedTrailer["Trailer Number"]}</p>
                <p>Size of Trailer: {matchedTrailer["Size of Trailer"]}</p>
                <p>Door Type: {matchedTrailer["Door Type"]}</p>
                <p>Perishable Load: {matchedTrailer["Perishable Load"]}</p>
                <p>Frozen Load: {matchedTrailer["Frozen Load"]}</p>
                <p>Reefer Type: {matchedTrailer["Reefer Single/Multi"]}</p>
                <p>Decaled or undecaled: {matchedTrailer["Decalled or Undec"]}</p>
              </div>
            ) : (
              <p>No matching trailer found.</p>
            )}
          </div>
        );
      }  