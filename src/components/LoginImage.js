// Importa as bibliotecas necessárias do React e do React Native
import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';

// Importa os estilos definidos externamente no arquivo stylescomponent
import styles from '../styles/StyleSheet';

// Define um componente funcional chamado Componentimg
const Componentimage = () => {
  return (
    // Componente View representa um contêiner para organizar outros componentes
    <View style={styles.body}>

      {/* Componente Image exibe uma imagem com o estilo definido em styles.senailogo,
           utilizando a imagem localizada no caminho '../SENAI.png' */}
      <Image
        style={styles.logo}
        source={require('../assets/imagens/login.jpg')} // Ajustado o caminho para a imagem
      />
      
    </View>
  );
};

// Exporta o componente para ser utilizado em outros arquivos
export default Componentimage;