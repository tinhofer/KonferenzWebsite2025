<script>
	import thumbnail from '$lib/images/blogitem.png';
</script>

<div class="item">
	<img src={thumbnail} alt="flying robot" />
	<div class="textarea">
		<div class="heading">Versuche zur Kontrolle von Superintelligenz</div>
		<div class="descripiton">
			AI wird immer ausgefeilter. Daher wird erforscht, wie man eine superintelligente AI unter
			Kontrolle behalten kann. <a href="https://google.com">Hier weiterlesen</a>
		</div>
	</div>
</div>

<style>
	.item {
		max-width: 400px;
		background-color: var(--white);
		font-size: 1.75rem;
	}
	img {
		max-width: 400px;
	}
	.textarea {
		padding: 10px;
	}
	.heading {
		font-weight: 700;
	}
	a {
		color: var(--cyan);
		text-decoration: none;
	}
</style>
