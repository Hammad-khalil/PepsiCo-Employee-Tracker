// eslint-disable-next-line no-unused-vars
import React from 'react';

// Sample data for KPOs
const kpoData = [
  { kpoName: 'ADNAN ZAHID', distribution: 'Arnial Traders', percentage: 100 },
  { kpoName: 'Muhammad Umair', distribution: 'F.S.N.A Traders', percentage: 99 },
  { kpoName: 'Syed Junaid', distribution: 'PAk Traders', percentage: 99 },
  { kpoName: 'Rameez Raja', distribution: 'Gulzar Marketing', percentage: 97 },
];

const KPOHighPerformance = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>KPOs with Highest Performance Based on Meeting & Stock Report</h2>
      
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>KPO Name</th>
              <th style={styles.th}>Distribution Name</th>
              <th style={styles.th}>Average Percentage</th>
              <th style={styles.th}>Performance</th>
            </tr>
          </thead>
          <tbody>
            {kpoData.map((kpo, index) => (
              <tr key={index}>
                <td style={styles.td}>{kpo.kpoName}</td>
                <td style={styles.td}>{kpo.distribution}</td>
                <td style={styles.td}>{kpo.percentage}%</td>
                <td style={styles.td}>
                  <div style={styles.progressBarContainer}>
                    <div
                      style={{
                        ...styles.progressBar,
                        width: `${kpo.percentage}%`,
                        backgroundColor: kpo.percentage > 70 ? '#4caf50' : '#ff9800', // Green for high, orange for low
                      }}
                    ></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px', // Larger font size for heading
    fontWeight: 'bold', // Bold font weight
    color: '#008080', // Teal color
    textAlign: 'center',
    marginBottom: '20px',
    textTransform: 'uppercase',
  },
  tableContainer: {
    width: '100%',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '18px',
  },
  th: {
    textAlign: 'left',
    padding: '10px 20px',
    backgroundColor: '#f0f0f0',
    color: '#333',
    fontWeight: 'bold',
  },
  td: {
    padding: '15px 20px',
    borderBottom: '1px solid #e0e0e0',
  },
  progressBarContainer: {
    width: '100%',
    backgroundColor: '#ddd',
    borderRadius: '20px',
    height: '25px',
    position: 'relative',
  },
  progressBar: {
    height: '100%',
    borderRadius: '20px',
  },
};

export default KPOHighPerformance;
