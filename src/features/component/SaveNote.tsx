import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StyledTouchable from '../../components/base/StyledTouchable'
import StyledInput from '../../components/common/StyledInput'
import StyledText from '../../components/base/StyledText'
import { navigate } from '../../navigation/NavigationService'
import { TAB_NAVIGATION_ROOT } from '../../navigation/config/routes'
import Images from '../../assets'
import DetailsScreen from '../../Screens/DetailsScreen'

const SaveNote = () => {
    const goToDel = () => {
        navigate(TAB_NAVIGATION_ROOT.HOME_ROUTE.HOME_SCREEN,{})
      } 

  const goToSave = () => {
    navigate(TAB_NAVIGATION_ROOT.HOME_ROUTE.HOME_SCREEN,{})
  }
  
  return (
    <View style={styles.container} >
    <StyledTouchable onPress={goToDel} customStyle={styles.saveButton}>
    <Image
        style={styles.BTN}
        source={Images.icons.delete} />
    </StyledTouchable>   
    <StyledTouchable onPress={goToSave} customStyle={styles.saveButton}>
        <Image
        style={styles.BTN}
        source={Images.icons.save} />
    </StyledTouchable>
    </View>
  )
}

export default SaveNote

const styles = StyleSheet.create({
    saveButton : {
       backgroundColor : 'white',
       marginHorizontal : 10
    },
    BTN : {
        width : 35,
        height :35,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#e54a2b',
        
    },
    container : {
      alignItems : 'center',
      justifyContent : 'center',
      paddingRight : 100,
      backgroundColor : '#e54a2b',
      width : '100%',
      flexDirection : 'row'
    },
    delButton : {
        fontSize : 30,
        color : 'white',
        alignSelf : 'center',
        
    },
})