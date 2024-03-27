import React ,{ useState, useEffect }from 'react';
import { View,StyleSheet,TouchableOpacity,Alert,FlatList} from 'react-native';
import { Layout, Text } from 'react-native-rapi-ui';
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Orderlist } from "../jotai/Atoms";
import { atom, useAtom } from 'jotai';

    const Item = ({ item }) => {
        return (
            <View style={styles.item}>
            <Text style={styles.title}>Name: {item.name}</Text>
            <Text style={styles.subtitle}>Exterior: {item.exterior.name}</Text>
            <Text style={styles.subtitle}>Interior: {item.interior.name}</Text>
            <Text style={styles.subtitle}>Wheel: {item.wheel.name}</Text>
            <Text style={styles.cost}>Total Cost: {item.Cost} USD</Text>
          </View>
        );
      };
export default function ({ navigation }) {
    const [Dataorderlist, setDataorderlist] = useAtom(Orderlist);
    const renderItem = ({ item }) => <Item item={item} />;
    const fetchData = async () => {
        try {
          const response = await fetch('http://192.168.1.34:3333/order');
          const data = await response.json();
          setDataorderlist(data);
    
          console.log('API Response66:', data);
        } catch (error) {
          setError(error);
        }
      };
      useEffect(() => {
        fetchData();
      }, []);
      return ( 
        <View style={styles.container}>
        <FlatList
          data={Dataorderlist}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
        ); 
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 30,
      paddingHorizontal: 20,
    },
    item: {
      backgroundColor: '#fff',
      padding: 20,
      marginBottom: 20,
      borderRadius: 10,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    subtitle: {
      fontSize: 16,
      marginBottom: 3,
    },
    cost: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'green',
    },
  });
