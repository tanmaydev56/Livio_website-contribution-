;
import { Line } from 'react-chartjs-2';
import styles from '../styles/graph.module.css';
import { Chart as ChartJS } from 'chart.js/auto';
import up from '../assets/images/UP.png';

const Graph = ({ chartData }) => {
    return (
        <div className={styles.lineGraph}>
            <div className={styles.head}>
            <p className={styles.salesHead}>Overall Sales</p>
            <select className={styles.month} style={{cursor:"pointer"}}>
                <option>This Month</option>
                <option>This Month</option>
                <option>This Month</option>
            </select>
            </div>
            <div className={styles.fig}>
                <p className={styles.figure}>$238,560.93</p>
                <p className={styles.percent}><img src={up} style={{transform:"translate(-5px,0px)"}} alt="up arrow"/>13.02%</p>
            </div>
           
            <Line style={{padding:"20px",marginTop:"10px"}}
                data={chartData}
                options={{
                    scales: {
                        y: {
                            type: 'linear',
                            min: 100,
                            max:300,
                            ticks: {
                                stepSize: 50,
                                callback: function(value) {
                                    return `$${value}K`;
                                },
                                font:{
                                   

family: "Apfel Grotezk",
size: "14.22px",
style: "normal",
weight: "600",
height: "normal"
                                },
                                color: "#BCBCBC",
                               
                            },
                           
                            grid: {
                               
                                borderDash: [10, 5]
                            },
                            border: {
                                display: false
                            }
                        },
                        x: {
                            type: 'linear',
                            min: 24,
                            max: 35,
                            offset: true,
                            ticks: {
                                stepSize: 1,
                                font:{
                                   

                                    family: "Apfel Grotezk",
                                    size: "14.22px",
                                    style: "normal",
                                    weight: "600",
                                    height: "normal",
                                   
                                                                    },
                                                                    color: "#BCBCBC",

                            },
                            paddingLeft:"20px",
                            grid: {
                                display:false,
                                borderDash: [10, 5]
                            },
                            border: {
                                display: false
                            }
                        }
                    },
                   
                    elements: {
                        point: {
                            radius: (ctx) => {
                                const dataIndex = ctx.dataIndex;
                                return [0, 2, 4, 6, 8, 10,11].includes(dataIndex) ? 0 : 6;
                            },
                            borderWidth: 1,
                            borderColor: 'black',
                            backgroundColor: 'white',
                            hoverRadius: 7,
                        },
                        line: {
                            borderColor: 'rgba(37, 31, 211, 1)',
                            borderWidth: 2,
                            borderDash: [],
                            tension: 0.3,
                        }
                    },
                    plugins: {
                        legend: {
                            display: false // This hides the legend
                        },
                        tooltip: {
                            callbacks: {
                                label: function (tooltipItem) {
                                    return tooltipItem.formattedValue;
                                }
                            }
                        }
                    }
                }}
            />
        </div>
    );
};

export default Graph;