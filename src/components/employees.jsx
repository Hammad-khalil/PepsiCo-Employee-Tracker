// import React from "react";

// const calculatePercentage = (data) => {
//   // Ensure data is an array before using filter
//   if (!Array.isArray(data)) {
//     console.error("Data is not an array or is undefined");
//     return 0;
//   }
  
//   // Apply your filter logic here
//   const filteredData = data.filter(item => item.isActive);
  
//   // For demonstration, assuming a percentage calculation
//   const percentage = (filteredData.length / data.length) * 100;
//   return percentage.toFixed(2);
// };

// const StockReport = ({ employees }) => {
//   // Ensure employees is an array
//   if (!Array.isArray(employees)) {
//     return <div>No employees found!</div>;
//   }

//   return (
//     <div>
//       <h2>Stock Report</h2>
//       {employees.map((employee) => (
//         <div key={employee.id}>
//           <h3>{employee.name}</h3>
//           <p>Percentage of active stock: {calculatePercentage(employee.data)}%</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// // Sample employees data
// const employeesData = [
//   {
//     id: 1,
//     name: "John Doe",
//     data: [{ isActive: true }, { isActive: false }, { isActive: true }]
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     data: [{ isActive: false }, { isActive: false }, { isActive: true }]
//   },
//   // Add more employees as needed
// ];

// const App = () => {
//   return (
//     <div>
//       <StockReport employees={employeesData} />
//     </div>
//   );
// };

// export default App;
// const employees = [
//         { region: "MANDRA", kpo: "ABDUL FAIZAN", distribution: "Radiant Distribution 2" },
//         { region: "RAWALPINDI", kpo: "Abdul Waheed", distribution: "ShanMarketing-1" },
//         { region: "RAWALPINDI", kpo: "Usama Fayyaz", distribution: "ShanMarketing-1" },
//         { region: "KASHMIR", kpo: "ADNAN ZAHID", distribution: "Arnial Traders" },
//         { region: "ISLAMABAD", kpo: "Ali Raza", distribution: "Reliance Distribution (Pvt) Ltd" },
//         { region: "ISLAMABAD", kpo: "Syed Saqlain", distribution: "Reliance Distribution (Pvt) Ltd" },
//         { region: "KASHMIR", kpo: "Aqil Shah", distribution: "Mansehra Traders" },
//         { region: "ABBOTTABAD", kpo: "Arif Hussain", distribution: "Insaf Traders" },
//         { region: "RAWALPINDI", kpo: "Ehtisham Ali", distribution: "ShanMarketing Warehouse / SERVICES 2" },
//         { region: "RAWALPINDI", kpo: "Ibrar Hussain", distribution: "ShanMarketing Warehouse / SERVICES 2" },
//         { region: "ATTOCK", kpo: "Hammad Ahmed", distribution: "Chaudary Marketing - I" },
//         { region: "MIRPUR AJK", kpo: "KHURRAM SHAHZAD", distribution: "ZAK Enterprises" },
//         { region: "ABBOTTABAD", kpo: "Muhammad Ibrahim", distribution: "Yousafzai Traders" },
//         { region: "ATTOCK", kpo: "Muhammad Umair", distribution: "F.S.N.A Traders" },
//         { region: "RWP-OUT", kpo: "Mutair Ali", distribution: "Radiant Distribution" },
//         { region: "ABBOTTABAD", kpo: "Rameez Raja", distribution: "Gulzar Marketing" },
//         { region: "RAWALPINDI", kpo: "Shoaib Ahmed", distribution: "GECO Supplies (Pvt) Ltd" },
//         { region: "RAWALPINDI", kpo: "Inzimam Khan", distribution: "GECO Supplies (Pvt) Ltd" },
//         { region: "MUZAFFARABAD", kpo: "Syed Azam", distribution: "Mughal Traders" },
//         { region: "KASHMIR", kpo: "Syed Junaid", distribution: "Pak Trader" },
//         { region: "ATTOCK", kpo: "Tufail Fareed", distribution: "Chaudary Marketing - II" },
//         { region: "ATTOCK", kpo: "Waleed Ijaz", distribution: "Friends Distribution Chakri" },
//         { region: "ABBOTTABAD", kpo: "Waqas Ahmed", distribution: "Alfaroq Agencies" },
//         { region: "ATTOCK", kpo: "Zeeshan Ali", distribution: "S&S Marketing" }
//     ];