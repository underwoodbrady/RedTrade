<script lang="ts">
    export let question:string;
    export let answer:string;
</script>

<div class="bg-darker/90 w-full h-24 rounded-md drop-shadow-md flex items-center px-10 justify-between cursor-pointer">
    <h4 class="text-neutral-200 text-2xl font-semibold">{question}</h4>
    <img src="/plus-white.svg" alt="Plus Icon" class="w-9"/>
</div>