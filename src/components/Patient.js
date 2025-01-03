import React from 'react'
import {formatDate} from '../helpers/dateformat';
import { Pressable, StyleSheet, Text, View } from 'react-native'

const Patient = ({
    item, 
    setModalVisible, 
    getPatientId,
    patientDelete,
    setModalPatient,
    setPatient
}) => {

    const {patient, registrationDate, id} = item

  return (
    <Pressable
        onLongPress={() => {
            setModalPatient(true),
            setPatient(item)
        }}
    >
        <View style={styles.container}>
            <Text style={styles.label}>Paciente:</Text>
            <Text style={styles.text}>{patient}</Text>
            <Text style={styles.date}>{formatDate(registrationDate)}</Text>
            <View style={styles.btnContainer}>
                <Pressable 
                    style={[styles.btn, styles.btnEdit]}
                    onLongPress={() => {
                        setModalVisible(true)
                        getPatientId(id)
                    }}    
                >
                    <Text style={styles.btnText}>Editar</Text>
                </Pressable>
                <Pressable 
                    style={[styles.btn, styles.btnDelete]}
                    onLongPress={() => {
                        patientDelete(id)
                    }}
                >
                    <Text style={styles.btnText}>Eliminar</Text>
                </Pressable>
            </View>
        </View> 
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        padding: 20,
        borderBottomColor: '#94A3B8',
        borderBottomWidth: 1
    },
    label: {
        color: '#374151',
        textTransform: 'uppercase',
        fontWeight: '700',
        marginBottom: 10
    },
    text: {
        color: '#6D28D9',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10
    },
    date: {
        color: '#374151'
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
    btn: {
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 10
    },
    btnText: {
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 12,
        color: '#FFF'
    },
    btnEdit: {
        backgroundColor: '#F59E0B'
    },
    btnDelete: {
        backgroundColor: '#EF4444'
    }
})

export default Patient