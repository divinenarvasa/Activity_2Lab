// ManageUserScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const ManageUserScreen = ({ route, navigation }) => {
  const { name, email, bio, interests, onSave } = route.params;

  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newBio, setNewBio] = useState(bio);
  const [newInterests, setNewInterests] = useState(interests);

  const handleSave = () => {
    onSave(newName, newEmail, newBio, newInterests);
    navigation.goBack(); // Navigate back to the Profile screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>

      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={newName}
        onChangeText={setNewName}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={newEmail}
        onChangeText={setNewEmail}
      />

      <Text style={styles.label}>Bio:</Text>
      <TextInput
        style={styles.input}
        value={newBio}
        onChangeText={setNewBio}
      />

      <Text style={styles.label}>Interests:</Text>
      <FlatList
        data={newInterests}
        renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
        keyExtractor={item => item}
      />

      <TouchableOpacity onPress={handleSave}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E8EAED',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderColor: '#C0C0C0',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: '#00aaff',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ManageUserScreen;
