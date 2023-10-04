## Frontend

### 왜 tailwind css를 사용하는가?

- Next v13을 사용하기로 결정하면서 Server Component에 대한 대응이 필요했는데, emotion / styled-components은 아직 대응이 잘 되어있지 않았기 때문
- 겸사겸사 tailwind 공부도 할 겸 사용하기로 결정

### Next.js v13

- 기존 디렉토리 기반 라우팅을 넘어 React v18에서 제공하는 많은 기능들을 app 디렉토리 기반으로 처리 가능하도록 돕는점이 흥미로움
- 아직 많이 사용해보지는 않았지만 page.tsx, layout.tsx 혹은 loading.tsx, error.tsx 등의 파일들이 각각의 역할이 존재하기 때문에 Suspense, ErrorBoundary 처리를 어느정도 신경을 덜 써도 됨
- Server Component / Client Component에 대한 구분과 아키텍처 설계가 조금 어렵긴 하지만 충분히 고민해보면 좋은 경험이 될 것 같음

## Backend
