# ๐ next-monorepo-playground

nextjs (v12.2) + yarn berry๋ก ๋ง๋๋ ๋ด ์ฅ๋๊ฐ. ๐

**์ ์ฐจ ์ฑ์๊ฐ ์์ **

Note: ํ์ฌ nextjs(v12.2) build์, PnP ์ฌ์ฉ์ node_module ์ถ์ถ์ ๋ํ ์ด์๊ฐ ์กด์ฌํ์ฌ yarn cache + node_modules๋ฅผ ๊ฐ์ด ์ฌ์ฉ ์ค

- [https://github.com/vercel/next.js/issues/36386](https://github.com/vercel/next.js/issues/36386)

---

## ๊ตฌ์กฐ

```
- apps
  - [next app ๋ค์ด๊ฐ ์์ ]
- dockers
  - [docker build file ๋ค์ด๊ฐ ์์ ]
- shared
  - api
  - ui
    - components
    - hooks
    - context
    - icons
    - utils
  - utils [์ถ๊ฐ์์ ]
```

---

## apps

next๋ก ์์ฑ ๋๋ ํ๋ก์ ํธ๊ฐ ๋ค์ด๊ฐ ์์ 

---

## dockers

app ์์ฑ ํ, build ํ์ผ ์์ฑ ์์ 

---

## shared

### [api](https://github.com/malony-s/next-monorepo-playground/tree/main/shared/api)

open api generator์ฌ์ฉ, api fercher ์์ฑ.

- `yarn example or yarn open-api [url or path/to/OAS file]`

---

### ui

emotion์ ์ฌ์ฉํด ui ๊ด๋ จ๋ ์ปดํฌ๋ํธ ์ ์ ์์ 

---

### utils

---
