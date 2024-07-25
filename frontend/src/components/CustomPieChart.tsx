import { PieChart, PieChartData } from 'react-native-svg-charts';
import LabelsPieChart from './LabelsPieChart';

interface CustomPieChartProps {
  pieData: PieChartData[];
}

export default function CustomPieChart({ pieData }: CustomPieChartProps) {
  return (
    <PieChart style={{ width: 250, height: 250 }} data={pieData}>
      <LabelsPieChart />
    </PieChart>
  );
}
