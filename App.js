/* eslint-disable react-native/no-inline-styles */
import React from "react";
// import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Ionicons as Icon, FontAwesome as IconFA } from "@expo/vector-icons";
import Swiper from "react-native-swiper";

import utils from "./src/utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    marginTop: 55,
    flex: 1,
    // backgroundColor: "lime",
  },
  navBar: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  navTitle: {
    paddingTop: 10,
    fontSize: 18,
    fontWeight: "500",
  },
  navBackBtn: {
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 18,
    color: "#555",
  },
  itemWrapper: {
    backgroundColor: "#f3f3f3",
  },
  touchBox: {
    width: utils.size.width / 3 - utils.pixel,
    height: utils.size.width / 3,
    backgroundColor: "#fff",
  },
  touchBoxContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: utils.size.width,
    borderTopWidth: utils.pixel,
    borderTopColor: "#ccc",
    borderLeftWidth: utils.pixel,
    borderLeftColor: "#ccc",
    borderRightWidth: utils.pixel,
    borderRightColor: "#ccc",
  },
  touchBox1: {
    borderBottomWidth: utils.pixel,
    borderBottomColor: "#ccc",
    borderRightWidth: utils.pixel,
    borderRightColor: "#ccc",
  },
  touchBox2: {
    borderBottomWidth: utils.pixel,
    borderBottomColor: "#ccc",
    borderLeftWidth: utils.pixel,
    borderLeftColor: "#ccc",
  },
  boxContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: utils.size.width / 3,
    height: utils.size.width / 3,
  },
  boxIcon: {
    position: "relative",
    top: -10,
  },
  boxText: {
    position: "absolute",
    bottom: 15,
    width: utils.size.width / 3,
    textAlign: "center",
    left: 0,
    backgroundColor: "transparent",
  },
  slide: {
    flex: 1,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "maroon",
  },
  slideText: {
    position: "absolute",
    bottom: 0,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "rgba(255,255,255,0.5)",
    width: utils.size.width,
    textAlign: "center",
    fontSize: 12,
  },
  image: {
    width: utils.size.width,
    height: 80,
    flex: 1,
    alignSelf: "stretch",
    resizeMode: "cover",
  },
});

const days = [
  {
    key: 0,
    title: "A stopwatch",
    // component: Day1,
    isFA: false,
    icon: "ios-stopwatch",
    size: 48,
    color: "#ff856c",
    hideNav: false,
  },
  {
    key: 1,
    title: "A weather app",
    // component: Day2,
    isFA: false,
    icon: "ios-partly-sunny",
    size: 60,
    color: "#90bdc1",
    hideNav: true,
  },
  {
    key: 2,
    title: "twitter",
    // component: Day3,
    isFA: false,
    icon: "logo-twitter",
    size: 50,
    color: "#2aa2ef",
    hideNav: true,
  },
  {
    key: 3,
    title: "cocoapods",
    // component: Day4,
    isFA: true,
    icon: "contao",
    size: 50,
    color: "#FF9A05",
    hideNav: false,
  },
  {
    key: 4,
    title: "find my location",
    // component: Day5,
    isFA: false,
    icon: "md-pin",
    size: 50,
    color: "#00D204",
    hideNav: false,
  },
  {
    key: 5,
    title: "Spotify",
    // component: Day6,
    isFA: true,
    icon: "spotify",
    size: 50,
    color: "#777",
    hideNav: true,
  },
  {
    key: 6,
    title: "Moveable Circle",
    // component: Day7,
    isFA: false,
    icon: "ios-baseball",
    size: 50,
    color: "#5e2a06",
    hideNav: true,
  },
  {
    key: 7,
    title: "Swipe Left Menu",
    // component: Day8,
    isFA: true,
    icon: "google",
    size: 50,
    color: "#4285f4",
    hideNav: true,
  },
  {
    key: 8,
    title: "Twitter Parallax View",
    // component: Day9,
    isFA: true,
    icon: "twitter-square",
    size: 50,
    color: "#2aa2ef",
    hideNav: true,
  },
  {
    key: 9,
    title: "Tumblr Menu",
    // component: Day10,
    isFA: false,
    icon: "logo-tumblr",
    size: 50,
    color: "#37465c",
    hideNav: true,
  },
  {
    key: 10,
    title: "OpenGL",
    // component: Day11,
    isFA: false,
    icon: "md-contrast",
    size: 50,
    color: "#2F3600",
    hideNav: false,
  },
  {
    key: 11,
    title: "charts",
    // component: Day12,
    isFA: false,
    icon: "ios-stats-chart",
    size: 50,
    color: "#fd8f9d",
    hideNav: false,
  },
  {
    key: 12,
    title: "tweet",
    // component: Day13,
    isFA: false,
    icon: "md-chatbox",
    size: 50,
    color: "#83709d",
    hideNav: true,
  },
  {
    key: 13,
    title: "tinder",
    // component: Day14,
    isFA: true,
    icon: "fire",
    size: 50,
    color: "#ff6b6b",
    hideNav: true,
  },
  {
    key: 14,
    title: "Time picker",
    // component: Day15,
    isFA: false,
    icon: "ios-calendar-outline",
    size: 50,
    color: "#ec240e",
    hideNav: false,
  },
  {
    key: 15,
    title: "Gesture unlock",
    // component: Day16,
    isFA: true,
    icon: "unlock-alt",
    size: 50,
    color: "#32A69B",
    hideNav: true,
  },
  {
    key: 16,
    title: "Fuzzy search",
    // component: Day17,
    isFA: false,
    icon: "md-search",
    size: 50,
    color: "#69B32A",
    hideNav: false,
  },
  {
    key: 17,
    title: "Sortable",
    // component: Day18,
    isFA: false,
    icon: "md-move",
    size: 50,
    color: "#68231A",
    hideNav: true,
  },
  {
    key: 18,
    title: "TouchID to unlock",
    // component: Day19,
    isFA: false,
    icon: "ios-log-in",
    size: 50,
    color: "#fdbded",
    hideNav: true,
  },
  {
    key: 19,
    title: "Single page Reminder",
    // component: Day20,
    isFA: false,
    icon: "ios-list-outline",
    size: 50,
    color: "#68d746",
    hideNav: true,
  },
  {
    key: 20,
    title: "Multi page Reminder",
    // component: Day21,
    isFA: false,
    icon: "newspaper-outline",
    size: 50,
    color: "#fe952b",
    hideNav: true,
  },
  {
    key: 21,
    title: "Google Now",
    // component: Day22,
    isFA: false,
    icon: "ios-mic-outline",
    size: 50,
    color: "#4285f4",
    hideNav: true,
  },
  {
    key: 22,
    title: "Local WebView",
    // component: Day23,
    isFA: true,
    icon: "safari",
    size: 50,
    color: "#23bfe7",
    hideNav: false,
  },
  {
    key: 23,
    title: "Youtube scrollable tab",
    // component: Day24,
    isFA: false,
    icon: "logo-youtube",
    size: 50,
    color: "#e32524",
    hideNav: true,
  },
  {
    key: 24,
    title: "custome in-app browser",
    // component: Day25,
    isFA: false,
    icon: "ios-globe",
    size: 50,
    color: "#00ab6b",
    hideNav: true,
  },
  {
    key: 25,
    title: "swipe and switch",
    // component: Day26,
    isFA: false,
    icon: "md-shuffle",
    size: 50,
    color: "#893D54",
    hideNav: true,
  },
  {
    key: 26,
    title: "iMessage Gradient",
    // component: Day27,
    isFA: false,
    icon: "ios-chatbubbles",
    size: 50,
    color: "#248ef5",
    hideNav: false,
  },
  {
    key: 27,
    title: "iMessage image picker",
    // component: Day28,
    isFA: false,
    icon: "md-images",
    size: 50,
    color: "#f5248e",
    hideNav: true,
  },
  {
    key: 28,
    title: "3d touch",
    // component: Day29,
    isFA: false,
    icon: "ios-navigate",
    size: 50,
    color: "#48f52e",
    hideNav: false,
  },
  {
    key: 29,
    title: "Push Notifications",
    // component: Day30,
    isFA: false,
    icon: "md-notifications",
    size: 50,
    color: "#f27405",
    hideNav: false,
  },
];

export default function App() {
  const boxes = days.map(function (elem, index) {
    return (
      <TouchableHighlight
        key={elem.key}
        style={[
          styles.touchBox,
          index % 3 === 2 ? styles.touchBox2 : styles.touchBox1,
        ]}
        underlayColor="#eee"
        onPress={() => true}
      >
        <View style={styles.boxContainer}>
          <Text style={styles.boxText}>Day {index + 1}</Text>
          {elem.isFA ? (
            <IconFA
              size={elem.size}
              name={elem.icon}
              style={[styles.boxIcon, { color: elem.color }]}
            />
          ) : (
            <Icon
              size={elem.size}
              name={elem.icon}
              style={[styles.boxIcon, { color: elem.color }]}
            />
          )}
        </View>
      </TouchableHighlight>
    );
  });
  return (
    <>
      <ScrollView
        style={styles.mainView}
        bounces={false}
        // stickyHeaderIndices={[0]}
        // StickyHeaderComponent={<Text>React Native</Text>}
      >
        <Swiper
          height={150}
          showsButtons={false}
          autoplay={true}
          activeDot={
            <View
              style={{
                backgroundColor: "rgba(255,255,255,0.8)",
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3,
              }}
            />
          }
        >
          <TouchableHighlight
            style={{ flex: 1 }}
            onPress={() => console.warn("Pressed un")}
          >
            <View style={styles.slide}>
              <Image
                style={styles.image}
                source={require("./assets/images/day1.png")}
              />
              <Text style={styles.slideText}>Day1: Timer</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={{ flex: 1 }}
            onPress={() => console.warn("Pressed deux")}
          >
            <View style={styles.slide}>
              <Image
                style={styles.image}
                source={require("./assets/images/day2.png")}
              />
              <Text style={styles.slideText}>Day2: Weather</Text>
            </View>
          </TouchableHighlight>
        </Swiper>
        <View style={styles.touchBoxContainer}>{boxes}</View>
      </ScrollView>
      {/* <StickyHeader /> */}
    </>
  );
}
