import { Poll } from "./models";

const polls = new Map<string, Poll>();

export const savePoll = (poll: Poll): void => {
  polls.set(poll.id, poll);
};

export const getPollById = (id: string): Poll | undefined => {
  return polls.get(id);
};

export const getRecentPolls = (): Poll[] => {
  return Array.from(polls.values())
    .sort(
      (a, b) =>
        b.createdAt.getTime() - a.createdAt.getTime()
    )
    .slice(0, 10);
};

export const updatePoll = (poll: Poll): void => {
  polls.set(poll.id, poll);
};