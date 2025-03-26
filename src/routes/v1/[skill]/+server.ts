import { render } from 'svelte/server';
import image from './SkillChip.svelte';

async function getIcon(icon: string): Promise<string> {
	const iconLower = icon.toLowerCase();
	const url = `https://github.com/devicons/devicon/tree/v2.16.0/icons/${iconLower}/${iconLower}-original.svg`;

	const response = await fetch(url);
	return await response.text();
}

export async function GET(req) {
	const sp = (p: string) => req.url.searchParams.get(p);

	const level = sp('lvl');
	const skill = req.params.skill;
	const specifiedIcon = sp('icon');
	const icon = await getIcon(specifiedIcon ?? skill);
	const { body } = render(image, { props: { skill, level, icon } });

	return new Response(body, {
		headers: {
			'Content-Type': 'image/svg+xml',
			'Content-Disposition': 'inline;filename=image.svg'
		}
	});
}
