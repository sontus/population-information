import React from 'react';
import {View, Text,StyleSheet,Image} from 'react-native';

const Details = ({name , code,flag,capital,population}) => {
    // console.log(flag);
    return (
        <View style={styles.detailsWrapper}>
            <View style={styles.titleWrapper}>
                <View style={styles.upperTitle}>
                    <Image source={{uri: flag }} style={styles.image} />
                    <Text style={styles.Title}>Name: {name}</Text>
                    <Text style={styles.subTitle}>Capital: {capital}</Text>
                    <Text style={styles.subTitle}>Population: {population}</Text>
                    <Text style={styles.subTitle}>Currencies:{name}</Text>
                    <Text style={styles.subTitle}>Region:{name}</Text>
                    <Text style={styles.subTitle}>Area:{name}</Text> 
                    <Text style={styles.subTitle}>Demonym:{name}</Text>
                    <Text style={styles.subTitle}>Timezones:{name}</Text>
                    <Text style={styles.subTitle}>Languages:{name}</Text>
                    <Text style={styles.subTitle}>Independent:{name}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 100,
        borderWidth: 2,
        borderColor: 'green',
        
      },
      titleWrapper: {
        marginLeft: 8,
      },
      Title: {
        fontSize: 18,
      },
      subTitle: {
        marginTop: 2,
        fontSize: 14,
      },
});

export default Details;