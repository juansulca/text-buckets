export default function Entry(props: { text: string }) {
  const { text } = props;

  const onCopy = (e: Event) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
  };

  return (
    <main class="overflow-x-auto font-mono rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 dark:border-gray-700">
      <div class="min-h-[11rem] w-full align-top p-3 focus:ring-0 sm:text-sm dark:bg-gray-800 dark:text-white">
        {text}
      </div>
      <div class="flex items-center justify-end gap-2 bg-white p-3 dark:bg-gray-800">
        <button
          type="button"
          class="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:text-gray-100"
          onClick={onCopy}
        >
          Copy
        </button>
      </div>
    </main>
  );
}
