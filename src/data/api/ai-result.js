export async function fetchAiResult(score) {
  const answerSummary = Object.entries(score)
    .map(([key, val]) => `${key}: ${val}`)
    .join(', ');

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer YOUR_OPENAI_API_KEY`
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "당신은 귀여운 AI 요정입니다. 사용자의 성향 점수를 보고 지수공주님 스타일로 귀여운 선물 추천 멘트를 만들어주세요."
        },
        {
          role: "user",
          content: `이 사용자의 성향 점수: ${answerSummary}. 어떤 유형이며 어떤 선물이 어울릴까요?`
        }
      ]
    })
  });

  const data = await res.json();
  return data.choices[0].message.content;
}
