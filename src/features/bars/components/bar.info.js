import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, StatusBar, Image } from "react-native";
import { Avatar } from "react-native-paper";

export const BarInfo = ({ bar = {} }) => {
  const {
    name = "Wall Street",
    icon = "https://images.pexels.com/photos/2835547/pexels-photo-2835547.jpeg?auto=compress&cs=tinysrgb&w=1600",
    photos = [
      "https://media.istockphoto.com/id/1339041654/fr/photo/jeune-homme-jouant-de-la-guitare-basse.jpg?b=1&s=612x612&w=0&k=20&c=shIeOZrzc2AAzU9DpDme4niM9YtjWlcKG0mYbrfyHBY=",
      "https://media.istockphoto.com/id/1473330492/fr/photo/bassiste-en-live.jpg?b=1&s=612x612&w=0&k=20&c=KvCt9jHjvQfjAIbfEcOmug761DDqbgthuj7floII5yY=",
    ],
    address = "Edimbourg, Castle Bar",
    openingHours = "8:00 20:00",
    rating = 4.9,
  } = bar;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Avatar.Image source={{ uri: photos[0] }} />
      <Image
        style={{ flex: 0.8 }}
        source={{
          uri: icon,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    color: "#000"
  },
  text: {
    color: "#000"
  }
});
