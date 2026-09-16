---
title: "Tools"
meta_title: "LABHD Tools"
description: "LABHD Tools"
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
        box-shadow: 0 6px 20px rgba(37, 99, 235, 0.18);
        border-color: #2563eb;
        text-decoration: none !important;
    }
    .data-card__tag {
        display: inline-block;
        font-size: .72rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: .06em;
        color: #2563eb;
        background: rgba(37, 99, 235, 0.08);
        border: 1px solid rgba(37, 99, 235, 0.2);
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
        color: #2563eb;
    }

    /* Dark mode */
    @media (prefers-color-scheme: dark) {
        .data-card {
            background: #1a1a2e;
            border-color: #333348;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }
        .data-card:hover {
            box-shadow: 0 6px 20px rgba(96, 165, 250, 0.2);
            border-color: #60a5fa;
        }
        .data-card__tag {
            color: #60a5fa;
            background: rgba(96, 165, 250, 0.1);
            border-color: rgba(96, 165, 250, 0.25);
        }
        .data-card__arrow {
            color: #60a5fa;
        }
    }

    .data-cards { grid-template-columns: 1fr; }
    @media (min-width: 640px) {
        .data-cards { grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); }
    }

    /* === Under development === */
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

Tools and resources developed by LABHD-UFBA for Digital Humanities research: data scraping, text analysis, and reference platforms.

<div class="data-cards">

<a class="data-card" href="https://labhdufba.github.io/ferramentas_scielo_v2/" target="_blank" rel="noopener">
  <span class="data-card__tag">Scraping</span>
  <h3 class="data-card__title">Scielo Tools</h3>
  <p class="data-card__desc">Scraping, organizing, and analyzing scientific articles from Scielo.br. Scrape by knowledge area or journal, with XML and PDFs. Includes XML→CSV converter.</p>
  <span class="data-card__arrow">Learn more →</span>
</a>

<a class="data-card" href="https://github.com/LABHDUFBA/anais_anped" target="_blank" rel="noopener">
  <span class="data-card__tag">Scraping</span>
  <h3 class="data-card__title">Anped Scraper</h3>
  <p class="data-card__desc">Scraping proceedings from ANPEd (National Association of Graduate Studies and Research in Education). PDF papers from the 38th, 39th, and 40th meetings (2017, 2019, 2021).</p>
  <span class="data-card__arrow">Learn more →</span>
</a>

<a class="data-card" href="https://github.com/LABHDUFBA/Anais-COMPOS-scraper" target="_blank" rel="noopener">
  <span class="data-card__tag">Scraping</span>
  <h3 class="data-card__title">COMPOS Scraper</h3>
  <p class="data-card__desc">Scraping proceedings from COMPÓS (National Association of Graduate Programs in Communication). PDF papers from 2000 to 2020 with full metadata.</p>
  <span class="data-card__arrow">Learn more →</span>
</a>

<a class="data-card" href="https://github.com/LABHDUFBA/anpuh-scraper" target="_blank" rel="noopener">
  <span class="data-card__tag">Scraping</span>
  <h3 class="data-card__title">Anpuh Scraper</h3>
  <p class="data-card__desc">Scraper for abstracts from the National History Symposia of ANPUH. Abstracts from the 27th to 31st symposia (2013–2021).</p>
  <span class="data-card__arrow">Learn more →</span>
</a>

<a class="data-card" href="https://github.com/LABHDUFBA/Anais-Anpuh" target="_blank" rel="noopener">
  <span class="data-card__tag">Scraping</span>
  <h3 class="data-card__title">Anais Anpuh</h3>
  <p class="data-card__desc">Scraping full proceedings from ANPUH. PDF papers from all National Symposia from 1963 to 2017.</p>
  <span class="data-card__arrow">Learn more →</span>
</a>

<a class="data-card" href="https://ericbrasiln.github.io/pyHDB/" target="_blank" rel="noopener">
  <span class="data-card__tag">Research</span>
  <h3 class="data-card__title">pyHDB</h3>
  <p class="data-card__desc">Tool for research in the Brazilian Digital Newspapers Library at BNB. Documents and records research stages with methodological precision.</p>
  <span class="data-card__arrow">Learn more →</span>
</a>

<a class="data-card" href="http://www.larhud.ibict.br/index.php?title=Página_principal" target="_blank" rel="noopener">
  <span class="data-card__tag">Reference</span>
  <h3 class="data-card__title">Digital Tools Wiki</h3>
  <p class="data-card__desc">Collaborative wiki by LABHD/IBICT with tutorials and a glossary of Digital Humanities tools in Portuguese.</p>
  <span class="data-card__arrow">Learn more →</span>
</a>

<a class="data-card" href="https://archivesmap.org" target="_blank" rel="noopener">
  <span class="data-card__tag">Reference</span>
  <h3 class="data-card__title">Archives World Map</h3>
  <p class="data-card__desc">Collaborative geospatial platform for cataloging public archival institutions worldwide. Nearly 1,000 institutions registered.</p>
  <span class="data-card__arrow">Learn more →</span>
</a>

</div>

<div class="upcoming-tools">
    <h3>Under development</h3>
    <p>We are actively working on creating and refining new tools and features. Stay tuned for updates on the following projects:</p>
    <div class="highlight-box">
        <p>Telegram Group Analysis</p>
        <p>Whatsapp Group Analysis</p>
    </div>
</div>