<script lang="ts">
	import hexRgb from 'hex-rgb';

	const { level, technology } = $props();

	const textColor =
		typeof technology.color === 'string' ? findTextColor(hexRgb(technology.color)) : '#fff';

	const width = 256;
	const height = 80;

	function findTextColor(bgColor: { red: number; green: number; blue: number }) {
		const { red, green, blue } = bgColor;

		const r = red / 255;
		const g = green / 255;
		const b = blue / 255;

		const luminance =
			0.2126 * (r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4)) +
			0.7152 * (g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4)) +
			0.0722 * (b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4));

		return luminance > 0.4 ? 'black' : 'white';
	}

	function getBarWidthByLevel(level: string) {
		switch (level.toLowerCase()) {
			case 'beginnner':
				return 0.25; // 25%
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
			case 'beginnner':
				return '#FF6B6B'; // Light red
			case 'learning':
				return '#4ECDC4'; // Turquoise
			case 'intermediate':
				return '#45B7D1'; // Sky blue
			case 'advanced':
				return '#96CEB4'; // Sage green
			default:
				return '#CCCCCC'; // Gray
		}
	}
</script>

<svg viewBox="0 0 {width} {height}" width="150" xmlns="http://www.w3.org/2000/svg">
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Inter');
	</style>

	<defs>
		<linearGradient id="skillGradient" x1="0" y1="0" x2="0" y2="1">
			<stop offset="0%" stop-color={technology.color} stop-opacity="0.3" />
			<stop offset="100%" stop-color={technology.color} stop-opacity="0.6" />
		</linearGradient>
	</defs>

	<rect {width} {height} overflow="hidden" fill="url(#skillGradient)" />
	<text
		x="65"
		y="33"
		fill={textColor}
		font-family="Inter, system-ui"
		font-size="25"
		font-weight="600"
	>
		{technology.name}
	</text>

	<text x="65" y="55" fill={textColor} opacity=".6" font-family="Inter, system-ui" font-size="20">
		{level.charAt(0).toUpperCase() + level.slice(1)}
	</text>

	<rect height="9" y={height - 7} {width} fill="#ccc" />
	<rect
		height="9"
		y={height - 7}
		width={getBarWidthByLevel(level) * width}
		fill={getBarColorByLevel(level)}
	/>

	<svg width="40" x="12.5" height="40" y="15">
		{@html technology.icon}
	</svg>
</svg>

{#snippet bar(x: number, fill: string)}
	<rect {x} y="15" width="10" height="40" {fill} />
{/snippet}
