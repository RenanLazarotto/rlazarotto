import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

export default {
	content: ['./src/**/*.{html,js,svelte,ts,svx}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ["'Outfit Variable'", ...defaultTheme.fontFamily.sans]
			}
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			gray: colors.neutral,
			black: colors.black,
			white: colors.white,
			purple: colors.purple,
			orange: {
				DEFAULT: '#FF3E00',
				50: '#FFC9B8',
				100: '#FFBAA3',
				200: '#FF9B7A',
				300: '#FF7C52',
				400: '#FF5D29',
				500: '#FF3E00',
				600: '#C73000',
				700: '#8F2300',
				800: '#571500',
				900: '#1F0700',
				950: '#030100'
			}
		}
	},

	plugins: [typography]
} satisfies Config;
