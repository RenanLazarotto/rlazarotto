<script>
    import GraduationCap from "phosphor-svelte/lib/GraduationCap/GraduationCap.svelte";
    import Briefcase from "phosphor-svelte/lib/Briefcase/Briefcase.svelte";
    import Stack from "phosphor-svelte/lib/Stack/Stack.svelte";

    export let type;
    export let text;
    let component = null;

    switch (type) {
        case "formacao":
            component = GraduationCap;
            break;
        case "experiencias":
            component = Briefcase;
            break;
        case "tecnologias":
            component = Stack;
            break;
    }
</script>

<div class="flex items-center justify-center md:justify-start">
    <div class="bg-purple-200 rounded-full m-2">
        <svelte:component
            this={component}
            class="text-purple-600 text-5xl p-3"
            weight="duotone"
        />
    </div>
    <h2 class="text-purple-800 font-bold uppercase text-xl">{text}</h2>
</div>
