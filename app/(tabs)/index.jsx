import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import User from "../../components/User.jsx";

const Home = () => {
  const users = [
    { id: "1", firstName: "Marko", lastName: "Marković", address: "Ulica 1", phone: "123-456-789" },
    { id: "2", firstName: "Jovan", lastName: "Jovanović", address: "Ulica 2", phone: "987-654-321" },
    { id: "3", firstName: "Nikola", lastName: "Nikolić", address: "Ulica 3", phone: "555-555-555" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <User firstName={item.firstName} lastName={item.lastName} address={item.address} phone={item.phone} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
});

export default Home;
