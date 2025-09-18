<script>
	const ministryStruggles = [
		"Burned out or stuck, unsure of the next step, facing difficulty alone",
		"In transition, facing relational, spiritual, or vocational crossroads", 
		"Wrestling with purpose, wondering where their calling fits in their current reality",
		"Seeking mentorship, wanting to grow into a sustainable, joy-filled ministry",
		"Desiring balance, ready to realign work, family, and soul priorities"
	];

	const howWeHelp = [
		"Name the real issues beneath your exhaustion or dissatisfaction",
		"Create a healthier rhythm that honors your gifts, limits, and priorities",
		"Step into your calling with renewed boldness, humility, and joy",
		"Face transitions with wisdom, courage, and godly clarity"
	];
</script>

<svelte:head>
	<title>Start Here - Plant Joy</title>
</svelte:head>

<!-- Hero Section -->
<div class="pt-20 pb-24 text-center px-4 lg:px-0">
	<h1 class="mx-auto max-w-5xl font-lexend text-4xl font-medium tracking-wide text-slate-900 sm:text-6xl lg:text-7xl">
		Helping Ministry Leaders Find
		<span class="relative whitespace-nowrap text-christi-600">
			<svg
				aria-hidden="true"
				viewBox="0 0 418 42"
				class="absolute top-2/3 left-0 h-[0.58em] w-full fill-christi-300/70"
				preserveAspectRatio="none"
			>
				<path
					d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
				/>
			</svg>
			<span class="relative">Clarity, Health, and Joy</span>
		</span>
		Again
	</h1>
	<p class="mx-auto mt-6 max-w-3xl text-lg tracking-wide text-slate-700">
		Ministry is a high calling—and sometimes, a heavy one. At PlantJoy, we walk alongside gospel-centered leaders who are hurting, stuck, or navigating complex seasons of transition. Whether you're burned out, facing personal hardship, or simply sensing that something isn't working, you're not alone—and you don't have to figure it out alone.
	</p>
</div>

<!-- You Were Called Section -->
<div class="px-4 lg:px-24 py-12 sm:py-24 bg-slate-50">
	<div class="max-w-4xl mx-auto">
		<h2 class="text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-5xl text-center mb-8">
			You Were Called to This. But Maybe Not Like This.
		</h2>
		<p class="text-lg text-slate-700 text-center mb-12 max-w-3xl mx-auto">
			We exist to glorify God by serving those who serve. Plant Joy offers coaching, mentorship, and wise counsel for ministry leaders who are:
		</p>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 max-w-4xl mx-auto">
			{#each ministryStruggles as struggle}
				<div class="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
					<div class="w-2 h-2 bg-christi-500 rounded-full mt-3 flex-shrink-0"></div>
					<p class="text-slate-700">{struggle}</p>
				</div>
			{/each}
		</div>
		<p class="text-lg text-slate-700 text-center mt-12 max-w-3xl mx-auto">
			Whether you're young and eager or seasoned and exhausted, our mission is the same: to help you rediscover clarity, cohesion, and calling.
		</p>
	</div>
</div>

<!-- How We Help Section -->
<div class="px-4 lg:px-24 py-12 sm:py-24">
	<div class="max-w-4xl mx-auto">
		<h2 class="text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-5xl text-center mb-8">
			We Help You Make Sense of the Messy Middle
		</h2>
		<p class="text-lg text-slate-700 text-center mb-12 max-w-3xl mx-auto">
			We don't promise quick fixes. We promise presence, perspective, and a path forward. Through personalized coaching and spiritual mentorship, we help you:
		</p>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
			{#each howWeHelp as help}
				<div class="flex items-start space-x-3">
					<div class="w-6 h-6 bg-christi-100 text-christi-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
						<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
						</svg>
					</div>
					<p class="text-slate-700">{help}</p>
				</div>
			{/each}
		</div>
	</div>
</div>

<!-- Start Here CTA Section -->
<div class="px-4 lg:px-24 py-12 sm:py-24 bg-slate-50">
	<div class="max-w-2xl mx-auto text-center">
		<h2 class="text-3xl tracking-tight text-slate-900 sm:text-4xl mb-6">
			Start Here
		</h2>
		<p class="text-lg text-slate-700 mb-8">
			Whether you're in a season of burnout, decision-making, or disillusionment, you don't have to carry it alone. Let's talk.
		</p>
		<a
			href="mailto:plantjoyministries@gmail.com?subject=Schedule A Discovery Call&body=Hi Plant Joy,%0D%0A%0D%0AI would like to schedule a discovery call to learn more about how Plant Joy can support me in my ministry journey.%0D%0A%0D%0APlease let me know what times work best for you.%0D%0A%0D%0AThank you!%0D%0A%0D%0AName:%0D%0APhone:%0D%0AMinistry Role:%0D%0AChurch/Organization:"
			class="bg-christi-600 text-gray-50 tracking-wider shadow-xl shadow-christi-300/40 py-4 px-8 rounded-full hover:bg-christi-700 transition-colors font-medium text-lg inline-flex items-center space-x-2"
		>
			<span>👉</span>
			<span>Schedule a free discovery call</span>
		</a>
	</div>
</div>
