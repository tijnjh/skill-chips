<script lang="ts">
	import { langColorMappings } from '$lib/lang-color-mappings';
	import hexRgb from 'hex-rgb';

	const { level, skill, icon } = $props();

	const color = langColorMappings[skill];
	const textColor = '#000';

	const width = 320;
	const height = 70;

	const offset = 35;
</script>

<svg viewBox="0 0 {width + 4} {height + 4}" width="150" xmlns="http://www.w3.org/2000/svg">
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Inter');
	</style>

	<rect
		width={width - 85}
		{height}
		x="2"
		y="2"
		fill={color}
		fill-opacity=".3"
		stroke={color}
		stroke-width="2"
		rx="10"
	/>

	<text
		x="70"
		y="33"
		fill={textColor}
		font-family="Inter, system-ui"
		font-size="22.5"
		font-weight="600"
	>
		{skill}
	</text>

	<text x="70" y="55" fill={textColor} opacity=".6" font-family="Inter, system-ui" font-size="20">
		{level.charAt(0).toUpperCase() + level.slice(1)}
	</text>

	<rect
		width={height}
		{height}
		x={width - 70}
		y="2"
		fill={color}
		fill-opacity=".3"
		stroke={color}
		stroke-width="2"
		rx="10"
	/>

	<g>
		{#if level === 'beginner'}
			{@render bar(230 + offset, '#FFA726')}
			{@render bar(245 + offset, '#FFA72650')}
			{@render bar(260 + offset, '#FFA72650')}
		{:else if level === 'intermediate'}
			{@render bar(230 + offset, '#7CB342')}
			{@render bar(245 + offset, '#7CB342')}
			{@render bar(260 + offset, '#7CB34250')}
		{:else if level === 'advanced'}
			{@render bar(230 + offset, '#2E7D32')}
			{@render bar(245 + offset, '#2E7D32')}
			{@render bar(260 + offset, '#2E7D32')}
		{/if}
	</g>

	<svg width="40" x="15">
		{@html icon}
	</svg>
</svg>

{#snippet bar(x: number, fill: string)}
	<rect {x} y="16.6" width="10" height="40" {fill} />
{/snippet}
