# IA Health Fit

Aplicativo mobile de saúde e alimentação, pensado para gerar dietas personalizadas com base no perfil e nos alimentos que a pessoa tem em casa. O repositório reúne o **app** e a **página de divulgação**.

## Estrutura

| Pasta | O que tem |
|---|---|
| [`app/`](app) | Aplicativo em React Native (Expo) com Firebase |
| [`site/`](site) | Landing page de apresentação do produto (HTML e CSS) |

## O que já funciona no app

- Tela inicial com navegação entre as telas
- Cadastro de usuário, salvo no Firestore
- Login, com validação do e-mail e da senha

## Em desenvolvimento

- Geração das dietas com IA
- Tela inicial do usuário logado (perfil e metas)

## Tecnologias

React Native · Expo · React Navigation · Firebase (Firestore e Storage) · HTML · CSS

## Como rodar o app

```bash
cd app
npm install
cp .env.example .env   # preencha com os dados do seu projeto Firebase
npx expo start
```

As credenciais do Firebase ficam só no arquivo `.env`, que não é versionado.

## Limitação conhecida

O cadastro e o login comparam a senha guardada como texto no Firestore. Para uso real, o próximo passo é migrar para o **Firebase Authentication**, que cuida do armazenamento seguro das senhas.
