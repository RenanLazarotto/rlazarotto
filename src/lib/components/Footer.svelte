<script lang="ts">
    import Link from "$lib/components/Link.svelte";

    import { version } from "$app/environment";
</script>

<footer>
    <dl class="grid grid-cols-[max-content_minmax(0,1fr)] text-sm">
        <dt
            class="py-1 pr-4 text-neutral-500 [&:not(:first-of-type)]:border-t [&:not(:first-of-type)]:border-neutral-600 [&:not(:first-of-type)]:border-dashed"
        >
            Desenvolvido por
        </dt>
        <dd
            class="py-1 pr-4 [&:not(:first-of-type)]:border-t [&:not(:first-of-type)]:border-neutral-600 [&:not(:first-of-type)]:border-dashed"
        >
            Renan Lazarotto
        </dd>
        <dt
            class="py-1 pr-4 text-neutral-500 [&:not(:first-of-type)]:border-t [&:not(:first-of-type)]:border-neutral-600 [&:not(:first-of-type)]:border-dashed"
        >
            Código fonte
        </dt>
        <dd
            class="py-1 pr-4 [&:not(:first-of-type)]:border-t [&:not(:first-of-type)]:border-neutral-600 [&:not(:first-of-type)]:border-dashed"
        >
            <Link href="https://github.com/RenanLazarotto/rlazarotto" target="_blank">RenanLazarotto/rlazarotto</Link>
        </dd>

        <dt
            class="py-1 pr-4 text-neutral-500 [&:not(:first-of-type)]:border-t [&:not(:first-of-type)]:border-neutral-600 [&:not(:first-of-type)]:border-dashed"
        >
            Versão
        </dt>
        <dd
            class="py-1 pr-4 [&:not(:first-of-type)]:border-t [&:not(:first-of-type)]:border-neutral-600 [&:not(:first-of-type)]:border-dashed"
        >
            {version}
        </dd>
    </dl>
</footer>
