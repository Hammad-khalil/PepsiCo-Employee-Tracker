import { useState, useEffect } from "react";
import "./MeetingReport.css"; // Ensure to include this CSS file

const attendees = [
  { name: "John Doe", department: "Reliance Distribution" },
  { name: "Jane Smith", department: "Marketing" },
  { name: "Alice Johnson", department: "Development" },
  { name: "Bob Brown", department: "HR" },
  { name: "Charlie Davis", department: "Finance" }
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
    return savedStatuses ? JSON.parse(savedStatuses) : attendees.map(() => [...initialStatus]);
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
            <th>KPO</th>
            <th>Distribution</th>
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
              {statuses[empIndex].map((status, dayIndex) => (
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
    </div>
  );
};

export default MeetingStatus;
