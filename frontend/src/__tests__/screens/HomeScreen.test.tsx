import renderer from 'react-test-renderer';
import AppProvider from '../../AppProvider';
import PollScreen from '../../screens/PollScreen';

describe('<PollScreen />', () => {
  it('Should render PollScreen', () => {
    const tree = renderer
      .create(
        <AppProvider>
          <PollScreen />
        </AppProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
