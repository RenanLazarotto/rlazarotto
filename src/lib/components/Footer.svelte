<script lang="ts">
	import Divider from './Divider.svelte';
	import Link from './Link.svelte';
</script>

<Divider />
<footer class="grid grid-cols-1 md:grid-cols-4 mb-12 mt-6">
	<section class="flex items-center gap-4 col-span-3">
		<img src="/images/not-by-ia-dark.svg" alt="Escrito por um humano, não por IA" />
		<p class="text-gray-600">
			Esse conteúdo foi escrito por um humano (no caso, <Link href="/pages/sobre">eu</Link>, o autor). Foi utilizado um
			total de 0% de IA, 75% de café e 25% de pesquisas na web durante a criação ou escrita. Nenhuma IA foi ofendida
			durante o processo de criação deste site.
		</p>
	</section>

	<div class="flex flex-col justify-center items-end">
		<p class="text-gray-500">
			<span class="text-orange-500">&copy;</span>
			{new Date().getFullYear()} Renan Lazarotto
		</p>
		<Link href="https://github.com/RenanLazarotto/rlazarotto" target="_blank">Repositório</Link>
	</div>
</footer>
