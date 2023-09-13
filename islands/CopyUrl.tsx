import { useSignal } from "@preact/signals";

export default function CopyUrl() {
  const btnText = useSignal("Share");

  const onClick = (e: Event) => {
    e.preventDefault();
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    btnText.value = "📎 Url Copied!";
    setTimeout(() => btnText.value = "Share", 3000);
  };

  return (
    <div class="flex items-center justify-center gap-2 py-3">
      <button
        type="button"
        class="rounded bg-gray-200 py-4 px-12 text-sm font-medium text-gray-700 hover:text-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:text-gray-100"
        onClick={onClick}
      >
        {btnText}
      </button>
    </div>
  );
}
