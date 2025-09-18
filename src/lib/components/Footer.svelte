<script>
	import logo from '$lib/assets/logo-black.png';
	import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte';
	import FaTwitterSquare from 'svelte-icons/fa/FaTwitterSquare.svelte';
</script>

<div class="px-12 pt-20">
	<img src={logo} alt="Plantjoy" class="mx-auto h-10 w-auto mb-8" />
	<nav class="flex justify-center gap-8 mb-12">
		<a href="/" class="text-slate-600 hover:text-christi-600 transition-colors font-medium">
			Home
		</a>
		<a href="/about" class="text-slate-600 hover:text-christi-600 transition-colors font-medium">
			About
		</a>
		<a href="/support-us" class="text-slate-600 hover:text-christi-600 transition-colors font-medium">
			Support Us
		</a>
		<a href="/start-here" class="text-slate-600 hover:text-christi-600 transition-colors font-medium">
			Start Here
		</a>
	</nav>
	<div
		class="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between"
	>
		<div class="flex gap-2">
			<a class="block h-6 w-6 text-slate-500" href="https://facebook.com">
				<FaFacebook />
			</a>
			<a class="block h-6 w-6 text-slate-500" href="https://twitter.com">
				<FaTwitterSquare />
			</a>
		</div>
		<div>
			<p class="mt-6 text-sm text-slate-500 sm:mt-0">
				Copyright © 2023 Plantjoy. All rights reserved.
			</p>
		</div>
	</div>
</div>
