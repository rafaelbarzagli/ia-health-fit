# IA Health Fit

Aplicativo mobile de saúde e alimentação, pensado para gerar dietas personalizadas com base no perfil e nos alimentos que a pessoa tem em casa. O repositório reúne o **app** e a **página de divulgação**.

## Estrutura

| Pasta | O que tem |
|---|---|
| [`app/`](app) | Aplicativo em React Native (Expo) com Firebase |
| [`site/`](site) | Landing page de apresentação do produto (HTML e CSS) |
| [`firestore.rules`](firestore.rules) | Regras de segurança do banco (cada usuário acessa só o próprio perfil) |

## O que já funciona no app

- Tela inicial com navegação entre as telas
- Cadastro com validação de e-mail e senha (mínimo de 6 caracteres)
- Login com mensagens de erro claras em português
- Autenticação pelo **Firebase Authentication**: a senha nunca é guardada nem lida pelo app
- Perfil do usuário salvo no Firestore, identificado pelo `uid`

## Em desenvolvimento

- Geração das dietas com IA
- Tela inicial do usuário logado (perfil, metas e refeições)

## Tecnologias

React Native · Expo · React Navigation · Firebase (Authentication, Firestore e Storage) · HTML · CSS

## Como rodar o app

1. No [console do Firebase](https://console.firebase.google.com), crie um projeto e ative **Authentication > Método de login > E-mail/senha**.
2. Crie o banco **Firestore** e cole o conteúdo de [`firestore.rules`](firestore.rules) na aba *Regras*.
3. Rode:

```bash
cd app
npm install
cp .env.example .env   # preencha com os dados do seu app web no Firebase
npx expo start
```

As credenciais do Firebase ficam só no arquivo `.env`, que não é versionado.
