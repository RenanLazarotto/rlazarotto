<script lang="ts">
  import { onMount } from "svelte";
  import type { PageData } from "./$types";
  import { Calendar, Clock } from "@lucide/svelte";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<section class="flex justify-between mb-6">
  <div class="flex flex-col justify-between">
    <h2 class="font-bold text-3xl">{data.meta.title}</h2>
    <p class="text-xs font-medium">
      {data.meta.description}
    </p>
  </div>
  <div class="flex flex-col justify-center gap-2">
    <time
      datetime={data.meta.published.toISOString()}
      class="flex gap-2 border border-white/20 bg-white/10 items-center rounded px-2"
    >
      <Calendar size={20} />
      <p class="font-bold">
        {data.meta.published.toLocaleString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
        })}
      </p>
    </time>
    {#if data.meta.updated}
      <time
        datetime={data.meta.updated.toISOString()}
        class="flex gap-2 border border-white/20 bg-white/10 items-center rounded px-2"
      >
        <Clock size={20} />
        <div class="flex-1 flex items-center justify-center">
          <p class="font-bold">
            {data.meta.updated.toLocaleString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
            })}
          </p>
        </div>
      </time>
    {/if}
  </div>
</section>
<section class="prose prose-invert mb-16 prose-hr:border-dashed max-w-none">
  <data.content />
</section>
