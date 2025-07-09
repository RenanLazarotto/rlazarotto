<script lang="ts">
  let { class: classes, children } = $props();
</script>

<div class={["min-w-[16rem] snap-start flex-shrink-0", classes]}>
  {@render children()}
</div>
