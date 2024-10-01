import { useState, useEffect } from "react";
import "./StockReport.css"; // Ensure you import the CSS file

const employees = [
  { region: "MANDRA", kpo: "ABDUL FAIZAN", distribution: "Radiant Distribution 2" },
  { region: "RAWALPINDI", kpo: "Abdul Waheed", distribution: "ShanMarketing-1" },
  { region: "RAWALPINDI", kpo: "Usama Fayyaz", distribution: "ShanMarketing-1" },
  { region: "KASHMIR", kpo: "ADNAN ZAHID", distribution: "Arnial Traders" },
  { region: "ISLAMABAD", kpo: "Ali Raza", distribution: "Reliance Distribution (Pvt) Ltd" },
  { region: "ISLAMABAD", kpo: "Syed Saqlain", distribution: "Reliance Distribution (Pvt) Ltd" },
  { region: "KASHMIR", kpo: "Aqil Shah", distribution: "Mansehra Traders" },
  { region: "ABBOTTABAD", kpo: "Arif Hussain", distribution: "Insaf Traders" },
  { region: "RAWALPINDI", kpo: "Ehtisham Ali", distribution: "ShanMarketing Warehouse / SERVICES 2" },
  { region: "RAWALPINDI", kpo: "Ibrar Hussain", distribution: "ShanMarketing Warehouse / SERVICES 2" },
  { region: "ATTOCK", kpo: "Hammad Ahmed", distribution: "Chaudary Marketing - I" },
  { region: "MIRPUR AJK", kpo: "KHURRAM SHAHZAD", distribution: "ZAK Enterprises" },
  { region: "ABBOTTABAD", kpo: "Muhammad Ibrahim", distribution: "Yousafzai Traders" },
  { region: "ATTOCK", kpo: "Muhammad Umair", distribution: "F.S.N.A Traders" },
  { region: "RWP-OUT", kpo: "Mutair Ali", distribution: "Radiant Distribution" },
  { region: "ABBOTTABAD", kpo: "Rameez Raja", distribution: "Gulzar Marketing" },
  { region: "RAWALPINDI", kpo: "Shoaib Ahmed", distribution: "GECO Supplies (Pvt) Ltd" },
  { region: "RAWALPINDI", kpo: "Inzimam Khan", distribution: "GECO Supplies (Pvt) Ltd" },
  { region: "MUZAFFARABAD", kpo: "Syed Azam", distribution: "Mughal Traders" },
  { region: "KASHMIR", kpo: "Syed Junaid", distribution: "Pak Trader" },
  { region: "ATTOCK", kpo: "Tufail Fareed", distribution: "Chaudary Marketing - II" },
  { region: "ATTOCK", kpo: "Waleed Ijaz", distribution: "Friends Distribution Chakri" },
  { region: "ABBOTTABAD", kpo: "Waqas Ahmed", distribution: "Alfaroq Agencies" },
  { region: "ATTOCK", kpo: "Zeeshan Ali", distribution: "S&S Marketing" },
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
    const redCount = statusArray.filter(status => status === "red").length;
    const yellowCount = statusArray.filter(status => status === "yellow").length;
    const grayCount = statusArray.filter(status => status === "gray").length;

    const totalDays = daysInMonth - grayCount; // Total countable days
    if (totalDays === 0) return 0; // Avoid division by zero

    // Calculate total points from statuses
    const totalPoints = (greenCount * 100) + (yellowCount * 50); // Assigning values
    const percentage = (totalPoints / (totalDays * 100)) * 100; // Calculate percentage based on total possible points

    return Math.max(percentage, 0).toFixed(2); // Ensure percentage is not negative
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
          {employees.map((employee, empIndex) => (
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
              <td>{calculatePercentage(statuses[empIndex])}%</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Horizontal Bar Chart for Each Employee */}
      <div className="bar-chart-container">
        {employees.map((employee, empIndex) => {
          const totalReportPercentage = calculatePercentage(statuses[empIndex]);
          return (
            <div key={empIndex} className="bar-chart">
              <div className="bar" style={{ width: `${totalReportPercentage}%` }}>
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
