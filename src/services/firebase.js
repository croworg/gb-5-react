import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBeOahyH6-bhGtRUMDVqeGTzbAAiT6IxdY",
    authDomain: "gb-5-react.firebaseapp.com",
    projectId: "gb-5-react",
    storageBucket: "gb-5-react.appspot.com",
    messagingSenderId: "1086177527227",
    appId: "1:1086177527227:web:df3f8251ab663e37ec309e"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

export const onSignUp = async (email, password) => await createUserWithEmailAndPassword(firebaseAuth, email, password);
export const onSignIn = async (email, password) => await signInWithEmailAndPassword(firebaseAuth, email, password);
export const onSignOut = async () => await signOut(firebaseAuth);

const database = getDatabase(app);

export const userRef = ref(database, 'user');
export const messagesRef = ref(database, 'messages');

export const getChatById = (chatId) => ref(database, `messages/${chatId}`);

export const getMessageListById = (chatId) => ref(database, `messages/${chatId}/messageList`);
