import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip
)

export default function Chart() {
  const data = {
    labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Hari ini'],
    datasets: [
      {
        label: 'Tidur (jam)',
        data: [7, 6.5, 6, 6, 6, 7, 5],
        borderColor: '#3b82f6',
        tension: 0.4
      },
      {
        label: 'Stres',
        data: [5, 6, 7, 7, 7.5, 5, 8],
        borderColor: '#ef4444',
        borderDash: [5, 5],
        tension: 0.4
      },
      {
        label: 'Mood',
        data: [6, 5.5, 5, 5, 4.5, 6, 3],
        borderColor: '#22c55e',
        borderDash: [2, 4],
        tension: 0.4
      },
      {
        label: 'Kelelahan',
        data: [4, 5, 6, 7, 7, 4, 8],
        borderColor: '#f59e0b',
        tension: 0.4
      },
      {
        label: 'Fokus',
        data: [4, 3.5, 3, 3, 3, 4, 2.5],
        borderColor: '#6366f1',
        borderDash: [3, 3],
        tension: 0.4
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: '#ccc' }
      }
    },
    scales: {
      x: {
        ticks: { color: '#aaa' },
        grid: { color: 'rgba(255,255,255,0.05)' }
      },
      y: {
        min: 0,
        max: 10,
        ticks: { color: '#aaa' },
        grid: { color: 'rgba(255,255,255,0.05)' }
      }
    }
  }

  return (
    <div className='bg-gray-800 rounded-2xl col-span-2 h-96'>
      <Line data={data} options={options} />

    </div>
  )
}
