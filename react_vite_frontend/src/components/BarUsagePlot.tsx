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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

type MonthCount = {
    month: number;
    count: number;
};

type BarUsagePlotProps = {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BarUsagePlot({ isDark, setIsDark }: BarUsagePlotProps) {
    const [monthsCount, setMonthsCount] = useState<number[]>([]);

    const barColor = isDark
    ? 'rgba(220, 255, 250, 0.9)'
    : 'rgba(255, 99, 132, 0.5)';

    const xTicksColor = isDark
    ? '#ffffff'
    : '#000000';

    const xGridColor = isDark
    ? '#ffffff'
    : '#000000';

    const xBorderColor = isDark
    ? '#ffffff'
    : '#000000';

    const yTicksColor = isDark
    ? '#ffffff'
    : '#000000';

    const yGridColor = isDark
    ? '#ffffff'
    : '#000000';

    const yBorderColor = isDark
    ? '#ffffff'
    : '#000000';
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
          backgroundColor: barColor,
        },
      ],
    };

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
        x: {
          ticks: {
            color: xTicksColor, // month labels
          },
          grid: {
            color: xGridColor, // vertical grid lines
          },
          border: {
            color: xBorderColor, // x-axis line
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0,
            color: yTicksColor,
          },
          grid: {
            color: yGridColor, // vertical grid lines
          },
          border: {
            color: yBorderColor, // x-axis line
          },
        },
      },
    };

    return (
        <Bar options={options} data={data}/>
    );
}
