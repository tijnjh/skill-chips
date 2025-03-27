<script lang="ts">
	const { level, technology } = $props();

	const width = 256;
	const height = 80;

	function getBarWidthByLevel(level: string) {
		switch (level.toLowerCase()) {
			case 'beginner':
				return 0.25;
			case 'learning':
				return 0.5; // 50%
			case 'intermediate':
				return 0.75; // 75%
			case 'advanced':
				return 1; // 100%
			default:
				return 0;
		}
	}

	function getBarColorByLevel(level: string) {
		switch (level.toLowerCase()) {
			case 'beginner':
				return 'oklch(0.795 0.184 86.047)';
			case 'learning':
				return 'oklch(0.768 0.233 130.85)';
			case 'intermediate':
				return 'oklch(0.723 0.219 149.579)';
			case 'advanced':
				return 'oklch(0.696 0.17 162.48)';
			default:
				return '#ccc';
		}
	}
</script>

<svg viewBox="0 0 {width} {height}" width="150" xmlns="http://www.w3.org/2000/svg">
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Inter');

		@media (prefers-color-scheme: dark) {
			text {
				fill: #fff;
			}
			svg {
				background-color: #000;
			}
		}
		@media (prefers-color-scheme: light) {
			text {
				fill: #000;
			}

			svg {
				background-color: #ff;
			}
		}
	</style>

	<defs>
		<linearGradient id="skillGradient" x1="0" y1="0" x2="0" y2="1">
			<stop offset="0%" stop-color={technology.color} stop-opacity="0.3" />
			<stop offset="100%" stop-color={technology.color} stop-opacity="0.6" />
		</linearGradient>
	</defs>

	<rect {width} {height} fill="url(#skillGradient)" />

	<text x="70" y="35" font-family="Inter, system-ui" font-size="25" font-weight="600">
		{technology.name}
	</text>

	<text x="70" y="58" opacity=".6" font-family="Inter, system-ui" font-size="20">
		{level.charAt(0).toUpperCase() + level.slice(1)}
	</text>

	<rect height="9" y={height - 7} {width} fill="#ccc" />
	<rect
		height="9"
		y={height - 7}
		width={getBarWidthByLevel(level) * width}
		fill={getBarColorByLevel(level)}
	/>

	<svg width="45" x="12.5" height="40" y="17.5">
		{@html technology.icon}
	</svg>
</svg>

{#snippet bar(x: number, fill: string)}
	<rect {x} y="15" width="10" height="40" {fill} />
{/snippet}
