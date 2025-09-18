<script>
	import Hero from '$lib/components/Hero.svelte';
	import TheNeed from '$lib/components/TheNeed.svelte';
	import GetStarted from '$lib/components/GetStarted.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
</script>

<Hero />
<Testimonials />
<TheNeed />
<GetStarted />

<!-- Support CTA Section -->
<div class="px-4 lg:px-24 py-32 bg-gray-50">
	<div class="max-w-2xl mx-auto text-center">
		<h2 class="text-2xl font-medium text-slate-900 mb-4">
			Want to support Plant Joy?
		</h2>
		<p class="text-lg text-slate-600 mb-8">
			Join us in supporting ministry leaders who are making a difference in their communities.
		</p>
		<a
			href="/support-us"
			class="inline-flex items-center justify-center rounded-full py-3 px-8 text-sm font-medium bg-christi-600 text-white hover:bg-christi-700 transition-colors shadow-lg shadow-christi-300/40"
		>
			Learn How You Can Help
		</a>
	</div>
</div>
