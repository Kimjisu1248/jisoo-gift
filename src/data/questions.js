const questions = [
  {
    question: "주말에 뭐 하고 싶어?",
    options: [
      { text: "운동으로 땀 빼기!", type: "protein" },
      { text: "홈카페하면서 힐링~", type: "skincare" },
      { text: "사진 찍으러 출사 가기!", type: "camera" },
      { text: "그냥 집콕하면서 넷플릭스", type: "etc" }
    ]
  },
  {
    question: "당신의 아침 루틴은?",
    options: [
      { text: "헬스장 직행", type: "protein" },
      { text: "스킨케어 풀코스", type: "skincare" },
      { text: "창 밖 하늘 찍기", type: "camera" },
      { text: "알람 끄고 10분 더 자기", type: "etc" }
    ]
  },
  {
    question: "스트레스 받을 때는?",
    options: [
      { text: "운동으로 날리기", type: "protein" },
      { text: "홈케어로 진정시키기", type: "skincare" },
      { text: "감성 사진 찍으며 힐링", type: "camera" },
      { text: "그냥 아무것도 안 하기", type: "etc" }
    ]
  },
  {
    question: "쇼핑몰에서 자주 보는 카테고리는?",
    options: [
      { text: "헬스 보조용품", type: "protein" },
      { text: "화장품/뷰티", type: "skincare" },
      { text: "전자기기/카메라", type: "camera" },
      { text: "생활용품/문구", type: "etc" }
    ]
  },
  {
    question: "가장 자주 사용하는 앱은?",
    options: [
      { text: "운동 루틴 기록 앱", type: "protein" },
      { text: "피부 분석 뷰티 앱", type: "skincare" },
      { text: "카메라/편집 앱", type: "camera" },
      { text: "배달 앱", type: "etc" }
    ]
  },
  {
    question: "친구들이 부르는 별명은?",
    options: [
      { text: "근육돼지", type: "protein" },
      { text: "피부천사", type: "skincare" },
      { text: "감성작가", type: "camera" },
      { text: "슬리퍼요정", type: "etc" }
    ]
  },
  {
    question: "가장 받고 싶은 선물은?",
    options: [
      { text: "단백질 보충제", type: "protein" },
      { text: "고급 스킨케어 세트", type: "skincare" },
      { text: "즉석 카메라", type: "camera" },
      { text: "편한 슬리퍼", type: "etc" }
    ]
  },
  {
    question: "기분 좋은 하루는?",
    options: [
      { text: "운동 제대로 한 날", type: "protein" },
      { text: "피부가 유난히 좋은 날", type: "skincare" },
      { text: "사진이 잘 나온 날", type: "camera" },
      { text: "아무 일 없이 쉰 날", type: "etc" }
    ]
  },
  {
    question: "이상형의 조건은?",
    options: [
      { text: "운동 같이 할 사람", type: "protein" },
      { text: "피부가 매끈한 사람", type: "skincare" },
      { text: "사진 잘 찍어주는 사람", type: "camera" },
      { text: "나랑 밥 잘 먹는 사람", type: "etc" }
    ]
  },
  {
    question: "오늘 점심 메뉴는?",
    options: [
      { text: "닭가슴살 샐러드", type: "protein" },
      { text: "피부에 좋은 연어 덮밥", type: "skincare" },
      { text: "비주얼 좋은 파스타", type: "camera" },
      { text: "그냥 라면", type: "etc" }
    ]
  },
  {
    question: "당신의 방 분위기는?",
    options: [
      { text: "덤벨과 요가매트", type: "protein" },
      { text: "조명과 화장대", type: "skincare" },
      { text: "사진과 감성 조명", type: "camera" },
      { text: "청소는 가끔만 하는 편", type: "etc" }
    ]
  },
  {
    question: "자주 가는 곳은?",
    options: [
      { text: "헬스장", type: "protein" },
      { text: "올리브영", type: "skincare" },
      { text: "카페 거리", type: "camera" },
      { text: "집 근처 편의점", type: "etc" }
    ]
  },
  {
    question: "휴가를 간다면?",
    options: [
      { text: "피트니스 리조트", type: "protein" },
      { text: "스파 호텔", type: "skincare" },
      { text: "풍경 좋은 여행지", type: "camera" },
      { text: "무조건 집에서 휴식", type: "etc" }
    ]
  },
  {
    question: "하루 중 가장 좋은 시간은?",
    options: [
      { text: "운동 후 샤워", type: "protein" },
      { text: "스킨케어 마무리", type: "skincare" },
      { text: "해질 무렵 하늘 찍기", type: "camera" },
      { text: "자기 전 침대 누울 때", type: "etc" }
    ]
  },
  {
    question: "사진 찍을 땐?",
    options: [
      { text: "폼나는 자세!", type: "protein" },
      { text: "피부 보정 필수", type: "skincare" },
      { text: "감성 색감 중요", type: "camera" },
      { text: "귀찮으니까 대충 찍음", type: "etc" }
    ]
  },
  {
    question: "지갑에 항상 있는 건?",
    options: [
      { text: "헬스장 카드", type: "protein" },
      { text: "립밤/팩트", type: "skincare" },
      { text: "사진 인화 한 장", type: "camera" },
      { text: "영수증 더미", type: "etc" }
    ]
  },
  {
    question: "가장 오래 보는 유튜브 콘텐츠는?",
    options: [
      { text: "근육/바디 프로필", type: "protein" },
      { text: "피부과 시술/케어", type: "skincare" },
      { text: "필름 브이로그", type: "camera" },
      { text: "ASMR 먹방", type: "etc" }
    ]
  },
  {
    question: "오늘 하루 한 줄 요약?",
    options: [
      { text: "운동하고 뿌듯한 날", type: "protein" },
      { text: "촉촉하게 잘 살아낸 날", type: "skincare" },
      { text: "감성 가득한 하루", type: "camera" },
      { text: "무난무난 아무 일도 없었음", type: "etc" }
    ]
  },
  {
    question: "인스타그램에 올리는 건?",
    options: [
      { text: "운동 인증샷", type: "protein" },
      { text: "화장품 추천 후기", type: "skincare" },
      { text: "필름풍 일상 사진", type: "camera" },
      { text: "맛집/커피 사진", type: "etc" }
    ]
  },
  {
    question: "가장 잘 맞는 선물은?",
    options: [
      { text: "단백질 보충제", type: "protein" },
      { text: "고보습 스킨케어 세트", type: "skincare" },
      { text: "일회용 필름카메라", type: "camera" },
      { text: "텀블러 or 슬리퍼", type: "etc" }
    ]
  }
];

export default questions;
