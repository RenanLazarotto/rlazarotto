import { FileUser, Github, Mail } from '@lucide/svelte';
import type { Contacts } from './types/contact';

export const contacts: Contacts = [
	{ href: 'mailto:renanlazarotto@gmail.com', icon: Mail },
	{ href: 'https://github.com/RenanLazarotto', icon: Github },
	{ href: '/curriculo', icon: FileUser }
];
