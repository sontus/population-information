import React from 'react';
import {View, Text,StyleSheet,Image} from 'react-native';

const Details = ({name,code,flag,capital,population,demonym,nativeName,region}) => {
    // console.log(flag);
    return (
        <View style={styles.detailsWrapper}>
            <View style={styles.titleWrapper}>
                <View style={styles.upperTitle}>
                    <Image source={{uri: flag }} style={styles.image} />
                    <Text style={styles.Title}>Name: {name}</Text>
                    <Text style={styles.subTitle}>Country Code: {code}</Text>
                    <Text style={styles.subTitle}>Capital: {capital}</Text>
                    <Text style={styles.subTitle}>Population: {population}</Text>
                   
                    
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailsWrapper :{
        paddingHorizontal: 8
    },
    image: {
        height: 100,
        width: 150,
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