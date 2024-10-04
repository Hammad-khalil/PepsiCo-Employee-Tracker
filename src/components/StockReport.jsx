import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "./StockReport.css";

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

const daysInMonth = 30;

// Function to load statuses from local storage or initialize with default values
const loadStatuses = () => {
  const savedStatuses = localStorage.getItem("employeeStatuses");
  const initialStatus = Array.from({ length: daysInMonth }, () => "green");

  if (savedStatuses) {
    try {
      const parsedStatuses = JSON.parse(savedStatuses);
      // Check if the length matches employees and daysInMonth
      if (parsedStatuses.length === employees.length && parsedStatuses.every(status => status.length === daysInMonth)) {
        return parsedStatuses;
      }
    } catch (error) {
      console.error("Error parsing statuses from local storage", error);
    }
  }

  // Return default initialization if no valid data is found in local storage
  return employees.map(() => [...initialStatus]);
};

const StockReport = () => {
  const [statuses, setStatuses] = useState(loadStatuses());

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

    const totalDays = daysInMonth - grayCount;
    if (totalDays === 0) return 0;

    const totalPoints = (greenCount * 100) + (yellowCount * 50);
    const percentage = (totalPoints / (totalDays * 100)) * 100;

    return Math.max(percentage, 0).toFixed(2);
  };

  return (
    <div className="table-container">
      <h1>Stock Report Status</h1>
      <div className="indicator-chart">
        {/* Indicator explanations */}
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

      <h2 className="chart-heading">Based on Above Total Stock Report %, Here are the Charts to Analyze Better</h2>
      
      {/* Bar Chart for Each Employee */}
      <div className="bar-chart-container">
        {employees.map((employee, empIndex) => {
          const totalReportPercentage = calculatePercentage(statuses[empIndex]);
          
          const data = {
            labels: [employee.kpo],
            datasets: [
              {
                label: 'Total Report %',
                data: [totalReportPercentage],
                backgroundColor: 'rgba(0, 128, 128, 0.6)',
              },
            ],
          };

          const options = {
            scales: {
              y: {
                beginAtZero: true,
                max: 100,
              },
            },
          };

          return (
            <div key={empIndex} className="bar-chart">
              <Bar data={data} options={options} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StockReport;
