import { Handlers, PageProps } from "$fresh/server.ts";
import CopyUrl from "../islands/CopyUrl.tsx";
import Entry from "../islands/Entry.tsx";
import { db } from "../utils/database.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const { id } = ctx.params;
    const content = await db.getEntry(id);

    if (!content) ctx.renderNotFound();

    return ctx.render(content);
  },
};

export default function EntryPage(props: PageProps<{ content: string }>) {
  const { content } = props.data;

  return (
    <div class="w-full py-8 mx-auto">
      <Entry text={content} />
      <CopyUrl />
    </div>
  );
}
