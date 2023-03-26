<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;600;700&display=swap"
		rel="stylesheet"
	/>
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
