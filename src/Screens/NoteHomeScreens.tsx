import { ImageSourcePropType, StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native'
import React from 'react'
import StyledTouchable from '../components/base/StyledTouchable'
import StyledText from '../components/base/StyledText'
import { navigate } from '../navigation/NavigationService'
import { TAB_NAVIGATION_ROOT } from '../navigation/config/routes'



const NoteHomeScreens = () => {
	const goDetails = () => {
		navigate(TAB_NAVIGATION_ROOT.DETAILS_ROUTE.DETAILS_SCREEN,{})
	  } 
  return (
    <View>
     <StyledTouchable style={styles.parentView} onPress={goDetails}>
			<StyledText customStyle={styles.tittle} value={'Title'}/>
			<StyledText customStyle={styles.description} value={'Description'}/>
			</StyledTouchable>
    </View>
  )
}

export default NoteHomeScreens

const styles = StyleSheet.create({
    parentView: {
		marginVertical: 15,
		width : 350,
		height : 100,
		marginLeft : 20,
		borderRadius : 10,
		backgroundColor : '#ccc'
		
	},
	tittle: {
		color: '#666',
		fontSize: 20,
		fontWeight: 'bold',
		left: 20,

		alignItems : 'center'

	},
	description : {
		marginLeft : 5,
		marginVertical : 20
	}
})