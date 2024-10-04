// eslint-disable-next-line no-unused-vars
import React from 'react';

const DotIndicates = () => {
  return (
    <div style={styles.statusContainer}>
=      <div style={styles.statusRow}>
        <span style={{ ...styles.dot, backgroundColor: 'green' }}></span>
        <span style={styles.statusText}>Green dot indicates Stock Report sent on time</span>
      </div>
      <div style={styles.statusRow}>
        <span style={{ ...styles.dot, backgroundColor: 'yellow' }}></span>
        <span style={styles.statusText}>Yellow dot indicates Stock Report sent late</span>
      </div>
      <div style={styles.statusRow}>
        <span style={{ ...styles.dot, backgroundColor: 'gray' }}></span>
        <span style={styles.statusText}>Gray dot indicates Leave / off-day</span>
      </div>
      <div style={styles.statusRow}>
        <span style={{ ...styles.dot, backgroundColor: 'red' }}></span>
        <span style={styles.statusText}>Red dot indicates Stock Report not sent</span>
      </div>
    </div>
  );
};

const styles = {
  statusContainer: {
    borderTop: '1px solid #ddd', // Separates from the previous content
    paddingTop: '20px',
  },
  subheading: {
    color: '#008080',
    fontSize: '28px',
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: '15px',
  },
  statusRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    justifyContent: 'center',
  },
  dot: {
    height: '15px',
    width: '15px',
    borderRadius: '50%',
    display: 'inline-block',
    marginRight: '10px',
  },
  statusText: {
    fontSize: '18px',
    color: '#555',
  },
};

export default DotIndicates;
