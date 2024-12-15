<div class="info">
	<div class="infoContainer">
		<div class="content infoContent">
			<div class="leftInfo">ZEIT<br />ORT<br />KONTAKT</div>
			<div class="rightInfo">
				<div>
					29.02.2024 | 09:00 - 17:00 Uhr<br />Campus WU | Gebäude LC, Clubraum LC.2.400<br
					/>Institut für Arbeits- und Sozialrecht, WU<br />T: 01/313 36 – 4637<br />E:
					arbeitsrecht.sozialrecht@wu.ac.at
				</div>
			</div>
		</div>
		<button>Anmelden</button>
	</div>
</div>

<style>
	.info {
		background-image: url($lib/images/ConferenceBg.jpg);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		color: var(--white);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.infoContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--midGap);
		min-width: 60%;
		padding: var(--largerGap);
		min-height: var(--min-height);
		max-width: var(--max-width);
	}
	.infoContent {
		font-size: var(--fs-h);
		font-weight: 400;
		display: flex;
		gap: 1rem;
		text-shadow: var(--shadow) 0.1em 0.1em 1px;
	}
	.leftInfo {
		text-align: right;
		font-weight: 700;
	}
	button {
		margin-top: var(--midGap);
		border: solid 0.1em #fff;
		color: #fff;
		font-size: var(--fs-h);
	}
</style>
