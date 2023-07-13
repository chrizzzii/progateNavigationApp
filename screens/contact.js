import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native'

const Contact = ( {navigation} ) => {
    const [isFormFilled, setIsFormFilled] = useState(false);

    const handleNamaChange = (text) => {
        setIsFormFilled(text !== '');
      };
    
      const handlePesanChange = (text) => {
        setIsFormFilled(text !== '');
      };

    useEffect(() => {
        const beforeRemoveHandler = (event) => {
          if (!isFormFilled) {
            return; // Jika form kosong, langsung izinkan pengguna meninggalkan layar
          }
          showConfirmationDialog(event);
          return false; // Mencegah perpindahan layar
        };
    
        navigation.addListener('beforeRemove', beforeRemoveHandler);
    
        return () => {
          navigation.removeListener('beforeRemove', beforeRemoveHandler);
        };
      }, [isFormFilled, navigation]);
    
      const showConfirmationDialog = (event) => {
        event.preventDefault();
        Alert.alert(
          'Konfirmasi',
          'Anda telah menuliskan sesuatu dalam formulir. Apakah Anda ingin tetap di sini?',
          [
            { text: 'Tetap di Sini', onPress: () => {} },
            { text: 'Lanjutkan Pergi', onPress: () => navigation.dispatch(event.data.action) },
          ],
          { cancelable: true }
        );
      };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nama Anda"
        style={styles.textInput}
        onChangeText={handleNamaChange}
      />
      <TextInput
        placeholder="Pesan"
        style={styles.textInput}
        onChangeText={handlePesanChange}
      />
      <View style={styles.buttonContainer}>
        <Button title="Kirim" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  textInput: {
    height: 60,
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
})

export default Contact