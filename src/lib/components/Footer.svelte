<script lang="ts">
    import Link from "$lib/components/Link.svelte";
    import { version } from "$app/environment";
    let versionInfo: Types.Version = JSON.parse(version);
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
            {versionInfo.package}

            <Link
                href={`https://github.com/RenanLazarotto/rlazarotto/commit/${versionInfo.hash}`}
                target="_blank"
                class="bg-neutral-700 text-xs py-0.5 px-1 rounded"
            >
                {versionInfo.hash.slice(0, 7)}
            </Link>
        </dd>
    </dl>
</footer>
