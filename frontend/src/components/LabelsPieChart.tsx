import { Line, G, Text } from 'react-native-svg';
import { PieChartData } from 'react-native-svg-charts';
import { Colors } from '../constants/colors';

interface LabelsPieChartProps {
  slices: {
    pieCentroid: string;
    labelCentroid: string;
    data: PieChartData;
  }[];
}

const setLabelColor = (fill: string | undefined): string => {
  if (fill) {
    switch (fill) {
      case Colors.black:
      case Colors.brown:
      case Colors.red:
      case Colors.purple:
      case Colors.blue:
        return Colors.white;

      default:
        return Colors.black;
    }
  }
  return Colors.black;
};

export default function LabelsPieChart(props: Partial<LabelsPieChartProps>) {
  const { slices } = props as LabelsPieChartProps;
  return (
    <>
      {slices.map((slice, index) => {
        const { labelCentroid, pieCentroid, data } = slice;
        return (
          <G key={data.key}>
            <Line
              x1={labelCentroid[0]}
              y1={labelCentroid[1]}
              x2={pieCentroid[0]}
              y2={pieCentroid[1]}
              stroke={data?.svg && data.svg.fill}
            />

            <G x={labelCentroid[0]} y={labelCentroid[1]}>
              <Text
                x={0}
                y={10}
                fill={setLabelColor(data.svg?.fill)}
                textAnchor={'middle'}
                alignmentBaseline={'middle'}
                fontSize={10}
                fontWeight={'bolder'}
                stroke={setLabelColor(data.svg?.fill)}
                strokeWidth={0.5}
              >
                {data.key + ' (' + data.value + ')'}
              </Text>
            </G>
          </G>
        );
      })}
    </>
  );
}
