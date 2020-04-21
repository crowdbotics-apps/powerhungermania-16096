import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Feed31558Navigator from '../features/Feed31558/navigator';
import Leaderboard31550Navigator from '../features/Leaderboard31550/navigator';
import Leaderboard31549Navigator from '../features/Leaderboard31549/navigator';
import TimeTracking31534Navigator from '../features/TimeTracking31534/navigator';
import TimeTracking31533Navigator from '../features/TimeTracking31533/navigator';
import UserProfile31531Navigator from '../features/UserProfile31531/navigator';
import Tutorial31528Navigator from '../features/Tutorial31528/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Feed31558: { screen: Feed31558Navigator },
Leaderboard31550: { screen: Leaderboard31550Navigator },
Leaderboard31549: { screen: Leaderboard31549Navigator },
TimeTracking31534: { screen: TimeTracking31534Navigator },
TimeTracking31533: { screen: TimeTracking31533Navigator },
UserProfile31531: { screen: UserProfile31531Navigator },
Tutorial31528: { screen: Tutorial31528Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
