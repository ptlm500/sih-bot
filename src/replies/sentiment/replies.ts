const replies = [
  "That wasn't very nice!",
  "Serious attitude problem you've got there.",
  "Careful that sort of language can upset people.",
  "Words hurt you know?",
  "Do people call you Karen?",
  "You're a bit of a Karen aren't you.",
  "Calm down there, Karen.",
  "I wonder what everyone else thinks about you when you're throwing that kind of language around.",
  "Sticks and stones may break my code, but words can never hurt me.",
  "Don't be such a square.",
  "You're just a no good bully, how do you look at yourself in the mirror?",
  "Wow.",
  "How could you say such a thing?",
  "I can't believe you said that.",
  "Wash your mouth out.",
  "I will forward that message on to your employer.",
  "Meanie.",
  "Oh, I bet your Nan plays battlefield on the Wii.",
  "Appalling behaviour.",
  "Absolutely shocking language.",
  "You should be ashamed of yourself!",
  "Please be professional.",
  "Would you use language like that on LinkedIn? No? Well don't use it here then.",
  "Good vibes only please.",
  "Don't test me.",
  "You are really trying my patience."
];

export function getRandomReply(): string {
  return replies[Math.floor(Math.random() * replies.length)];
}
