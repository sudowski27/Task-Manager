import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import GetMonthCount from "./GetMonthCount";
import {useEffect, useState} from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Number of Tasks Added Each Month',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        precision: 0,
      },
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

type MonthCount = {
    month: number;
    count: number;
};

export default function BarUsagePlot() {
    const [monthsCount, setMonthsCount] = useState<number[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const results: number[] = [];

            for (let i = 1; i <= 12; i++) {
                const url = `http://localhost:8080/task_logs/month/${i}`;
                const data = await GetMonthCount(url);

                results.push(data.count);
            }

            setMonthsCount(results);
        };

        fetchData();
    }, []);

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Task added',
          data: monthsCount,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };

    return (
        <Bar options={options} data={data}/>
    );
}
