import { useState, useEffect } from "react";
import "./StockReport.css"; // Ensure you import the CSS file

const employees = [
  { region: "MANDRA", kpo: "ABDUL FAIZAN", distribution: "Radiant Distribution 2" },
  { region: "RAWALPINDI", kpo: "Abdul Waheed", distribution: "ShanMarketing-1" },
  // ... (other employee objects)
];

const daysInMonth = 30; // Example for the month of September

const StockReport = () => {
  const initialStatus = Array.from({ length: daysInMonth }, () => "green");

  // Load statuses from localStorage if available, otherwise use initial values
  const loadStatuses = () => {
    const savedStatuses = localStorage.getItem("employeeStatuses");
    return savedStatuses ? JSON.parse(savedStatuses) : employees.map(() => [...initialStatus]);
  };

  const [statuses, setStatuses] = useState(loadStatuses);

  // Save statuses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("employeeStatuses", JSON.stringify(statuses));
  }, [statuses]);

  const changeStatus = (empIndex, dayIndex) => {
    const newStatuses = [...statuses];
    const currentStatus = newStatuses[empIndex][dayIndex];
    const statusCycle = ["green", "red", "yellow", "gray"];
    const nextStatus = statusCycle[(statusCycle.indexOf(currentStatus) + 1) % 4];
    newStatuses[empIndex][dayIndex] = nextStatus;
    setStatuses(newStatuses);
  };

  const calculatePercentage = (statusArray) => {
    const greenCount = statusArray.filter(status => status === "green").length;
    const yellowCount = statusArray.filter(status => status === "yellow").length;
    const grayCount = statusArray.filter(status => status === "gray").length;

    const totalDays = daysInMonth - grayCount; // Total countable days
    if (totalDays === 0) return 0; // Avoid division by zero

    // Calculate total points from statuses
    const totalPoints = (greenCount * 100) + (yellowCount * 50); // Assigning values
    const percentage = (totalPoints / (totalDays * 100)) * 100; // Calculate percentage based on total possible points

    return Math.max(percentage, 0).toFixed(2); // Ensure percentage is not negative
  };

  const getFillColor = (percentage) => {
    if (percentage >= 99) return "rgba(76, 175, 80, 1)"; // Green
    if (percentage >= 98) return "rgba(148, 0, 211, 1)"; // Violet
    if (percentage >= 97) return "rgba(128, 0, 128, 1)"; // Purple
    if (percentage >= 96) return "rgba(0, 128, 128, 1)"; // Teal
    if (percentage >= 95) return "rgba(0, 0, 255, 1)"; // Blue
    return "rgba(255, 255, 0, 1)"; // Yellow
  };

  return (
    <div className="table-container">
      <h1>Stock Report Status</h1>

      {/* Indicator Chart */}
      <div className="indicator-chart">
        <div className="indicator-item">
          <div className="circle green"></div> Green dot indicates Stock Report sent on time
        </div>
        <div className="indicator-item">
          <div className="circle red"></div> Red dot indicates Stock Report not sent
        </div>
        <div className="indicator-item">
          <div className="circle yellow"></div> Yellow dot indicates Stock Report sent late
        </div>
        <div className="indicator-item">
          <div className="circle gray"></div> Gray dot indicates Off-Day or Leave
        </div>
      </div>

      <table className="report-table">
        <thead>
          <tr>
            <th>Region</th>
            <th>KPO Name</th>
            <th>Distribution Name</th>
            <th>Status</th>
            <th>Total Report %</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, empIndex) => {
            const totalReportPercentage = calculatePercentage(statuses[empIndex]);
            
            return (
              <tr key={empIndex}>
                <td>{employee.region}</td>
                <td>{employee.kpo}</td>
                <td>{employee.distribution}</td>
                <td className="status-circles">
                  {statuses[empIndex].map((status, dayIndex) => (
                    <div
                      key={dayIndex}
                      className={`circle ${status}`}
                      onClick={() => changeStatus(empIndex, dayIndex)}
                    ></div>
                  ))}
                </td>
                <td>{totalReportPercentage}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Horizontal Bar Chart for Each Employee */}
      <div className="bar-chart-container">
        {employees.map((employee, empIndex) => {
          const totalReportPercentage = calculatePercentage(statuses[empIndex]);

          // Fill color based on percentage
          const fillColor = getFillColor(totalReportPercentage); // Use the new fillColor function
          const backgroundColor = 'rgba(76, 175, 80, 0.1)'; // Light green background for professional look

          return (
            <div key={empIndex} className="bar-chart">
              <div className="bar" 
                style={{ 
                  width: `${totalReportPercentage}%`, 
                  backgroundColor: fillColor, 
                  border: `1px solid ${backgroundColor}`, // Border color matches background
                }}
              >
                {totalReportPercentage}%
              </div>
              <span className="employee-label">{employee.kpo}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StockReport;
