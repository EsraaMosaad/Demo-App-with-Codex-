"use client";

import { useState } from "react";
import { Poll } from "../models";

interface VoteFormProps {
  poll: Poll;
}

export const VoteForm = ({
  poll,
}: VoteFormProps) => {
  const [selectedOption, setSelectedOption] =
    useState("");

  return (
    <div className="max-w-xl rounded-lg border p-6 shadow-sm">
      <h1 className="text-3xl font-bold">
        {poll.title}
      </h1>

      {poll.description && (
        <p className="mt-2 text-gray-600">
          {poll.description}
        </p>
      )}

      <form className="mt-6 space-y-4">
        {poll.options.map((option) => (
          <label
            key={option.id}
            className="flex items-center gap-3 rounded border p-3"
          >
            <input
              type="radio"
              name="poll-option"
              value={option.id}
              checked={
                selectedOption === option.id
              }
              onChange={() =>
                setSelectedOption(option.id)
              }
            />

            <span>{option.text}</span>
          </label>
        ))}

        <button
          type="submit"
          disabled={!selectedOption}
          className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
        >
          Submit Vote
        </button>
      </form>
    </div>
  );
};