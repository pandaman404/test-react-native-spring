import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GoBackBtn from '../../components/GoBackBtn';
import { Colors } from '../../constants/colors';
import Title from '../../components/Title';
import { useHandleResultsChart } from '../../hooks/useHandleResultsChart';
import CustomPieChart from '../../components/CustomPieChart';
import ErrorMessage from '../../components/ErrorMessage';

export default function Results() {
  const { chartData, isLoading, errorMessage } = useHandleResultsChart();

  return (
    <SafeAreaView style={styles.container}>
      <GoBackBtn />
      <View style={styles.chartContainer}>
        <Title text='Resultados' />
        {isLoading && <ActivityIndicator size='large' color={Colors.blue} />}
        {!isLoading && chartData.length > 0 && <CustomPieChart pieData={chartData} />}
        {!isLoading && errorMessage && errorMessage.length > 0 && <ErrorMessage text={errorMessage} />}
        {!isLoading && !errorMessage && chartData.length === 0 && (
          <Text style={styles.noResultsText}>No hay resultados</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    backgroundColor: Colors.white,
  },
  chartContainer: {
    alignSelf: 'center',
    width: '75%',
    alignItems: 'center',
  },
  noResultsText: {
    color: Colors.black,
    fontSize: 14,
  },
});
