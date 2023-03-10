import React from "react";
import { SafeAreaView, Text, Image, ScrollView } from "react-native";
import { styles } from "./MovieDetailScreen.styles";

export default function MovieDetailScreen({ route }) {
  // TODO: Recieve the movieItem by destructuring route params.
  const {image, title, year, genres, actors, storyline} = route.params
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Image source={{uri: image}}/>
        <h1>{title}</h1>
        <h3>release {year} <br>{genres}</br></h3>
        <h3>{actors}</h3>
        <h4>{storyline}</h4>

        {/* TODO: Configure this screen to have an image and appropriate text describing the movie. 
                See the example on the spec for design inspiration.
                Feel free to use the styles below. */}
      </ScrollView>
    </SafeAreaView>
  );
}
