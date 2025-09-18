<script>
	const helpItems = [
		{
			title: "Name the real issues beneath your exhaustion or dissatisfaction",
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-christi-100">
				<path fill-rule="evenodd" d="M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H13.5a6 6 0 100-12H10.5z" clip-rule="evenodd" />
			</svg>`
		},
		{
			title: "Create a healthier rhythm that honors your gifts, limits, and priorities",
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-christi-100">
				<path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clip-rule="evenodd" />
			</svg>`
		},
		{
			title: "Step into your calling with renewed boldness, humility, and joy",
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-christi-100">
				<path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
			</svg>`
		},
		{
			title: "Face transitions with wisdom, courage, and godly clarity",
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-christi-100">
				<path fill-rule="evenodd" d="M15.22 6.268a.75.75 0 01.968-.432l5.942 2.28a.75.75 0 01.431.97l-2.28 5.941a.75.75 0 11-1.4-.537L19.83 11.5l-8.26 8.26a.75.75 0 01-1.06 0L6.34 15.59a.75.75 0 010-1.06L14.599 6.27a.75.75 0 01.62-.002z" clip-rule="evenodd" />
			</svg>`
		}
	];
</script>

<div class="px-4 lg:px-24 py-12 sm:py-24">
	<div class="max-w-4xl md:mx-auto md:text-center">
		<h2 class="text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
			We Help You Make Sense of the Messy Middle
		</h2>
		<p class="mt-6 text-lg tracking-tight font-light text-slate-600">
			We don't promise quick fixes. We promise presence, perspective, and a path forward.
		</p>
		<p class="mt-4 text-lg tracking-tight font-light text-slate-600">
			Through personalized coaching and spiritual mentorship, we help you:
		</p>
	</div>
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-y-8 gap-x-8 mt-16 max-w-4xl mx-auto">
		{#each helpItems as item}
			<div class="flex items-start">
				<div class="w-8 h-8 rounded-lg bg-christi-600 grid place-items-center flex-shrink-0 mt-1 mr-4">
					{@html item.icon}
				</div>
				<p class="text-lg text-slate-700 leading-relaxed">
					{item.title}
				</p>
			</div>
		{/each}
	</div>
	<div class="mt-20 text-center">
		<p class="text-lg text-slate-600 mb-6">
			Ready to take the next step in your ministry journey?
		</p>
		<a
			href="/start-here"
			class="mx-auto max-w-md flex items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 shadow-xl shadow-christi-300/40 bg-christi-600 text-white hover:bg-christi-400 hover:text-slate-50 active:bg-christi-500 active:text-slate-100 focus-visible:outline-christi-600"
		>
			Get Started Today
		</a>
	</div>
</div>
