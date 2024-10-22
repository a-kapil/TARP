import React from 'react';
import Weather from '../Components/Weather';

const Output = React.memo(({ LogInfo }) => {
  // Filter out empty objects
  const location = {latitude: 49.103569, longitude: -122.656563}
  const filteredData = Array.isArray(LogInfo) 
    ? LogInfo.filter(item => Object.keys(item).length > 0)
    : [];

  // Render the table rows based on filteredData
  const data = filteredData.length > 0
    ? filteredData.map((item, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{item.CMV}</td>
          <td>{item.Carrier}</td>
          <td>{item.Commodity}</td>
          <td>{item['Service Level']}</td>
          <td>{item["Trailer#"]}</td>
        </tr>
      ))
    : (
        <tr>
          <td colSpan="6">No data available</td>
        </tr>
      );

  return (
    <div>
      <Weather location = {location} />
      <h1>Data Table</h1>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Line #</th>
            <th>CMV</th>
            <th>Carrier</th>
            <th>Commodity</th>
            <th>Service Level</th>
            <th>Trailer</th>
          </tr>
        </thead>
        <tbody>
          {data}
        </tbody>
      </table>
    </div>
  );
});

export default Output;
