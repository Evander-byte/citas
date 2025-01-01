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
  FlatList,
  Alert,
} from 'react-native';
import Formulario from './src/components/Formulario';
import Patient from './src/components/Patient';
import PatientInformation from './src/components/PatientInformation';


const App = () => {

  const [modalVisible, setModalVisible] = useState(false)
  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})
  const [modalPatient, setModalPatient] = useState(false)

  const getPatientId = id => {
    const patientEdit = patients.filter(patient => patient.id === id)
    setPatient(patientEdit[0])
  }

  const patientDelete = id => {
    Alert.alert(
      'Are you sure to delete this patient?',
      'A deleted patient cannot be recovered',
      [
        {text: 'Cancel'},
        {text: 'Yes, Delete', onPress: () => {
          const updatedPatients = patients.filter(patientState => patientState.id !== id)
          setPatients(updatedPatients)
        }}
      ]
    )
  }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.titulo}>Administrador de citas {''} <Text style={style.tituloBold}>Veterinaria</Text></Text>

      <Pressable
        style={style.btnNuevaCita}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={style.btnTextoNuevCita}>Nueva Cita</Text>
      </Pressable>
      {
        patients.length === 0 
          ? <Text style={style.noPatients}>No hay pacientes aún</Text> 
          : <FlatList
              style={style.list}
              data={patients}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => {
                return(
                  <Patient
                    item={item}
                    setModalVisible={setModalVisible}
                    getPatientId={getPatientId}
                    patientDelete={patientDelete}
                    setModalPatient={setModalPatient}
                    setPatient={setPatient}
                  />
                )
              }}
            />
      }
      {modalVisible && (
          <Formulario
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
      )}
      <Modal
        visible={modalPatient}
        animationType='fade'
      >
        <PatientInformation
          patient={patient}
          setModalPatient={setModalPatient}
          setPatient={setPatient}
        />
      </Modal>
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
  noPatients: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600'
  },
  list: {
    marginTop: 50,
    marginHorizontal: 30
  }
});

export default App;


