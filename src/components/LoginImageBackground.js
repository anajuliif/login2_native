import { ImageBackground } from "react-native-web";
import styles from '../styles/StyleSheet';

const LoginBackground = ({children}) => {
    return(
    <ImageBackground
    source={require('../assets/imagens/fundo.jpg')}
    syle={styles.fundo}
    >
        {children}
    </ImageBackground>
    );
} 
export default LoginBackground