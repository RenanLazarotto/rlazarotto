type Post = {
	title: string;
	description: string;
	slug: string;
	published: Date;
	updated: Date;
};
type Posts = Post[];

type SimplifiedPost = Omit<Post, 'description' | 'updated'>;

type PostsByYear = {
	[year: number]: SimplifiedPost[];
};
