export class PollNotFoundError extends Error {
  constructor(pollId: string) {
    super(`Poll with id "${pollId}" was not found.`);
    this.name = "PollNotFoundError";
  }
}

export class PollAlreadyVotedError extends Error {
  constructor() {
    super("This voter has already voted in this poll.");
    this.name = "PollAlreadyVotedError";
  }
}