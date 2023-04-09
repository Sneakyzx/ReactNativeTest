import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import HomeHeader from '../features/home/HomeHeader'
import { TextInput } from 'react-native-gesture-handler'
import Images from '../assets'
import StyledTouchable from '../components/base/StyledTouchable'
import { navigate } from '../navigation/NavigationService'
import { TAB_NAVIGATION_ROOT } from '../navigation/config/routes'


const NoteDetailsScreen = ()  => {
  const goBack = () => {
    navigate(TAB_NAVIGATION_ROOT.HOME_ROUTE.HOME_SCREEN,{})
  } 

  

  const [notes, setNotes] = useState([]); 
  const [newTitle,setNewTitle] = useState('')
  const [newDescription,setNewDescription] = useState('')

  const handleNewTitleChange = (text: any) => {
    setNewTitle(text);
  }

  const handleNewDescriptionChange = (text : any) => {
    setNewDescription(text);
  }

  const handleNewNoteSubmit = () => {
    const updatedNotes = [...notes,{ title: newTitle, description: newDescription}];
    setNewTitle('');
    setNewDescription('');
    setNotes(updatedNotes);
    console.log(updatedNotes);
    
    // navigate(TAB_NAVIGATION_ROOT.HOME_ROUTE.HOME_SCREEN,{newNote: { title: newTitle, description: newDescription }})
  };

 

  return (
    <View>
    <View style={styles.homeScreenHeader}>
      <HomeHeader />
      <View style={styles.HeaderContainer} >
    <StyledTouchable onPress={goBack} customStyle={styles.saveButton}>
    <Image
        style={styles.BTN}
        source={Images.icons.delete} />
    </StyledTouchable>   
    <StyledTouchable onPress={handleNewNoteSubmit} customStyle={styles.saveButton}>
        <Image
        style={styles.BTN}
        source={Images.icons.save} />
    </StyledTouchable>
    </View>
    </View>
    <View>
    <View style={styles.title}>
       <TextInput style={styles.inputTitle} value={newTitle} onChangeText={handleNewTitleChange} placeholder='Title' />
    </View>
    <View style={styles.Description}>
       <TextInput style={styles.inputDes} value={newDescription} onChangeText={handleNewDescriptionChange} placeholder='Description' />
    </View>
    </View>
    </View>
  )
}

export default NoteDetailsScreen

const styles = StyleSheet.create({
    homeScreenHeader : {
        flexDirection : 'row'
      },
      title : {
        marginLeft : 30,
        width : '100%',
        height : 50,
        marginVertical : 30
      },
      inputTitle : {
        fontSize : 25,
        fontWeight : 'bold'
      },
      inputDes : {
        fontSize : 16
      },
      Description : {
        marginLeft : 30,
        width : '100%',
        height : '100%',
        
      },
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
     HeaderContainer : {
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