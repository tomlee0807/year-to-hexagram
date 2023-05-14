// Define the question set
const questionSet = [
    {
        "question": "A",
        "answer": "體,乾 ,䷀,,,"
    },
    {
        "question": "辛酉",
        "answer": "體,夬,䷪。用,履,䷉"
    },
    {
        "question": "庚申",
        "answer": "體,大有,䷍。用,同人,䷌"
    },
    {
        "question": "己未",
        "answer": "體,大壯,䷡。用,無妄,䷘"
    },
    {
        "question": "戊午",
        "answer": "體,小畜,䷈。用,姤,䷫"
    },
    {
        "question": "丁已",
        "answer": "體,需,䷄。用,訟,䷅"
    },
    {
        "question": "丙辰",
        "answer": "體,大畜,䷙。用,遯,䷠"
    },
    {
        "question": "乙卯",
        "answer": "體,泰,䷊。用,否,䷋"
    },
    {
        "question": "甲寅",
        "answer": "體,履,䷉。用,夬,䷪"
    },
    {
        "question": "癸丑",
        "answer": "體,兌,䷹。用,澤,"
    },
    {
        "question": "壬子",
        "answer": "體,睽,䷥。用,革,䷰"
    },
    {
        "question": "辛亥",
        "answer": "體,歸妹,䷵。用,隨,䷐"
    },
    {
        "question": "庚戌",
        "answer": "體,中孚,䷼。用,大過,䷛"
    },
    {
        "question": "己酉",
        "answer": "體,節,䷻。用,困,䷮"
    },
    {
        "question": "戊申",
        "answer": "體,損,䷨。用,咸,䷞"
    },
    {
        "question": "丁未",
        "answer": "體,臨,䷒。用,萃,䷬"
    },
    {
        "question": "丙午",
        "answer": "體,同人,䷌。用,大有,䷍"
    },
    {
        "question": "乙己",
        "answer": "體,革,䷰。用,睽,䷥"
    },
    {
        "question": "B",
        "answer": "體,離,䷝。用,火,"
    },
    {
        "question": "甲辰",
        "answer": "體,豐,䷶。用,噬嗑,䷔"
    },
    {
        "question": "癸卯",
        "answer": "體,家人,䷤。用,鼎,䷱"
    },
    {
        "question": "壬寅",
        "answer": "體,既濟,䷾。用,未濟,䷿"
    },
    {
        "question": "辛丑",
        "answer": "體,賁,䷕。用,旅,䷷"
    },
    {
        "question": "庚子",
        "answer": "體,明夷,䷣。用,晉,䷢"
    },
    {
        "question": "己亥",
        "answer": "體,無妄,䷘。用,大壯,䷡"
    },
    {
        "question": "戊戌",
        "answer": "體,隨,䷐。用,歸妹,䷵"
    },
    {
        "question": "丁酉",
        "answer": "體,噬嗑,䷔。用,豐,䷶"
    },
    {
        "question": "丙申",
        "answer": "體,震,䷲。用,雷,"
    },
    {
        "question": "乙未",
        "answer": "體,益,䷩。用,恒,䷟"
    },
    {
        "question": "甲午",
        "answer": "體,屯,䷂。用,解,䷧"
    },
    {
        "question": "癸已",
        "answer": "體,頤,䷚。用,小過,䷽"
    },
    {
        "question": "壬辰",
        "answer": "體,復,䷗。用,豫,䷏"
    },
    {
        "question": "壬戌",
        "answer": "體,姤,䷫。用,小畜,䷈"
    },
    {
        "question": "癸亥",
        "answer": "體,大過,䷛。用,中孚,䷼"
    },
    {
        "question": "甲子",
        "answer": "體,鼎,䷱。用,家人,䷤"
    },
    {
        "question": "乙丑",
        "answer": "體,恒,䷟。用,益,䷩"
    },
    {
        "question": "丙寅",
        "answer": "體,巽,䷸。用,風,"
    },
    {
        "question": "丁卯",
        "answer": "體,井,䷯。用,渙,䷺"
    },
    {
        "question": "戊辰",
        "answer": "體,蠱,䷑。用,漸,䷴"
    },
    {
        "question": "己已",
        "answer": "體,升,䷭。用,觀,䷓"
    },
    {
        "question": "庚午",
        "answer": "體,訟,䷅。用,需,䷄"
    },
    {
        "question": "辛未",
        "answer": "體,困,䷮。用,節,䷻"
    },
    {
        "question": "壬申",
        "answer": "體,未濟,䷿。用,既濟,䷾"
    },
    {
        "question": "癸酉",
        "answer": "體,解,䷧。用,屯,䷂"
    },
    {
        "question": "甲戌",
        "answer": "體,渙,䷺。用,井,䷯"
    },
    {
        "question": "C",
        "answer": "體,坎,䷜。用,水,"
    },
    {
        "question": "乙亥",
        "answer": "體,蒙,䷃。用,蹇,䷦"
    },
    {
        "question": "丙子",
        "answer": "體,師,䷆。用,比,䷇"
    },
    {
        "question": "丁丑",
        "answer": "體,遯,䷠。用,大畜,䷙"
    },
    {
        "question": "戊寅",
        "answer": "體,咸,䷞。用,損,䷨"
    },
    {
        "question": "己卯",
        "answer": "體,旅,䷷。用,賁,䷕"
    },
    {
        "question": "庚辰",
        "answer": "體,小過,䷽。用,頤,䷚"
    },
    {
        "question": "辛已",
        "answer": "體,漸,䷴。用,蠱,䷑"
    },
    {
        "question": "壬午",
        "answer": "體,蹇,䷦。用,蒙,䷃"
    },
    {
        "question": "癸未",
        "answer": "體,艮,䷳。用,山,"
    },
    {
        "question": "甲申",
        "answer": "體,謙,䷎。用,剝,䷖"
    },
    {
        "question": "乙酉",
        "answer": "體,否,䷋。用,泰,䷊"
    },
    {
        "question": "丙戌",
        "answer": "體,萃,䷬。用,臨,䷒"
    },
    {
        "question": "丁亥",
        "answer": "體,晉,䷢。用,明夷,䷣"
    },
    {
        "question": "戌子",
        "answer": "體,豫,䷏。用,復,䷗"
    },
    {
        "question": "己丑",
        "answer": "體,觀,䷓。用,升,䷭"
    },
    {
        "question": "庚寅",
        "answer": "體,比,䷇。用,師,䷆"
    },
    {
        "question": "辛卯",
        "answer": "體,剝,䷖。用,謙,䷎"
    },
    {
        "question": "D",
        "answer": "體,坤,䷁。用,地,"
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

