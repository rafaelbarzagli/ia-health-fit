// Configuração do Firebase (Auth, Firestore e Storage).
// As credenciais vêm do arquivo .env (veja .env.example), nunca do código.
import { initializeApp, getApps, getApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  throw new Error(
    "Firebase não configurado. Copie .env.example para .env e preencha com os dados do seu projeto."
  );
}

const jaInicializado = getApps().length > 0;
const app = jaInicializado ? getApp() : initializeApp(firebaseConfig);

// O initializeAuth só pode rodar uma vez (o recarregamento rápido do Expo reexecuta este arquivo).
const auth = jaInicializado
  ? getAuth(app)
  : initializeAuth(app, {
      persistence: getReactNativePersistence(ReactNativeAsyncStorage),
    });

const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
