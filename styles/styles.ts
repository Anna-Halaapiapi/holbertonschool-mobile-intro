// shared file to style layout of all screens
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    screenContainer: { // normal screen layout
    flex: 1,
    padding: 20,
    paddingTop: 60,
    },
    centerContainer: {// to centered content (forms, buttons etc) 
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    },
    heading: { // style screen titles
    fontSize: 22,
    marginBottom: 20,
    },
    listItem: { // style list items
    marginTop: 15,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
    emptyList: { // style the no list items message
    marginTop: 20,
  },
    textbox: { //style the input textbox for adding Steps
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 20,
    borderRadius: 8,
  },
  verticalSpace: { // add gaps between elements
    height: 12,
  },
  deleteButton: {// delete button for activity swipe
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    marginTop: 15,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  deleteButtonText: { // style the text within deletebutton for activity swipe
    color: 'white',
    fontWeight: 'bold',
  },
})

