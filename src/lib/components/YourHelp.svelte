<script>
	let waysToHelp = [
		{
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
             class="w-6 h-6 fill-christi-100">
          <path
            d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
          <path fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z"
                clip-rule="evenodd" />
        </svg>
`,
			title: 'Financial Partnership',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium dolor maiores nam porro sit unde\n' +
				' ut. Assumenda, beatae deserunt dolores excepturi in ipsam iste, quaerat quia suscipit veniam vitae?'
		},
		{
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-christi-100">
  <path fill-rule="evenodd" d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 001.28.53l4.184-4.183a.39.39 0 01.266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0012 2.25zM8.25 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm2.625 1.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clip-rule="evenodd" />
</svg>
`,
			title: 'Referral',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium dolor maiores nam porro sit unde\n' +
				' ut. Assumenda, beatae deserunt dolores excepturi in ipsam iste, quaerat quia suscipit veniam vitae?'
		},
		{
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-christi-100">
  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
</svg>

`,
			title: 'Join Newsletter',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium dolor maiores nam porro sit unde\n' +
				' ut. Assumenda, beatae deserunt dolores excepturi in ipsam iste, quaerat quia suscipit veniam vitae?'
		}
	];

	let neededCommitments = [
		{
			monthlyAmount: 500,
			partnerAmount: 5
		},
		{
			monthlyAmount: 200,
			partnerAmount: 7
		},
		{
			monthlyAmount: 100,
			partnerAmount: 10
		},
		{
			monthlyAmount: 75,
			partnerAmount: 15
		},
		{
			monthlyAmount: 50,
			partnerAmount: 25
		},
		{
			monthlyAmount: 25,
			partnerAmount: 25
		}
	];
</script>

<div class="px-4 lg:px-24 py-12 sm:py-24">
	<div class="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
		<h2 class="text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
			How can you help?
		</h2>
		<p class="mt-6 text-lg tracking-tight font-light text-slate-600">
			None of this can be done without your partnership.
		</p>
	</div>
	<div class="grid grid-col-1 lg:grid-cols-3 gap-y-8 lg:gap-y-0 gap-x-8 mt-24">
		{#each waysToHelp as way}
			<div>
				<div class="w-9 h-9 rounded-lg bg-christi-600 grid place-items-center">
					{@html way.icon}
				</div>
				<h3 class="mt-4 text-xl text-slate-900">{way.title}</h3>
				<p class="mt-4 text-sm text-slate-600">
					{way.description}
				</p>
			</div>
		{/each}
	</div>
	<div class="mt-20 rounded-lg bg-slate-200 p-8">
		<h3 class="text-center text-lg uppercase text-slate-700 tracking-wide mb-8">
			Needed Commitment
		</h3>
		<div class="bg-white rounded-lg p-4">
			<div class="grid grid-cols-5 gap-2 mb-2">
				<div class="text-right uppercase text-xs lg:text-sm text-slate-600">Monthly Amount</div>
				<div class="col-span-2 lg:col-span-3" />
				<div class="uppercase col-span-2 text-xs text-right lg:text-sm text-slate-600">
					Amount of partners needed
				</div>
			</div>
			<div class="grid grid-cols-5 gap-2 gap-y-4 pb-4">
				{#each neededCommitments as commitment, i}
					<div class="col-span-1 text-lg text-right items-end">${commitment.monthlyAmount}</div>
					<div class="col-span-3 w-full border-b-2 border-christi-300" />
					<div class="col-span-1 text-lg flex gap-1">
						<span>{commitment.partnerAmount}</span>
						<span class="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="w-5 h-5 fill-christi-600"
							>
								<path
									fill-rule="evenodd"
									d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
									clip-rule="evenodd"
								/>
							</svg>
						</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<a
		href="https://www.myegiving.com/App/Giving/eGiving-314983"
		class="mx-auto max-w-md my-24 flex items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 shadow-xl shadow-christi-300/40 bg-christi-600 text-white hover:bg-christi-400 hover:text-slate-50 active:bg-christi-500 active:text-slate-100 focus-visible:outline-christi-600"
	>
		Give Now
	</a>
</div>
