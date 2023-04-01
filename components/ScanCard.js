import { View, Text, Image } from "react-native";
import React from "react";

const ScanCard = () => {
  return (
    <View style={{ display: "flex", flexDirection: "row", padding:10, backgroundColor:"white",marginHorizontal:20,marginVertical:3, borderColor:"lightgray", borderWidth:1, borderRadius:8 }}>
      <Image
        source={{
          uri: "https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg",
        }}
        style={{ height: 70, width: 70, borderRadius: 40 }}
      />
      <View
        style={{
          flexDirection: "column",
          display: "flex",
          flex: 1,
          marginLeft:30
        //   backgroundColor: "red",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width:"100%",
            justifyContent: "space-between",
            // backgroundColor:"red"
          }}
        >
          <Text style={{fontWeight:"bold", fontSize:16}}>Scan Title</Text>
          <Text style={{color:"gray", fontSize:12}}>26/02/2021</Text>
        </View>
        <Text style={{marginTop:10,color:"gray"}}>Description</Text>
      </View>
    </View>
  );
};

export default ScanCard;
