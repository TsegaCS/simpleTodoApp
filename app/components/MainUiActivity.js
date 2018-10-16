import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity} from 'react-native';

import TodoNotesHandler from './TodoNotesHandler';

export default class MainUiActivity extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tempNote: [],
            textNote: '',
        }
    }
    
    render() {

        let notes = this.state.tempNote.map( (val, key) => {
            return <TodoNotesHandler key={key} keyval={key} val={val}
            deleteTodoMethod={ () => this.spliceNote(key) } />
        });

        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textHeader}>Tsega's Todo List</Text>
                </View>
                {/* To put all our todo notes in this element */}
                <ScrollView style={styles.scrollArea}>
                    {notes}
                </ScrollView>

                <View style={styles.footer}>
                
                <TextInput
                    style={styles.inputText}
                    onChangeText={(textNote) => this.setState({textNote})}
                    value={this.state.textNote}
                    placeholder='add ur notes in here'
                    placeholderTextColor='orange'
                    underlineColorAndroid='transparent'>    
                </TextInput>

                </View>

                <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.btnAdd}>
                    <Text style={styles.btnAddText}>+ </Text>
                </TouchableOpacity>

            </View>
        );
    }

    addNote() {
        if (this.state.textNote) {
            var fooDate = new Date();
            this.state.tempNote.push({
                'date': fooDate.getFullYear() + 
                '/' + (fooDate.getMonth() + 1) + 
                '/' + fooDate.getDate(),
                'note': this.state.textNote
            });
            this.setState({ tempNote: this.state.tempNote })
            this.setState({ textNote: '' }); 
        }
        
    }

    spliceNote(key) {
        this.state.tempNote.splice(key, 1);
        this.setState({tempNote: this.state.tempNote})
    }

}

const styles = StyleSheet.create({
container: {
flex: 1, // To have full width and height

},

header: {
    backgroundColor: '#F38630',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
},

textHeader: {
    color: 'white',
    fontSize: 18,
    padding: 26,
},

scrollArea: {
    flex: 1,
    marginBottom: 100,
},

footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
},

inputText: {
    alignSelf: 'stretch',
    color: '#F67FB2',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
},

btnAdd: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#FB6964',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
},

btnAddText: {
    color: '#fff',
    fontSize: 24,
},

});
