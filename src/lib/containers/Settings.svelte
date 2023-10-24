<script lang="ts">
	import { currentSetting } from '../../routes/(authed)/app/pages';
	import Dropdown from './SettingsInputs/Dropdown.svelte';
	import Input from './SettingsInputs/Input.svelte';
	import Toggle from './SettingsInputs/Toggle.svelte';
	let title = '';

	type inputTypes = 'dropdown' | 'toggle' | 'input' | 'inputdate' | 'inputphone';

	type settingType = {
		type: inputTypes;
		label: string;
		sublabel?: string;
		options?: string[];
		default?: string;
	}[];

	let settingOptions: settingType = [];

	$: switch ($currentSetting /*Feel like this is scuffed*/) {
		case 'display':
			title = 'Display';
			settingOptions = [
				{
					type: 'dropdown',
					label: 'Spacing',
					options: ['Tight', 'Normal', 'Wide'],
					default: 'Normal'
				},
				{
					type: 'dropdown',
					label: 'Text Size',
					options: ['Small', 'Normal', 'Large'],
					default: 'Normal'
				},
				{ type: 'toggle', label: 'Animations', sublabel:"Use Smooth Animations", options: ['off', 'on'], default: 'on' },
				{ type: 'toggle', label: 'Color Blind Mode', sublabel:"Use Color Blind Mode", options: ['off', 'on'], default: 'off' }
			];
			break;
		case 'functionality':
			title = 'Functionality';
			settingOptions = [
				{
					type: 'dropdown',
					label: 'Auto-Update Inverval (mins)',
					options: ['1min', '5min', '15min'],
					default: '15min'
				},
				{
					type: 'toggle',
					label: 'Push Notifications',
					sublabel: 'Allow Browser Notifications',
					options: ['off', 'on'],
					default: 'off'
				}
			];
			break;
		case 'pairedaccounts':
			title = 'Paired Accounts';
			settingOptions = []
			break;
		case 'personalinfo':
			title = 'Personal Info';
			settingOptions = [
				{ type: 'input', label: 'Name', default: 'name' },
				{ type: 'input', label: 'Email', default: 'email' },
				{ type: 'inputdate', label: 'Birthday', default: '1/1/1999' },
				{ type: 'inputphone', label: 'Phone Number', default: '' }
			];
			break;
		case 'privacy':
			title = 'Privacy';
			settingOptions = [
				{
					type: 'dropdown',
					label: 'Publicity',
					options: ['Private', 'Friends', 'Public'],
					default: 'Private'
				},
				{
					type: 'dropdown',
					label: 'Data Sharing',
					options: ['Minimal', 'Normal'],
					default: 'Minimal'
				}
			];
			break;
		case 'payments':
			title = 'Payments';
			settingOptions = []
			break;
		default:
			title = 'Error';
			settingOptions = []
	}
</script>

<section class="px-12 py-6 min-h-screen min-w-0">
	<h1 class="text-2xl text-white font-semibold mb-8">{title}</h1>
	<div class="w-full h-96 flex justify-center">
		{#if settingOptions.length > 0}
			<div class="flex flex-col space-y-4 w-full max-w-4xl">
			{#each settingOptions as setting, label}
				<h4 class="text-neutral-200">{setting.label}</h4>
				{#if setting.type == 'dropdown'}
					<Dropdown options={setting.options || []} defaultOption={setting.default} onOptionSelected={()=>{}} />
				{:else if setting.type == 'toggle'}
					<Toggle checked = {setting.default == 'on'} sublabel={setting.sublabel}/>
				{:else if setting.type == 'input'}
					<Input/>
				{:else if setting.type == 'inputdate'}
					<div />
				{:else if setting.type == 'inputphone'}
					<div />
				{/if}
			{/each}
			<button class="px-4 py-2 text-neutral-500 border border-neutral-500 font-semibold rounded-md drop-shadow-md w-36 ml-auto">Save Changes</button>
			</div>
		{:else}
			<p class="text-neutral-400 mt-8">Nothing here yet</p>
		{/if}
	</div>
</section>
