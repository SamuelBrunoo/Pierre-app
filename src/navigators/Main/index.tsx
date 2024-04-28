import React, { FunctionComponent, useEffect } from 'react'
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
  DrawerNavigationProp,
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
import { SignOutIcon } from '../../utils/imports/icons'
import useStore from '../../store'
import { useNavigation } from '@react-navigation/native'
import { AppNavProps, AppRoutes } from '../App'
import { TRevisitFStore } from '../../utils/@types/_ministery/revisit'
import {
  NativeStackHeaderProps,
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import theme from '../../assets/styles/themes'
import ReportDay from '../../screens/subscreens/ReportDay'
import NoteTalk from '../../screens/subscreens/NoteTalk'
import TalkView from '../../screens/subscreens/TalkView'
import LeftBack from '../../components/Header/LeftBack'

// Routes
export type DrawerRoutes = 'Home' | 'Talks'
export type HomeRoutes = 'mainHome' | 'reportDay' | 'noteTalk'
export type TalksRoutes = 'mainTalks' | 'talkView'

export type TDrawerRoutes = {
  [k in DrawerRoutes]: undefined
}
export type THomeRoutes = {
  [k in HomeRoutes]: undefined
}
export type TTalksRoutes = {
  mainTalks: {
    single?: boolean
    data?: TRevisitFStore
  }
  talkView: {
    rev: TRevisitFStore
  }
}

export type StackRoutes = {
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

export type TabsProps = BottomTabNavigationProp<StackRoutes>
export type DrawerProps = DrawerNavigationProp<TDrawerRoutes>

const Drawer = createDrawerNavigator<TDrawerRoutes>()

// Pages navigators
const HomeStack = createNativeStackNavigator<THomeRoutes>()
const TalksStack = createNativeStackNavigator<TTalksRoutes>()

// Pages props
export type HomeProps = NativeStackNavigationProp<THomeRoutes>
export type TalksProps = NativeStackNavigationProp<TTalksRoutes>

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
          style={styles.drawerItem}
          inactiveTintColor={theme.colors.blackPiano}
          activeTintColor={theme.colors.orange}
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
  const renderHome = () => {
    return (
      <HomeStack.Navigator
        screenOptions={{
          headerShown: false,
          headerShadowVisible: false,
          ...(mainScreensHeaderProps as Partial<NativeStackHeaderProps>),
        }}>
        <HomeStack.Screen
          name="mainHome"
          component={HomeScreen}
          options={{ ...drawerOptions.default }}
        />
        <HomeStack.Screen
          name="reportDay"
          component={ReportDay}
          options={{
            headerTitle: "Registrar dia"
          }}
        />
        <HomeStack.Screen
          name="noteTalk"
          component={NoteTalk}
          options={{
            headerTitle: "Anotar conversa"
          }}
        />
      </HomeStack.Navigator>
    )
  }

  const renderTalks = () => {
    return (
      <TalksStack.Navigator
        screenOptions={{
          headerShown: false,
          headerShadowVisible: false,
        }}>
        <TalksStack.Screen
          name="mainTalks"
          component={TalksScreen}
          options={{
            headerTitle: 'Conversas',
            ...(mainScreensHeaderProps as Partial<NativeStackHeaderProps>),
          }}
        />
        <TalksStack.Screen
          name="talkView"
          component={TalkView as FunctionComponent}
          options={{
            headerTitle: '',
            headerLeft: () => <LeftBack />,
            ...(mainScreensHeaderProps as Partial<NativeStackHeaderProps>),
          }}
        />
      </TalksStack.Navigator>
    )
  }

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={drawerOptions.screen}>
      <Drawer.Screen
        name="Home"
        options={{
          ...drawerOptions.default,
          drawerLabel: 'Home',
        }}
        children={renderHome}
      />
      <Drawer.Screen
        name="Talks"
        options={{
          ...drawerOptions.default,
          drawerLabel: 'Conversas',
        }}
        children={renderTalks}
      />
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  drawerArea: {
    flex: 1,
    backgroundColor: theme.background.default,
    paddingVertical: 64,
    paddingHorizontal: 24,
  },
  username: {
    fontSize: 24,
    color: theme.colors.orange,
    fontWeight: '600',
  },
  email: {
    fontSize: 14,
    color: theme.colors.lightGrey,
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
    color: theme.colors.orange,
    fontWeight: '400',
  },
})

const drawerOptions = {
  screen: {
    drawerInactiveTintColor: theme.colors.blackPiano,
    drawerActiveTintColor: theme.colors.orange,
    drawerActiveBackgroundColor: theme.colors.whiteLight,
    drawerItemStyle: styles.drawerItem,
  },
  default: {
    headerShown: false,
    drawerStyle: {
      width: Dimensions.get('screen').width * 0.7,
    },
  },
}

export default MainNavigator
