import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		include: ['gsap'] // Explicitly include GSAP for optimization
	},
	ssr: {
		noExternal: ['gsap'] // Exclude GSAP from SSR
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
