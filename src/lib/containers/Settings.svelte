<script lang="ts">
	import { currentSetting } from '../../routes/(authed)/app/pages';
	let title = '';

	$: switch ($currentSetting) { /*Feel like this is scuffed*/
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
</section>
