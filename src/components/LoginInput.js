// Importa as bibliotecas necessárias do React e do React Native
import React from 'react';
import { View, Text, TextInput } from 'react-native';

// Importa os estilos definidos externamente no arquivo stylescomponent
import styles from '../styles/StyleSheet';

// Define um componente funcional chamado Componentform
const Componentinput = () => {
  return (
    // Componente View representa um contêiner para organizar outros componentes
    <View style={styles.body}>
      
      {/* Texto exibido na tela com o estilo definido em styles.titulo */}
      <Text style={styles.titulo}>Login</Text>

      {/* Componente View para agrupar os TextInput relacionados ao formulário */}
      <View>
        
        {/* TextInput para o e-mail do usuário com estilo definido em styles.inputname */}
        <TextInput style={styles.inputname} placeholder="Digite seu E-mail" />
        
        {/* TextInput para a senha do usuário com estilo definido em styles.inputname,
             e configurado para ocultar o texto digitado (senha) */}
        <TextInput
          style={styles.inputname}
          placeholder="Digite sua Senha"
          secureTextEntry={true}
        />
      </View>
    </View>
  );
};

// Exporta o componente para ser utilizado em outros arquivos
export default Componentinput;