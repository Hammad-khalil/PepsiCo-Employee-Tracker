const HBLKPOPerformanceReport = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>HBL KPOs Performance Report</h1>
      <p style={styles.paragraph}>
        This report includes stock reports and daily 30-minute stand-up meeting reports, 
        enabling you to analyze the performance effectively.
      </p>
      <footer style={styles.footer}>by FOE Hammad Khalil</footer>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: '40px auto',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    color: '#008080', // Teal color
    fontSize: '40px', // Increased font size
    fontWeight: '900', // Bolder text
    textAlign: 'center',
    marginBottom: '20px',
  },
  paragraph: {
    color: '#555',
    fontSize: '22px', // Increased font size
    fontWeight: '600', // Bolder text
    lineHeight: '1.6',
    textAlign: 'center',
  },
  footer: {
    color: '#008080',
    textAlign: 'right',
    marginTop: '20px',
    fontStyle: 'italic',
  },
};

export default HBLKPOPerformanceReport;
