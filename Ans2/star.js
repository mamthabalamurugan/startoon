import React from 'react';

// Inline styles
const styles = {
  container: {
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f7f8fa',
  },
  header: {
    textAlign: 'center',
    color: '#012E57',
    marginBottom: '20px',
  },
  profileCard: {
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  profileInfo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  profilePic: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#7D7D7D',
    marginRight: '15px',
  },
  details: {
    color: '#012E57',
  },
  detailsName: {
    margin: '0',
    fontSize: '18px',
  },
  detailsId: {
    margin: '0',
    fontSize: '14px',
    color: '#7D7D7D',
  },
  goalSection: {
    textAlign: 'center',
    margin: '20px 0',
  },
  goalReached: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: '#002647',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  circleText: {
    fontSize: '24px',
    color: '#fff',
  },
  goalLabels: {
    marginLeft: '10px',
    textAlign: 'left',
  },
  goalLabelsText: {
    margin: '0',
    fontSize: '14px',
    color: '#012E57',
  },
  labels: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '5px',
  },
  labelText: {
    fontSize: '12px',
    color: '#7D7D7D',
  },
  contactDetails: {
    fontSize: '14px',
    color: '#7D7D7D',
    marginBottom: '15px',
  },
  medicalInfo: {
    fontSize: '14px',
    color: '#7D7D7D',
    marginBottom: '15px',
  },
  medicalHistory: {
    fontSize: '14px',
    color: '#7D7D7D',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  downloadBtn: {
    padding: '5px 10px',
    fontSize: '14px',
    color: '#ffffff',
    backgroundColor: '#FCB000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  downloadBtnHover: {
    backgroundColor: '#e6a200',
  }
};

// PatientProfile Component
const PatientProfile = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2>View patient</h2>
      </header>
      <div style={styles.profileCard}>
        <div style={styles.profileInfo}>
          <div style={styles.profilePic}></div>
          <div style={styles.details}>
            <h3 style={styles.detailsName}>S.Meena, F/23</h3>
            <p style={styles.detailsId}>Patient ID: 87 20200727153457</p>
          </div>
        </div>
        <div style={styles.goalSection}>
          <div style={styles.goalReached}>
            <div style={styles.circle}>
              <span style={styles.circleText}>40%</span>
            </div>
            <div style={styles.goalLabels}>
              <p style={styles.goalLabelsText}>Goal reached</p>
              <div style={styles.labels}>
                <span style={styles.labelText}>EMG</span>
                <span style={styles.labelText}>ROM</span>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.contactDetails}>
          <p>Phone no.: 8022334455</p>
          <p>Mail ID: meenarabinsachin2@gmail.com</p>
        </div>
        <div style={styles.medicalInfo}>
          <p>Affected side: Bilateral</p>
          <p>Condition: Ortho</p>
          <p>Speciality: Osteoarthritis</p>
        </div>
        <div style={styles.medicalHistory}>
          <p>
            <strong>Medical history:</strong> Hypertension, DM, Hypothyroidism
          </p>
          <button
            style={styles.downloadBtn}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.downloadBtnHover.backgroundColor)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.downloadBtn.backgroundColor)}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

// App Component
function App() {
  return (
    <div className="App">
      <PatientProfile />
    </div>
  );
}

export default App;
