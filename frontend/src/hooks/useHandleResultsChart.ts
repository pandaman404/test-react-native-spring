import type { MusicGenreResult } from '../@types/MusicGenreResults';
import { useEffect, useState } from 'react';
import { getAllPolls } from '../api/pollService';
import { Poll } from '../@types/Poll';
import { PieChartData } from 'react-native-svg-charts';
import { PieColors } from '../constants/colors';
import { MusicGenre } from '../@types/MusicGenre.enum';

export function useHandleResultsChart() {
  const [chartData, setChartData] = useState<PieChartData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const getPollResults = async () => {
    try {
      setIsLoading(true);
      setErrorMessage('');
      const data = await getAllPolls();
      setChartData(mapPollsToPieChartData(data));
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const mapPollsToResults = (data: Poll[]): MusicGenreResult[] => {
    const results: MusicGenreResult[] = [];

    data.forEach((poll) => {
      const genreName = poll.musicGenre;
      const genreIndex = results.findIndex((result) => result.hasOwnProperty(genreName));
      if (genreIndex < 0) {
        results.push({ [genreName]: 1 });
        return;
      }
      results[genreIndex][genreName] += 1;
    });

    return results;
  };

  const mapPieChartData = (data: MusicGenreResult[]): PieChartData[] => {
    const chartData: PieChartData[] = data.map((item) => {
      const musicGenre = Object.keys(item)[0] as MusicGenre;
      const count = Object.values(item)[0];
      return {
        key: musicGenre,
        value: count,
        svg: { fill: PieColors[musicGenre] },
        arc: { cornerRadius: 5 },
        label: musicGenre,
      };
    });

    return chartData;
  };

  const mapPollsToPieChartData = (data: Poll[]): PieChartData[] => {
    const results = mapPollsToResults(data);
    console.log(results);
    const chartData = mapPieChartData(results);
    return chartData;
  };

  useEffect(() => {
    getPollResults();
  }, []);

  return {
    chartData,
    isLoading,
    errorMessage,
  };
}
