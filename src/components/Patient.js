import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const Patient = ({item}) => {

    const {patient, registrationDate} = item

    const formatDate = fecha => {
        const newDate = new Date(fecha)
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }

        return newDate.toLocaleDateString('es-ES', options)
    }
  return (
    <View style={styles.container}>
        <Text style={styles.label}>Paciente:</Text>
        <Text style={styles.text}>{patient}</Text>
        <Text style={styles.date}>{formatDate(registrationDate)}</Text>
        <View style={styles.btnContainer}>
            <Pressable style={[styles.btn, styles.btnEdit]}>
                <Text style={styles.btnText}>Editar</Text>
            </Pressable>
            <Pressable style={[styles.btn, styles.btnDelete]}>
                <Text style={styles.btnText}>Eliminar</Text>
            </Pressable>
        </View>
    </View>
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