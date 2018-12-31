import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import List from './List';

const AppNavigator = createStackNavigator(
    {
        Home: { screen: Home, navigationOptions: { header: null } },
        List: { screen: List }
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#FFDD0D',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                fontWeight: '400',
            },
        },
        cardStyle: { backgroundColor: '#FFDD0D' }
    });

export default createAppContainer(AppNavigator)