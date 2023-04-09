import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { navigate } from '../../navigation/NavigationService'
import { TAB_NAVIGATION_ROOT } from '../../navigation/config/routes'
import StyledText from '../../components/base/StyledText'
import StyledTouchable from '../../components/base/StyledTouchable'


const HomeHeader = () => {
 
  return (
    <View style={styles.header} >
    <Text style={styles.textHeader}>APP NOTE</Text>
    </View>
  )
}

export default HomeHeader

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
        
    }
})