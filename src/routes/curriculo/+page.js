import Bash from "$lib/icons/bash.svelte";
import Bootstrap from "$lib/icons/bootstrap.svelte";
import CodeIgniter from "$lib/icons/codeigniter.svelte";
import CSS from "$lib/icons/css.svelte";
import JavaScript from "$lib/icons/javascript.svelte";
import Laravel from "$lib/icons/laravel.svelte";
import Linux from "$lib/icons/linux.svelte";
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
        education: [
            {
                dataInicial: '2013',
                dataFinal: '2016',
                localizacao: 'Curitiba, Paraná',
                cargo: 'Gestão em TI',
                empresa: 'Faculdade Dom Bosco',
                descricao: [
                    "Formação focada em dispositivos móveis pela Faculdade Dom Bosco, concluída em 2016.",
                    "Conteúdos abrangidos: desenvolvimento para dispositivos móveis Android e iOS, bancos de dados MySQL, programação em Java, PHP e HTML."
                ]
            }
        ],
        jobs: [
            {
                dataInicial: '12/2020',
                dataFinal: '06/2022',
                localizacao: 'Pinhais, Paraná',
                cargo: 'Desenvolvedor Backend Pleno',
                empresa: 'PROCOB',
                descricao: [
                    'Atuei no desenvolvimento do sistema interno da empresa, atualizando as APIs usadas pelos sistemas que os clientes tem acesso, efetuando correções e o desenvolvimento de novas integrações e funcionalidades.',
                    'Fui responsável pelo gerenciamento de alguns servidores, incluindo servidores de filas (RabbitMQ), desenvolvimento, homologação, produção e de repositório (GitLab CE), desenvolvimento de crawlers (webscraping), filas de mensagens e aplicações CLI para gerenciá-las.',
                    'Tecnologias utilizadas:',
                    [
                        'Linux (Ubuntu)',
                        'PHP (5.6+)',
                        'Python',
                        'CI/CD (GitLab)',
                        'RabbitMQ',
                        'Symfony (2.8+)',
                        'MySQL'
                    ]
                ]
            },
            {
                dataInicial: '04/2020',
                dataFinal: '07/2020',
                localizacao: 'Curitiba, Paraná',
                cargo: 'Desenvolvedor Backend',
                empresa: 'DealerSites',
                descricao: [
                    "Atuei no desenvolvimento da plataforma da empresa refatorando códigos antigos, adicionando novas funcionalidades e migrando funcionalidades existentes entre versões da plataforma utilizando Laravel e Symfony como frameworks.",
                ]
            },
            {
                dataInicial: '05/2019',
                dataFinal: '01/2020',
                localizacao: 'Curitiba, Paraná',
                cargo: 'Desenvolvedor Backend/Magento 2',
                empresa: 'DigitalHub',
                descricao: [
                    "Atuei desenvolvendo junto a clientes soluções customizadas para o Magento 2, criando módulos novos, prestando manutenção aos existentes e encontrando soluções que atendessem as suas necessidades.",
                ]
            },
            {
                dataInicial: '05/2018',
                dataFinal: '03/2019',
                localizacao: 'Curitiba, Paraná',
                cargo: 'Analista de Suporte',
                empresa: 'CrediOK Serviços Financeiros',
                descricao: [
                    "Além de prestar suporte aos usuários da empresa, participei ativamente do desenvolvimento de sistemas novos para atender as necessidades internas e externas, bem como presto manutenção aos sistemas existentes, atualizando suas funcionalidades de acordo com as tecnologias mais recentes.",
                ]
            },
            {
                dataInicial: '02/2017',
                dataFinal: '04/2017',
                localizacao: 'Curitiba, Paraná',
                cargo: 'Administrador de sistemas',
                empresa: 'CentralServer',
                descricao: [
                    "Prestava suporte técnico aos clientes da empresa via telefone de forma receptiva, onde os orientava em relação a um projeto de migração de servidores, também atuando na manutenção dos sistemas de hospedagem dos mesmos, utilizando ferramentas de acesso remoto via SSH, realizando a conferência e validação de registros de acesso, permissões de acesso a arquivos, pastas e bancos de dados MySQL e controle de filas de e-mail.",
                ]
            },
            {
                dataInicial: "06/2015",
                dataFinal: "01/2017",
                localizacao: "Curitiba, Paraná",
                cargo: "Suporte Técnico N2",
                empresa: "PremierIT",
                descricao: [
                    "Efetuava o suporte aos usuários em campo, recebendo as solicitações de atendimento encaminhadas pelo nível 1 através de um sistema interno da empresa, atendendo uma média de 6 clientes por dia.",
                    "Atuava na manutenção de computadores e periféricos, realizando a troca de discos rígidos, memórias, teclados, mouses, leitores biométricos e de cartões magnéticos. Também realizava formatação de computadores utilizando imagens pré-configuradas, criação e restauração de backups, instalação de programas e sistemas, configuração de impressoras de rede, troca de toners e manutenção de notebooks.",
                ]
            },
            {
                dataInicial: "10/2014",
                dataFinal: "05/2015",
                localizacao: "Curitiba, Paraná",
                cargo: "Analista de TI Jr.",
                empresa: "Distribuidora Nova Geração",
                descricao: [
                    "Prestava suporte técnico aos funcionários da empresa, atuando na manutenção dos computadores, realizando atualizações de hardware quando necessário, instalando softwares, configurando aplicativos de e-mail e do sistema da empresa.",
                    "Também configurava os celulares dos vendedores com o sistema da empresa, além de criar e gerenciar os usuários no servidor da empresa.",
                ]
            },
            {
                dataInicial: "10/2012",
                dataFinal: "06/2014",
                localizacao: "Curitiba, Paraná",
                cargo: "Monitor de informática",
                empresa: "Colégio Dom Bosco",
                descricao: [
                    "Realizava a monitoria de um laboratório de informática com aproximadamente 30 computadores, mantendo-os em funcionamento para o uso dos alunos realizando manutenção corretiva e preventiva conforme necessário. Também prestava suporte aos funcionários, realizando instalação e manutenção de impressoras locais e de rede, e aos professores em sala de aula, auxiliando com os computadores e projetores, além dos netbooks que o colégio fornecia aos alunos, também atuando na configuração e manutenção dos aparelhos nos períodos entre as aulas, realizando formatação via imagem pré-configurada.",
                ]
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
/*
{
    dataInicial: '',
    dataFinal: '',
    localizacao: '',
    cargo: '',
    empresa: '',
    descricao: []
}
*/