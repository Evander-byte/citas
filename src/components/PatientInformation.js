import React from 'react'
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { formatDate } from '../helpers/dateformat'

const PatientInformation = ({patient: info, setModalPatient, setPatient}) => {

    const {
        patient,
        owner,
        email,
        phone,
        registrationDate,
        symptoms
    } = info
  return (
    <SafeAreaView
        style={styles.container}
    >
        <Text style={styles.titulo}>Informacion {''} 
            <Text style={styles.tituloBold}>Paciente</Text>
        </Text>
        <View>
            <Pressable
                style={styles.btnClose}
                onLongPress={() => {
                    setModalPatient(false)
                    setPatient({})
                }}
            >
                <Text style={styles.btnCloseText}>Cerrar</Text>
            </Pressable>
        </View>
        <View style={styles.content}>
            <View style={styles.field}>
                <Text style={styles.label}>Nombre Paciente:</Text>
                <Text style={styles.info}>{patient}</Text>
            </View>
            <View style={styles.field}>
                <Text style={styles.label}>Nombre Propietario:</Text>
                <Text style={styles.info}>{owner}</Text>
            </View>
            <View style={styles.field}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.info}>{email}</Text>
            </View>
            <View style={styles.field}>
                <Text style={styles.label}>Télefono:</Text>
                <Text style={styles.info}>{phone}</Text>
            </View>
            <View style={styles.field}>
                <Text style={styles.label}>Fecha Alta:</Text>
                <Text style={styles.info}>{formatDate(registrationDate)}</Text>
            </View>
            <View style={styles.field}>
                <Text style={styles.label}>Sintomas:</Text>
                <Text style={styles.info}>{symptoms}</Text>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F59E0B',
        flex: 1
    },
    titulo: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '600',
        marginTop: 30,
        color: '#FFF',
    },
    tituloBold: {
        fontWeight: '900',
    },
    btnClose: {
        padding: 15,
        backgroundColor: '#E06900',
        marginHorizontal: 60,
        borderRadius: 10,
        marginTop: 15
    },
    btnCloseText: {
        color: '#FFF',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: '900'
    },
    content: {
        marginTop: 20,
        backgroundColor: '#FFF',
        marginHorizontal: 30,
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }, 
    field: {
        marginBottom: 10
    },
    label: {
        textTransform: 'uppercase',
        color: '#374151',
        fontWeight: '600',
        fontSize: 12
    },
    info: {
        fontWeight: '700',
        fontSize: 20,
        color: '#334155'
    }
})

export default PatientInformation