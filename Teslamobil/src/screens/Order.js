import React ,{ useState, useEffect }from 'react';
import { View,StyleSheet,TouchableOpacity,Alert  } from 'react-native';
import { Layout, Text } from 'react-native-rapi-ui';
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Productlist,ProductsdropdownlistOrder,ExteriordropdownlistOrder,InteriordropdownlistOrder,WheeldropdownlistOrder } from "../jotai/Atoms";
import { atom, useAtom } from 'jotai';


export default function ({ navigation }) {
	const [isFocus, setIsFocus] = useState(false);
  //araba model için
	const [value1, setValue1] = useState(null);
  //exterior için
  const [value2, setValue2] = useState(null);
  //interior için
  const [value3, setValue3] = useState(null);
  //Wheel için 
  const [value4, setValue4] = useState(null);
  //const [cost, setCost] = useState(null);
  //araba model ismi için
  const [value1name,setValue1name]=useState(null)


  const [DataProductsdropdownlistOrder, setDataProductsdropdownlistOrder] = useAtom(ProductsdropdownlistOrder);
  const [DataExteriordropdownlistOrder, setDataExteriordropdownlistOrder] = useAtom(ExteriordropdownlistOrder);
  const [DataInteriordropdownlistOrder, setDataInteriordropdownlistOrder] = useAtom(InteriordropdownlistOrder);
  const [DataWheeldropdownlistOrder, setDataWheeldropdownlistOrder] = useAtom(WheeldropdownlistOrder);
  const [selectedItems, setSelectedItems] = useState([]);

  const fetchDataproduct = async () => {
    try {
      const response = await fetch('http://192.168.1.34:3333/product');
      const data = await response.json();
	  const dropdownData = data.map(item => ({
		label: item.Name,
		value: item.Id.toString(),
    cost:item.Cost.toString() // Convert Id to string if needed
	  }));
	  setDataProductsdropdownlistOrder(dropdownData);
      console.log('API Response1:', dropdownData);
    } catch (error) {
      setError(error);
    }
  };

  const fetchDataexterior = async () => {
    try {
      const response = await fetch('http://192.168.1.34:3333/exterior');
      const data = await response.json();
      //setDataproductlist(data);

	  const dropdownData = data.map(item => ({
		label: item.name,
		value: item.id.toString(),
    cost:item.Cost.toString() // Convert Id to string if needed
	  }));
    setDataExteriordropdownlistOrder(dropdownData);
     //const data1=atom({data});
      // Logging the response to consoler
      console.log('API Response2:', dropdownData);
    } catch (error) {
      setError(error);
    }
  };

  const fetchDatainterior = async () => {
    try {
      const response = await fetch('http://192.168.1.34:3333/interior');
      const data = await response.json();
      //setDataproductlist(data);

	  const dropdownData = data.map(item => ({
		label: item.name,
		value: item.id.toString(),
    cost:item.Cost.toString() // Convert Id to string if needed
	  }));
    setDataInteriordropdownlistOrder(dropdownData);
      console.log('API Response3:', dropdownData);
    } catch (error) {
      setError(error);
    }
  };

  const fetchDatawheel = async () => {
    try {
      const response = await fetch('http://192.168.1.34:3333/wheel');
      const data = await response.json();

	  const dropdownData = data.map(item => ({
		label: item.name,
		value: item.id.toString(),
    cost:item.Cost.toString() // Convert Id to string if needed
	  }));
    setDataWheeldropdownlistOrder(dropdownData);
      console.log('API Response5:', dropdownData);
    } catch (error) {
      setError(error);
    }
  };

  const handleSelectChange = (event, options) => {
    const selectedValue = event.value;
    const selectedItem = options.find(item => item.value === selectedValue);
    setSelectedItems(prevItems => [...prevItems, selectedItem]);
    console.log(selectedItems);
  };

  const calculateTotalCost = () => {
    const Totalcost = selectedItems.reduce((total, item) => total + parseInt(item.cost), 0);
    //console.log(Totalcost);
    return Totalcost;
  };

  const handleSubmit = () => {
    const postData = {
      name: value1name,
      exteriorid: value2,
      interiorid: value3,
      wheelid: value4,
      Cost: calculateTotalCost()
    };
    fetch('http://192.168.1.34:3333/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
    .then(response => response.json())
    .then(data => {
      Alert.alert('Başarılı', 'Kayıt başarı ile yapıldı');
      // Handle success response
    })
    .catch((error) => {
      //console.error('Error:', error);
      // Handle error
      Alert.alert('Başarısız', 'Kayıt başarısızdır');
    });
  };



  useEffect(() => {
    fetchDataproduct();
    fetchDataexterior();
    fetchDatainterior();
    fetchDatawheel();
  }, []);

	return (
		<Layout>
		  <View style={styles.container}>
		  <View style={styles.view1}>
	  <Text style={{ marginBottom: 5 }}>car model</Text>
    {/* ilk */}
	  <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={DataProductsdropdownlistOrder}
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
          handleSelectChange(item, DataProductsdropdownlistOrder)
          setValue1(item.value);
          setValue1name(item.label);
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
      
	  </View>

	  <View style={styles.view1}>
	  <Text style={{ marginBottom: 5 }}>exteiror</Text>
    {/* ikinci */}
	  <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={DataExteriordropdownlistOrder}
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
          handleSelectChange(item, DataExteriordropdownlistOrder)
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
      
	  </View>

	  <View style={styles.view1}>
	  <Text style={{ marginBottom: 5 }}>inteiror</Text>
    {/* üçüncü */}
	  <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={DataInteriordropdownlistOrder}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select item" : "..."}
        searchPlaceholder="Search..."
        value={value3}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          handleSelectChange(item, DataInteriordropdownlistOrder)
          setValue3(item.value);
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
      
	  </View>


	  <View style={styles.view1}>
	  <Text style={{ marginBottom: 5 }}>wheel</Text>
    {/* dört */}
	  <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={DataWheeldropdownlistOrder}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select item" : "..."}
        searchPlaceholder="Search..."
        value={value4}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          handleSelectChange(item, DataWheeldropdownlistOrder)
          setValue4(item.value);
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
      
	  </View>


	  <View style={styles.view1}>
      {/* {renderLabel()} */}
      <Text style={styles.totalCostText}>Total Cost: {calculateTotalCost()} USD</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
	  </View>

 

		  </View>
		</Layout>
	);
}

const styles = StyleSheet.create({
	container: {
	 flex: 1,
	 flexDirection: 'column',
	 backgroundColor: "white", // Arrange views vertically
   },
   view1: {
	 flex: 0.14,
	 padding: 12,
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
   button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  totalCostText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop:10,
    marginBottom:10,
    textAlign: 'center',
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

  
 });