export default function getLmgtfyReply(lmgtfyLinks: string[]): string|null {
  if (lmgtfyLinks.length) {
    let reply = "I got you: \n";

    lmgtfyLinks.forEach(link => {
      reply += `${link}\n`;
    })

    return reply;
  }
  return null;
}
