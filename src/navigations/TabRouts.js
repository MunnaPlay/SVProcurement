import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View, Text} from 'react-native';
const Tab = createBottomTabNavigator();
import {Logo} from '../components/images';
import {
  MainScreen,
  L1Scanning,
  L2Scanning,
  Dispatch,
  Transfer,
  Receive,
  Sales,
  Procurement,
} from '../screens/Dashboard';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function TabRouts({navigation}) {
  function LogoTitle({title}) {
    return (
      <View style={{flexDirection:'row'}}>
        <Ionicons onPress={() => navigation.openDrawer()} name='reorder-three' size={24} />
        <Text style={{fontSize:18,fontWeight:'600'}}>{title}</Text>
      </View>
    );
  }

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MainScreen"
        options={{
          headerTitle: props => <LogoTitle {...props} title="Dashboard" />,
          tabBarIcon: ({focused, color, size}) => {
            return <AntDesign name={'dashboard'} size={size} color={color} />;
          },
        }}
        component={MainScreen}
      />
      <Tab.Screen
        name="L1Scanning"
        options={{
          headerTitle: props => <LogoTitle {...props} title="Dashboard" />,
          tabBarIcon: ({focused, color, size}) => {
            return <AntDesign name={'scan1'} size={size} color={color} />;
          },
        }}
        component={L1Scanning}
      />
      <Tab.Screen
        name="L2Scanning"
        options={{
          headerTitle: props => <LogoTitle {...props} title="Dashboard" />,
          tabBarIcon: ({focused, color, size}) => {
            return <AntDesign name={'scan1'} size={size} color={color} />;
          },
        }}
        component={L2Scanning}
      />
      <Tab.Screen
        name="Dispatch"
        options={{
          headerTitle: props => <LogoTitle {...props} title="Dashboard" />,
          tabBarIcon: ({focused, color, size}) => {
            return <MaterialCommunityIcons name={'truck-fast-outline'} size={size} color={color} />;
          },
        }}
        component={Dispatch}
      />
      <Tab.Screen
        name="Transfer"
        options={{
          headerTitle: props => <LogoTitle {...props} title="Dashboard" />,
          tabBarIcon: ({focused, color, size}) => {
            return <MaterialCommunityIcons name={'truck-cargo-container'} size={size} color={color} />;
          },
        }}
        component={Transfer}
      />
      <Tab.Screen
        name="Receive"
        options={{
          headerTitle: props => <LogoTitle {...props} title="Dashboard" />,
          tabBarIcon: ({focused, color, size}) => {
            return <MaterialCommunityIcons name={'hand-coin-outline'} size={size} color={color} />;
          },
        }}
        component={Receive}
      />
      <Tab.Screen
        name="Sales"
        options={{
          headerTitle: props => <LogoTitle {...props} title="Dashboard" />,
          tabBarIcon: ({focused, color, size}) => {
            return <MaterialCommunityIcons name={'point-of-sale'} size={size} color={color} />;
          },
        }}
        component={Sales}
      />
      <Tab.Screen
        name="Procurement"
        options={{
          headerTitle: props => <LogoTitle {...props} title="Dashboard" />,
          tabBarIcon: ({focused, color, size}) => {
            return <MaterialCommunityIcons name={'handshake-outline'} size={size} color={color} />;
          },
        }}
        component={Procurement}
      />
    </Tab.Navigator>
  );
}

export default TabRouts;
