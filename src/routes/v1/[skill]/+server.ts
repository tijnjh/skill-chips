import { render } from 'svelte/server';
import image from './SkillChip.svelte';

export async function GET(req) {
	const sp = (p: string) => req.url.searchParams.get(p);

	const level = sp('lvl');
	const skill = req.params.skill.toLowerCase();

	const url =
		'https://raw.githubusercontent.com/tijnjh/technologies.json/refs/heads/main/technologies.json';

	const response = await (await fetch(url)).json();
	const item = response.find((i: any) => i.id.includes(skill));

	const { body } = render(image, { props: { level, technology: item } });

	return new Response(body, {
		headers: {
			'Content-Type': 'image/svg+xml',
			'Content-Disposition': 'inline;filename=image.svg'
		}
	});
}
