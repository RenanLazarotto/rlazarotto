export function load() {
    return {
        projects: [
            {
                title: "Feirão DealerSites",
                description:
                    "Sistema para criação de páginas de Feirão de Automóveis da DealerSites. Fiquei responsável pelo desenvolvimento da estruturação do banco até o desenvolvimento do front.",
                openSource: false,
                stack: ["Laravel", "Symfony", "PHP", "Bootstrap"],
            },
            {
                title: "Módulos para Magento 2",
                description:
                    "Desenvolvi módulos novos para integração com transportadoras no cálculo de fretes e desenvolvi novas features para módulos já existentes.",
                openSource: false,
                stack: ["Magento", "PHP", "JavaScript"],
            },
            {
                title: "Portfolio",
                description:
                    "Meu portfolio, esse site que você vê agora! Criado com SvelteKit, Tailwind CSS e muito café!",
                openSource: true,
                repoUrl: "https://github.com/RenanLazarotto/Portifolio",
                stack: ["SvelteKit", "Tailwind CSS"],
            },
            {
                title: "CrediOK Reports",
                description:
                    "Sistema de relatórios interno, originalmente feito usando CodeIgniter para o site e Silex na API. Reescrevi todo o backend em Symfony e re-organizei todo o frontend, removendo dependências obsoletas e criando uma nova cara para o sistema.",
                openSource: false,
                stack: ["CodeIgniter", "Symfony", "Bootstrap", "JavaScript", "PHP"],
            }
        ]
    };
}