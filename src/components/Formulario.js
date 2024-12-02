import React from 'react';
import { StyleSheet, Text, Modal, SafeAreaView, TextInput, View, ScrollView } from 'react-native';

const Formulario = ({ modalVisible, setModalVisible }) => {
    return (
        <Modal
            animationType="slide"
            visible={modalVisible}
        >
            <SafeAreaView
                style={style.contenido}
            >
                <ScrollView>
                    <Text
                        style={style.titulo}
                    >Nueva {''}
                        <Text
                            style={style.tituloBold}
                        >Cita</Text>
                    </Text>

                    <View
                        style={style.campo}
                    >
                        <Text
                            style={style.label}
                        >Nombre Propietario</Text>
                        <TextInput
                            style={style.input}
                            placeholder="Nombre propietario"
                            placeholderTextColor={'#666'}
                        />
                    </View>
                    <View
                        style={style.campo}
                    >
                        <Text
                            style={style.label}
                        >Nombre del paciente</Text>
                        <TextInput
                            style={style.input}
                            placeholder="Nombre del paciente"
                            placeholderTextColor={'#666'}
                        />
                    </View>
                    <View
                        style={style.campo}
                    >
                        <Text
                            style={style.label}
                        >Email</Text>
                        <TextInput
                            style={style.input}
                            placeholder="Correo electronico"
                            placeholderTextColor={'#666'}
                            keyboardType="email-address"
                        />
                    </View>
                    <View
                        style={style.campo}
                    >
                        <Text
                            style={style.label}
                        >Teléfono</Text>
                        <TextInput
                            style={style.input}
                            placeholder="Teléfono propietario"
                            placeholderTextColor={'#666'}
                            keyboardType="number-pad"
                        />
                    </View>
                    <View
                        style={style.campo}
                    >
                        <Text
                            style={style.label}
                        >Síntomas</Text>
                        <TextInput
                            style={style.input}
                            placeholder="Síntomas paciente"
                            placeholderTextColor={'#666'}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    );
};

const style = StyleSheet.create({
    contenido: {
        backgroundColor: '#6D28D9',
        flex: 1,
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
    campo: {
        marginTop: 20,
        marginHorizontal: 30,
        marginBottom: 10,
    },
    label: {
        color: '#FFF',
        marginBottom: 10,
        fontSize: 20,
        fontWeight: '600',
    },
    input: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
    },
});

export default Formulario;
