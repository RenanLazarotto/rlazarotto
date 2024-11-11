<script lang="ts">
    import Link from "$lib/components/Link.svelte";
    import { version } from "$app/environment";
    import Icon from "./Icon.svelte";
    import Divider from "./Divider.svelte";
    let versionInfo: Types.Version = JSON.parse(version);
</script>

<Divider />
<footer class="grid grid-cols-1 md:grid-cols-2 mb-12">
    <p class="text-gray-600 mb-2 text-sm">
        &copy; {new Date().getFullYear()} Renan Lazarotto
    </p>
    <div class="flex justify-end text-xs items-center">
        <Link href="https://github.com/RenanLazarotto/rlazarotto" target="_blank" showBackground={true}>
            Repositório
        </Link>
        <Icon id="dot" width={16} height={16} class="mx-1 text-gray-600" />
        <Link
            href={`https://github.com/RenanLazarotto/rlazarotto/commit/${versionInfo.hash}`}
            showBackground={true}
            target="_blank"
        >
            Versão {versionInfo.package} / {versionInfo.hash.slice(0, 7)}
        </Link>
    </div>
</footer>
