"use client";

import { useState } from "react";

export const CreatePollForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [options, setOptions] = useState([
    "",
    "",
  ]);

  const addOption = () => {
    if (options.length >= 6) return;

    setOptions([...options, ""]);
  };

  return (
    <div className="max-w-xl rounded-lg border p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-bold">
        Create Poll
      </h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Poll title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full rounded border p-2"
        />

        <textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          className="w-full rounded border p-2"
        />

        <div className="space-y-2">
          {options.map((option, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Option ${index + 1}`}
              value={option}
              onChange={(e) => {
                const updated = [...options];
                updated[index] = e.target.value;
                setOptions(updated);
              }}
              className="w-full rounded border p-2"
            />
          ))}
        </div>

        <button
          type="button"
          onClick={addOption}
          className="rounded bg-black px-4 py-2 text-white"
        >
          Add Option
        </button>

        <button
          type="submit"
          className="ml-2 rounded bg-blue-600 px-4 py-2 text-white"
        >
          Create Poll
        </button>
      </form>
    </div>
  );
};