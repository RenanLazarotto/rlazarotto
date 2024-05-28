<script lang="ts">
    import Link from "$lib/components/Link.svelte";
    import { version } from "$app/environment";
    import Icon from "./Icon.svelte";
    let versionInfo: Types.Version = JSON.parse(version);
</script>

<footer class="mt-6 grid grid-cols-1 md:grid-cols-2">
    <p class="text-gray-600 mb-2 font-bold text-sm">
        &copy; {new Date().getFullYear()} | Desenvolvido por Renan Lazarotto
    </p>
    <div class="flex justify-end text-xs items-center">
        <Link href="https://github.com/RenanLazarotto/rlazarotto" target="_blank" showBackground={true}>
            Versão {versionInfo.package}
        </Link>
        <Icon id="separator" width={16} height={16} class="mx-1 text-gray-600" />
        <Link
            href={`https://github.com/RenanLazarotto/rlazarotto/commit/${versionInfo.hash}`}
            target="_blank"
            showBackground={true}
        >
            Último commit: {versionInfo.hash.slice(0, 7)}
        </Link>
    </div>
</footer>
