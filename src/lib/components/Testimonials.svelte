<script>
	const testimonials = [
		{
			name: 'Pastor Todd P.',
			location: 'South Carolina',
			quote:
				"As a pastor, it's hard to find someone who truly understands the weight of ministry life. From our very first conversation, I knew Stephen and PlantJoy had the wisdom and experience I needed. Every session leaves me both encouraged and challenged—right where I need it most."
		},
		{
			name: 'John M.',
			location: 'North Carolina',
			quote:
				'PlantJoy has helped me dream again. With their guidance, I’ve set clear goals and taken real steps toward the calling God has placed on my life. Their encouragement has been a lifeline in a season of uncertainty.'
		},
		{
			name: 'Pastor Matt',
			location: 'St. Louis, MO',
			quote:
				'What a gift to have PlantJoy in my corner. As I navigate unfamiliar ministry waters, I no longer feel alone. If you support PlantJoy, thank you—you’re making a deep difference.'
		}
	];
</script>

<div class="px-4 lg:px-24 py-20 bg-christi-50">
	<div class="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
		<h2 class="text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
			You Can Lead With Purpose Again
		</h2>
		<p class="mt-6 text-lg tracking-tight font-light text-slate-600">
			Plantjoy is here for you, as a leader, to help you find your way back to joy, health, and
			clarity.
		</p>
	</div>

	<div class="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
		{#each testimonials as testimonial}
			<div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
				<div class="flex items-center mb-6">
					<div>
						<h4 class="text-lg font-medium text-slate-900">{testimonial.name}</h4>
						<p class="text-xs text-christi-600">{testimonial.location}</p>
					</div>
				</div>

				<blockquote>
					<div class="mb-4">
						<svg class="w-6 h-6 text-christi-300" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"
							/>
						</svg>
					</div>
					<p class="text-slate-700 leading-relaxed italic">
						"{testimonial.quote}"
					</p>
				</blockquote>
			</div>
		{/each}
	</div>

</div>

