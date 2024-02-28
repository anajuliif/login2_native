import { Text, View, StyleSheet, Button } from "react-native";
import styles from "../styles/StyleSheet";

export default function Componente2() {
        btn = () => {
          alert("Eu sou o Componente2");
        };

  return (
    <View style={styles.body}>
     <Button onPress={btn} title="COMPONENTE 2 " />
    </View>
  );
}