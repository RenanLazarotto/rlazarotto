<script lang="ts">
  import { onMount, tick } from "svelte";
  import { writable } from "svelte/store";

  let container: HTMLDivElement;
  const currentIndex = writable(0);
  let totalSlides = 0;

  const scrollToIndex = async (index: number) => {
    await tick();
    const children = Array.from(container.children) as HTMLElement[];
    if (children[index]) {
      children[index].scrollIntoView({ behavior: "smooth", inline: "start" });
      currentIndex.set(index);
    }
  };

  const scroll = (direction: "prev" | "next") => {
    currentIndex.update((i) => {
      const newIndex =
        direction === "next"
          ? Math.min(i + 1, totalSlides - 1)
          : Math.max(i - 1, 0);
      scrollToIndex(newIndex);
      return newIndex;
    });
  };

  const handleKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") scroll("next");
    if (e.key === "ArrowLeft") scroll("prev");
  };

  onMount(() => {
    totalSlides = container.children.length;
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });
</script>

<div class="relative w-full">
  <button
    class="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/60 text-white rounded-full hover:bg-black/80"
    onclick={() => scroll("prev")}
    aria-label="Anterior"
  >
    ◀
  </button>

  <div
    bind:this={container}
    class="overflow-x-scroll scrollbar-none scroll-smooth flex gap-4 snap-x snap-mandatory px-8 py-4"
  >
    <slot />
  </div>

  <button
    class="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/60 text-white rounded-full hover:bg-black/80"
    onclick={() => scroll("next")}
    aria-label="Próximo"
  >
    ▶
  </button>

  <!-- Navegação por dots -->
  <div class="flex justify-center mt-4 gap-2">
    {#each Array(totalSlides) as _, i}
      <button
        class={[
          "w-3 h-3 rounded-full",
          {
            selected: i === $currentIndex,
          },
        ]}
        onclick={() => scrollToIndex(i)}
        aria-label={`Ir para o slide ${i + 1}`}
        style="background-color: {i === $currentIndex ? '#9333ea' : '#999'}"
      ></button>
    {/each}
  </div>
</div>

<style>
  button.selected {
    background-color: #9333ea;
  }
</style>
