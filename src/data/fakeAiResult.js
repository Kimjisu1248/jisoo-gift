const fakeAiResult = (score) => {
  const topCategory = Object.entries(score).sort((a, b) => b[1] - a[1])[0][0];

  const messages = {
    protein: "🔥 지수공주님이 말하셨어요! '당신은 진정한 열정 근육러! 선물은 무조건 프로틴!'",
    skincare: "💧 지수공주님이 속삭이셨어요. '피부가 반짝반짝~ 당신에겐 스킨케어가 딱이에요!'",
    camera: "📸 지수공주님이 감탄하셨어요! '이 감성 뭐야~? 감성카메라로 당신의 하루를 남겨요!'",
    etc: "🩴 지수공주님이 말하셨어요. '편안한 게 최고야~ 슬리퍼나 텀블러 어때요?'"
  };

  return messages[topCategory] || "지수공주님의 마음을 아직 모르겠어요 😢";
};

export default fakeAiResult;
