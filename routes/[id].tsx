import { Handlers, PageProps } from "$fresh/server.ts";
import Entry from "../components/Entry.tsx";
import { db } from "../utils/database.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const { id } = ctx.params;
    const content = await db.getEntry(id);
    return ctx.render(content);
  }
};

export default function EntryPage(props: PageProps<{ content: string }>) {
  const { content } = props.data;

  return (
    <Entry text={content}/>
  );
}

