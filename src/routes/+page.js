import Bash from "$lib/icons/bash.svelte";
import Bootstrap from "$lib/icons/bootstrap.svelte";
import CodeIgniter from "$lib/icons/codeigniter.svelte";
import CSS from "$lib/icons/css.svelte";
import JavaScript from "$lib/icons/javascript.svelte";
import Laravel from "$lib/icons/laravel.svelte";
import Linux from "$lib/icons/linux.svelte";
import Magento from "$lib/icons/magento.svelte";
import PHP from "$lib/icons/php.svelte";
import Python from "$lib/icons/python.svelte";
import RabbitMQ from "$lib/icons/rabbitmq.svelte";
import Redis from "$lib/icons/redis.svelte";
import Svelte from "$lib/icons/svelte.svelte";
import Symfony from "$lib/icons/symfony.svelte";
import Tailwind from "$lib/icons/tailwind.svelte";
import Windows from "$lib/icons/windows.svelte";

export function load() {
    return {
        projects: [
            {
                title: "Feirão DealerSites",
                description:
                    ["Sistema para criação de páginas de Feirão de Automóveis da DealerSites. Fiquei responsável pelo desenvolvimento da estruturação do banco até o desenvolvimento do front."],
                openSource: false,
                stack: [Laravel, Symfony, PHP, Bootstrap],
            },
            {
                title: "Módulos para Magento 2",
                description:
                    ["Desenvolvi módulos novos para integração com transportadoras no cálculo de fretes e desenvolvi novas features para módulos já existentes."],
                openSource: false,
                stack: [Magento, PHP, JavaScript],
            },
            {
                title: "Portfolio",
                description:
                    ["Meu portfolio, esse site que você vê agora! Criado com SvelteKit, Tailwind CSS e muito café!"],
                openSource: true,
                repoUrl: "https://github.com/RenanLazarotto/Portifolio",
                stack: [Svelte, Tailwind],
            },
            {
                title: "CrediOK Reports",
                description:
                    [
                        "Sistema de relatórios interno, originalmente feito usando CodeIgniter para o site e Silex na API.",
                        "Reescrevi todo o backend em Symfony e re-organizei todo o frontend, removendo dependências obsoletas e criando uma nova cara para o sistema."
                    ],
                openSource: false,
                stack: [CodeIgniter, Symfony, Bootstrap, JavaScript, PHP],
            }
        ],
        stack: {
            'Back-end': [
                CodeIgniter,
                Laravel,
                PHP,
                Python,
                RabbitMQ,
                Redis,
                Symfony,
            ],
            'Front-end': [
                Bootstrap,
                CSS,
                JavaScript,
                Svelte,
                Tailwind
            ],
            'Sistemas e outros': [
                Bash,
                Linux,
                Windows,
            ]
        }
    };
}