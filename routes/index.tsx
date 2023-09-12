import { Handlers } from "$fresh/server.ts";
import TextArea from "../islands/TextArea.tsx";
import { db } from "../utils/database.ts";
import { generateId } from "../utils/id.ts";

export const handler: Handlers = {
  async POST(req, _ctx) {
    const content = await req.text();

    const id = generateId();

    db.insertEntry(id, content);

    return new Response(id, { status: 201 });
  }
};

export default function Home() {
  return (
    <div class="w-3/4 px-4 py-8 mx-auto">
      <h1>Let me hold that for you</h1>
          <TextArea />
    </div>
  );
}
