import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddNote from '../component/AddNote'
import NoteDetailsScreen from '../../Screens/NoteHomeScreens'
import { SearchBar } from 'react-native-screens'
import SearchNote from '../component/SearchNote'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { navigate } from '../../navigation/NavigationService'
import { TAB_NAVIGATION_ROOT } from '../../navigation/config/routes'
import HomeHeader from './HomeHeader'
import NoteList from '../../Screens/NoteList'
import DetailsScreen from '../../Screens/DetailsScreen'
import NoteHomeScreens from '../../Screens/NoteHomeScreens'

const HomeScreen = ({}) => {
  
  return (
    <ScrollView>
      <View style={styles.homeScreenHeader}>
      <HomeHeader />
      <AddNote />
      </View>
    <View>
    <NoteHomeScreens/>
    </View>
    
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  header : {
    backgroundColor : '#e54a2b',
    height : 70,
    justifyContent : 'center',
    alignItems : 'center',
    flexDirection : 'row',

  },
  textHeader : {
    color : 'white',
    fontSize : 18,
    marginHorizontal : 50
  },
  homeScreenHeader : {
    flexDirection : 'row'
    
  }
})