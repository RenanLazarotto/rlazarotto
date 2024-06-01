export const projects: Types.Project[] = [
    {
        title: "Portfolio 1.0",
        description: [
            "Primeira versão do meu site pessoal. Desenvolvido inciialmente com TailwindCSS, posteriormente migrado para CSS puro.",
        ],
        year: 2022,
        company: "Projeto pessoal",
        stack: ["Svelte", "CSS"],
        link: "/",
        source: "https://github.com/RenanLazarotto/site",
    },
    {
        title: "Sistema de Feirão Automotivo",
        description: [
            "Desenvolvimento do front-end do sistema de Feirão Automotivo, criado simultaneamente para as duas versões disponíveis (na época) do produto principal, com bases em Symfony e Laravel.",
        ],
        year: 2020,
        company: "DealerSites",
        stack: ["Laravel", "Symfony", "PHP", "Bootstrap"],
        link: "https://dealersites.com.br/produtos/mydealer#features-feira",
    },
    {
        title: "Módulos para Magento 2",
        description: ["Desenvolvimento e personalização de módulos para o Magento 2"],
        year: 2019,
        company: "DigitalHub",
        stack: ["Magento", "PHP", "JavaScript", "JavaScript", "KnockoutJS"],
    },
    {
        title: "Sistema de relatórios",
        description: [
            "Migração do sistema de relatórios antigo, que dependia de pacotes que foram depreciados e não recebiam mais manutenção.",
        ],
        year: 2018,
        company: "CrediOK",
        stack: ["CodeIgniter", "Symfony", "PHP", "Silex", "Bootstrap", "JavaScript"],
    },
    {
        title: "Robô de Processamento",
        description: [
            "Projeto de processamento de dados em lote, utilizado internamente para agregar diversas funcionalidades em um único produto capaz de processar milhares de registros de forma automática.",
        ],
        year: 2021,
        company: "Procob",
        stack: ["PHP", "Symfony", "MySQL", "RabbitMQ", "Redis"],
    },
];
