import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import HomeHeader from '../features/home/HomeHeader'
import SaveNote from '../features/component/SaveNote'
import StyledInput from '../components/common/StyledInput'
import { TextInput } from 'react-native-gesture-handler'
import Images from '../assets'
import StyledTouchable from '../components/base/StyledTouchable'
import { navigate } from '../navigation/NavigationService'
import { TAB_NAVIGATION_ROOT } from '../navigation/config/routes'
import NoteList from './NoteList'
import HomeScreen from '../features/home/HomeScreen'
import Notes from '../models'
import StyledCheckBox from '../components/base/StyledCheckBox'
import StyledRadioButton from '../components/base/StyledRadioButton'
import ItemRadioButton from '../components/base/ItemRadioButton'
import ColorSelector from '../features/component/ColorSelector'

interface EditNoteProps {
  isVisible: boolean
  onClose: () => void
  onSave: (data: any) => void
  data?: Notes
}

const NoteDetailsScreen = (props : EditNoteProps) => {

  const colors = ['#87D3F5', '#BDE991', '#BAAAFB']
  const [colorIndex, setColorIndex] = useState(0)


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
    const updatedNotes = [...notes, { title: newTitle, description: newDescription}];
    setNotes(updatedNotes);
    setNewTitle('');
    setNewDescription('');
    // navigate(TAB_NAVIGATION_ROOT.HOME_ROUTE.HOME_SCREEN,{newNote: { title: newTitle, description: newDescription }})
  };

  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleColorSelection = (color) => {
    switch (color) {
      case 'yellow':
        setBackgroundColor('yellow');
        break;
      case 'gray':
        setBackgroundColor('gray');
        break;
      case 'purple':
        setBackgroundColor('purple');
        break;
      case 'red':
        setBackgroundColor('red');
        break;
      case 'green':
        setBackgroundColor('green');
        break;
      case 'blue':
        setBackgroundColor('blue');
        break;
      default:
        setBackgroundColor('white');
    }
  };

  return (
    <View>
    <View style={styles.homeScreenHeader}>
      <HomeHeader />
      <View style={styles.container} >
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
    <View style={{backgroundColor : backgroundColor}}>
    <View style={styles.title}>
       <TextInput style={styles.inputTitle} value={newTitle} onChangeText={handleNewTitleChange} placeholder='Input Title' />
    </View>
    <View style={styles.Description}>
       <TextInput style={styles.inputDes} value={newDescription} onChangeText={handleNewDescriptionChange} placeholder='Input Description' />
       <NoteList notes={notes} />
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ColorSelector onColorSelected={handleColorSelection}  />
    </View>
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
        fontWeight : 'bold',
    
      },
      inputDes : {
        fontSize : 16
      },
      Description : {
        marginLeft : 30,
        width : '100%',
        height : 500,
        
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