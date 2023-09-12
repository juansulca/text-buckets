import { useSignal } from "@preact/signals";

export default function TextArea() {
  const txt = useSignal("");

  const onInput = (e: Event) => {
    if (!(e.target instanceof HTMLTextAreaElement)) return;

    e.preventDefault();
    txt.value = e.target?.value;
  };

  const onClear = (e: Event) => {
    e.preventDefault();
    txt.value = "";
  };

  const postText = async (content: string) => {
    const response = await fetch("/", {
      method: "POST",
      body: content,
    });

    const id = await response.text();

    if (!response.ok) throw new Error("Something went wrong!");

    return id;
  };

  const onAdd = async (e: Event) => {
    e.preventDefault();

    const newId = await postText(txt.value);

    if (!newId) return;

    window.location.pathname = `/${newId}`;
  };

  return (
    <form>
      <label for="Let me hold that for you" class="sr-only">Order notes</label>

      <div class="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 dark:border-gray-700">
        <textarea
          id="OrderNotes"
          class="w-full p-3 resize-none border-none align-top focus:ring-0 sm:text-sm dark:bg-gray-800 dark:text-white"
          rows={4}
          placeholder="Give me your secrets..."
          value={txt.value}
          onInput={onInput}
        >
        </textarea>

        <div class="flex items-center justify-end gap-2 bg-white p-3 dark:bg-gray-800">
          <button
            type="button"
            class="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:text-gray-100"
            onClick={onClear}
          >
            Clear
          </button>

          <button
            type="button"
            class="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
            onClick={onAdd}
          >
            Add
          </button>
        </div>
      </div>
      <p>{txt.value}</p>
    </form>
  );
}
