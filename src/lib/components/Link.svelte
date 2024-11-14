<script lang="ts">
	let { href, target = '_self', children, classes }: Props.Link = $props();
</script>

<a {href} {target} class="font-bold text-purple-500 hover:text-purple-400 {classes}">
	{@render children?.()}
</a>
