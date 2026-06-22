let q = [
  {
    question: "বাংলাদেশের রাজধানী কী?",
    options: ["ঢাকা", "চট্টগ্রাম", "খুলনা", "রাজশাহী"],
    answer: "ঢাকা"
  },
  {
    question: "বাংলাদেশের জাতীয় ফুল কী?",
    options: ["গোলাপ", "শাপলা", "জবা", "গাঁদা"],
    answer: "শাপলা"
  },
  {
    question: "বাংলাদেশের জাতীয় পশু কী?",
    options: ["বাঘ", "হাতি", "হরিণ", "সিংহ"],
    answer: "বাঘ"
  }
];

let i = 0, s = 0;

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const score = document.getElementById("score");

function show() {
  question.innerText = q[i].question;
  answers.innerHTML = "";

  q[i].options.forEach(o => {
    let b = document.createElement("button");
    b.innerText = o;

    b.onclick = () => {
      if (o === q[i].answer) {
        s++;
        score.innerText = "Score: " + s;
      }
    };

    answers.appendChild(b);
  });
}

function nextQ() {
  i = (i + 1) % q.length;
  show();
}

show();let
