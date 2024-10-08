// ProfileScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch, KeyboardAvoidingView, Image, FlatList } from 'react-native';
import { useColorScheme } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('Divine Anne Narvasa');
  const [email, setEmail] = useState('narvasa.divineanne@gmail.com');
  const [bio, setBio] = useState('This is my profile!');
  const [interests, setInterests] = useState(['Traveling', 'Reading', 'Cooking']); // Example interests
  const [isEditing, setIsEditing] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const colorScheme = useColorScheme();

  useEffect(() => {
    setIsDarkMode(colorScheme === 'dark');
  }, [colorScheme]);

  const handleEditProfile = () => {
    navigation.navigate('ManageUser', {
      name,
      email,
      bio,
      onSave: (newName, newEmail, newBio) => {
        setName(newName);
        setEmail(newEmail);
        setBio(newBio);
      },
    });
  };

  const handleLogout = () => {
    // Handle logout logic (e.g., clear user data, navigate to login screen)
    alert('Logout successful!');
  };

  const styles = isDarkMode ? darkStyles : lightStyles;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>My Profile</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(prev => !prev)}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
        />
      </View>

      <View style={styles.photoWrapper}>
        <Image
          source={require('./assets/divine.jpg')}
          style={styles.profilePhoto}
        />
      </View>

      <View style={styles.profileWrapper}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.text}>{name}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.text}>{email}</Text>

        <Text style={styles.label}>Bio:</Text>
        <Text style={styles.text}>{bio}</Text>
      </View>

      <KeyboardAvoidingView
        behavior="padding"
        style={styles.buttonWrapper}
      >
        <TouchableOpacity onPress={handleEditProfile}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogout}>
          <View style={[styles.button, styles.logoutButton]}>
            <Text style={styles.buttonText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

// Light and Dark Styles
const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  photoWrapper: {
    alignItems: 'center',
    marginTop: 30,
  },
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#C0C0C0',
  },
  profileWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  text: {
    fontSize: 18,
    color: '#000',
    marginBottom: 10,
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#00aaff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 40,
    flex: 1,
    marginHorizontal: 5,
  },
  logoutButton: {
    backgroundColor: '#ff4d4d',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  photoWrapper: {
    alignItems: 'center',
    marginTop: 30,
  },
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#888888',
  },
  profileWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  text: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#00aaff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 40,
    flex: 1,
    marginHorizontal: 5,
  },
  logoutButton: {
    backgroundColor: '#ff4d4d',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfileScreen;
