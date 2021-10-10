import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Details = ({item}) => {
    return (
        <View style={styles.item}>
            <Text>Tejas </Text>
        </View>
    )
}
const styles = StyleSheet.create( {
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    }
} );


export default Details
