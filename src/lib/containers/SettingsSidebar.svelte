<script lang="ts">
	import SettingSidebarOption from './SettingSidebarOption.svelte';

	export let selectedSetting:string;
	export let updateSelectedSetting: (setting: any) => void;
</script>

<section
	class="fixed left-20 top-0 p-6 w-52 h-full drop-shadow-md bg-neutral-900 flex flex-col space-y-6"
>
<h4 class="text-neutral-200 font-semibold text-lg">Settings</h4>
	<div>
		<h5 class="text-neutral-200 font-semibold mb-3 text-sm">Application</h5>
		<ul class="space-y-2 -mx-2">
			<SettingSidebarOption
				name="Display"
				image="/display.svg"
				updateSelectedSetting={(page) => updateSelectedSetting(page)}
                selected={selectedSetting == "display"}
			/>
			<SettingSidebarOption
				name="Functionality"
				image="/gears.svg"
				updateSelectedSetting={(page) => updateSelectedSetting(page)}
                selected={selectedSetting == "functionality"}
			/>
			<SettingSidebarOption
				name="Paired Accounts"
				image="/money-paired.svg"
				updateSelectedSetting={(page) => updateSelectedSetting(page)}
                selected={selectedSetting == "pairedaccounts"}
			/>
		</ul>
	</div>
	<div>
		<h5 class="text-neutral-200 font-semibold mb-3 text-sm">Account</h5>
		<ul class="space-y-2">
			<SettingSidebarOption
				name="Personal Info"
				image="/idcard.svg"
				updateSelectedSetting={(page) => updateSelectedSetting(page)}
                selected={selectedSetting == "personalinfo"}
			/>
			<SettingSidebarOption
				name="Privacy"
				image="/lock.svg"
				updateSelectedSetting={(page) => updateSelectedSetting(page)}
                selected={selectedSetting == "privacy"}
			/>
			<SettingSidebarOption
				name="Payments"
				image="/credit-card.svg"
				updateSelectedSetting={(page) => updateSelectedSetting(page)}
                selected={selectedSetting == "payments"}
			/>
		</ul>
	</div>
</section>
