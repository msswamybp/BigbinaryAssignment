
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';



import Homepage from "./../screens/Homepage";
import HomeDetailpage from "./../screens/HomeDetailpage";
import SplashScreen from './../screens/SplashScreen'
import ListPage from './../screens/ListPage'
import ImageDetailePage from './../screens/ImageDetailePage'
import BookmarkPage from './../screens/BookmarkPage'
import SummaryPage from './../screens/SummaryPage'
const SignedOutNavigator1 = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: { header: null, gesturesEnabled: false }
  },

  BookmarkPage: {
    screen: BookmarkPage,
    navigationOptions: { header: null, gesturesEnabled: false }
  },
  SummaryPage: {
    screen: SummaryPage,
    navigationOptions: { header: null, gesturesEnabled: false }
  },
  ListPage: {
    screen: ListPage,
    navigationOptions: { header: null, gesturesEnabled: false }
  },
  ImageDetailePage: {
    screen: ImageDetailePage,
    navigationOptions: { header: null, gesturesEnabled: false }
  },
  Homepage: {
    screen: Homepage,
    navigationOptions: { header: null, gesturesEnabled: false }
  },

  HomeDetailpage: {
    screen: HomeDetailpage,
    navigationOptions: { header: null, gesturesEnabled: false }
  },





});

const SignedOutNavigator = createAppContainer(SignedOutNavigator1);
export default SignedOutNavigator;