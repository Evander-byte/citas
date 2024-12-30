import React, {useState} from 'react';
import { StyleSheet, Text, Modal, SafeAreaView, TextInput, View, ScrollView, Pressable, Alert } from 'react-native';
import DatePicker from 'react-native-date-picker';

const Formulario = ({ modalVisible, setModalVisible, patients, setPatients }) => {

    const [patient, setPatient] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [registrationDate, setRegistrationDate] = useState(new Date);
    const [symptoms, setSymptoms] = useState('');

    const handleRegister = () => {
        //Data validation
        if([patient, owner, email, phone, registrationDate, symptoms].includes('')){
            Alert.alert('Error', 'Todos los campos son obligatorios')
            return
        }
        const newPatient = {
            patient,
            owner,
            email,
            phone,
            registrationDate,
            symptoms
        }
        setPatients([...patients, newPatient])
        setModalVisible(!modalVisible)

        setPatient('')
        setOwner('')
        setEmail('')
        setPhone('')
        setRegistrationDate(new Date)
        setSymptoms('')

    }

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
                    <Pressable 
                        style={style.btnCancel}
                        onLongPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={style.btnCancelText}>Cancelar</Text>
                    </Pressable>

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
                            value={owner}
                            onChangeText={setOwner}
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
                            value={patient}
                            onChangeText={setPatient}
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
                            value={email}
                            onChangeText={setEmail}
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
                            maxLength={10}
                            value={phone}
                            onChangeText={setPhone}
                        />
                    </View>
                    <View
                        style={style.campo}
                    >
                        <Text
                            style={style.label}
                        >Fecha alta</Text>
                        <View style={style.dateContainer}>
                            <DatePicker
                                date={registrationDate}
                                locale='es'
                                onDateChange={(date) => setRegistrationDate(date)}
                            />
                        </View>
                    </View>


                    <View
                        style={style.campo}
                    >
                        <Text
                            style={style.label}
                        >Síntomas</Text>
                        <TextInput
                            style={[style.input, style.symptoms]}
                            placeholder="Síntomas paciente"
                            placeholderTextColor={'#666'}
                            multiline={true}
                            numberOfLines={4}
                            value={symptoms}
                            onChangeText={setSymptoms}
                        />
                    </View>
                    <Pressable
                        style={style.btnAdd}
                        onPress={handleRegister}
                    >
                        <Text
                            style={style.btnAddText}
                        >Registrar Paciente</Text>
                    </Pressable>
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
    btnCancel: {
        padding: 15,
        backgroundColor: '#5827A4',
        marginHorizontal: 60,
        borderRadius: 10,
        marginTop: 15
    },
    btnCancelText: {
        color: '#FFF',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: '900'
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
    symptoms: {
        height: 100,
    },
    dateContainer: {
        backgroundColor: '#FFF',
        borderRadius: 10
    },
    btnAdd: {
        marginVertical: 50,
        marginHorizontal: 60,
        backgroundColor: '#F59E0B',
        padding: 15,
        borderRadius: 10
    },
    btnAddText: {
        color: '#58274A',
        fontSize: '16',
        textAlign: 'center',
        fontWeight: '900',
        textTransform: 'uppercase',
    }
});

export default Formulario;
