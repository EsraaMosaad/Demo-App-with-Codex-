import { VoteForm } from "@/features/polls/components/vote-form";

const mockPoll = {
  id: "1",
  title: "Favorite Programming Language",
  description:
    "Vote for your preferred language.",
  createdAt: new Date(),
  options: [
    {
      id: "1",
      text: "TypeScript",
      votes: 0,
    },
    {
      id: "2",
      text: "Python",
      votes: 0,
    },
    {
      id: "3",
      text: "Go",
      votes: 0,
    },
  ],
};

export default function PollPage() {
  return (
    <main className="min-h-screen p-8">
      <VoteForm poll={mockPoll} />
    </main>
  );
}