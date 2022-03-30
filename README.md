# ABLY recruitment task
## 📌 1. 프로젝트 실행 방법
### 작업 폴더로 이동 
`cd mission`
### 프로젝트 세팅
`npm i`
### 프로젝트 실행
`npm run serve`

<br>

## 📌 2. 주 사용 라이브러리와 사용 의도
### Vue.js
Vue.js를 선택했습니다. React가 Typescript와 제일 잘 어울리는 프레임워크라서 사용해 보고 싶었지만 React, Typescript 둘 다 기초지식이 풍부하지 않았습니다. 그래서 과제의 완성도를 높이기 위해, 사용해 보았던 Vue.js를 선택하게 되었습니다.
### Vuex
존재하는 모든 컴포넌트들에 데이터들이 접근 가능하고, 이를 통해 모든 데이터의 흐름을 중앙에서 관리할 수 있도록 상태관리 라이브러리를 사용하였습니다.
### vuex-persistedstate
로컬 스토리지에 Vuex 상태를 저장하기 위해 사용하였습니다.
### axios
api 연동을 하기 위해 사용하였습니다. 브라우저 호환성이 뛰어나고 데이터를 다루기 쉬워서 선택하게 되었습니다.

<br>

## 📌 3. 프로젝트 폴더 구조와 설계 의도
<details>
<summary>폴더 구조</summary>
<div markdown="1">

```
📦 mission
├─ node_modules
├─ public
├─ src
│  ├─ api
│  │  ├─ clients
│  │  │  ├─ AxiosClient.js
│  │  └─ repositories
│  │     ├─ ChangePwRepository.js
│  │     ├─ LoginRepository.js
│  │     ├─ LogoutRepository.js
│  │     ├─ RepositoryFactory.js
│  │     └─ UserInfoRepository.js
│  ├─ assets
│  │  └─ css
│  ├─ components
│  ├─ router
│  ├─ store
│  │  ├─ modules
│  │  │  ├─ Auth.js
│  │  │  └─ Login.js
│  │  └─ index.js
│  ├─ views
│  │  ├─ Password
│  │  │  ├─ AuthConfirm.vue
│  │  │  ├─ AuthRequest.vue
│  │  │  └─ ChangePassword.vue
│  │  ├─ Login.vue
│  │  └─ UserInfo.vue
│  ├─ App.vue
│  └─ main.js
└─ tests
```
</div>
</details>

`mission` 폴더를 생성해서 작업만 할 폴더를 생성해 주었습니다. 추후에 참고문서나 코딩작업과 관련되지 않은 폴더도 생성될 수 있기 때문입니다. <br><br>
`mission > src > api` 폴더에서는 api 연동을 레퍼지토리 패턴을 활용하여 구현하였습니다.  <br><br>
`mission > src > router` 폴더에서는 라우터를 동작하기 위한 코드들을 작성하였습니다. <br><br>
`mission > src > store` 폴더에서는 상태를 전역적으로 관리하기 위한 vuex관련 작업을 하였습니다. <br><br>
`mission > src > views` 폴더에는 유저들에게 보여지는 페이지를 구분해서 생성하였습니다.

<br>

## 📌 4. 컴포넌트 구조와 설계 의도 
`src > views`
```
📦 views
├─ Password
│  ├─ AuthConfirm.vue
│  ├─ AuthRequest.vue
│  └─ ChangePassword.vue
├─ Login.vue
└─ UserInfo.vue
```
독립적인 페이지인 ‘로그인 페이지’와 ‘회원정보 조회 페이지’는 따로 폴더를 구분하지 않았고, 비밀번호 재설정에 필요한 ‘인증코드 발급요청 페이지’, ‘인증 코드 검증 페이지’, ‘비밀번호 변경 페이지’는 Password폴더로 구분을 지어 페이지들의 연관성을 보기 쉽게 구분해 놓았습니다.

<br>

## 📌 5. (상태 관리를 사용한 경우) 상태 관리의 구조와 설계 의도
`src > store`
```
📦 store
├─ modules
│  ├─ Auth.js
│  └─ Login.js
└─ index.js
```
상태관리를 하기 위한 sotre를 모듈화 시켜서 더 큰 프로젝트가 되었을 때 유지보수하기 편리하게 구현했습니다. modules폴더에 Login관련 store와 Auth관련 store를 넣었습니다. 각각의 모듈에는 namespaced 속성을 추가해 독립적으로 사용되게 구현했습니다.

<br>

## 📌 6. 리뷰어에게 강조하고 싶은 부분 또는 그 외 기타 내용
### 💡 와이어 프레임 제작
다섯 페이지밖에 안되지만 미리 와이어 프레임을 구상 해놓고 작업을 들어가여 마크업과 스타일링을 하는데 수월했습니다. <br><br>
![와이어프레임](https://user-images.githubusercontent.com/32696209/160765651-682b58f7-b25c-4b1a-b931-6b8b62587137.png)

### 💡 common.css를 분리해서 사용
```
📦 assets
└─ css
   └─ common.css
```
common.css를 분리하여 페이지에 공통으로 들어갈 요소들을 묶어서 스타일링을 해줬기 때문에 스타일링에서 시간을 효율적으로 사용할 수 있었습니다.

### 💡 유지보수를 생각한 스타일링
반복되는 레이아웃에는 공통으로 여백을 주되 마지막 레이아웃에게는 여백을 주지 않는 방식으로, 그 뒤에 다른 레이아웃이 들어왔을 때 여백에 지장을 받지 않도록 설정했습니다. <br>
ex) 
```
.info-wrap p {
  margin-bottom: 18px;
}

.info-wrap p:last-child {
  margin-bottom: 0;
}
```

### 💡 사용자의 UX를 고려한 작업
1. 페이지를 들어왔을 때 첫 input에 포커스가 맞춰지도록 설정했습니다. <br>
<img src="https://user-images.githubusercontent.com/32696209/160767573-c39110b8-677f-49a3-b76e-8904aec112c4.png" width="300"/>
&nbsp;&nbsp; 2. 로그아웃 버튼 클릭 시 다시한번 확인해주는 알림창 추가했습니다. <br><br>
<img src="https://user-images.githubusercontent.com/32696209/160767817-57bab88d-0b00-4a9f-a3ff-40f79bdfeb36.png" width="500"/>

### 💡 회원정보 조회 페이지 로딩화면 구현
api를 불러오는 동안 로딩화면이 보여지도록 작업했습니다. <br><br>
<img src="https://user-images.githubusercontent.com/32696209/160769608-62659664-5cf7-43a1-a200-23844ab5d091.png" width="300"/>

### 💡 인증 타이머 시 들어가는 순간 1초를 빼고 시작
보통 들어가는 동안 1초가 소비되기 때문에 api에서 넘어올 때 1을 빼도 되지만 해당 과제에서는 1을 빼서 넘어오지 않기 때문에 프론트 쪽에서 설정을 해봤습니다. <br><br>
<img src="https://user-images.githubusercontent.com/32696209/160769853-c09f7d32-ea0b-44a1-9361-dbb206a6bb70.png" width="300"/>

### 💡 인증 만료시간이 초과되었을 때 처리
인증 만료시간이 초과되면 초과되었다는 알림창을 추가했습니다. <br><br>
<img src="https://user-images.githubusercontent.com/32696209/160770318-ef242b94-853e-40b4-8423-0c900547e4f2.png" width="400"/>

### 💡 api 연동시 레퍼지토리 패턴 활용
api연동을 할 때 레퍼지토리 패턴을 활용하여 데이터 로직을 분리시키고 유지보수에 좋게 적용시켰습니다.

<br>

## 📌 7. 아쉬운 점
`Typescript`로 구현을 해보고 싶었지만 시간과 능력이 부족해 `Javascript`로 구현한 점이 매우 아쉽습니다. 더욱 공부해야 겠다는 다짐을 한 계기가 되었습니다. <br><br>
TDD방법론으로 프로젝트를 구현하고 싶었지만 시간과 능력 부족으로 이것 역시 못한 부분이 아쉽습니다. <br><br>
인증시간을 새로고침 했을 때 다시 리셋되는 처리를 수정하고 싶었으나 못한 점이 아쉽습니다.

<br>

## 📌 8. 소감
3일동안 에이블리 프론트엔드 엔지니어의 과제를 해보면서 기능 처리를 성공할 때마다 한층 더 성장함을 느꼈고 시도해보지 못한 방법들을 생각하며 저의 부족함도 많다는 것을 느꼈습니다.
이번 과제는 너무 소중한 기회였고 이 기회를 발판삼아 더욱 더 성장하는 개발자가 되어야 겠다고 다짐했습니다.
