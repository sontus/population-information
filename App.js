import React, {useRef, useMemo, useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ListItem from './components/ListItem';
import { countres } from './assets/data/country';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import Details from './components/Details';


const ListHeader = () => (
  <>
    <View style={styles.titleWrapper}>
        <Text style={styles.largeTitle}>Population Information</Text>
      </View>
    <View style={styles.divider} />
  </>
)

export default function App() {


  const [selectedCountry, setSelectedCountry] = useState(null);
  const bottomSheetModalRef = useRef(null);

  const snapPoints = useMemo(() => ['50%'], []);

  const openModal = (item) => {
    setSelectedCountry(item);
    bottomSheetModalRef.current?.present();
  }

  return (
    <BottomSheetModalProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.alpha3Code}
        data={countres}
        renderItem={({ item }) => (
          <ListItem
            name={item.name}
            code ={item.alpha3Code}
            capital={item.capital}
            population={item.population}
            logoUrl={item.flags.png}
            onPress={() => openModal(item)}
           
          />
        )}
        ListHeaderComponent={<ListHeader />}
      />

  
      </SafeAreaView>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        style={styles.bottomSheet}
      >
        { selectedCountry ? (
          <Details 
            code={selectedCountry.alpha3Code}
            name={selectedCountry.name}
            capital={selectedCountry.capital}
            population={selectedCountry.population}
            flag={selectedCountry.flags.png}
          />
        )
       : null }
        
      </BottomSheetModal>
      </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleWrapper: {
    marginTop: 30,
    paddingHorizontal: 16,
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: 'green'
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#A9ABB1',
    marginHorizontal: 16,
    marginTop: 16,
  },
  bottomSheet: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -6,
    },
    shadowOpacity: 0.50,
    shadowRadius: 4,
    elevation: 10,
  },
});
