<script>
	const testimonials = [
		{
			name: "Pastor David Martinez",
			role: "Lead Pastor",
			church: "Grace Community Church",
			location: "Austin, TX",
			quote: "Plant Joy came into my life during one of the darkest seasons of ministry. Their care and genuine concern reminded me why I fell in love with serving God's people in the first place.",
			image: "/stephen.png"
		},
		{
			name: "Rev. Sarah Johnson",
			role: "Associate Pastor",
			church: "Hope Fellowship",
			location: "Denver, CO", 
			quote: "The loneliness in ministry was overwhelming until Plant Joy connected me with others who understood the unique challenges we face. I'm no longer walking this journey alone.",
			image: "/stephen.png"
		},
		{
			name: "Pastor Michael Chen",
			role: "Youth Pastor",
			church: "First Baptist Church",
			location: "Seattle, WA",
			quote: "Plant Joy doesn't just offer encouragement—they provide practical support and genuine friendship. It's been a lifeline during the most challenging years of my ministry.",
			image: "/stephen.png"
		}
	];
</script>

<div class="px-4 lg:px-24 py-20 bg-christi-50">
	<div class="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
		<h2 class="text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
			Stories of Hope
		</h2>
		<p class="mt-6 text-lg tracking-tight font-light text-slate-600">
			Hear from ministry leaders who have found renewed joy and purpose through Plant Joy's support.
		</p>
	</div>

	<div class="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
		{#each testimonials as testimonial}
			<div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
				<div class="flex items-center mb-6">
					<img 
						src={testimonial.image} 
						alt={testimonial.name}
						class="w-12 h-12 rounded-full object-cover mr-4"
					/>
					<div>
						<h4 class="text-lg font-medium text-slate-900">{testimonial.name}</h4>
						<p class="text-sm text-slate-600">{testimonial.role}</p>
						<p class="text-xs text-christi-600">{testimonial.church} • {testimonial.location}</p>
					</div>
				</div>
				
				<blockquote>
					<div class="mb-4">
						<svg class="w-6 h-6 text-christi-300" fill="currentColor" viewBox="0 0 24 24">
							<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
						</svg>
					</div>
					<p class="text-slate-700 leading-relaxed italic">
						"{testimonial.quote}"
					</p>
				</blockquote>
			</div>
		{/each}
	</div>

	<div class="mt-12 text-center">
		<p class="text-sm text-slate-600 mb-6">
			Want to share your story with Plant Joy?
		</p>
		<a
			href="/support-us"
			class="inline-flex items-center rounded-full px-6 py-2 text-sm font-medium ring-1 ring-christi-200 text-slate-700 hover:text-slate-900 hover:ring-christi-300 active:bg-christi-100 active:text-slate-600 focus-visible:outline-christi-600 focus-visible:ring-slate-300 transition-colors"
		>
			Learn More About Our Mission
		</a>
	</div>
</div>