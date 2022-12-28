import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import profile from '../assets/profile.png'
 import home from '../assets/home.png'
import search from '../assets/search.png'
import notifications from '../assets/bell.png'
import settings from '../assets/settings.png'
import logOut from '../assets/logout.png'
import menu from '../assets/menu.png'
import close from '../assets/close.png'
import photo from '../assets/photo.jpg'
import profile from '../assets/profile.png'
import { useRef, useState } from 'react';
import { Animated } from 'react-native';

export default function HomeScreen({ navigation }) {
    const [currentTab, setCurrentTab] = useState("Home")
    const [showMenu, setShowMenu] = useState(false)
  
    const offsetValue = useRef(new Animated.Value(0)).current;
    const scaleValue = useRef(new Animated.Value(1)).current;
    const closeButtonoffSet = useRef(new Animated.Value(0)).current;
    
    return (
      <ScrollView>
         <SafeAreaView style={styles.container}>
       <View style={{justifyContent: 'flex-start',  marginLeft: 10 , padding: 15}}>
          <Image source={profile}
          style={{
            width: 60,
            height: 60,
            borderRadius: 10,
            marginTop: 30,
          }}
          ></Image>
          <Text style={{
            fontSize:20,
            fontWeight: 'bold',
            color: 'white',
            marginTop: 20,
          }}>Jenna Ezarik</Text>
          <TouchableOpacity>
           <Text style={{
            marginTop: 6,
            color: 'white'
           }}>View Profile</Text>
          </TouchableOpacity>
  
          <View style={{marginTop: 50}}>
           {TabButtons(currentTab, setCurrentTab, 'Home', home)}
           {TabButtons(currentTab, setCurrentTab, 'Search', search)}
           {TabButtons(currentTab, setCurrentTab, 'Notifications', notifications)}
           {TabButtons(currentTab, setCurrentTab, 'Settings', settings)}
          </View>
          <View style={{marginTop: 120}}>
            {TabButtons(currentTab, setCurrentTab, 'LogOut', logOut)}
          </View>
       </View>
        <StatusBar style="auto" />
  
        <Animated.View style={{
          flexGrow: 1,
          backgroundColor: 'white',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 15,
          paddingVertical: 20,
          borderRadius: showMenu ? 15 : 0,
          transform: [
            {scale: scaleValue},
            {translateX: offsetValue}
           
          ]
        }}>
  
        <Animated.View style={{
        }}>
        <TouchableOpacity onPress={() => {
          Animated.timing(scaleValue, {
            toValue: showMenu ? 1 : 0.88,
            duration: 300,
            useNativeDriver: true
          })
          .start()
  
          Animated.timing(offsetValue, {
            toValue: showMenu ? 0 : 220,
            duration: 300,
            useNativeDriver: true
          })
          .start()
  
          Animated.timing(closeButtonoffSet, {
            toValue: !showMenu ? 0 : 220,
            duration: 300,
            useNativeDriver: true
          })
          .start()
  
          setShowMenu(!showMenu)
        }}>
          <Image source={showMenu ? close : menu} style={{
            width: 20,
            height: 20,
            tintColor: 'black',
            marginTop: 40
          }}></Image>
        </TouchableOpacity>
        <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            paddingTop: 20,
          }}>{currentTab}</Text>
          <Image source={photo} style={{
            width: '100%',
            height: 300,
            borderRadius: 15,
            marginTop: 20
          }}></Image>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            paddingTop: 15,
            paddingBottom: 5,
          }}>Jenna Ezarik</Text>
          <Text style={{
            fontWeight: 'bold',
          }}>Programmer ,Youtuber, Ps game lover</Text>
        </Animated.View>
  
        </Animated.View>
      </SafeAreaView>
      </ScrollView>
    );
  }
  
  const TabButtons = (currentTab, setCurrentTab,title,image) => {
    return (
      <TouchableOpacity onPress={() => {
        if (title == 'LogOut') {
  
        } else {
          setCurrentTab(title)
        }
      }}
      >
      <View style={{
       flexDirection: 'row',
       alignItems: 'center',
       paddingVertical: 8,
       backgroundColor: currentTab === title ? 'white' : 'transparent',
       borderRadius: 8,
       paddingLeft: 13,
       paddingRight: 35,
       marginTop: 15,
     }}>
     <Image source={image}
      style={{
       width: 25, height:25,
       tintColor: currentTab === title ? '#535901' : 'white',
      }}
     ></Image>
  
     <Text style={{
       fontSize: 15,
       fontWeight: 'bold',
       paddingLeft: 15,
       color : currentTab === title ? '#535901' : 'white',
     }}>{title}</Text>
     </View>
      </TouchableOpacity>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5359D1',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
  });