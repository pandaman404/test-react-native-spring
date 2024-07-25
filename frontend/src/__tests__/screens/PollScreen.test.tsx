import renderer from 'react-test-renderer';
import HomeScreen from '../../screens/HomeScreen';
import AppProvider from '../../AppProvider';

describe('<HomeScreen />', () => {
  it('Should render HomeScreen', () => {
    const tree = renderer
      .create(
        <AppProvider>
          <HomeScreen />
        </AppProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
