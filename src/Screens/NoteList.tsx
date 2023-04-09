import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StyledText from '../components/base/StyledText';
import StyledTouchable from '../components/base/StyledTouchable';



const NoteList = ({ notes }) => {
  
  return (
    <ScrollView style={{height : '100%'}}>
		{notes.map((note : any,index : any) => (
        <StyledTouchable style={styles.parentView}>
        <StyledText key={note.title} customStyle={styles.tittle} value={note.title}/>
		<StyledText key={note.description} customStyle={styles.description} value={note.description}/>
        </StyledTouchable>
      ))}
	  
    </ScrollView>
  );
};

export default NoteList;

const styles = StyleSheet.create({
  parentView: {
		marginVertical: 15,
		width : 300,
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