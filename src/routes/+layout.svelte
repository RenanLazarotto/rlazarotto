<script lang="ts">
  import {
    Activity,
    BookOpen,
    Dot,
    Goal,
    Home,
    Minus,
    User,
  } from "@lucide/svelte";
  import "../app.css";
  import type { LayoutData } from "./$types";

  interface Props {
    data: LayoutData;
    children?: import("svelte").Snippet;
  }

  let { data, children }: Props = $props();
  let sidebarOpen = $state(false);
</script>

<div class="flex h-screen overflow-hidden">
  <aside
    class={[
      "bg-neutral-800 fixed inset-y-0 left-0 z-40 w-80 bg-base-200 p-6 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0",
      { "translate-x-0": sidebarOpen, "-translate-x-full": !sidebarOpen },
    ]}
  >
    <button
      class="absolute top-4 right-4 text-2xl lg:hidden"
      onclick={() => (sidebarOpen = false)}
      aria-label="Fechar menu"
    >
      ✕
    </button>
    <a href="/" class="text-3xl font-bold block mb-4">Renan Lazarotto</a>

    <p class="mb-8 text-sm leading-relaxed">
      E aí, eu me chamo Renan, sou um analista de sistemas curitibano, mas com
      foco mais pra backends — e aqui é o meu pequeno refúgio na internet.
    </p>

    <nav class="flex-1 overflow-y-auto">
      <ul class="space-y-2">
        <li>
          <a href="/" class="flex items-center gap-2 hover:underline">
            <Home size={16} /> Início
          </a>
        </li>
        <li>
          <a href="/sobre" class="flex items-center gap-2 hover:underline">
            <User size={16} />
            Sobre
          </a>
        </li>
        <li>
          <a href="/agora" class="flex items-center gap-2 hover:underline">
            <Activity size={16} /> Agora
          </a>
        </li>
        <li>
          <a href="/um-dia" class="flex items-center gap-2 hover:underline">
            <Goal size={16} />
            Um dia
          </a>
        </li>
        <li>
          <details>
            <summary
              class="cursor-pointer flex items-center gap-2 hover:underline"
            >
              <BookOpen size={16} />
              Blog
            </summary>
            <ul class="pl-4 mt-1 space-y-1">
              {#each Object.entries(data.posts) as [year, posts]}
                <details>
                  <summary
                    class="cursor-pointer flex items-center gap-2 hover:underline"
                  >
                    <Dot size={16} />
                    {year}
                  </summary>
                  <ul class="pl-4 space-y-1">
                    {#each posts as post}
                      <li class="truncate">
                        <a
                          href={`/posts/${post.slug}`}
                          class="pl-4 hover:underline"
                        >
                          {post.title}
                        </a>
                      </li>
                    {/each}
                  </ul>
                </details>
              {/each}
            </ul>
          </details>
        </li>
      </ul>
    </nav>
  </aside>

  <!-- Overlay para fechar a sidebar no mobile -->
  {#if sidebarOpen}
    <div
      role="presentation"
      class="fixed inset-0 bg-black/20 backdrop-blur-md bg-opacity-50 z-30 lg:hidden"
      onclick={() => (sidebarOpen = false)}
    ></div>
  {/if}

  <!-- Conteúdo principal -->
  <main class="flex-1 overflow-y-auto p-8">
    <!-- Botão de abrir no mobile -->
    <button class="lg:hidden mb-4" onclick={() => (sidebarOpen = true)}>
      ☰ Abrir Menu
    </button>

    {@render children?.()}
  </main>
</div>
