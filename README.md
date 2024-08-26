# `다섯가지자아` - `주르르`

해커그라운드 해커톤에 참여하는 `다섯가지자아` 팀의 `주르르`입니다.

## 참고 문서

> 아래 두 링크는 해커톤에서 앱을 개발하면서 참고할 만한 문서들입니다. 이 문서들에서 언급한 서비스 이외에도 더 많은 서비스들이 PaaS, SaaS, 서버리스 형태로 제공되니 참고하세요.

- [순한맛](./REFERENCES_BASIC.md)
- [매운맛](./REFERENCES_ADVANCED.md)

## 제품/서비스 소개

<!-- 아래 링크는 지우지 마세요 -->
[제품/서비스 소개 보기](TOPIC.md)
<!-- 위 링크는 지우지 마세요 -->

## 오픈 소스 라이센스

<!-- 아래 링크는 지우지 마세요 -->
[오픈소스 라이센스 보기](./LICENSE)
<!-- 위 링크는 지우지 마세요 -->

## 설치 방법

> **아래 제공하는 설치 방법을 통해 심사위원단이 여러분의 제품/서비스를 실제 Microsoft 애저 클라우드에 배포하고 설치할 수 있어야 합니다. 만약 아래 설치 방법대로 따라해서 배포 및 설치가 되지 않을 경우 본선에 진출할 수 없습니다.**

### 사전 준비 사항

> **여러분의 제품/서비스를 Microsoft 애저 클라우드에 배포하기 위해 사전에 필요한 준비 사항들을 적어주세요.**

## 시작하기 (Client)

### Step1. <a href="https://portal.azure.com">에저포탈</a>에 접속한다.

### Step2. 가지고 있는 계정으로 로그인 해준다.
<img width="468" alt="image" src="https://github.com/user-attachments/assets/d7933154-23aa-47b6-bfb9-4f0de02d465a">

### Step3. 리소스그룹 클릭
<img width="540" alt="스크린샷 2024-08-26 오전 9 32 00" src="https://github.com/user-attachments/assets/bc40d74d-63fb-4aca-9e10-77e6d20ffc36">

### Step4. 자신이 속한 그룹을 검색하고 들어가준다.
<img width="1707" alt="스크린샷 2024-08-26 오전 9 34 19" src="https://github.com/user-attachments/assets/a13fc512-9eb3-46bf-bfea-a0c23b1e7dcf">

### Step5. 새로운 서비스를 만들어준다.
<img width="1706" alt="스크린샷 2024-08-26 오전 9 35 51" src="https://github.com/user-attachments/assets/c0e9dd74-e457-4ab3-8125-fa6c615ef211">

### Step6. `Static Web App`을 검색 후 정적 웹앱을 서비스를 만들어준다.
<img width="1440" alt="스크린샷 2024-08-26 오후 1 01 35" src="https://github.com/user-attachments/assets/4be7ac9c-41f6-46e3-b87b-51673849f72c">
<img width="1440" alt="스크린샷 2024-08-26 오후 1 02 51" src="https://github.com/user-attachments/assets/84e5f213-c42e-4a1b-b344-9ee8af4d8fe5">



### Step7. 웹앱 설정을 해준다.
<img width="400" alt="스크린샷 2024-08-26 오전 9 40 28" src="https://github.com/user-attachments/assets/f5552959-2360-400e-aeec-15b67baeaadf">

<img width="465" alt="스크린샷 2024-08-26 오전 9 41 43" src="https://github.com/user-attachments/assets/91856a93-8b9f-4c24-b7ac-502c75509c47">

먼저 리소스그룹을 선택해준다. `Step3`에서 선택한 리소스그룹과 같은 그룹을 선택해주면 된다.

<br>
<img width="801" alt="스크린샷 2024-08-26 오후 1 06 45" src="https://github.com/user-attachments/assets/6bb2d7f0-9cd2-4f14-9e9d-20836192362f">

이름을 입력해준다.

<img width="1710" alt="스크린샷 2024-08-26 오후 4 57 26" src="https://github.com/user-attachments/assets/77adf1bb-9c63-4bfa-879f-2e359fee5d8b">

그다음 <a href="https://github.com/hackersground-kr/hg-FiveSelves">링크</a>에 들어가서 깃허브 포크를 받아준다.

<img width="757" alt="스크린샷 2024-08-26 오후 4 58 19" src="https://github.com/user-attachments/assets/492a062d-4bbc-4b83-a3f5-bb02f788e916">

그리고 이름을 설정해준다.

<img width="400" alt="스크린샷 2024-08-26 오전 9 46 07" src="https://github.com/user-attachments/assets/f78c1367-8e46-40fd-a776-68de95cd241d">

여기서 자신의 이름가 위에서 설정한 포크한 레포지토리 이름을 선택해준다.

#### 중요!

조직 : {자기 GitHub ID} <br>
레포지토리 : {바꾸지 않았다면 hg-FiveSelves 포크할때 바꿔다면 바꾼 레포 이름} <br>
브랜치 : {main} <br>

<img width="752" alt="스크린샷 2024-08-26 오후 6 14 26" src="https://github.com/user-attachments/assets/0e32d258-b03e-4a84-bbd6-10d7e535ad45">

main 브랜치를 선택해주어야한다.

그리고 조금 기다리면 빌드세부 정보를 선택할 수 있는데 거기서
앱 위치를 ./client로 설정해준다. (보통은 자동으로 된다.)

<img width="413" alt="스크린샷 2024-08-26 오전 9 48 24" src="https://github.com/user-attachments/assets/0b864fec-0c55-428c-9a9c-7cf244a189aa">

검토 + 만들기를 클릭해서 검토를 먼저해준다.

<img width="400" alt="스크린샷 2024-08-26 오전 9 48 57" src="https://github.com/user-attachments/assets/2d16ca58-ba82-494e-990a-3061519489f2">

만들기를 클릭해서 서비스를 만들어준다.

<img width="723" alt="스크린샷 2024-08-26 오전 9 49 54" src="https://github.com/user-attachments/assets/2ae8f81c-2651-452d-89b2-8bb5d74811d7">

조금만 기다려주면

<img width="1710" alt="스크린샷 2024-08-26 오전 9 51 06" src="https://github.com/user-attachments/assets/ec408ed9-4bc2-4397-bbfa-16f573465cd7">

배포가 완료된다.

### Step8. 내 서비스 확인 및 접속해보기

<img width="949" alt="스크린샷 2024-08-26 오전 9 51 59" src="https://github.com/user-attachments/assets/9e9d13a3-b5e8-4dd3-b4ea-e86c14996ff7">

리소스로 이동을 클릭

<img width="816" alt="스크린샷 2024-08-26 오후 6 24 21" src="https://github.com/user-attachments/assets/44202f79-a627-4022-93b7-574713a52270">

"만약 배포가 완료됨"이 안떴는데 리소스로 이동했다면

<img width="681" alt="스크린샷 2024-08-26 오후 6 27 36" src="https://github.com/user-attachments/assets/f7fa8d71-5c3b-4b6c-aff0-f016638e83e9">

상태가 "준비됨"이 될때까지 기다려주어야한다.
이때 무작정 기다리지 말고 가끔씩 리프레쉬해주어야한다.

<img width="1710" alt="스크린샷 2024-08-26 오전 9 53 08" src="https://github.com/user-attachments/assets/0dc420f9-fefd-43fd-8584-6982f40612b7">

URL 부분을 확인하면 배포 URL을 확인할 수 있다.

<img width="1041" alt="스크린샷 2024-08-26 오전 9 53 52" src="https://github.com/user-attachments/assets/197ce526-5399-4705-ad65-74bccf6bb3e1">

배포는 끝이다

### 번외
<img width="1710" alt="스크린샷 2024-08-26 오전 9 56 58" src="https://github.com/user-attachments/assets/f50d4521-f44a-4e73-82cd-1d4c84347391">

깃허브에 push를 하게되면 자동으로 CI/CD가 작동하는 것을 확인할 수 있다.


# 시작하기 (Server) - 만약 선행에 있었던 client부분 중 fork내용을 따라하셨다면 아래에 있는 fork부분은 생략이 가능합니다.

<img width="1710" alt="스크린샷 2024-08-26 오후 4 57 26" src="https://github.com/user-attachments/assets/77adf1bb-9c63-4bfa-879f-2e359fee5d8b">

<a href="https://github.com/hackersground-kr/hg-FiveSelves">링크</a>에 들어가서 깃허브 포크를 받아준다.

<img width="757" alt="스크린샷 2024-08-26 오후 4 58 19" src="https://github.com/user-attachments/assets/492a062d-4bbc-4b83-a3f5-bb02f788e916">

그리고 이름을 설정해준다.

<img width="1470" alt="스크린샷 2024-08-26 오후 7 55 15" src="https://github.com/user-attachments/assets/ce1b4142-a488-4b1a-bfe5-66dc9b7a9d05">
초록색 버튼을 눌려 활성화를 해준다

### 포크 딴 레포로 넘어가기
<img width="1470" alt="스크린샷 2024-08-26 오후 6 37 45" src="https://github.com/user-attachments/assets/4ceb03c6-8455-4602-a3fe-2eea2a1b7f7b">
Settings로 넘어가기
<img width="1470" alt="스크린샷 2024-08-26 오후 6 42 13" src="https://github.com/user-attachments/assets/c98c05d6-5a5f-4a0d-ac1d-131c02877e54">
Secrets and variables > Actions > new Repository secret을 누른 후
<img width="1470" alt="스크린샷 2024-08-26 오후 6 43 54" src="https://github.com/user-attachments/assets/f677ca83-85dd-4748-982b-b5c623e36d43">
위에 있는 사진의 공란에 맞게 아래의 내용을 수행

Name - DOCKER_NICKNAME

Secret - {도커 유저 닉네임}

이것을 한번더 반복

Name - DOCKER_USERNAME

Secret - {도커 유저 네임}

이것을 한번더 반복

Name - DOCKER_PASSWORD

Secret - {도커 비밀번호 입력}

* NICKNAME, USERNAME, PASSWORD이란?

https://login.docker.com에서 첫 번째 공란이 USERNAME, 아래에 비밀번호 부분이 PASSWORD

<img width="438" alt="스크린샷 2024-08-27 오전 12 28 39" src="https://github.com/user-attachments/assets/b8d8c2d6-3c9e-40a7-aa45-46ba81adc331">

위에 과정을 토대로 로그인을 한 후

<img width="1470" alt="스크린샷 2024-08-27 오전 12 29 51" src="https://github.com/user-attachments/assets/6d68f155-7b04-41e4-91a5-ba5a169de18e">

프로필 사진을 누르면 나오는 닉네임이 즉 NICKNAME됩니다.

<img width="1470" alt="스크린샷 2024-08-26 오후 11 26 07" src="https://github.com/user-attachments/assets/12c0f913-5f0d-491e-b124-982921674356">
Build and Push Docker Image > Run workflow > Run workflow

배포가 완료되는 것이 확인되면 다음으로 넘어가면 된다

### Step1. <a href="https://portal.azure.com">에저포탈</a>에 접속한다.

### Step2. 가지고 있는 계정으로 로그인 해준다.
<img width="468" alt="image" src="https://github.com/user-attachments/assets/d7933154-23aa-47b6-bfb9-4f0de02d465a">

### Step3. 리소스그룹 클릭
<img width="540" alt="스크린샷 2024-08-26 오전 9 32 00" src="https://github.com/user-attachments/assets/bc40d74d-63fb-4aca-9e10-77e6d20ffc36">

### Step4. 자신이 속한 그룹을 검색하고 들어가준다.
<img width="1707" alt="스크린샷 2024-08-26 오전 9 34 19" src="https://github.com/user-attachments/assets/a13fc512-9eb3-46bf-bfea-a0c23b1e7dcf">

### Step5. 새로운 서비스를 만들어준다.
<img width="1706" alt="스크린샷 2024-08-26 오전 9 35 51" src="https://github.com/user-attachments/assets/c0e9dd74-e457-4ab3-8125-fa6c615ef211">

### Step6. '컨테이너 앱'을 검색한 후 컨테이너 앱을 선택한다
<img width="1470" alt="스크린샷 2024-08-26 오후 5 13 08" src="https://github.com/user-attachments/assets/f21aed6b-8157-4f31-9e32-3788373b8943">
- 만들기 -> 컨테이너 앱 클릭

### Step7. 새로만들기 클릭
<img width="1470" alt="스크린샷 2024-08-26 오후 5 18 57" src="https://github.com/user-attachments/assets/1ea82e63-17d3-48f2-84b3-fc90f929ca5e">

### Step8. 각 항목 입력
<img width="1470" alt="스크린샷 2024-08-26 오후 5 17 45" src="https://github.com/user-attachments/assets/00205f83-d1a1-4969-92ba-0405c909d0d8">
환경이름 - 'fiveSelves' 입력
영역중복 - '사용 안함' 클릭

### Step9. 새로만들기 클릭
<img width="1470" alt="스크린샷 2024-08-26 오후 5 15 57" src="https://github.com/user-attachments/assets/48a06c2e-1d3c-4d05-995c-804adb703157">
구독 - 자신이 속한 그룹 클릭
리소스 그룹 - 자신이 속한 리소스 그룹 클릭
컨테이너 앱 이름 - 'fiveSelves' 입력
배포 원본 - '컨테이너 이미지'클릭
지역 - 'Korea Central' 선택
컨테이너 앱 환경 - Step.8에서 만들었던 '환경이름' 클릭

컨테이너로 넘어가기

### Step10. 컨테이너
<img width="1470" alt="스크린샷 2024-08-26 오후 5 25 29" src="https://github.com/user-attachments/assets/249f57f7-8729-4b2c-aca9-5229b9ac2436">
이름 - 'fiveSelves'입력
이미지 원본 - 'Docker Hub 또는 기타 레지스트리' 선택
이미지 형식 - '공개' 선택
이미지 및 태그 - '{docker 아이디}/five:latest' 입력 (중괄호 안에는 자신의 도커 아이디 작성)

바인딩을 지나 수신으로 넘어가기

### Step11. 수신
<img width="1470" alt="스크린샷 2024-08-26 오후 5 30 41" src="https://github.com/user-attachments/assets/3c8cb964-1333-4484-9a84-eb10e36b5fe5">
수신 - 체크박스 체크하기
수신 트래픽 - '어디서나 트래픽 허용'클릭
수신 유형 - 'HTTP' 클릭
대산 포트 - '8080'입력

왼쪽 하단에 '검토 + 만들기'를 누른 후 '만들기'를 누르기

배포 진행중 기다리기..
<img width="1470" alt="스크린샷 2024-08-26 오후 5 36 18" src="https://github.com/user-attachments/assets/7c9ff4f5-ac12-448b-b624-085a0a1f9178">

끝난 후 리소스로 이동 클릭
<img width="1470" alt="스크린샷 2024-08-26 오후 5 45 52" src="https://github.com/user-attachments/assets/fce24b3b-6dfb-4a6a-b26e-14eb5054c9ed">


### Step12. 배포
<img width="1470" alt="스크린샷 2024-08-26 오후 5 51 35" src="https://github.com/user-attachments/assets/af59523f-298d-46b9-aeab-98e0b611e27b">
설정 > 배포로 이동한 후
'Github로 로그인'을 선택해줍니다.
<img width="1470" alt="스크린샷 2024-08-26 오후 5 53 27" src="https://github.com/user-attachments/assets/6a53d5eb-6f7f-45da-9687-47369890a939">

### Step13. 배포2
<img width="1470" alt="스크린샷 2024-08-26 오후 5 57 09" src="https://github.com/user-attachments/assets/e7985bdf-7643-478a-a8ea-75459b0fb432">
조직 - 자신의 깃허브 닉네임 클릭
리포지토리 - 클론받은 리포지토리 선택
분기 - 'main'입력
리포지토리 원본 - 'Docker Hub 또는 기타 레지스트리'선택
이미지 - 'anys34/five:latest'입력
로그인 서버 URL - 'docker.io'입력
사용자 이름 - 도커 아이디 입력
암호 - 도커 비밀번호 입력

그 후 '연속 배포 시작' 클릭

----
이제 메인브렌치가 바뀔 때 마다 배포가 됩니당
