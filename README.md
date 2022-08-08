# 🛝 next-monorepo-playground

nextjs (v12.2) + yarn berry로 만드는 내 장난감. 😁

**점차 채워갈 예정**

Note: 현재 nextjs(v12.2) build시, PnP 사용시 node_module 추출에 대한 이슈가 존재하여 yarn cache + node_modules를 같이 사용 중

- [https://github.com/vercel/next.js/issues/36386](https://github.com/vercel/next.js/issues/36386)

---

## 구조

```
- apps
  - [next app 들어갈 예정]
- dockers
  - [docker build file 들어갈 예정]
- shared
  - api
  - ui
    - components
    - hooks
    - context
    - icons
    - utils
  - utils [추가예정]
```

---

## apps

next로 작성 되는 프로젝트가 들어갈 예정

---

## dockers

app 작성 후, build 파일 작성 예정

---

## shared

### [api](https://github.com/malony-s/next-monorepo-playground/tree/main/shared/api)

open api generator사용, api fercher 생성.

- `yarn example or yarn open-api [url or path/to/OAS file]`

---

### ui

emotion을 사용해 ui 관련된 컴포넌트 제작 예정

---

### utils

---
