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
</script>

<div class="px-4 lg:px-24 py-12 sm:py-24">
	<div class="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
		<h2 class="text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
			How We Can Help You
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