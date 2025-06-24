<script lang="ts">
  import type { PageData } from "./$types";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<svelte:head>
  <title>Todas as publicações</title>
</svelte:head>

<section class="mb-12">
  <h2 class="text-2xl font-bold pb-8 text-neutral-400">Publicações</h2>
  <div class="flex flex-col gap-12">
    {#each data.posts as post}
      <div class="flex flex-col lg:flex-row lg:items-center gap-4">
        <img
          src={`/images/posts/${post.slug}/hero.webp`}
          alt="Imagem do post"
          class="rounded-lg lg:max-w-64"
        />
        <div class="flex flex-1 flex-col m-4">
          <a
            href={`/posts/${post.slug}`}
            class="text-2xl font-bold text-mint-300 hover:text-purple-400"
          >
            {post.title}
          </a>
          <p class="mt-3 text-neutral-300">{post.description}</p>
          <span class="flex-1"></span>

          <div class="mt-6 text-xs flex gap-2 text-neutral-500">
            <time datetime={post.published.toISOString()}>
              {post.published.toLocaleString("pt-BR", {
                dateStyle: "short",
                timeZone: "America/Sao_Paulo",
              })}
            </time>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
