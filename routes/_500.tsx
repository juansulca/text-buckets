import { Head } from "$fresh/runtime.ts";
import { ErrorPageProps } from "$fresh/server.ts";

export default function Error500(props: ErrorPageProps) {
  return (
    <>
      <Head>
        <title>500 - Page not found</title>
      </Head>
      <div class="px-4 py-8 mx-auto">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6"
            src="/logo.svg"
            width="128"
            height="128"
            alt="the Fresh logo: a sliced lemon dripping with juice"
          />
          <h1 class="text-4xl font-bold">Something went wrong!</h1>
          <p class="my-4">
            {JSON.stringify(props.error)}
          </p>
          <a href="/" class="underline">Go back home</a>
        </div>
      </div>
    </>
  );
}
