/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  Modal,
} from 'react-native';
import Formulario from './src/components/Formulario';


const App = () => {

  const [modalVisible, setModalVisible] = useState(false);


  return (
    <SafeAreaView style={style.container}>
      <Text style={style.titulo}>Administrador de citas {''} <Text style={style.tituloBold}>Veterinaria</Text></Text>

      <Pressable
        style={style.btnNuevaCita}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={style.btnTextoNuevCita}>Nueva Cita</Text>
      </Pressable>
      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,

  },
  btnTextoNuevCita: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
});

export default App;


