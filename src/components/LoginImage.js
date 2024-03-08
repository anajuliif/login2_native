// Importa as bibliotecas necessárias do React e do React Native
import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';

// Importa os estilos definidos externamente no arquivo StyleSheet
import styles from '../styles/StyleSheet';

const Componentimage = () => {
  return (
    <View style={styles.body}>

      {/* Componente Image exibe uma imagem com o estilo*/}
      <Image
        style={styles.logo}
        source={require('../assets/imagens/login.jpg')} // Ajustado o caminho para a imagem
      />
      
    </View>
  );
};

// Exporta o componente para ser utilizado em outros arquivos
export default Componentimage;