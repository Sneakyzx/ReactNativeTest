import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StyledTouchable from '../../components/base/StyledTouchable'
import StyledInput from '../../components/common/StyledInput'
import StyledText from '../../components/base/StyledText'
import { navigate } from '../../navigation/NavigationService'
import { TAB_NAVIGATION_ROOT } from '../../navigation/config/routes'

const AddNote = () => {
  const goToAdd = () => {
    navigate(TAB_NAVIGATION_ROOT.ADDNOTE_ROUTE.ADDNOTE_SCREEN,{})
  }
  return (
    <View style={styles.container}>
    <StyledTouchable onPress={goToAdd} customStyle={styles.addButtonBackground}>
        <StyledText value='+' customStyle={styles.addButton}/>
    </StyledTouchable>
    </View>
  )
}

export default AddNote

const styles = StyleSheet.create({
    addButton : {
        fontSize : 30,
        color : 'white',
        alignSelf : 'center',
        
    },
    addButtonBackground : {
        backgroundColor : 'black',
        width : 50,
        height :50,
        borderRadius : 50,
        justifyContent : 'center',
        alignItems : 'center',
        lineHeight : 50,
        
    },
    container : {
      alignItems : 'center',
      justifyContent : 'center',
      paddingRight : 100,
      backgroundColor : '#e54a2b',
      width : '100%'
    }
})