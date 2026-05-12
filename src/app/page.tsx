import { CreatePollForm } from "@/features/polls/components/create-poll-form";

export default function HomePage() {
  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <div>
          <h1 className="text-4xl font-bold">
            Quick polls. Live results.
          </h1>

          <p className="mt-2 text-gray-600">
            Create anonymous polls and share
            them instantly.
          </p>
        </div>

        <CreatePollForm />
      </div>
    </main>
  );
}