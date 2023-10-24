<script lang="ts">
	import { currentSetting } from '../../routes/(authed)/app/pages';
	let title = '';

	type inputTypes = 'dropdown' | 'toggle' | 'input' | 'inputdate' | 'inputphone';


	type settingType = {
		type: inputTypes;
		label: string;
		options?: string[];
		default?: string;
	}[];

	let settingOptions:settingType = [
		{ type: 'dropdown', label: 'Spacing', options: ['tight', 'normal', 'wide'], default: 'normal' },
		{
			type: 'dropdown',
			label: 'Text Size',
			options: ['small', 'normal', 'large'],
			default: 'normal'
		},
		{ type: 'toggle', label: 'Animations', options: ['off', 'on'], default: 'on' },
		{ type: 'toggle', label: 'Color Blind Mode', options: ['off', 'on'], default: 'off' }
	];

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
			options: ['off', 'on'],
			default: 'off'
		}
	];

	settingOptions = [
		{ type: 'input', label: 'Name', default: 'name' },
		{ type: 'input', label: 'Email', default: 'email' },
		{ type: 'inputdate', label: 'Birthday', default: '1/1/1999' },
		{ type: 'inputphone', label: 'Birthday', default: '1/1/1999' },
	];

	settingOptions = [
		{ type:"dropdown", label: 'Publicity', options:["private", "friends", 'public'], default: 'private' },
		{ type:"dropdown", label: 'Data Sharing', options:["minimal", "normal"], default: 'minimal' },
	];

	$: switch ($currentSetting /*Feel like this is scuffed*/) {
		case 'display':
			title = 'Display';
			break;
		case 'functionality':
			title = 'Functionality';
			break;
		case 'pairedaccounts':
			title = 'Paired Accounts';
			break;
		case 'personalinfo':
			title = 'Personal Info';
			break;
		case 'privacy':
			title = 'Privacy';
			break;
		case 'payments':
			title = 'Payments';
			break;
		default:
			title = 'Error';
	}
</script>

<section class="px-12 py-6 min-h-screen min-w-0">
	<h1 class="text-2xl text-white">{title}</h1>
	<div class="w-full h-96 flex items-center justify-center">
		<p class="text-neutral-400">Nothing here yet</p>
	</div>
</section>
