<script lang="ts">
	import { langColorMappings } from '$lib/lang-color-mappings';
	import hexRgb from 'hex-rgb';

	const { level, skill, icon } = $props();

	const color = langColorMappings[skill];
	const textColor = typeof color === 'string' ? findTextColor(hexRgb(color)) : '#fff';

	const width = 285;
	const height = 70;

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
</script>

<svg viewBox="0 0 {width} {height}" width="128" xmlns="http://www.w3.org/2000/svg">
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Inter');
	</style>

	<rect {width} {height} fill={color} />

	<text x="65" y="33" fill={textColor} font-family="Inter" font-size="25" font-weight="600">
		{skill}
	</text>

	<text x="65" y="55" fill={textColor} opacity=".6" font-family="Inter, system-ui" font-size="20">
		{level.charAt(0).toUpperCase() + level.slice(1)}
	</text>

	<rect width="80" x="220" {height} fill="#f5f5f5" />

	<g>
		{#if level === 'beginner'}
			{@render bar(230, '#FFA726')}
			{@render bar(245, '#FFA72650')}
			{@render bar(260, '#FFA72650')}
		{:else if level === 'intermediate'}
			{@render bar(230, '#7CB342')}
			{@render bar(245, '#7CB342')}
			{@render bar(260, '#7CB34250')}
		{:else if level === 'advanced'}
			{@render bar(230, '#2E7D32')}
			{@render bar(245, '#2E7D32')}
			{@render bar(260, '#2E7D32')}
		{/if}
	</g>

	<svg width="40" x="12.5">
		{@html icon}
	</svg>
</svg>

{#snippet bar(x: number, fill: string)}
	<rect {x} y="15" width="10" height="40" {fill} />
{/snippet}
