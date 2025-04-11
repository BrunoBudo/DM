import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { LABELS } from './Labels';

export default function App() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  const adicionarUsuario = () => {
    if (nome && telefone) {
      setUsuarios([...usuarios, { nome, telefone }]);
      setNome('');
      setTelefone('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{LABELS.title}</Text>

      <View style={styles.formRow}>
        <Text style={styles.label}>{LABELS.name}</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />
      </View>

      <View style={styles.formRow}>
        <Text style={styles.label}>{LABELS.phone}</Text>
        <TextInput
          style={styles.input}
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title={LABELS.button} onPress={adicionarUsuario} color="#a6c8ff" />
      </View>

      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>Nome</Text>
        <Text style={styles.tableHeaderText}>Telefone</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {usuarios.map((usuario, index) => (
          <View key={index} style={styles.userRow}>
            <Text style={styles.userText}>{usuario.nome}</Text>
            <Text style={styles.userText}>{usuario.telefone}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    width: 70,
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 35,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  tableHeaderText: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'left',
  },
  scrollView: {
    flex: 1,
  },
  userRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  userText: {
    flex: 1,
    textAlign: 'left',
  },
});