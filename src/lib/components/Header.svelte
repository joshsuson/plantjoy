<script>
	import logo from '$lib/assets/logo-black.png';
</script>

<div class="w-full flex justify-between items-center py-8 px-2 lg:px-24">
	<div class="">
		<a href="/">
			<img src={logo} alt="PlantJoy" class="h-10 w-auto" />
		</a>
	</div>
	<div class="flex items-center gap-6">
		<nav class="hidden md:flex gap-6">
			<a href="/" class="text-gray-700 hover:text-christi-600 transition-colors font-medium">
				Home
			</a>
			<a href="/about" class="text-gray-700 hover:text-christi-600 transition-colors font-medium">
				About
			</a>
			<a href="/support-us" class="text-gray-700 hover:text-christi-600 transition-colors font-medium">
				Support Us
			</a>
		</nav>
		<a
			href="https://www.plantjoy.org/#givingflow"
			class="bg-christi-600 text-gray-50 tracking-wider shadow-xl shadow-christi-300/40 py-3 px-4 lg:px-8 rounded-full hover:bg-christi-700 transition-colors"
			>Give Now</a
		>
	</div>
</div>
