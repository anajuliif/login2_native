// Importa as bibliotecas necessárias do React e do React Native
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ImageBackground,
} from "react-native";

// Importa estilos definidos externamente no arquivo stylescomponent
import styles from "../styles/StyleSheet";

// Importa os componentes personalizados do seu aplicativo
import Componentimage from "../components/LoginImage";
import Componentinput from "../components/LoginInput";
import Componentbutton from "../components/LoginButton";

// Função principal do aplicativo
export default function App() {

  // Função btn() é chamada quando o botão é pressionado, exibindo um alerta simples
  btn = () => {
    alert("Logado com Sucesso");
  };

  return (
    // Componente View representa o contêiner principal do aplicativo com o estilo definido em styles.container
    <View style={styles.container}>

      {/* Componente ImageBackground exibe uma imagem de fundo com o estilo definido em styles.image */}
      <ImageBackground
        source={require("../assets/imagens/fundo.jpg")}
        resizeMode="cover"
        style={styles.image}
      >

        {/* Componente personalizado Componentinput */}
        <Componentinput/>

        {/* Componente personalizado Componentbutton */}
        <Componentbutton/>

        {/* Componente personalizado Componentimage */}
        <Componentimage/>

        {/* Componente StatusBar controla a barra de status do dispositivo */}
        <StatusBar style="auto" />

      </ImageBackground>
    </View>
  );
}