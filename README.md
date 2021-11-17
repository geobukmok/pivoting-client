# Pivoting Client (React Native App)

# 개발 환경

1. [`Create React Native App`](https://github.com/expo/create-react-native-app) 를 이용해서 초기 개발 환경 구성

```bash
npx create-react-native-app
```

2. Library

- React Navigation

[Tutorial](https://reactnavigation.org/docs/stack-navigator)을 참고해서 진행

```bash
yarn add @react-navigation/native
expo install react-native-screens react-native-safe-area-context
npx pod-install ios
yarn add @react-navigation/native-stack
```

Native 성능을 가져오기 위해 `@react-navigation/stack`대신 `@react-navigation/native-stack`를 사용하겠습니다.

- Styled Component

기존 React 개발과 유사하게 진행하게위해 StyledComponent를 사용하겠습니다.

```bash
yarn add styled-components
yarn add  --save-dev @types/styled-components @types/styled-components-react-native
```
