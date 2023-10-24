<script lang="ts">
    export let updateSelectedSetting: (page:any) => void;
    export let name:string;
    export let image:any;
    export let selected:boolean = false;
</script>

<li>
    <button
        on:click={() => updateSelectedSetting(name.replace(/ /g, '').toLowerCase())}
        class={selected ? "flex space-x-3 items-center text-white py-2 px-4 w-full bg-neutral-700 rounded-md" : "flex space-x-3 items-center text-neutral-300 hover:text-white py-2 px-4 w-full hover:bg-neutral-700 rounded-md duration-75"}
    >
        <img src={image} class="w-4" alt="Monitor Display" />
        <p>{name}</p>
    </button>
</li>