class Sentiment {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  isNegative(): boolean {
    return this.value < 0;
  }
}

export default Sentiment;
