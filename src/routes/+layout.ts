import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ url, fetch }) => {
	return {
		url: url.pathname
	};
};
