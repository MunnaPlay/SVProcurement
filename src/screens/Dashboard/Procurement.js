import { View, Text, TextInput, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import React,{useState} from 'react'
import { Dropdown } from 'react-native-element-dropdown';

const {height, width} = Dimensions.get('screen');
const dataF = [
  { label: 'Farmer 1', value: '1' },
  { label: 'Farmer 2', value: '2' },
];
const dataC = [
  { label: 'Commodity Item 1', value: '1' },
  { label: 'Commodity Item 2', value: '2' },
];
const dataV = [
  { label: 'Variety 1', value: '1' },
  { label: 'Variety 2', value: '2' },
];

const Procurement = () => {
  const [Fvalue, setFValue] = useState(null);
  const [isFFocus, setFIsFocus] = useState(false);
  const [Cvalue, setCValue] = useState(null);
  const [isCFocus, setCIsFocus] = useState(false);
  const [Vvalue, setVValue] = useState(null);
  const [isVFocus, setVIsFocus] = useState(false);
  return (
    <View style={{flex:1}}>
      <View style={{padding:20,alignItems:'center',margin:20,backgroundColor:'white'}}>
        <TextInput 
          style={{backgroundColor:'white',width:width/1.3,borderRadius:5,paddingLeft:10,borderWidth:0.5}}
          placeholder={'Lot ID'}
        />
        <Dropdown
          style={[styles.dropdown, isFFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={dataF}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFFocus ? 'Farmer Name' : '...'}
          searchPlaceholder="Search..."
          value={Fvalue}
          onFocus={() => setFIsFocus(true)}
          onBlur={() => setFIsFocus(false)}
          onChange={item => {
            setFValue(item.value);
            setFIsFocus(false);
          }}
        />
        <Dropdown
          style={[styles.dropdown, isCFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={dataC}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isCFocus ? 'Commodity Name' : '...'}
          searchPlaceholder="Search..."
          value={Cvalue}
          onFocus={() => setCIsFocus(true)}
          onBlur={() => setCIsFocus(false)}
          onChange={item => {
            setCValue(item.value);
            setCIsFocus(false);
          }}
        />
        <Dropdown
          style={[styles.dropdown, isCFocus && { borderColor: 'blue'},{marginTop:10}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={dataV}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isVFocus ? 'Variety Name' : '...'}
          searchPlaceholder="Search..."
          value={Vvalue}
          onFocus={() => setVIsFocus(true)}
          onBlur={() => setVIsFocus(false)}
          onChange={item => {
            setVValue(item.value);
            setVIsFocus(false);
          }}
        />
        <TextInput 
          style={{backgroundColor:'white',width:width/1.3,borderRadius:5,paddingLeft:10,borderWidth:0.5,marginTop:10}}
          placeholder={'QTY'}
        />
        <TextInput 
          style={{backgroundColor:'white',width:width/1.3,borderRadius:5,paddingLeft:10,borderWidth:0.5,marginTop:10}}
          placeholder={'Date of procurement'}
        />
        <TouchableOpacity style={{backgroundColor:'#F4A120',width:width/1.3,borderRadius:5,paddingLeft:10,marginTop:15}}>
          <Text style={{textAlign:'center',padding:12,fontSize:16,fontWeight:'600',color:'#FFF'}}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Procurement;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    width:width/1.3,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop:10
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
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
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});