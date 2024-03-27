
import React, { useState, useEffect } from 'react';
import {
	Alert,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
  } from 'react-native';
import { Dropdown } from "react-native-element-dropdown";
//import { Layout, Text } from 'react-native-rapi-ui';
import AntDesign from "@expo/vector-icons/AntDesign";
import { atom, useAtom } from 'jotai';
import { Productlist,Productsdropdownlist,Oneproductlist1,Oneproductlist2 } from "../jotai/Atoms";




// const data = [
//   { label: "Item 1", value: "1" },
//   { label: "Item 2", value: "2" },
//   { label: "Item 3", value: "3" },
//   { label: "Item 4", value: "4" },
//   { label: "Item 5", value: "5" },
//   { label: "Item 6", value: "6" },
//   { label: "Item 7", value: "7" },
//   { label: "Item 8", value: "8" },
// ];

export default function ({ navigation }) {
 //const [responseData, setResponseData] = useState(null);
 const [Dataproductlist, setDataproductlist] = useAtom(Productlist);
 const [Dataproductsdropdownlist, setDataproductsdropdownlist] = useAtom(Productsdropdownlist);
 const [Dataoneproductlist1, setDataOneproductlist1] = useAtom(Oneproductlist1);
 const [Dataoneproductlist2, setDataOneproductlist2] = useAtom(Oneproductlist2);
 
 const [isFocus, setIsFocus] = useState(false);
 const [value, setValue] = useState(false);
 const [value1, setValue1] = useState(null);
 const [value2, setValue2] = useState(null);
 const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.1.34:3333/product');
      const data = await response.json();
      setDataproductlist(data);

	  const dropdownData = data.map(item => ({
		label: item.Name,
		value: item.Id.toString() // Convert Id to string if needed
	  }));
	  setDataproductsdropdownlist(dropdownData);
     //const data1=atom({data});
      // Logging the response to console
      console.log('API Response:', dropdownData);
    } catch (error) {
      setError(error);
    }
  };
  const Oneproduuctgetinfo1 = async (id) => {
	try {
	  const response = await fetch(`http://192.168.1.34:3333/product/${id}`);
	  const data = await response.json();
	  setDataOneproductlist1(data);
	  console.log('API Response1:', data);
	} catch (error) {
	  setError(error);
	}
  };
  const Oneproduuctgetinfo2 = async (id) => {
	try {
	  const response = await fetch(`http://192.168.1.34:3333/product/${id}`);
	  const data = await response.json();
	  setDataOneproductlist2(data);
	  console.log('API Response2:', data);
	} catch (error) {
	  setError(error);
	}
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    Oneproduuctgetinfo1(value1);
  }, [value1]);
  useEffect(() => {
    Oneproduuctgetinfo2(value2);
  }, [value2]);

  // const renderLabel = () => {
  //   if (value || isFocus) {
  //     return (
  //       <Text style={[styles.label, isFocus && { color: "blue" }]}>
  //         Dropdown label
  //       </Text>
  //     );
  //   }
  //   return null;
  // };

  return (
    <View style={styles.container}>
		<View style={styles.view1}>
      {/* {renderLabel()} */}
      {/* ilk dropdown */}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={Dataproductsdropdownlist}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select item" : "..."}
        searchPlaceholder="Search..."
        value={value1}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue1(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? "blue" : "black"}
            name="Safety"
            size={20}
          />
        )}
      />
      <View style={{ height: 15 }} />
  {/* ikinci dropdown */}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={Dataproductsdropdownlist}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select item" : "..."}
        searchPlaceholder="Search..."
        value={value2}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue2(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? "blue" : "black"}
            name="Safety"
            size={20}
          />
        )}
      />
      {/* <View style={{ height: 15 }} /> */}

      {/* <TouchableOpacity
        style={{
          backgroundColor: "#0F3460",
          padding: 15,
          borderRadius: 15,
          alignItems: "center",
        }}
        onPress={() =>
          Alert.alert(
            `You have selected\nCountry: ${countryName}\nState: ${stateName}\nCity: ${cityName}`
          )
        }
      >
        <Text
          style={{
            color: "#fff",
            textTransform: "uppercase",
            fontWeight: "300",
          }}
        >
          Submit
        </Text>
      </TouchableOpacity> */}
	  </View>

	  <View style={styles.view2}>     
	  <View style={styles.view3}>
	  <Text style={styles.text}>{Dataoneproductlist1.Name}</Text>
  <Text style={styles.text}>{Dataoneproductlist1.Menzil}</Text>
  <Text style={styles.text}>{Dataoneproductlist1.Maxspeed}</Text>
  <Text style={styles.text}>{Dataoneproductlist1.Geartype}</Text>
  <Text style={styles.text}>{Dataoneproductlist1.Cost}</Text>
	  </View>
      <View style={styles.space}></View>
      <View style={styles.view3}>
	  <Text style={styles.text2}>Isim</Text>
        <Text style={styles.text2}>Menzil</Text>
        <Text style={styles.text2}>Max.Hız</Text>
        <Text style={styles.text2}>Vites</Text>
        <Text style={styles.text2}>Fiyat</Text>
	  </View>
      <View style={styles.space}></View>
      <View style={styles.view3}>

	  <Text style={styles.text}>{Dataoneproductlist2.Name}</Text>
  <Text style={styles.text}>{Dataoneproductlist2.Menzil}</Text>
  <Text style={styles.text}>{Dataoneproductlist2.Maxspeed}</Text>
  <Text style={styles.text}>{Dataoneproductlist2.Geartype}</Text>
  <Text style={styles.text}>{Dataoneproductlist2.Cost}</Text>
	  </View>
	  </View> 

    </View>
  );
}
const styles = StyleSheet.create({
   container: {
    flex: 1,
    flexDirection: 'column', // Arrange views vertically
  },
  view1: {
	flex: 0.17,
    backgroundColor: "white",
    padding: 20,
  },
  view2: {
	flex: 0.83,
    backgroundColor: "white",
	flexDirection: 'row',
    //padding: 20,
  },
  view3: {
    flex: 1,
	flexDirection: 'column',
	width: '30%',
    justifyContent: 'space-around',
     alignItems: 'center',
    backgroundColor: 'white', // Example background color
  },
  text: {
    //textAlign: 'center',
    fontSize: 18,
  },
  text2: {
    //textAlign: 'center',
	color: '#C3002F',
    fontSize: 17,
  },

  space: {
    width: 1, // Example space width
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
