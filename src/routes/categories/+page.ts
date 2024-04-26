export async function load({ fetch }) {
    let categories: Types.Category[];

    const categoriesResponse = await fetch("/api/categories");

    categories = await categoriesResponse.json();

    return { categories };
}
