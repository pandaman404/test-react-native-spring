import { PieChart, PieChartData } from 'react-native-svg-charts';
import LabelsPieChart from './LabelsPieChart';

interface CustomPieChartProps {
  pieData: PieChartData[];
}

export default function CustomPieChart({ pieData }: CustomPieChartProps) {
  return (
    <PieChart style={{ width: 300, height: 300 }} data={pieData}>
      <LabelsPieChart />
    </PieChart>
  );
}
