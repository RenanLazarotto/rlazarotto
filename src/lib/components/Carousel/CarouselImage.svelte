<script lang="ts">
  let { class: classes, src, alt } = $props();
</script>

<div class={["min-w-[16rem] snap-start flex-shrink-0", classes]}>
  <img class="max-h-96 w-auto h-auto object-contain" {src} {alt} />
</div>
