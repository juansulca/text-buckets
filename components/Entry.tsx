export default function Entry(props: { text: string }) {
  const { text } = props;
  return (
    <main class="py-8">
      <div class="min-h-[11rem] overflow-x-auto font-mono border border-gray-200 shadow-sm">
        {text}
      </div>
    </main>
  );
}
