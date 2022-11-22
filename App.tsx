import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyPage from './src/pages/MyPage';
import Home from './src/pages/Home';
import Message from './src/pages/Message';
import {useState} from 'react';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import StartP from './src/pages/StartP';

export type LoggedInParamList = {
  Home: undefined;
  MyPage: undefined;
  Message: undefined;
  Ing: undefined;
  // Complete: {orderId: string};
};

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  StartP: undefined;
};
const Tab = createBottomTabNavigator<LoggedInParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <NavigationContainer>
        {isLoggedIn ? ( // isLoggedIn이 true인 로그인 상태일 때
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{title: '홈'}} />
            <Tab.Screen name="Message" component={Message} />
            {/* <Tab.Screen
              name="Ing"
              component={Ing}
              // options={{headerShown: false}}
            /> */}
            <Tab.Screen
              name="MyPage"
              component={MyPage}
              options={{title: '프로필'}}
            />
          </Tab.Navigator>
        ) : (
          // isLoggedIn이 false인 비로그인 상태일 때
          <Stack.Navigator>
            <Stack.Screen
              name="StartP"
              component={StartP}
              options={{title: '시작', headerShown: false}}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{title: '로그인'}}
            />
            <Stack.Screen
              name="SignUp"
              options={{title: '회원가입'}}
              children={({navigation}) => (
                <SignUp navigation={navigation} setLoggedIn={setLoggedIn} />
              )}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </>
  );
}

export default App;
