import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = () => {
    console.log("Novi korisnik:");
    console.log(`Ime: ${firstName}`);
    console.log(`Prezime: ${lastName}`);
    console.log(`Adresa: ${address}`);
    console.log(`Broj telefona: ${phoneNumber}`);

    setFirstName("");
    setLastName("");
    setAddress("");
    setPhoneNumber("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kreiraj korisnika</Text>

      {/* Polje za ime */}
      <TextInput style={styles.input} placeholder="Ime" value={firstName} onChangeText={setFirstName} />

      {/* Polje za prezime */}
      <TextInput style={styles.input} placeholder="Prezime" value={lastName} onChangeText={setLastName} />

      {/* Polje za adresu */}
      <TextInput style={styles.input} placeholder="Adresa" value={address} onChangeText={setAddress} />

      {/* Polje za broj telefona */}
      <TextInput
        style={styles.input}
        placeholder="Broj telefona"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad" // Ovo omogućava specifičnu tastaturu za broj telefona
      />

      {/* Dugme za submit */}
      <Button title="Kreiraj korisnika" onPress={handleSubmit} />
    </View>
  );
};

// Stilizovanje komponenata
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default Create;
