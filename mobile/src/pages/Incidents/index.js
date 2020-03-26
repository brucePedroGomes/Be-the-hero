import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';

function Incidents() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          total de <Text style={styles.headerTextBold}>0 casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}> Bem-vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos e salve vidas</Text>

      <View style={styles.incidentList}>
        <View style={styles.incident}>
          <Text style={styles.incidetProperty}>ONG:</Text>
          <Text style={styles.incidentValue}>APAD</Text>

          <Text style={styles.incidetProperty}>CASO:</Text>
          <Text style={styles.incidentValue}>CASO TESTE</Text>

          <Text style={styles.incidetProperty}>VALOR:</Text>
          <Text style={styles.incidentValue}>RS 999,00</Text>

          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => console.log('OnPress')}
          >
            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
            <Feather name="arrow-right" size={16} color="#E02041" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Incidents;
