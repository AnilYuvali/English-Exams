// Aptis Advanced Grammar & Vocabulary Practice Test 2
// Captured from aptisexamen.net (test=2, level=advanced). Answers verified against the site: first run scored 98% (49/50);
// the one miss (Q23) was corrected to the answer given by the site's answer key ("Did").
// type "mc": single multiple-choice question; `answer` is the index into `choices`.
// type "match": several prompts sharing one word bank; `answers[i]` is the correct word for `prompts[i]`.
const QUESTIONS = [
  { n: 1, type: "mc", text: "Under no circumstances ______ to discuss the case with the press.", choices: ["are staff permitted", "staff are permitted", "permitted are staff"], answer: 0 },
  { n: 2, type: "mc", text: "The scheme, ______ cost has trebled since 2019, is now under review.", choices: ["of which the", "which its", "whose"], answer: 2 },
  { n: 3, type: "mc", text: "Not only ______ the deadline, but they also came in under budget.", choices: ["met the team", "the team met", "did the team meet"], answer: 2 },
  { n: 4, type: "mc", text: "It is high time the regulator ______ a formal position on the matter.", choices: ["should take", "took", "takes"], answer: 1 },
  { n: 5, type: "mc", text: "The results were ______ we had dared to hope.", choices: ["as better as", "better than", "better as"], answer: 1 },
  { n: 6, type: "mc", text: "______ from the platform, the city looks almost uninhabited.", choices: ["Seen", "Seeing", "To see"], answer: 0 },
  { n: 7, type: "mc", text: "She denied ______ any part in the decision.", choices: ["to have played", "having played", "that to play"], answer: 1 },
  { n: 8, type: "mc", text: "The regulations apply to all staff, ______ seniority.", choices: ["regardless to", "notwithstanding of", "irrespective of"], answer: 2 },
  { n: 9, type: "mc", text: "Such ______ that the venue had to be changed twice.", choices: ["demand it was", "the demand was", "was the demand"], answer: 2 },
  { n: 10, type: "mc", text: "On no account ______ the machine while the indicator is red.", choices: ["you should restart", "you restart", "should you restart"], answer: 2 },
  { n: 11, type: "mc", text: "The report stops short ______ that the practice was deliberate.", choices: ["to allege", "of alleging", "from alleging"], answer: 1 },
  { n: 12, type: "mc", text: "Whatever ______, the outcome will be contested.", choices: ["the panel decides", "the panel will decide", "does the panel decide"], answer: 0 },
  { n: 13, type: "mc", text: "He resented ______ about the merger only after it had been agreed.", choices: ["being told", "to be told", "having told"], answer: 0 },
  { n: 14, type: "mc", text: "Hardly ______ when the power failed again.", choices: ["did the lights come on", "the lights had come on", "had the lights come on"], answer: 2 },
  { n: 15, type: "mc", text: "The evidence is compelling; ______, the court declined to intervene.", choices: ["even so", "even though", "despite"], answer: 0 },
  { n: 16, type: "mc", text: "They are believed ______ the country before the warrant was issued.", choices: ["to leave", "to have left", "having left"], answer: 1 },
  { n: 17, type: "mc", text: "So thoroughly ______ that no trace of the original remains.", choices: ["was revised the text", "the text had been revised", "had the text been revised"], answer: 2 },
  { n: 18, type: "mc", text: "I would sooner ______ than compromise on the wording.", choices: ["to resign", "resign", "resigning"], answer: 1 },
  { n: 19, type: "mc", text: "The proposal has been shelved, ______ disappointed its authors.", choices: ["what", "which", "that"], answer: 1 },
  { n: 20, type: "mc", text: "There being no further business, ______.", choices: ["the meeting was adjourned", "adjourned the meeting", "was the meeting adjourned"], answer: 0 },
  { n: 21, type: "mc", text: "Few economists, ______ any, predicted the scale of the contraction.", choices: ["or", "if", "though"], answer: 1 },
  { n: 22, type: "mc", text: "The organisers had the venue ______ twenty-four hours before the event.", choices: ["redecorated", "redecorating", "to redecorate"], answer: 0 },
  { n: 23, type: "mc", text: "______ he say so himself, nobody would have believed it.", choices: ["Should", "Would", "Did"], answer: 2 },
  { n: 24, type: "mc", text: "The paper is as much a memoir ______ a work of history.", choices: ["than", "like", "as"], answer: 2 },
  { n: 25, type: "mc", text: "Nowhere in the archive ______ any reference to the meeting.", choices: ["there is", "it is", "is there"], answer: 2 },
  {
    n: 26, type: "match",
    text: "Match each definition to the word it defines. Use each word once only. You will not need five of the words.",
    prompts: ["Open to more than one interpretation", "Difficult to detect because of its small scale or indirectness", "Unwilling to spend money or use resources", "Impossible to put right", "Producing a great deal from very little"],
    choices: ["coherent", "irreparable", "transient", "frugal", "peripheral", "subtle", "ambiguous", "candid", "obsolete", "prolific"],
    answers: ["ambiguous", "subtle", "frugal", "irreparable", "prolific"]
  },
  {
    n: 27, type: "match",
    text: "Match each word on the left to the word closest in meaning. Use each word once only. You will not need five of the words.",
    prompts: ["alleviate", "scrutinise", "augment", "jeopardise", "condone"],
    choices: ["tolerate", "endanger", "increase", "dismantle", "ease", "allocate", "postpone", "conceal", "examine", "imitate"],
    answers: ["ease", "examine", "increase", "endanger", "tolerate"]
  },
  {
    n: 28, type: "match",
    text: "Choose the word that best completes each sentence. Use each word once only. You will not need five of the words.",
    prompts: ["The changes were purely ______ and altered nothing of substance.", "The company faces ______ competition from three new entrants.", "She gave a ______ account of a very complicated dispute.", "The two accounts are ______; both cannot be true.", "His resignation was ______ rather than voluntary."],
    choices: ["negligible", "reciprocal", "nominal", "irreconcilable", "sporadic", "lucid", "expedient", "fierce", "cosmetic", "punitive"],
    answers: ["cosmetic", "fierce", "lucid", "irreconcilable", "expedient"]
  },
  {
    n: 29, type: "match",
    text: "Select the word that is most often used with the word on the left. Use each word once only. You will not need five of the words.",
    prompts: ["blanket", "compelling", "uphill", "vicious", "stark"],
    choices: ["evidence", "aftermath", "consensus", "circle", "struggle", "ban", "contrast", "quota", "outlay", "premium"],
    answers: ["ban", "evidence", "struggle", "circle", "contrast"]
  },
  {
    n: 30, type: "match",
    text: "Select the word that is most often used with the word on the left. Use each word once only. You will not need five of the words.",
    prompts: ["reach", "take", "set", "lodge", "shed"],
    choices: ["session", "complaint", "credit", "balance", "consensus", "notice", "precedent", "precedence", "measure", "light"],
    answers: ["consensus", "precedence", "precedent", "complaint", "light"]
  }
];

// A question counts as correct only when every part is correct.
function isCorrect(q, ans) {
  if (ans == null) return false;
  if (q.type === "mc") return ans === q.answer;
  return q.answers.every((a, i) => ans[i] === a);
}
