<script lang="ts">
    export let checked:boolean = false;
    export let sublabel: string = ""
</script>

<label class="relative inline-flex items-center mr-5 cursor-pointer">
    <input type="checkbox" value="" class="sr-only peer" checked={checked}>
    <div class="w-11 h-6 rounded-full peer bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-neutral-600 peer-checked:bg-brand"></div>
    <span class="ml-3 text-sm text-neutral-300">{sublabel || "Off/On"}</span>
  </label>