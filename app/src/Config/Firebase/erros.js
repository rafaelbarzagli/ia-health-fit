// Traduz os códigos de erro do Firebase Auth para mensagens claras em português.
const MENSAGENS = {
  "auth/invalid-email": "Esse e-mail não é válido.",
  "auth/email-already-in-use": "Já existe uma conta com esse e-mail.",
  "auth/weak-password": "A senha precisa ter pelo menos 6 caracteres.",
  "auth/invalid-credential": "E-mail ou senha incorretos.",
  "auth/user-not-found": "E-mail ou senha incorretos.",
  "auth/wrong-password": "E-mail ou senha incorretos.",
  "auth/user-disabled": "Essa conta foi desativada.",
  "auth/too-many-requests": "Muitas tentativas. Aguarde um pouco e tente de novo.",
  "auth/network-request-failed": "Sem conexão com a internet. Verifique e tente de novo.",
  "auth/operation-not-allowed": "O login por e-mail e senha não está ativado no Firebase.",
};

export function mensagemDeErro(error) {
  return MENSAGENS[error?.code] || "Algo deu errado. Tente novamente.";
}

export function emailValido(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
