import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 50,
  },
  inputname: {
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    width: 300,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10, // Adicionando bordas arredondadas
    paddingHorizontal: 10, // Espaçamento interno horizontal
  },
  button: {
    color: "white",
    backgroundColor: "black",
    fontSize: 20,
    width: 50,
    height: 25,
  },
  titulo: {
    fontSize: 50,
    marginBottom: 10, // Reduzindo a margem inferior para remover a linha
    fontFamily: 'Arial', // Alterando a fonte
  },
 
  image: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  form: {
    flex: 1,
    top: "20%",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    top: "10%", 
  },
  logo: {
    width: 70, // Ajustando a largura da imagem
    height: 70, // Ajustando a altura da imagem
    marginRight: 10, // Adicionando uma margem à direita para separar a imagem do texto
    marginLeft: -10, // Movendo 10 pixels para a esquerda
  },
  

});
 export default styles;