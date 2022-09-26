<script>
    export let progress = 50;
</script>

<div class="h-2 sm:h-4 relative bg-gray-800 rounded">
    <div
        class="h-2 sm:h-4 rounded [mask:linear-gradient(#fff_0_0)] before:[content:''] before:absolute before:top-0 before:right-0 before:left-0 before:bottom-0 before:bg-gradient-to-r before:from-blue-500 before:to-purple-500"
        style="width: {progress}%"
    />
</div>
