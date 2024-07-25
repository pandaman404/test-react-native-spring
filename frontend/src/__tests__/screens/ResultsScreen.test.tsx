import renderer from 'react-test-renderer';
import AppProvider from '../../AppProvider';
import ResultsScreen from '../../screens/ResultsScreen';

describe('<ResultsScreen />', () => {
  it('Should render ResultsScreen', () => {
    const tree = renderer
      .create(
        <AppProvider>
          <ResultsScreen />
        </AppProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
