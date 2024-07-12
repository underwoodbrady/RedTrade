<script lang="ts">
	import { onMount } from "svelte";

	let module: HTMLDivElement;
	let gridResolution = 4;

	let gridYPadding = 84,
		gridXPadding = 80;

	function dragElement(elmnt: any) {
		var pos1 = 0,
			pos2 = 0,
			pos3 = 0,
			pos4 = 0;

		elmnt.onmousedown = dragMouseDown;

		function dragMouseDown(e:any) {
			e.preventDefault();
			pos3 = e.clientX;
			pos4 = e.clientY;
			document.onmouseup = closeDragElement;
			document.onmousemove = elementDrag;
		}

		function elementDrag(e:any) {
			e.preventDefault();
			//show grid lines
			//gridLines.style.opacity = 1;
			elmnt.style.position = 'absolute';
			elmnt.style.opacity = '0.9';
			elmnt.style.transform = 'scale(1.04)';
			elmnt.style.zIndex = '40';
			// calculate the new cursor position:
			pos1 = pos3 - e.clientX;
			pos2 = pos4 - e.clientY;
			pos3 = e.clientX;
			pos4 = e.clientY;
			// set the element's new position:
			elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
			elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
		}

		function closeDragElement() {
			console.log(pos1, pos2, pos3, pos4)
			//hide grid lines
			//gridLines.style.opacity = 0;
			//elmnt.style.position = 'relative';
			elmnt.style.opacity = '1';
			elmnt.style.transform = 'scale(1)';
			elmnt.style.zIndex = '1';
			elmnt.style.top =
				Math.round((elmnt.offsetTop - pos2 - gridYPadding) / gridResolution) * gridResolution +gridYPadding + 'px';
			elmnt.style.left =
				Math.round((elmnt.offsetLeft - pos1 - gridXPadding) / gridResolution) * gridResolution +gridXPadding + 'px';
			// stop moving when mouse button is released:
			document.onmouseup = null;
			document.onmousemove = null;
		}
	}

	onMount(()=>{
		dragElement(module)
	});
</script>

<div
	class="relative bg-[#303030] rounded-md drop-shadow-md p-6 w-80 h-80 flex flex-col justify-between transition-transform duration-75"
	bind:this={module}
>
	<slot />
</div>
