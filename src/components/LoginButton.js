// Importa as bibliotecas necessárias do React e do React Native
import React from 'react';
import { View, Text, TextInput, Button, Pressable } from 'react-native';

// Importa os estilos definidos externamente no arquivo stylescomponent
import styles from '../styles/StyleSheet';
import { TouchableOpacity } from 'react-native-web';

// Define um componente funcional chamado Componentbtn
const Componentbutton = () => {
  
  // Função btn() é chamada quando o botão é pressionado, exibindo um alerta simples
  const btn = () => {
    alert("Voce pressionou o botão");
  };

  return (
    // Componente View representa um contêiner para organizar outros componentes
   <View style={styles.body}>
    <TouchableOpacity onPress={btn} style={styles.button}> 
<Text style={styles.login}>Login</Text>
    </TouchableOpacity>
   </View>
  );
};

// Exporta o componente para ser utilizado em outros arquivos
export default Componentbutton;