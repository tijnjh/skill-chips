# Skill Chips

Generate beautiful skill badges for your GitHub profile or documentation.

![Svelte Skill](https://skill-chips.vercel.app/v1/Svelte?lvl=advanced)
![Go Skill](https://skill-chips.vercel.app/v1/Go?lvl=intermediate)

## Usage

Add skill badges to your markdown files using this URL pattern:

```markdown
![Skill Name](https://skill-chips.vercel.app/v1/[skill]?lvl=[level])
```

### Parameters

- `[skill]`: Programming language or technology name (e.g. `JavaScript`, `Python`, `React`)
- `lvl`: Proficiency level (`beginner`, `intermediate`, or `advanced`)
- `icon` (optional): Override the default icon name from devicon

### Examples

```markdown
![TypeScript](https://skill-chips.vercel.app/v1/TypeScript?lvl=advanced)
![React](https://skill-chips.vercel.app/v1/React?lvl=intermediate)
![Python](https://skill-chips.vercel.app/v1/Python?lvl=beginner)
```

## Development

1. Clone this repository
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## How It Works

- Built with [SvelteKit](https://kit.svelte.dev/)
- Uses [DevIcon](https://devicon.dev/) for technology icons
- Dynamically generates SVG badges using [Svelte components](src/routes/v1/[skill]/SkillChip.svelte)
- Color mappings based on GitHub's language colors

## License

MIT
