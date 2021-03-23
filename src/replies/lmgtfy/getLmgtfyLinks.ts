const BASE_URL = "https://lmgtfy.app";

function getLmgtfyLinks(questions: string[]): string[] {
  return questions.map(getLmgtfyLink);
}

function getLmgtfyLink(question: string): string {
  const encodedQuestion = encodeURIComponent(removeTrailingQuestionmark(question));
  return `${BASE_URL}/?q=${encodedQuestion}`;
}

function removeTrailingQuestionmark(question: string): string {
  if (question.substr(question.length -1) === "?") {
    return question.slice(0, -1);
  }
  return question;
}

export default getLmgtfyLinks;
