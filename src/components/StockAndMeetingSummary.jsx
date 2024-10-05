// eslint-disable-next-line no-unused-vars
import React from 'react';

const StockAndMeetingSummary = () => {
  const stockReportPercentage = 94.43;
  const meetingAttendeePercentage = 95.78;

  return (
    <div style={styles.container}>
      <div style={{ ...styles.card, marginRight: '40px' }}> {/* Adding margin between cards */}
        <h2 style={styles.greenHeading}>HBL Team Combined Stock Report Result in Percentage</h2>
        <div style={styles.progressContainer}>
          <div
            style={{
              ...styles.progressBar,
              width: `${stockReportPercentage}%`,
              backgroundColor: '#4caf50', // Green for stock report percentage
            }}
          ></div>
          <span style={styles.percentage}>{stockReportPercentage}%</span>
        </div>
      </div>

      <div style={styles.card}>
        <h2 style={styles.gradientHeading}>HBL Team Combined Meeting Performance in Percentage</h2>
        <div style={styles.progressContainer}>
          <div
            style={{
              ...styles.progressBar,
              width: `${meetingAttendeePercentage}%`,
              backgroundColor: '#2196f3', // Blue for meeting performance percentage
            }}
          ></div>
          <span style={styles.percentage}>{meetingAttendeePercentage}%</span>
        </div>
      </div>
    </div>
  );
};

// Enhanced Styling
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    maxWidth: '1000px',
    margin: '50px auto',
    fontFamily: 'cursive', // Added font family
  },
  card: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '15px',
    textAlign: 'center',
    boxShadow: '0px 6px 14px rgba(0, 0, 0, 0.15)',
    width: '45%',
    fontFamily: 'cursive', // Added font family
  },
  greenHeading: {
    fontSize: '26px',
    fontWeight: 'bold',
    color: '#4caf50', // Green color for stock report heading
    marginBottom: '20px',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    fontFamily: 'cursive', // Added font family
  },
  gradientHeading: {
    fontSize: '26px',
    fontWeight: 'bold',
    color: '#008080', // Teal color for meeting performance heading
    marginBottom: '20px',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    backgroundImage: 'linear-gradient(90deg, #00c6ff, #0072ff)', // Gradient effect
    WebkitBackgroundClip: 'text',
    fontFamily: 'cursive', // Added font family
  },
  progressContainer: {
    position: 'relative',
    backgroundColor: '#ddd',
    borderRadius: '30px',
    height: '35px',
    width: '100%',
    overflow: 'hidden',
    fontFamily: 'cursive', // Added font family
  },
  progressBar: {
    height: '100%',
    borderRadius: '30px',
    fontFamily: 'cursive', // Added font family
  },
  percentage: {
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: '20px',
    fontFamily: 'cursive', // Added font family
  },
};

export default StockAndMeetingSummary;
