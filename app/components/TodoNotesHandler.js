import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class TodoNotesHandler extends Component{
    render() {
        return(
            <View key={this.props.keyval} style={styles.notesView}>
                <Text style={styles.textNote}>{this.props.val.date}</Text>
                <Text style={styles.textNote}>{this.props.val.note}</Text>

                <TouchableOpacity onPress={this.props.deleteTodoMethod} style={styles.deleteTodoMethod}>
                    <Text style={styles.deleteText}>X</Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    notesView: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',    
    },

    textNote: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63',
    },

    deleteTodoMethod: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#29B0b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
    },

    deleteText: {
        color: '#FFFFFF',
    }

});