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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [120, 300, 450, 200, 800, 650, 400],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [500, 200, 300, 700, 100, 900, 600],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

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
            console.log(results);
        };

        fetchData();
    }, []);

    return (
        <Bar options={options} data={data}/>
    );
}
