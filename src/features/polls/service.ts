import { Poll } from "./models";
import {
  getPollById,
  getRecentPolls,
  savePoll,
  updatePoll,
} from "./repository";
import { createPollSchema, CreatePollInput } from "./schemas";
import { PollNotFoundError } from "./errors";

const createId = (): string => crypto.randomUUID();

export const createPoll = (input: CreatePollInput): Poll => {
  const parsed = createPollSchema.parse(input);

  const poll: Poll = {
    id: createId(),
    title: parsed.title,
    description: parsed.description,
    options: parsed.options.map((option) => ({
      id: createId(),
      text: option.text,
      votes: 0,
    })),
    createdAt: new Date(),
  };

  savePoll(poll);

  return poll;
};

export const findPoll = (pollId: string): Poll => {
  const poll = getPollById(pollId);

  if (!poll) {
    throw new PollNotFoundError(pollId);
  }

  return poll;
};

export const listRecentPolls = (): Poll[] => {
  return getRecentPolls();
};

export const voteOnPoll = (
  pollId: string,
  optionId: string
): Poll => {
  const poll = findPoll(pollId);

  const updatedPoll: Poll = {
    ...poll,
    options: poll.options.map((option) =>
      option.id === optionId
        ? { ...option, votes: option.votes + 1 }
        : option
    ),
  };

  updatePoll(updatedPoll);

  return updatedPoll;
};