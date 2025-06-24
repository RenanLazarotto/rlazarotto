<script lang="ts">
  import { Calendar, Pin } from "@lucide/svelte";
  import type { PageData } from "./$types";
  import { links } from "$lib/links";
  import CardLink from "$lib/components/CardLink.svelte";
  import CardPost from "$lib/components/CardPost.svelte";
  import Title from "$lib/components/Title.svelte";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<svelte:head>
  <title>Renan Lazarotto</title>
</svelte:head>

<Title Icon={Pin}>Fixos</Title>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
  {#each links as link}
    <CardLink {link} />
  {/each}
</div>

<Title Icon={Calendar}>Posts</Title>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {#each data.posts as post}
    <CardPost {post} />
  {/each}
</div>
