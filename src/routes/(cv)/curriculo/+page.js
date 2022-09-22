export function load() {
    return {
        education: [
            {
                title: 'Gestão em TI',
                companyUrl: 'https://www.unidombosco.edu.br/',
                company: 'Faculdade Dom Bosco',
                startDate: new Date(2013, 1),
                endDate: new Date(2016, 3),
                location: 'Curitiba, Paraná',
                description: [
                    "Formação focada em dispositivos móveis pela Faculdade Dom Bosco, concluída em 2016.",
                    "Conteúdos abrangidos: desenvolvimento para dispositivos móveis Android e iOS, bancos de dados MySQL, programação em Java, PHP e HTML."
                ]
            }
        ],
        jobs: [
            {
                key: 'hammer',
                startDate: new Date(2022, 7),
                endDate: 'Atualmente',
                location: 'Colombo, Paraná (Remoto)',
                title: 'Desenvolvedor PHP',
                company: 'Hammer Consult',
                companyUrl: 'https://wlgrupo.com/empresa/hammer/',
                description: [
                    'Projeto novo, sem atividades desenvolvidas até o momento'
                ],
                techStack: []
            },
            {
                key: 'procob',
                startDate: new Date(2020, 11),
                endDate: new Date(2022, 5),
                location: 'Pinhais, Paraná',
                title: 'Desenvolvedor Backend Pleno',
                company: 'Procob',
                companyUrl: 'https://www.procob.com/',
                description: [
                    'Fiz correções no sistema administrativos internos',
                    'Desenvolvi produtos novos com as integrações em fornecedores já existentes e fiz integrações com fornecedores novos',
                    'Desenvolvi novas funcionalidades, correções e reescritas parciais nas APIs',
                    'Fiz a reescrita do produto Robô de Processamento, migrando o antigo processo, escrito em Perl, para um fluxo novo e escalável que utiliza PHP, fila de processamento RabbitMQ e ferramentas do Linux para maior agilidade',
                    'Gerenciei servidores de produção, desenvolvimento e homologação, relizando pequenos ajustes quando necessário nas configurações',
                    'Modernizei o ambiente de desenvolvimento, criando uma nova imagem de base para a equipe utilizar'
                ],
                techStack: [
                    'Linux (Ubuntu)',
                    'PHP (5.6+)',
                    'Python',
                    'CI/CD (GitLab)',
                    'RabbitMQ',
                    'Symfony (2.8+)',
                    'MySQL'
                ]
            },
            {
                key: 'dealersites',
                startDate: new Date(2020, 3),
                endDate: new Date(2020, 6),
                location: 'Colombo, Paraná (Remoto)',
                title: 'Desenvolvedor Backend',
                company: 'DealerSites',
                companyUrl: 'https://dealersites.com.br/',
                description: [
                    'Fiz correções no sistema existente, baseado em Symfony',
                    'Desenvolvi o conceito inicial do sistema de Feirão Online'
                ]
            },
            {
                key: 'digitalhub',
                startDate: new Date(2019, 4),
                endDate: new Date(2020, 0),
                location: 'Curitiba, Paraná',
                title: 'Desenvolvedor Backend/Magento 2',
                company: 'DigitalHub',
                companyUrl: 'https://www.digitalhub.com.br/',
                description: [
                    'Fiz correções nos módulos já existentes para Magento 2',
                    'Desenvolvi módulos de integração com transportadoras para obter o valor de frete para os produtos',
                    'Desenvolvi um hotsite para um dos clientes, com landing page e painel administrativo desenvolvidos em Symfony 4',
                    'Fiz uma reescrita na lógica de uma página de checkout que precisava de correções']
            },
            {
                key: 'crediok',
                startDate: new Date(2018, 4),
                endDate: new Date(2019, 2),
                location: 'Curitiba, Paraná',
                title: 'Analista de Suporte',
                company: 'CrediOK',
                companyUrl: 'https://crediok.com.br/',
                description: [
                    'Fiz a reescrita da API de relatórios, migrando de Silex para Symfony',
                    'Fiz a reescrita do sistema de relatórios, migrando de CodeIgniter para Symfony',
                    'Comecei a desenvolver o sistema de chamado, baseado em Symfony e MongoDB',
                    'Prestava suporte técnico aos outros funcionários',
                    'Participei de um projeto de migração dos ramais de telefone da central analógica para a plataforma Nexcore'
                ]
            },
            {
                key: 'centralserver',
                startDate: new Date(2017, 1),
                endDate: new Date(2017, 3),
                location: 'Curitiba, Paraná',
                title: 'Administrador de sistemas',
                company: 'CentralServer',
                companyUrl: 'https://www.centralserver.com/br/',
                description: [
                    'Prestei suporte técnico receptivo via telefone aos clientes',
                    'Baseado nas demandas, verificava os arquivos dos clientes atrás de problemas ou potenciais invasões',
                    'Realizava análise dos registros de acessos atrás de atividades suspeitas'
                ]
            },
            {
                key: 'quality',
                startDate: new Date(2015, 5),
                endDate: new Date(2017, 0),
                location: 'Curitiba, Paraná',
                title: 'Suporte Técnico N2',
                company: 'Quality',
                companyUrl: 'https://quality.com.br/',
                description: [
                    'Prestei suporte aos usuários presencialmente, realizando manutenção de computadores e periféricos',
                    'Instalava leitores biométricos (digital) e de cartões magnéticos para os clientes',
                    'Fazia manutenção em computadores, trocando componentes conforme necessário e formatando com base em uma imagem pronta',
                ]
            },
            {
                key: 'novageracao',
                startDate: new Date(2014, 9),
                endDate: new Date(2015, 4),
                location: 'Curitiba, Paraná',
                title: 'Analista de TI Jr.',
                company: 'Dist. Nova Geração',
                companyUrl: 'https://www.distribuidoranovageracao.com.br/',
                description: [
                    'Prestei suporte técnico aos usuários internamente',
                    'Fazia a configuração dos celulares que os vendendores usavam, instalando o sistema da empresa'
                ]
            },
            {
                key: 'dombosco',
                startDate: new Date(2012, 9),
                endDate: new Date(2016, 5),
                location: 'Curitiba, Paraná',
                title: 'Monitor de informática',
                company: 'Colégio Dom Bosco',
                companyUrl: 'https://dombosco-colegio-batel-curitiba.escolaseb.com.br/pt/',
                description: [
                    'Fiz a monitoria do laboratório de informática da escola, gerenciando aproximadamente 30 computadores',
                    'Auxiliava os professores em sala com equipamentos de informática',
                    'Auxiliava os alunos com os equipamentos da escola, que eram fornecidos durante as aulas',
                ]
            }
        ],
        stack: {
            'Back-end': [
                "CodeIgniter",
                "Laravel",
                "PHP",
                "Python",
                "RabbitMQ",
                "Redis",
                "Symfony",
            ],
            'Front-end': [
                "Bootstrap",
                "CSS",
                "JavaScript",
                "Svelte",
                "Tailwind"
            ],
            'Sistemas e outros': [
                "Bash",
                "Linux",
                "Windows",
            ]
        }
    };
}
/*
{
    startDate: '',
    endDate: '',
    location: '',
    title: '',
    company: '',
    description: []
}
*/