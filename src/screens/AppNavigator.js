import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import List from './List';

const additionalSettings = {
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
}

const WelcomeStack = createStackNavigator({ Home: { screen: Home, navigationOptions: { header: null } } }, { ...additionalSettings });

const AppNavigator = createStackNavigator({ List: { screen: List } }, { ...additionalSettings, initialRouteName: 'List' });

export default createAppContainer(createSwitchNavigator(
    {
        Welcome: WelcomeStack,
        App: AppNavigator,
    },
    {
        initialRouteName: 'Welcome',
    }
))