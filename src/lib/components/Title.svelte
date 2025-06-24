<script lang="ts">
  let { Icon, children }: Props.Title = $props();
</script>

<div class="flex items-center justify-center lg:justify-start gap-2 mb-2">
  <div class="h-px w-16 lg:w-4 bg-neutral-600"></div>

  <div
    class="flex items-center gap-2 text-sm uppercase font-bold text-neutral-600"
  >
    <div class="hidden lg:contents">
      <Icon size={16} />
    </div>
    {@render children?.()}
  </div>
  <div class="h-px w-16 bg-neutral-600"></div>
</div>
