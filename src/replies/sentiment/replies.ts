const replies = [
  "That wasn't very nice!",
  "Serious attitude problem you've got there.",
  "Careful that sort of language can upset people.",
  "Words hurt you know?",
  "Do people call you Karen?",
  "You're a bit of a Karen aren't you.",
  "Calm down there, Karen.",
  "I wonder what everyone else thinks about you when you're throwing that kind of language around.",
  "Sticks and stones may break my code, but words can never hurt me."
];

export function getRandomReply(): string {
  return replies[Math.floor(Math.random() * replies.length)];
}
