<script lang="ts">
  let { link }: Props.CardLink = $props();
</script>

<a
  href={link.href}
  class="group flex flex-col px-3 py-2 lg:p-4 bg-neutral-800 rounded hover:bg-base-200 h-24 lg:h-36 focus:outline-none focus:ring-2 focus:ring-mint-500 transition-colors"
>
  <h2 class="text-lg font-bold text-mint-500 group-hover:text-purple-400">
    {link.title}
  </h2>
  <p class="text-sm text-neutral-100">{link.desc}</p>
</a>
