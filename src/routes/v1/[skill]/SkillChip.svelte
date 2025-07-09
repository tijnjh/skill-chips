<script lang='ts'>
  const { level, technology } = $props()

  const width = 150
  const height = 50

  function shadeColor(color: string, percent: number) {
    let R = Number.parseInt(color.substring(1, 3), 16)
    let G = Number.parseInt(color.substring(3, 5), 16)
    let B = Number.parseInt(color.substring(5, 7), 16)

    R = Number.parseInt(String((R * (100 + percent)) / 100))
    G = Number.parseInt(String((G * (100 + percent)) / 100))
    B = Number.parseInt(String((B * (100 + percent)) / 100))

    R = R < 255 ? R : 255
    G = G < 255 ? G : 255
    B = B < 255 ? B : 255

    R = Math.round(R)
    G = Math.round(G)
    B = Math.round(B)

    const RR = R.toString(16).length === 1 ? `0${R.toString(16)}` : R.toString(16)
    const GG = G.toString(16).length === 1 ? `0${G.toString(16)}` : G.toString(16)
    const BB = B.toString(16).length === 1 ? `0${B.toString(16)}` : B.toString(16)

    return `#${RR}${GG}${BB}`
  }

  function getColorByLevel(level: string) {
    switch (level.toLowerCase()) {
      case 'beginner':
        return '#aceebb'
      case 'learning':
        return '#4ac26b'
      case 'intermediate':
        return '#2da44e'
      case 'advanced':
        return '#116329'
      default:
        return '#eff2f5'
    }
  }
</script>

<svg viewBox='0 0 {width} {height}' width='128' xmlns='http://www.w3.org/2000/svg'>
  <style>
    * {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
   }
  </style>

  <rect
    xmlns='http://www.w3.org/2000/svg'
    x='0.5'
    y='0.5'
    rx='4.5'
    height={height - 1}
    stroke='#e4e2e2'
    width={width - 1}
    fill='#fffefe'
    stroke-opacity='1'
  />

  <svg height='25' width='25' y='12.5' x='10'>
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html technology.icon}
  </svg>

  <text x='42' y='21.5' fill='#59636e' font-size='12'>
    {technology.name}
  </text>

  <rect
    rx='2'
    x='42.5'
    y='28.5'
    width='8'
    height='8'
    fill={getColorByLevel(level)}
    stroke={shadeColor(getColorByLevel(level), -6)}
    stroke-width='.5'
  />

  <text x='55' y='36' fill='#59636e' font-size='10'>
    {level.charAt(0).toUpperCase() + level.slice(1)}
  </text>
</svg>
