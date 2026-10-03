// Aptis Advanced Grammar & Vocabulary Practice Test 1
// Captured from aptisexamen.net (test=1, level=advanced). Answers verified: 100% (50/50) on the original site.
// type "mc": single multiple-choice question; `answer` is the index into `choices`.
// type "match": several prompts sharing one word bank; `answers[i]` is the correct word for `prompts[i]`.
const QUESTIONS = [
  { n: 1, type: "mc", text: "Rarely ______ such a comprehensive account of the period, and never one so readable.", choices: ["we have been offered", "we were offered", "have we been offered"], answer: 2 },
  { n: 2, type: "mc", text: "______ that the committee had reservations, the proposal would have been redrafted before the vote.", choices: ["Were it known", "If it would be known", "Had it been known"], answer: 2 },
  { n: 3, type: "mc", text: "It was not the delay itself ______ the complete absence of any explanation that angered shareholders.", choices: ["rather than", "as well as", "but rather"], answer: 2 },
  { n: 4, type: "mc", text: "______ having been warned twice, she pressed ahead with the announcement.", choices: ["Notwithstanding", "Albeit", "Whereas"], answer: 0 },
  { n: 5, type: "mc", text: "The minister insisted that the report ______ published in full, without redactions.", choices: ["be", "was", "would be"], answer: 0 },
  { n: 6, type: "mc", text: "Little ______ the scale of the problem when they signed the contract.", choices: ["they suspected", "did they suspect", "they did suspect"], answer: 1 },
  { n: 7, type: "mc", text: "What the study fails to explain is ______ the effect disappears in older cohorts.", choices: ["because", "why", "the reason because"], answer: 1 },
  { n: 8, type: "mc", text: "The building, ______ in the 1890s, has been converted into artists' studios.", choices: ["it was originally a warehouse built", "originally a warehouse was built", "originally a warehouse built"], answer: 2 },
  { n: 9, type: "mc", text: "Only after the third audit ______ that the figures had been inflated.", choices: ["it emerged", "did it emerge", "emerged it"], answer: 1 },
  { n: 10, type: "mc", text: "She would rather her colleagues ______ her about the change beforehand.", choices: ["have told", "had told", "would have told"], answer: 1 },
  { n: 11, type: "mc", text: "The scheme is expected to cost twice ______ originally forecast.", choices: ["than what was", "as it was", "what was"], answer: 2 },
  { n: 12, type: "mc", text: "No sooner ______ the results than the share price collapsed.", choices: ["had the company published", "the company had published", "did the company publish"], answer: 0 },
  { n: 13, type: "mc", text: "For all ______, the reforms have barely altered day-to-day practice.", choices: ["of their supposed ambition", "their supposed ambition", "that they are ambitious"], answer: 1 },
  { n: 14, type: "mc", text: "The findings, ______ they are confirmed, would overturn three decades of consensus.", choices: ["provided that not", "unless", "should"], answer: 2 },
  { n: 15, type: "mc", text: "There is little point ______ about a decision that has already been taken.", choices: ["of complaining", "in complaining", "to complain"], answer: 1 },
  { n: 16, type: "mc", text: "Seldom has a policy been ______ received by both sides of the chamber.", choices: ["so warmly", "as warmly", "warmly enough"], answer: 0 },
  { n: 17, type: "mc", text: "The author is at pains ______ that correlation is not causation.", choices: ["for stressing", "stressing", "to stress"], answer: 2 },
  { n: 18, type: "mc", text: "______ the negotiators been less rigid, an agreement might have been reached.", choices: ["Were", "Had", "Should"], answer: 1 },
  { n: 19, type: "mc", text: "Not until the data ______ anonymised will the archive be made public.", choices: ["would be", "have been", "will have been"], answer: 1 },
  { n: 20, type: "mc", text: "The proposal was rejected on the grounds ______ it duplicated existing provision.", choices: ["of which", "for which", "that"], answer: 2 },
  { n: 21, type: "mc", text: "Much ______ he admires her work, he considers this particular argument flawed.", choices: ["though that", "as", "however"], answer: 1 },
  { n: 22, type: "mc", text: "The manuscript is thought ______ during the fire of 1666.", choices: ["having been destroyed", "to be destroyed", "to have been destroyed"], answer: 2 },
  { n: 23, type: "mc", text: "So entrenched ______ that no amount of evidence seems to shift it.", choices: ["is the belief", "the belief is", "does the belief"], answer: 0 },
  { n: 24, type: "mc", text: "He is the last person ______ with a confidential file.", choices: ["to trust", "being trusted", "to be trusted"], answer: 2 },
  { n: 25, type: "mc", text: "Were it not for the endowment, the department ______ years ago.", choices: ["would have closed", "would close", "will have closed"], answer: 0 },
  {
    n: 26, type: "match",
    text: "Match each definition to the word it defines. Use each word once only. You will not need five of the words.",
    prompts: ["Present everywhere at once", "Showing a lack of respect for things usually taken seriously", "Deliberately vague so as to avoid commitment", "Impossible to placate or satisfy", "Likely to change suddenly and unpredictably"],
    choices: ["tangential", "volatile", "innocuous", "meticulous", "implacable", "derivative", "irreverent", "provisional", "equivocal", "ubiquitous"],
    answers: ["ubiquitous", "irreverent", "equivocal", "implacable", "volatile"]
  },
  {
    n: 27, type: "match",
    text: "Match each word on the left to the word closest in meaning. Use each word once only. You will not need five of the words.",
    prompts: ["exacerbate", "relinquish", "substantiate", "curtail", "undermine"],
    choices: ["weaken", "surrender", "corroborate", "replicate", "advocate", "restrict", "streamline", "postpone", "disclose", "worsen"],
    answers: ["worsen", "surrender", "corroborate", "restrict", "weaken"]
  },
  {
    n: 28, type: "match",
    text: "Choose the word that best completes each sentence. Use each word once only. You will not need five of the words.",
    prompts: ["Her argument rests on a ______ distinction that few readers will notice.", "Support for the measure has been ______ across the region.", "The evidence is ______ at best; nothing has been proved.", "The report was criticised for its ______ treatment of the data.", "The committee reached a ______ decision after nine hours."],
    choices: ["cursory", "widespread", "arbitrary", "compulsory", "lucrative", "circumstantial", "redundant", "subtle", "tentative", "unanimous"],
    answers: ["subtle", "widespread", "circumstantial", "cursory", "unanimous"]
  },
  {
    n: 29, type: "match",
    text: "Select the word that is most often used with the word on the left. Use each word once only. You will not need five of the words.",
    prompts: ["vested", "mitigating", "tacit", "foregone", "sweeping"],
    choices: ["turnover", "approval", "circumstances", "conclusion", "premises", "interest", "reforms", "backlog", "margin", "outlet"],
    answers: ["interest", "circumstances", "approval", "conclusion", "reforms"]
  },
  {
    n: 30, type: "match",
    text: "Select the word that is most often used with the word on the left. Use each word once only. You will not need five of the words.",
    prompts: ["pose", "raise", "draw", "meet", "bridge"],
    choices: ["deadline", "issue", "trend", "distinction", "record", "supply", "profile", "gap", "threat", "concerns"],
    answers: ["threat", "concerns", "distinction", "deadline", "gap"]
  }
];

// A question counts as correct only when every part is correct.
function isCorrect(q, ans) {
  if (ans == null) return false;
  if (q.type === "mc") return ans === q.answer;
  return q.answers.every((a, i) => ans[i] === a);
}
