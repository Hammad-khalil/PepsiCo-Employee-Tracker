import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "./MeetingReport.css"; // Ensure to include this CSS file

// Updated employee data
const attendees = [
  { name: "ABDUL FAIZAN", department: "Radiant Distribution 2" },
  { name: "Abdul Waheed", department: "ShanMarketing-1" },
  { name: "Usama Fayyaz", department: "ShanMarketing-1" },
  { name: "ADNAN ZAHID", department: "Arnial Traders" },
  { name: "Ali Raza", department: "Reliance Distribution (Pvt) Ltd" },
  { name: "Syed Saqlain", department: "Reliance Distribution (Pvt) Ltd" },
  { name: "Aqil Shah", department: "Mansehra Traders" },
  { name: "Arif Hussain", department: "Insaf Traders" },
  { name: "Ehtisham Ali", department: "ShanMarketing Warehouse / SERVICES 2" },
  { name: "Ibrar Hussain", department: "ShanMarketing Warehouse / SERVICES 2" },
  { name: "Hammad Ahmed", department: "Chaudary Marketing - I" },
  { name: "KHURRAM SHAHZAD", department: "ZAK Enterprises" },
  { name: "Muhammad Ibrahim", department: "Yousafzai Traders" },
  { name: "Muhammad Umair", department: "F.S.N.A Traders" },
  { name: "Mutair Ali", department: "Radiant Distribution" },
  { name: "Rameez Raja", department: "Gulzar Marketing" },
  { name: "Shoaib Ahmed", department: "GECO Supplies (Pvt) Ltd" },
  { name: "Inzimam Khan", department: "GECO Supplies (Pvt) Ltd" },
  { name: "Syed Azam", department: "Mughal Traders" },
  { name: "Syed Junaid", department: "Pak Trader" },
  { name: "Tufail Fareed", department: "Chaudary Marketing - II" },
  { name: "Waleed Ijaz", department: "Friends Distribution Chakri" },
  { name: "Waqas Ahmed", department: "Alfaroq Agencies" },
  { name: "Zeeshan Ali", department: "S&S Marketing" },
];

const daysInMonth = 30; // Example for the month of September

// Function to generate the date headings (e.g., 1-Sep, 2-Sep, etc.)
const generateDates = () => {
  const dates = [];
  for (let i = 1; i <= daysInMonth; i++) {
    dates.push(`${i}-Sep`);
  }
  return dates;
};

const MeetingStatus = () => {
  const initialStatus = Array.from({ length: daysInMonth }, () => "P");

  // Load statuses from localStorage if available, otherwise use initial values
  const loadStatuses = () => {
    const savedStatuses = localStorage.getItem("meetingStatuses");
    if (savedStatuses) {
      const parsedStatuses = JSON.parse(savedStatuses);
      // Ensure the loaded data has the same length as attendees
      if (Array.isArray(parsedStatuses) && parsedStatuses.length === attendees.length) {
        return parsedStatuses;
      }
    }
    // If not valid, return a new array of initial statuses
    return attendees.map(() => [...initialStatus]);
  };

  const [statuses, setStatuses] = useState(loadStatuses);

  // Save statuses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("meetingStatuses", JSON.stringify(statuses));
  }, [statuses]);

  const changeStatus = (empIndex, dayIndex) => {
    const newStatuses = [...statuses];
    const currentStatus = newStatuses[empIndex][dayIndex];
    const statusCycle = ["P", "A", "O"];
    const nextStatus = statusCycle[(statusCycle.indexOf(currentStatus) + 1) % 3];
    newStatuses[empIndex][dayIndex] = nextStatus;
    setStatuses(newStatuses);
  };

  const calculatePercentage = (statusArray) => {
    if (!Array.isArray(statusArray)) return 0; // Ensure statusArray is an array
    const presentCount = statusArray.filter(status => status === "P").length;
    const offCount = statusArray.filter(status => status === "O").length;

    const totalDays = daysInMonth - offCount; // Total countable days
    if (totalDays === 0) return 0; // Avoid division by zero

    const percentage = (presentCount / totalDays) * 100;
    return Math.max(percentage, 0).toFixed(2); // Ensure percentage is not negative
  };

  const dates = generateDates(); // Generate date headings for the month

  return (
    <div className="table-container">
      <h1>Meeting Attendance Status</h1>

      <table className="meeting-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            {/* Generate date headings */}
            {dates.map((date, index) => (
              <th key={index}>{date}</th>
            ))}
            <th>Total Meeting %</th>
          </tr>
        </thead>
        <tbody>
          {attendees.map((attendee, empIndex) => (
            <tr key={empIndex}>
              <td>{attendee.name}</td>
              <td>{attendee.department}</td>
              {/* Display status for each date */}
              {statuses[empIndex]?.map((status, dayIndex) => (
                <td
                  key={dayIndex}
                  className={`status ${status}`}
                  onClick={() => changeStatus(empIndex, dayIndex)}
                >
                  {status}
                </td>
              ))}
              <td>{calculatePercentage(statuses[empIndex])}%</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Attendance Charts</h2>
      <div className="charts-container">
        {attendees.map((attendee, empIndex) => {
          const totalMeetingPercentage = calculatePercentage(statuses[empIndex]);

          // Ensure charts are not constantly re-rendering
          const chartData = {
            labels: ["Total Meeting %"],
            datasets: [
              {
                label: attendee.name,
                data: [totalMeetingPercentage],
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
            ],
          };

          const chartOptions = {
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                max: 100,
              },
            },
          };

          return (
            <div key={empIndex} className="chart">
              {/* <h3>{attendee.name}</h3> */}
              <Bar data={chartData} options={chartOptions} height={100} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MeetingStatus;
