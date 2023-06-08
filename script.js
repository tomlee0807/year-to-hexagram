// Define the question set
const questionSet = [
    {
        "question": "A",
        "answer": "[後天卦:大有卦䷍ 互卦:夬卦䷪] [先天體卦:乾卦䷀ 先天用卦:無 互卦:乾卦䷀]"                                                                                                                   
    },
    {
        "question": "辛酉",
        "answer": "[後天卦:睽卦䷥ 互卦:既濟卦䷾] [先天體卦:夬卦䷪ 先天用卦:履卦䷉ 互卦:乾卦䷀]"
    },
    {
        "question": "庚申",
        "answer": "[後天卦:離卦䷝ 互卦:大過卦䷛] [先天體卦:大有卦䷍ 先天用卦:同人卦䷌ 互卦:夬卦䷪]"
    },
    {
        "question": "己未",
        "answer": "[後天卦:噬嗑卦䷔ 互卦:蹇卦䷦] [先天體卦:大壯卦䷡ 先天用卦:無妄卦䷘ 互卦:夬卦䷪]"
    },
    {
        "question": "戊午",
        "answer": "[後天卦:鼎卦䷱ 互卦:夬卦䷪] [先天體卦:小畜卦䷈ 先天用卦:姤卦䷫ 互卦:睽卦䷥]"
    },
    {
        "question": "丁巳",
        "answer": "[後天卦:未濟卦䷿ 互卦:既濟卦䷾] [先天體卦:需卦䷄ 先天用卦:訟卦䷅ 互卦:睽卦䷥]"
    },
    {
        "question": "丙辰",
        "answer": "[後天卦:旅卦䷷ 互卦:大過卦䷛] [先天體卦:大畜卦䷙ 先天用卦:遯卦䷠ 互卦:歸妹卦䷵]"
    },
    {
        "question": "乙卯",
        "answer": "[後天卦:晉卦䷢ 互卦:蹇卦䷦] [先天體卦:泰卦䷊ 先天用卦:否卦䷋ 互卦:歸妹卦䷵]"
    },
    {
        "question": "甲寅",
        "answer": "[後天卦:小畜卦䷈ 互卦:睽卦䷥] [先天體卦:履卦䷉ 先天用卦:夬卦䷪ 互卦:豐卦䷶]"
    },
    {
        "question": "癸丑",
        "answer": "[後天卦:中孚卦䷼ 互卦:頤卦䷚] [先天體卦:兌卦䷹ 先天用卦:澤卦 互卦:家人卦䷤]"
    },
    {
        "question": "壬子",
        "answer": "[後天卦:家人卦䷤ 互卦:未濟卦䷿] [先天體卦:睽卦䷥ 先天用卦:革卦䷰ 互卦:既濟卦䷾]"
    },
    {
        "question": "辛亥",
        "answer": "[後天卦:益卦䷩ 互卦:剝卦䷖] [先天體卦:歸妹卦䷵ 先天用卦:隨卦䷐ 互卦:既濟卦䷾]"
    },
    {
        "question": "庚戌",
        "answer": "[後天卦:巽卦䷸ 互卦:剝卦䷖] [先天體卦:中孚卦䷼ 先天用卦:大過卦䷛ 互卦:頤卦䷚]"
    },
    {
        "question": "己酉",
        "answer": "[後天卦:渙卦䷺ 互卦:頤卦䷚] [先天體卦:節卦䷻ 先天用卦:困卦䷮ 互卦:頤卦䷚]"
    },
    {
        "question": "戊申",
        "answer": "[後天卦:漸卦䷴ 互卦:未濟卦䷿] [先天體卦:損卦䷨ 先天用卦:咸卦䷞ 互卦:復卦䷗]"
    },
    {
        "question": "丁未",
        "answer": "[後天卦:觀卦䷓ 互卦:剝卦䷖] [先天體卦:臨卦䷒ 先天用卦:萃卦䷬ 互卦:復卦䷗]"
    },
    {
        "question": "丙午",
        "answer": "[後天卦:大壯卦䷡ 互卦:夬卦䷪] [先天體卦:同人卦䷌ 先天用卦:大有卦䷍ 互卦:姤卦䷫]"
    },
    {
        "question": "乙巳",
        "answer": "[後天卦:歸妹卦䷵ 互卦:既濟卦䷾] [先天體卦:革卦䷰ 先天用卦:睽卦䷥ 互卦:姤卦䷫]"
    },
    {
        "question": "B",
        "answer": "[後天卦:豐卦䷶ 互卦:大過卦䷛] [先天體卦:離卦䷝ 先天用卦:火卦 互卦:大過卦䷛]"
    },
    {
        "question": "甲辰",
        "answer": "[後天卦:震卦䷲ 互卦:蹇卦䷦] [先天體卦:豐卦䷶ 先天用卦:噬嗑卦䷔ 互卦:大過卦䷛]"
    },
    {
        "question": "癸卯",
        "answer": "[後天卦:恒卦䷟ 互卦:夬卦䷪] [先天體卦:家人卦䷤ 先天用卦:鼎卦䷱ 互卦:未濟卦䷿]"
    },
    {
        "question": "壬寅",
        "answer": "[後天卦:解卦䷧ 互卦:既濟卦䷾] [先天體卦:既濟卦䷾ 先天用卦:未濟卦䷿ 互卦:未濟卦䷿]"
    },
    {
        "question": "辛丑",
        "answer": "[後天卦:小過卦䷽ 互卦:大過卦䷛] [先天體卦:賁卦䷕ 先天用卦:旅卦䷷ 互卦:解卦䷧]"
    },
    {
        "question": "庚子",
        "answer": "[後天卦:豫卦䷏ 互卦:蹇卦䷦] [先天體卦:明夷卦䷣ 先天用卦:晉卦䷢ 互卦:解卦䷧]"
    },
    {
        "question": "己亥",
        "answer": "[後天卦:大畜卦䷙ 互卦:歸妹卦䷵] [先天體卦:無妄卦䷘ 先天用卦:大壯卦䷡ 互卦:漸卦䷴]"
    },
    {
        "question": "戊戌",
        "answer": "[後天卦:損卦䷨ 互卦:復卦䷗] [先天體卦:隨卦䷐ 先天用卦:歸妹卦䷵ 互卦:漸卦䷴]"
    },
    {
        "question": "丁酉",
        "answer": "[後天卦:賁卦䷕ 互卦:解卦䷧] [先天體卦:噬嗑卦䷔ 先天用卦:豐卦䷶ 互卦:蹇卦䷦]"
    },
    {
        "question": "丙申",
        "answer": "[後天卦:頤卦䷚ 互卦:坤卦䷁] [先天體卦:震卦䷲ 先天用卦:雷卦 互卦:蹇卦䷦]"
    },
    {
        "question": "乙未",
        "answer": "[後天卦:蠱卦䷑ 互卦:歸妹卦䷵] [先天體卦:益卦䷩ 先天用卦:恒卦䷟ 互卦:剝卦䷖]"
    },
    {
        "question": "甲午",
        "answer": "[後天卦:蒙卦䷃ 互卦:復卦䷗] [先天體卦:屯卦䷂ 先天用卦:解卦䷧ 互卦:剝卦䷖]"
    },
    {
        "question": "癸巳",
        "answer": "[後天卦:艮卦䷳ 互卦:解卦䷧] [先天體卦:頤卦䷚ 先天用卦:小過卦䷽ 互卦:坤卦䷁]"
    },
    {
        "question": "壬辰",
        "answer": "[後天卦:剝卦䷖ 互卦:坤卦䷁] [先天體卦:復卦䷗ 先天用卦:豫卦䷏ 互卦:坤卦䷁]"
    },
    {
        "question": "壬戌",
        "answer": "[後天卦:泰卦䷊ 互卦:歸妹卦䷵] [先天體卦:姤卦䷫ 先天用卦:小畜卦䷈ 互卦:乾卦䷀]"
    },
    {
        "question": "癸亥",
        "answer": "[後天卦:臨卦䷒ 互卦:復卦䷗] [先天體卦:大過卦䷛ 先天用卦:中孚卦䷼ 互卦:乾卦䷀]"
    },
    {
        "question": "甲子",
        "answer": "[後天卦:明夷卦䷣ 互卦:解卦䷧] [先天體卦:鼎卦䷱ 先天用卦:家人卦䷤ 互卦:夬卦䷪]"
    },
    {
        "question": "乙丑",
        "answer": "[後天卦:復卦䷗ 互卦:坤卦䷁] [先天體卦:恒卦䷟ 先天用卦:益卦䷩ 互卦:夬卦䷪]"
    },
    {
        "question": "丙寅",
        "answer": "[後天卦:升卦䷭ 互卦:歸妹卦䷵] [先天體卦:巽卦䷸ 先天用卦:風卦 互卦:睽卦䷥]"
    },
    {
        "question": "丁卯",
        "answer": "[後天卦:師卦䷆ 互卦:復卦䷗] [先天體卦:井卦䷯ 先天用卦:渙卦䷺ 互卦:睽卦䷥]"
    },
    {
        "question": "戊辰",
        "answer": "[後天卦:謙卦䷎ 互卦:解卦䷧] [先天體卦:蠱卦䷑ 先天用卦:漸卦䷴ 互卦:歸妹卦䷵]"
    },
    {
        "question": "己巳",
        "answer": "[後天卦:坤卦䷁ 互卦:坤卦䷁] [先天體卦:升卦䷭ 先天用卦:觀卦䷓ 互卦:歸妹卦䷵]"
    },
    {
        "question": "庚午",
        "answer": "[後天卦:夬卦䷪ 互卦:乾卦䷀] [先天體卦:訟卦䷅ 先天用卦:需卦䷄ 互卦:家人卦䷤]"
    },
    {
        "question": "辛未",
        "answer": "[後天卦:兌卦䷹ 互卦:家人卦䷤] [先天體卦:困卦䷮ 先天用卦:節卦䷻ 互卦:家人卦䷤]"
    },
    {
        "question": "壬申",
        "answer": "[後天卦:革卦䷰ 互卦:姤卦䷫] [先天體卦:未濟卦䷿ 先天用卦:既濟卦䷾ 互卦:既濟卦䷾]"
    },
    {
        "question": "癸酉",
        "answer": "[後天卦:隨卦䷐ 互卦:漸卦䷴] [先天體卦:解卦䷧ 先天用卦:屯卦䷂ 互卦:既濟卦䷾]"
    },
    {
        "question": "甲戌",
        "answer": "[後天卦:大過卦䷛ 互卦:乾卦䷀] [先天體卦:渙卦䷺ 先天用卦:井卦䷯ 互卦:頤卦䷚]"
    },
    {
        "question": "C",
        "answer": "[後天卦:困卦䷮ 互卦:家人卦䷤] [先天體卦:坎卦䷜ 先天用卦:水卦 互卦:頤卦䷚]"
    },
    {
        "question": "乙亥",
        "answer": "[後天卦:咸卦䷞ 互卦:姤卦䷫] [先天體卦:蒙卦䷃ 先天用卦:蹇卦䷦ 互卦:復卦䷗]"
    },
    {
        "question": "丙子",
        "answer": "[後天卦:萃卦䷬ 互卦:漸卦䷴] [先天體卦:師卦䷆ 先天用卦:比卦䷇ 互卦:復卦䷗]"
    },
    {
        "question": "丁丑",
        "answer": "[後天卦:乾卦䷀ 互卦:乾卦䷀] [先天體卦:遯卦䷠ 先天用卦:大畜卦䷙ 互卦:姤卦䷫]"
    },
    {
        "question": "戊寅",
        "answer": "[後天卦:履卦䷉ 互卦:家人卦䷤] [先天體卦:咸卦䷞ 先天用卦:損卦䷨ 互卦:姤卦䷫]"
    },
    {
        "question": "己卯",
        "answer": "[後天卦:同人卦䷌ 互卦:姤卦䷫] [先天體卦:旅卦䷷ 先天用卦:賁卦䷕ 互卦:大過卦䷛]"
    },
    {
        "question": "庚辰",
        "answer": "[後天卦:無妄卦䷘ 互卦:漸卦䷴] [先天體卦:小過卦䷽ 先天用卦:頤卦䷚ 互卦:大過卦䷛]"
    },
    {
        "question": "辛巳",
        "answer": "[後天卦:姤卦䷫ 互卦:乾卦䷀] [先天體卦:漸卦䷴ 先天用卦:蠱卦䷑ 互卦:未濟卦䷿]"
    },
    {
        "question": "壬午",
        "answer": "[後天卦:訟卦䷅ 互卦:家人卦䷤] [先天體卦:蹇卦䷦ 先天用卦:蒙卦䷃ 互卦:未濟卦䷿]"
    },
    {
        "question": "癸未",
        "answer": "[後天卦:遯卦䷠ 互卦:姤卦䷫] [先天體卦:艮卦䷳ 先天用卦:山卦 互卦:解卦䷧]"
    },
    {
        "question": "甲申",
        "answer": "[後天卦:否卦䷋ 互卦:漸卦䷴] [先天體卦:謙卦䷎ 先天用卦:剝卦䷖ 互卦:解卦䷧]"
    },
    {
        "question": "乙酉",
        "answer": "[後天卦:需卦䷄ 互卦:睽卦䷥] [先天體卦:否卦䷋ 先天用卦:泰卦䷊ 互卦:漸卦䷴]"
    },
    {
        "question": "丙戌",
        "answer": "[後天卦:節卦䷻ 互卦:頤卦䷚] [先天體卦:萃卦䷬ 先天用卦:臨卦䷒ 互卦:漸卦䷴]"
    },
    {
        "question": "丁亥",
        "answer": "[後天卦:既濟卦䷾ 互卦:未濟卦䷿] [先天體卦:晉卦䷢ 先天用卦:明夷卦䷣ 互卦:蹇卦䷦]"
    },
    {
        "question": "戊子",
        "answer": "[後天卦:屯卦䷂ 互卦:剝卦䷖] [先天體卦:豫卦䷏ 先天用卦:復卦䷗ 互卦:蹇卦䷦]"
    },
    {
        "question": "己丑",
        "answer": "[後天卦:井卦䷯ 互卦:睽卦䷥] [先天體卦:觀卦䷓ 先天用卦:升卦䷭ 互卦:剝卦䷖]"
    },
    {
        "question": "庚寅",
        "answer": "[後天卦:坎卦䷜ 互卦:頤卦䷚] [先天體卦:比卦䷇ 先天用卦:師卦䷆ 互卦:剝卦䷖]"
    },
    {
        "question": "辛卯",
        "answer": "[後天卦:蹇卦䷦ 互卦:未濟卦䷿] [先天體卦:剝卦䷖ 先天用卦:謙卦䷎ 互卦:坤卦䷁]"
    },
    {
        "question": "D",
        "answer": "[後天卦:比卦䷇ 互卦:剝卦䷖] [先天體卦:坤卦䷁ 先天用卦:地卦 互卦:坤卦䷁]"
}
];

// Get references to the DOM elements
const questionInput = document.getElementById("question-input");
const submitBtn = document.getElementById("submit-btn");
const questionEl = document.getElementById("question");
const showAnswerBtn = document.getElementById("show-answer-btn");
const answerEl = document.getElementById("answer");

// Function to check if the input matches any of the questions in the set
function findQuestion(input) {
  return questionSet.find(question => question.question === input);
}

// Add an event listener to the submit button
submitBtn.addEventListener("click", function() {
  // Get the user input
  const userInput = questionInput.value;
  
  // Find the question in the set that matches the user input
  const matchedQuestion = findQuestion(userInput);
  
  // If there is a match, display the question and answer
  if (matchedQuestion) {
    questionEl.textContent = matchedQuestion.question;
    answerEl.textContent = matchedQuestion.answer;
    questionEl.style.display = "block";
    answerEl.style.display = "block";
  }
});

