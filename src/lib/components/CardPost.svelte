<script lang="ts">
  let { post }: Props.CardPost = $props();
</script>

<a
  href={`/posts/${post.slug}`}
  class="group flex flex-col px-3 py-2 lg:p-4 bg-neutral-800 rounded hover:bg-base-200 h-36 focus:outline-none focus:ring-2 focus:ring-mint-500 transition-colors"
>
  <h2 class="text-lg font-bold text-mint-500 group-hover:text-purple-400 mb-1">
    {post.title}
  </h2>

  <time
    datetime={post.published.toISOString()}
    class="text-neutral-500 text-xs mb-2"
  >
    {post.published.toLocaleString("pt-BR", {
      dateStyle: "short",
      timeZone: "America/Sao_Paulo",
    })}
  </time>

  <p class="text-sm text-neutral-100">{post.description}</p>
</a>
