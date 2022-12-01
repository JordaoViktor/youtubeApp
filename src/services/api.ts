import axios from 'axios';
import { Platform } from 'react-native';

export const CLIENT_ID = Platform.OS === 'ios'
  ? '1059106940193-7sc4s86ksmtkkvvhu7m089dbk7cdfdvf.apps.googleusercontent.com'
  : '1059106940193-jojmkdlvpppido0nt52od75j9r78c018.apps.googleusercontent.com';

export default axios.create({
  baseURL: '',
});
