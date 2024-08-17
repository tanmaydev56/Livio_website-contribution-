import React from 'react';
import "../styles/TotalSales.css";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const TotalSales = () => {
  const data = {
    labels: ['2020', '2021', '2022', '2023'],
    datasets: [
      {
        data: [35, 10, 40, 15],
        backgroundColor: ['#FFA500', '#FFAF7A', '#FF9D5C', '#FF7600'],
        borderColor: ['#FFA500', '#FFAF7A', '#FF9D5C', '#FF7600'],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide default legend
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || '';
            if (context.parsed) {
              label += `: ${context.raw}%`;
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="total-sales">
      <h2>Total Sales</h2>
      <div className="chart-container">
        <div className="sales-legends">
          {data.labels.map((label, index) => (
            <div className="legend-items" key={label}>
              <span className="legend-box" style={{ backgroundColor: data.datasets[0].backgroundColor[index] }} />
              <span className="legend-text">{label}</span>
            </div>
          ))}
        </div>
        <div className="donut-chart">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default TotalSales;
