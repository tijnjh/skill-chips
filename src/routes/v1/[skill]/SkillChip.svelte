<script lang="ts">
	const { level, technology } = $props();

	const width = 150;
	const height = 50;

	function shadeColor(color: string, percent: number) {
		var R = parseInt(color.substring(1, 3), 16);
		var G = parseInt(color.substring(3, 5), 16);
		var B = parseInt(color.substring(5, 7), 16);

		R = parseInt(String((R * (100 + percent)) / 100));
		G = parseInt(String((G * (100 + percent)) / 100));
		B = parseInt(String((B * (100 + percent)) / 100));

		R = R < 255 ? R : 255;
		G = G < 255 ? G : 255;
		B = B < 255 ? B : 255;

		R = Math.round(R);
		G = Math.round(G);
		B = Math.round(B);

		var RR = R.toString(16).length == 1 ? '0' + R.toString(16) : R.toString(16);
		var GG = G.toString(16).length == 1 ? '0' + G.toString(16) : G.toString(16);
		var BB = B.toString(16).length == 1 ? '0' + B.toString(16) : B.toString(16);

		return '#' + RR + GG + BB;
	}

	function getColorByLevel(level: string) {
		switch (level.toLowerCase()) {
			case 'beginner':
				return '#aceebb';
			case 'learning':
				return '#4ac26b';
			case 'intermediate':
				return '#2da44e';
			case 'advanced':
				return '#116329';
			default:
				return '#eff2f5';
		}
	}
</script>

<svg viewBox="0 0 {width} {height}" width="128" xmlns="http://www.w3.org/2000/svg">
	<style>
		* {
			font-family:
				-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif,
				'Apple Color Emoji', 'Segoe UI Emoji';
			color: #59636e;
		}
	</style>

	<rect
		xmlns="http://www.w3.org/2000/svg"
		x="0.5"
		y="0.5"
		rx="4.5"
		height={height - 1}
		stroke="#e4e2e2"
		width={width - 1}
		fill="#fffefe"
		stroke-opacity="1"
	/>

	<g>
		<circle cx="17.5" cy="17.5" r="5" fill={technology.color} />

		<text x="25" y="21.5" fill="#59636e" font-size="12">
			{technology.name}
		</text>
	</g>

	<text x="12.5" y="37.5" fill="#59636e" font-size="10">
		{level.charAt(0).toUpperCase() + level.slice(1)}
	</text>

	{#if level}
		{@const gap = 17.5}
		{#if level === 'beginner'}
			{@render levelIndicator(true)}
			{@render levelIndicator(false, gap)}
			{@render levelIndicator(false, 0, gap)}
			{@render levelIndicator(false, gap, gap)}
		{:else if level === 'learning'}
			{@render levelIndicator(true)}
			{@render levelIndicator(true, gap)}
			{@render levelIndicator(false, 0, gap)}
			{@render levelIndicator(false, gap, gap)}
		{:else if level === 'intermediate'}
			{@render levelIndicator(true)}
			{@render levelIndicator(true, gap)}
			{@render levelIndicator(true, 0, gap)}
			{@render levelIndicator(false, gap, gap)}
		{:else if level === 'advanced'}
			{@render levelIndicator(true)}
			{@render levelIndicator(true, gap)}
			{@render levelIndicator(true, 0, gap)}
			{@render levelIndicator(true, gap, gap)}
		{/if}
	{/if}
</svg>

{#snippet levelIndicator(active: boolean, x: number = 0, y: number = 0)}
	{@const baseX = 110}
	{@const baseY = 10}
	{@const size = 12.5}
	{@const fill = active ? getColorByLevel(level) : '#eff2f5'}
	{@const stroke = shadeColor(fill, -6)}

	<rect
		rx="3"
		x={baseX + x}
		y={baseY + y}
		width={size}
		height={size}
		{fill}
		{stroke}
		stroke-width=".5"
	/>
{/snippet}
