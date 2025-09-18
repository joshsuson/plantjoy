<script>
	const steps = [
		{
			number: "01",
			title: "Discover Your Why",
			description: "Understanding your heart for ministry is the foundation of everything. We'll help you explore your calling and passion for serving God's people.",
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-christi-100">
				<path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
			</svg>`
		},
		{
			number: "02",
			title: "Connect with Community",
			description: "You're not meant to walk this journey alone. We'll connect you with other ministry leaders who understand your unique challenges and victories.",
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-christi-100">
				<path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-1.381z" clip-rule="evenodd" />
			</svg>`
		},
		{
			number: "03",
			title: "Build Support Systems",
			description: "Develop sustainable practices for personal care, spiritual growth, and professional development that will strengthen your ministry for years to come.",
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-christi-100">
				<path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
			</svg>`
		}
	];

	const resources = [
		{
			title: "Ministry Leader Assessment",
			description: "A comprehensive evaluation to help identify your strengths, challenges, and areas for growth.",
			type: "Free Assessment"
		},
		{
			title: "Weekly Encouragement Emails",
			description: "Uplifting messages, practical tips, and reminders that you're not alone in your calling.",
			type: "Email Series"
		},
		{
			title: "Community Connection Guide",
			description: "Learn how to build meaningful relationships with other ministry leaders in your area.",
			type: "Digital Guide"
		},
		{
			title: "Self-Care Planning Template",
			description: "A practical tool to help you prioritize your physical, emotional, and spiritual well-being.",
			type: "Template"
		}
	];
</script>

<svelte:head>
	<title>Start Here - Plant Joy</title>
</svelte:head>

<!-- Hero Section -->
<div class="pt-20 pb-24 text-center px-4 lg:px-0">
	<h1 class="mx-auto max-w-4xl font-lexend text-4xl font-medium tracking-wide text-slate-900 sm:text-7xl">
		Welcome to Your
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
			<span class="relative">Journey</span>
		</span>
	</h1>
	<p class="mx-auto mt-6 max-w-2xl text-lg tracking-wide text-slate-700">
		You've taken the first step toward renewed joy in ministry. Let's walk through this journey together, one step at a time.
	</p>
	<div class="mt-10 flex flex-col lg:flex-row justify-center gap-y-6 lg:gap-y-0 gap-x-6 items-center max-w-2xl mx-auto">
		<a
			href="/about"
			class="w-full lg:w-1/2 flex items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 shadow-xl shadow-christi-300/40 bg-christi-600 text-white hover:bg-christi-400 hover:text-slate-50 active:bg-christi-500 active:text-slate-100 focus-visible:outline-christi-600"
		>
			Learn About Plant Joy
		</a>
		<a
			href="/support-us"
			class="w-full lg:w-1/2 flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-christi-200 text-slate-700 hover:text-slate-900 hover:ring-christi-300 active:bg-christi-100 active:text-slate-600 focus-visible:outline-christi-600 focus-visible:ring-slate-300"
		>
			See How You Can Help
		</a>
	</div>
</div>

<!-- Steps Section -->
<div class="px-4 lg:px-24 py-12 sm:py-24">
	<div class="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
		<h2 class="text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
			Your Path Forward
		</h2>
		<p class="mt-6 text-lg tracking-tight font-light text-slate-600">
			A simple, proven approach to finding renewal and purpose in your ministry calling.
		</p>
	</div>
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-y-0 gap-x-8 mt-24">
		{#each steps as step}
			<div>
				<div class="flex items-center mb-4">
					<div class="w-10 h-10 rounded-full bg-christi-600 text-white font-bold text-lg flex items-center justify-center mr-3">
						{step.number}
					</div>
					<div class="w-9 h-9 rounded-lg bg-christi-600 grid place-items-center">
						{@html step.icon}
					</div>
				</div>
				<h3 class="mt-4 text-xl text-slate-900">{step.title}</h3>
				<p class="mt-4 text-sm text-slate-600">
					{step.description}
				</p>
			</div>
		{/each}
	</div>
</div>

<!-- Resources Section -->
<div class="px-4 lg:px-24 py-12 sm:py-24 bg-slate-50">
	<div class="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
		<h2 class="text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
			Tools to Get You Started
		</h2>
		<p class="mt-6 text-lg tracking-tight font-light text-slate-600">
			Everything you need to begin your journey toward renewed joy and purpose in ministry.
		</p>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-0 gap-x-8 mt-24">
		{#each resources as resource}
			<div class="bg-white rounded-lg p-6 shadow-sm">
				<div class="flex items-start justify-between mb-4">
					<h3 class="text-lg font-medium text-slate-900 flex-1">{resource.title}</h3>
					<span class="bg-christi-100 text-christi-700 px-3 py-1 rounded-full text-xs font-medium ml-4">
						{resource.type}
					</span>
				</div>
				<p class="text-sm text-slate-600 mb-4">{resource.description}</p>
				<button class="text-christi-600 hover:text-christi-700 font-medium text-sm">
					Get Access →
				</button>
			</div>
		{/each}
	</div>
</div>