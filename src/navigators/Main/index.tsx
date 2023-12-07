import React, { useEffect } from 'react'
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'
import mainScreensHeaderProps from './mainScreensHeaderProps'
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer'

import TabBarItem from '../../components/TabBarItem'

import HomeScreen from '../../screens/Home'
import TalksScreen from '../../screens/Talks'
import ReportsScreen from '../../screens/Reports'
import ScheduleScreen from '../../screens/Schedule'
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { BackIcon, SettingsIcon, SignOutIcon } from '../../utils/imports/icons'
import useStore from '../../store'
import { useNavigation } from '@react-navigation/native'
import { AppNavProps, AppRoutes } from '../App'
import { TRevisitFStore } from '../../utils/@types/_ministery/revisit'
import TalkView from '../../screens/subscreens/TalkView'
import LeftBack from '../../components/Header/LeftBack'

export type TabsRoutes = {
  Home: undefined
  Talks: {
    single?: boolean
    data?: TRevisitFStore
  }
  TalkView: {
    rev: TRevisitFStore
  }
  Reports: undefined
  Schedule: undefined
}

export type TabsProps = BottomTabNavigationProp<TabsRoutes>

const Tab = createBottomTabNavigator<TabsRoutes>()
const Drawer = createDrawerNavigator()

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const { user, User } = useStore(state => state)
  const navigation = useNavigation<AppNavProps>()

  const signOut = async () => {
    User.signout()
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    })
  }

  return (
    <View style={styles.drawerArea}>
      <View style={{ flex: 1 }}>
        <Text style={styles.username}>{user?.name ?? 'Usuário'}</Text>
        <Text style={styles.email}>{user?.email ?? ''}</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          label={'Configurações'}
          onPress={() => null}
          activeTintColor="#FFF"
          style={styles.drawerItem}
          inactiveTintColor="#AFAFAF"
        />
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <TouchableOpacity onPress={signOut} style={styles.signoutBtn}>
          <Text style={styles.signoutText}>Sair</Text>
          <SignOutIcon />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const MainNavigator = () => {
  const renderTabs = () => {
    return (
      <Tab.Navigator
        sceneContainerStyle={styles.tabsBgColor}
        screenOptions={{
          tabBarStyle: styles.tabBar,
          headerShown: false,
          tabBarShowLabel: false,
          headerShadowVisible: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => TabBarItem('home', focused),
          }}
        />
        <Tab.Screen
          name="Talks"
          component={TalksScreen}
          options={{
            tabBarIcon: ({ focused }) => TabBarItem('talks', focused),
            headerTitle: 'Pessoas contatadas',
            ...(mainScreensHeaderProps as Partial<BottomTabNavigationOptions>),
          }}
        />
        <Tab.Screen
          name="Reports"
          component={ReportsScreen}
          options={{
            tabBarIcon: ({ focused }) => TabBarItem('reports', focused),
            headerTitle: 'Relatórios',
            ...(mainScreensHeaderProps as Partial<BottomTabNavigationOptions>),
          }}
        />
        <Tab.Screen
          name="Schedule"
          component={ScheduleScreen}
          options={{
            tabBarIcon: ({ focused }) => TabBarItem('schedule', focused),
            headerTitle: 'Programação',
            ...(mainScreensHeaderProps as Partial<BottomTabNavigationOptions>),
          }}
        />
      </Tab.Navigator>
    )
  }

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerInactiveTintColor: '#AFAFAF',
        drawerActiveTintColor: '#FFF',
        drawerActiveBackgroundColor: '#333',
        drawerItemStyle: styles.drawerItem,
      }}>
      <Drawer.Screen
        name="Principal"
        options={{
          headerShown: false,
          drawerStyle: {
            width: Dimensions.get('screen').width * 0.7,
          },
        }}
        children={renderTabs}
      />
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  drawerArea: {
    flex: 1,
    backgroundColor: '#232323',
    paddingVertical: 64,
    paddingHorizontal: 24,
  },
  username: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: '600',
  },
  email: {
    fontSize: 14,
    color: '#AFAFAF',
    fontWeight: '400',
  },
  drawerItem: { width: '100%', marginLeft: 0 },
  signoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    alignSelf: 'center',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 6,
  },
  signoutText: {
    fontSize: 20,
    lineHeight: 24,
    color: '#FFF',
    fontWeight: '400',
  },
  tabsBgColor: {
    backgroundColor: 'rgba(23, 23, 23, 1)',
  },
  tabBar: {
    backgroundColor: '#3A3A3A',
    borderTopWidth: 0,
    height: 60,
  },
})

export default MainNavigator
