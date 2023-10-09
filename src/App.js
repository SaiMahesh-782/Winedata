import React from 'react';
import './App.css';
import wineData from './Winedata';
import Mean from './Mean';
import Mode from './Mode';
import median from './Median';






function App() {
  const classes = [];
const seenClasses = new Set();

for (const item of wineData) {
  const alcohol = item.Alcohol;
  if (!seenClasses.has(alcohol)) {
    seenClasses.add(alcohol);
    classes.push(alcohol);
  }
}

  const flavanoidsData = wineData.map((data) => data.Flavanoids);
  const flavanoidsMean = Mean(flavanoidsData);
  const flavanoidsMedian = median(flavanoidsData);
  const flavanoidsMode = Mode(flavanoidsData);

  // Calculate Gamma statistics
  const gammaData = wineData.map((data) => (data.Ash * data.Hue) / data.Magnesium);
  const gammaMean = Mean(gammaData);
  const gammaMedian = median(gammaData);
  const gammaMode = Mode(gammaData);

 
  return (
    <div className="container">
      <h1>Flavanoids Statistics</h1>
      <table>
        <thead>
          <tr className="table-row">
            <th>Measure</th>
            {classes.map((id) => (
              <th className="table-column" key={id}>Class {id}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr  className="table-row">
            <td className="table-column">Flavanoids Mean</td>
            {classes.map((id) => (
              <td  className="table-column" key={id}>{flavanoidsMean.toFixed(3)}</td>
            ))}
          </tr>
          <tr className="table-row">
            <td className="table-column">Flavanoids Median</td>
            {classes.map((id) => (
              <td className="table-column" key={id}>{flavanoidsMedian.toFixed(3)}</td>
            ))}
          </tr>
          <tr  className="table-row">
            <td  className="table-column">Flavanoids Mode</td>
            {classes.map((id) => (
              <td  className="table-column" key={id}>{flavanoidsMode.toFixed(3)}</td>
            ))}
          </tr>
        </tbody>
      </table>

      <h1>Gamma Statistics</h1>
      <table>
        <thead>
          <tr className="table-row">
            <th  className="table-column">Measure</th>
            {classes.map((id) => (
              <th  className="table-column" key={id}>Class {id}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="table-row">
            <td  className="table-column">Gamma Mean</td>
            {classes.map((id) => (
              <td  className="table-column" key={id}>{gammaMean.toFixed(3)}</td>
            ))}
          </tr>
          <tr className="table-row" >
            <td  className="table-column">Gamma Median</td>
            {classes.map((id) => (
              <td  className="table-column" key={id}>{gammaMedian.toFixed(3)}</td>
            ))}
          </tr>
          <tr className="table-row">
            <td  className="table-column">Gamma Mode</td>
            {classes.map((id) => (
              <td  className="table-column" key={id}>{gammaMode.toFixed(3)}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );

}

export default App;
