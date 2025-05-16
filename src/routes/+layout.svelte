<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;600;700&display=swap"
		rel="stylesheet"
	/>
	<script>
		window.givingSettings = {
			flow_id: '4affbe190376d67f48ba'
		};
	</script>
	<script>
		(function (g, i, v, e) {
			if (!g.givingSettings) return;
			v = i.createElement('script');
			e = i.getElementsByTagName('script')[0];
			v.src = 'https://trigger.rebelgive.com/4affbe190376d67f48ba';
			e.parentNode.insertBefore(v, e);
		})(window, document);
	</script>
</svelte:head>

<header>
	<Header />
</header>
<main>
	<slot />
</main>
<footer>
	<Footer />
</footer>
