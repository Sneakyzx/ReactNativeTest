import { FlatList, ImageSourcePropType, StyleProp, StyleSheet, Text, TextInput, TextStyle, View } from 'react-native'
import React, { useState } from 'react'
import StyledTouchable from '../components/base/StyledTouchable'
import StyledText from '../components/base/StyledText'
import { navigate } from '../navigation/NavigationService'
import { TAB_NAVIGATION_ROOT } from '../navigation/config/routes'


 

const NoteHomeScreens = () => {
	
	
	const data = [
		{ id: 1, title: 'Title 1', description: 'Description  1' },
		{ id: 2, title: 'Title 2', description: 'Description  2' },
		{ id: 3, title: 'Title 3', description: 'Description  3' },
		{ id: 4, title: 'Title 4', description: 'Description  4' }
	  ];
	
	const [searchQuery, setSearchQuery] = useState('');
	const [filteredData, setFilteredData] = useState(data);

	const handleSearch = (text : any) => {
		setSearchQuery(text);
		const newData = data.filter((item) => {
		  const itemData = item.id.toString();
		  const textData = text.toString();
		  return itemData.indexOf(textData) > -1;
		});
		setFilteredData(newData);
	  };
	
	const goDetails = () => {
		navigate(TAB_NAVIGATION_ROOT.DETAILS_ROUTE.DETAILS_SCREEN,{})
	  } 
	
	const ListItem = ({ item }) => (
	  <StyledTouchable onPress={goDetails} style={styles.parentView}>
		<StyledText customStyle={styles.title} value={item.title} />
		<StyledText customStyle={styles.description} value={item.description} />
	  </StyledTouchable>
  );



  return (
	<View style={{ flex: 1 }}>
	<TextInput
        style={styles.searchBar}
        placeholder="Search by title"
        onChangeText={handleSearch}
        value={searchQuery}
      />
	<FlatList
	  data={filteredData}
	  renderItem={({ item, index }) => <ListItem item={item} />}
	  keyExtractor={(item) => item.id.toString()}
	
	/>
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
	title: {
		color: '#666',
		fontSize: 20,
		fontWeight: 'bold',
		left: 20,

		alignItems : 'center'

	},
	description : {
		marginLeft : 5,
		marginVertical : 20
	},
	searchBar : {
		height: 40,
		borderWidth: 1,
		marginTop: 8,
		marginHorizontal: 16,
		paddingHorizontal: 8,
		borderRadius : 10
	}
})