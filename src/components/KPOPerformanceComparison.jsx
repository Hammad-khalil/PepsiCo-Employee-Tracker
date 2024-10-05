// eslint-disable-next-line no-unused-vars
import React from 'react';

// Sample data for KPOs with high and low performance
const highPerformanceKPOs = [
  { name: 'Adnan Zahid', distribution: 'Arnial Traders', percentage: 100 },
  { name: 'Adnan Zahid', distribution: 'Arnial Traders', percentage: 100 },
];

const lowPerformanceKPOs = [
  { name: 'Abdul Waheed', distribution: 'Shan Marketing 1', percentage:  88 },
  { name: 'Usama Fayyaz', distribution: 'Shan Marketing 1', percentage:  88 },
];

const KPOPerformanceComparison = () => {
  return (
    <div style={styles.container}>
      {/* Left side: High performance KPOs */}
      <div style={styles.column}>
        <h2 style={styles.suitableHeading}>SUITABLE KPOS</h2>
        <h3 style={styles.highPerformanceHeading}>KPOS WITH HIGH PERFORMANCE</h3>
        <ul style={styles.list}>
          {highPerformanceKPOs.map((kpo, index) => (
            <li key={index} style={styles.listItem}>
              <strong>KPO Name:</strong> {kpo.name} <br />
              <strong>Distribution:</strong> {kpo.distribution} <br />
              <strong>Total Percentage:</strong> {kpo.percentage}%
            </li>
          ))}
        </ul>
      </div>

      {/* Right side: Low performance KPOs */}
      <div style={styles.column}>
        <h2 style={styles.improvementHeading}>IMPROVEMENT NEEDED</h2>
        <h3 style={styles.lowPerformanceHeading}>KPOs REQUIRING IMPROVEMENT</h3>
        <ul style={styles.list}>
          {lowPerformanceKPOs.map((kpo, index) => (
            <li key={index} style={styles.listItem}>
              <strong>KPO Name:</strong> {kpo.name} <br />
              <strong>Distribution:</strong> {kpo.distribution} <br />
              <strong>Total Percentage:</strong> {kpo.percentage}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Styles for the component
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between', // Spacing between the two columns
    padding: '50px',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '1400px', // Full-width coverage
    margin: '20px auto',
  },
  column: {
    width: '48%', // Increased width for each column
    backgroundColor: '#ffffff',
    padding: '40px', // Increased padding for larger cards
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  suitableHeading: {
    fontSize: '26px', // Increased font size
    fontWeight: 'bold', // Bolder font weight
    color: 'seagreen', // Green color for high performance
    textAlign: 'center',
    marginBottom: '25px',
    textTransform: 'uppercase',
  },
  highPerformanceHeading: {
    fontSize: '24px', // Larger font size for headings
    fontWeight: 'bold', // Increased font weight
    color: 'seagreen',
    marginBottom: '20px',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  improvementHeading: {
    fontSize: '26px', // Increased font size
    fontWeight: 'bold', // Bolder font weight
    color: 'tomato', // Yellow color for low performance
    textAlign: 'center',
    marginBottom: '25px',
    textTransform: 'uppercase',
  },
  lowPerformanceHeading: {
    fontSize: '24px', // Larger font size for headings
    fontWeight: 'bold', // Increased font weight
    color: 'tomato',
    marginBottom: '20px',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  },
  listItem: {
    fontWeight: 'bolder',
    padding: '20px 0', // Increased padding for list items
    marginBottom: '15px', // More spacing between items
    borderBottom: '1px solid #ddd',
    fontSize: '22px', // Larger font for easier readability
    color: 'black',
    lineHeight: '1.8', // Easier to read content
    backgroundColor: '#f9f9f9', // Light background for list items
    borderRadius: '5px',
    paddingLeft: '15px',
  },
};

export default KPOPerformanceComparison;
