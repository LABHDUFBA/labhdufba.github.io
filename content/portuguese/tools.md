---
title: "Ferramentas"
meta_title: "Ferramentas LABHD"
description: "Ferramentas LABHD"
draft: false
---
<style>
    :target::before {
        content: "";
        display: block;
        height: 120px;
        margin-top: -120px;
        visibility: hidden;
    }

    /* === Card grid === */
    .data-cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1.2rem;
        margin: 1.5rem 0 2rem;
    }
    .data-card {
        display: flex;
        flex-direction: column;
        background: var(--card-bg, #f8f9fa);
        border: 1px solid var(--card-border, #dee2e6);
        border-radius: 10px;
        padding: 1.3rem 1.4rem;
        text-decoration: none !important;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
        transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
    }
    .data-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 20px rgba(22, 163, 74, 0.18);
        border-color: #16a34a;
        text-decoration: none !important;
    }
    .data-card__tag {
        display: inline-block;
        font-size: .72rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: .06em;
        color: #16a34a;
        background: rgba(22, 163, 74, 0.08);
        border: 1px solid rgba(22, 163, 74, 0.2);
        border-radius: 999px;
        padding: .15rem .6rem;
        margin-bottom: .7rem;
        align-self: flex-start;
    }
    .data-card__title {
        font-size: 1.05rem;
        font-weight: 700;
        margin: 0 0 .5rem;
        line-height: 1.3;
        color: inherit;
    }
    .data-card__desc {
        font-size: .88rem;
        opacity: .75;
        line-height: 1.6;
        margin: 0;
        flex-grow: 1;
    }
    .data-card__arrow {
        margin-top: .8rem;
        font-size: .85rem;
        font-weight: 600;
        color: #16a34a;
    }

    /* Dark mode */
    @media (prefers-color-scheme: dark) {
        .data-card {
            background: #1a1a2e;
            border-color: #333348;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }
        .data-card:hover {
            box-shadow: 0 6px 20px rgba(74, 222, 128, 0.2);
            border-color: #4ade80;
        }
        .data-card__tag {
            color: #4ade80;
            background: rgba(74, 222, 128, 0.1);
            border-color: rgba(74, 222, 128, 0.25);
        }
        .data-card__arrow {
            color: #4ade80;
        }
    }

    .data-cards { grid-template-columns: 1fr; }
    @media (min-width: 640px) {
        .data-cards { grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); }
    }

    /* === Em desenvolvimento === */
    .upcoming-tools {
        padding: 20px;
        margin-top: 20px;
        border: 1px solid #444;
        background-color: #1a1a1a;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    .upcoming-tools h3 {
        color: #f9f9f9;
        margin-bottom: 15px;
    }
    .upcoming-tools p {
        color: #cccccc;
        margin-bottom: 20px;
    }
    .highlight-box {
        background-color: #2a2a2a;
        padding: 15px;
        border-radius: 10px;
        color: #cccccc;
    }
    .highlight-box p {
        margin: 0;
    }
    @media (prefers-color-scheme: dark) {
        .highlight-box {
            background-color: #333333;
            color: #f9f9f9;
        }
        .upcoming-tools {
            background-color: #1a1a1a;
            border: 1px solid #444444;
        }
        .upcoming-tools h3, .upcoming-tools p {
            color: #f9f9f9;
        }
    }
</style>

Ferramentas e recursos desenvolvidos pelo LABHD-UFBA para pesquisa em Humanidades Digitais: raspagem de dados, análise de textos, e plataformas de referência.

<div class="data-cards">

<a class="data-card" href="https://labhdufba.github.io/ferramentas_scielo_v2/" target="_blank" rel="noopener">
  <span class="data-card__tag">Raspagem</span>
  <h3 class="data-card__title">Ferramentas Scielo</h3>
  <p class="data-card__desc">Raspagem, organização e análise de artigos científicos do Scielo.br. Raspa por área do conhecimento ou periódico, com XML e PDFs. Inclui conversor XML→CSV.</p>
  <span class="data-card__arrow">Saiba mais →</span>
</a>

<a class="data-card" href="https://github.com/LABHDUFBA/anais_anped" target="_blank" rel="noopener">
  <span class="data-card__tag">Raspagem</span>
  <h3 class="data-card__title">Anped Scraper</h3>
  <p class="data-card__desc">Raspagem dos anais da ANPEd (Associação Nacional de Pós-Graduação e Pesquisa em Educação). Artigos em PDF dos 38º, 39º e 40º encontros (2017, 2019, 2021).</p>
  <span class="data-card__arrow">Saiba mais →</span>
</a>

<a class="data-card" href="https://github.com/LABHDUFBA/Anais-COMPOS-scraper" target="_blank" rel="noopener">
  <span class="data-card__tag">Raspagem</span>
  <h3 class="data-card__title">COMPOS Scraper</h3>
  <p class="data-card__desc">Raspagem dos anais da COMPÓS (Associação Nacional dos Programas de Pós-Graduação em Comunicação). Artigos em PDF de 2000 a 2020 com metadados completos.</p>
  <span class="data-card__arrow">Saiba mais →</span>
</a>

<a class="data-card" href="https://github.com/LABHDUFBA/anpuh-scraper" target="_blank" rel="noopener">
  <span class="data-card__tag">Raspagem</span>
  <h3 class="data-card__title">Anpuh Scraper</h3>
  <p class="data-card__desc">Raspador de resumos dos Simpósios Nacionais de História da ANPUH. Resumos do 27º ao 31º simpósios (2013–2021).</p>
  <span class="data-card__arrow">Saiba mais →</span>
</a>

<a class="data-card" href="https://github.com/LABHDUFBA/Anais-Anpuh" target="_blank" rel="noopener">
  <span class="data-card__tag">Raspagem</span>
  <h3 class="data-card__title">Anais Anpuh</h3>
  <p class="data-card__desc">Raspagem dos anais completos da ANPUH. Artigos em PDF de todos os Simpósios Nacionais de 1963 a 2017.</p>
  <span class="data-card__arrow">Saiba mais →</span>
</a>

<a class="data-card" href="https://ericbrasiln.github.io/pyHDB/" target="_blank" rel="noopener">
  <span class="data-card__tag">Pesquisa</span>
  <h3 class="data-card__title">pyHDB</h3>
  <p class="data-card__desc">Ferramenta para pesquisa na Biblioteca Digital de Jornais Brasileiros da BNB. Documenta e registra etapas da pesquisa com precisão metodológica.</p>
  <span class="data-card__arrow">Saiba mais →</span>
</a>

<a class="data-card" href="https://archivesmap.org" target="_blank" rel="noopener">
  <span class="data-card__tag">Referência</span>
  <h3 class="data-card__title">Archives World Map</h3>
  <p class="data-card__desc">Plataforma colaborativa geoespacial para catalogar instituições arquivísticas públicas no mundo. Quase 1.000 instituições cadastradas.</p>
  <span class="data-card__arrow">Saiba mais →</span>
</a>

</div>

<div class="upcoming-tools">
    <h3>Em Desenvolvimento</h3>
    <p>Estamos ativamente trabalhando em criar e refinar novas ferramentas e funcionalidades. Fique atento para atualizações nos seguintes projetos:</p>
    <div class="highlight-box">
        <p>Análise de Grupos do Telegram (em desenvolvimento)</p>
        <p>Análise de Grupos do Whatsapp (em desenvolvimento)</p>
    </div>
</div>