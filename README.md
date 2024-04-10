## Next

- Next는 SSR(Single Side Rendering) 으로 Sever 에서 javascript를 로딩하여 클라이언트 측에서 별도의 로딩하는 시간이 줄어들게 되어 기존 리액트의 CSR(Client Side Rendering) 보다 빠르게 페이지가 렌더링 되는 장점이 있으며, 이를 통해

  > **검색 엔진 최척화(SEO) 및 초기 렌더링 성능 향상 된다.**

### Next 사용 방법 정리

- 폴더명 > page 으로 경로 지정

  1. 폴더명 home / page.tsx -> localhost/home 으로 경로 접근

- 경로를 지정하지 않고 싶을 때 소괄호( '()' ) 로 폴더명 설정

  1. app 내에 page가 없이 (home)/page.tsx 로 설정 시 해당 위치가 루트 정보가 된다.
     -> localhost 로 접근
  2. 폴더명 (home)/page.tsx -> localhost/home 으로 접근 시 NotFound Error 발생

- Route 간 parameter 정보를 전달 시에는 폴더명을 대괄호( '[]' ) 로 설정

  1.  movie/[id]/page.tsx -> 설정시 [id] 폴더 내 컴포넌트들은 props에
      " {prams: {id}} " 정보를 가지고 있다.

- 페이지가 존재하지 않을 때
  1.  Root 위치에 not-found.tsx 컴포넌트를 생성
  2.  현재 Next 에서 설정하지 않은 경로로 접근시 not-found.tsx 파일로 접근이 된다.

### 실행 방법

- node 버전은 18.17.0 이상으로 설치 필요
- npm install
- npm run dev

### 호스팅

- Vercel로 배포
- 경로: https://learn-nextjs14-eta.vercel.app/
