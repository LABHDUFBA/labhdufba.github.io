---
title: "Outils"
meta_title: "Outils LABHD"
description: "Outils LABHD"
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

Outils et ressources développés par LABHD-UFBA pour la recherche en Humanités numériques : collecte de données, analyse de textes et plateformes de référence.

<div class="data-cards">

<a class="data-card" href="https://labhdufba.github.io/ferramentas_scielo_v2/" target="_blank" rel="noopener">
  <span class="data-card__tag">Collecte de données</span>
  <h3 class="data-card__title">Outils Scielo</h3>
  <p class="data-card__desc">Collecte, organisation et analyse d’articles scientifiques de Scielo.br. Collecte par domaine de connaissance ou revue, avec XML et PDF. Comprend un convertisseur XML→CSV.</p>
  <span class="data-card__arrow">En savoir plus →</span>
</a>

<a class="data-card" href="https://github.com/LABHDUFBA/anais_anped" target="_blank" rel="noopener">
  <span class="data-card__tag">Collecte de données</span>
  <h3 class="data-card__title">Extracteur Anped</h3>
  <p class="data-card__desc">Collecte des actes de l’ANPEd (Association nationale des études supérieures et de la recherche en éducation). Articles en PDF des 38e, 39e et 40e réunions (2017, 2019, 2021).</p>
  <span class="data-card__arrow">En savoir plus →</span>
</a>

<a class="data-card" href="https://github.com/LABHDUFBA/Anais-COMPOS-scraper" target="_blank" rel="noopener">
  <span class="data-card__tag">Collecte de données</span>
  <h3 class="data-card__title">Extracteur COMPOS</h3>
  <p class="data-card__desc">Collecte des actes de COMPÓS (Association nationale des programmes de troisième cycle en communication). Articles en PDF de 2000 à 2020 avec leurs métadonnées complètes.</p>
  <span class="data-card__arrow">En savoir plus →</span>
</a>

<a class="data-card" href="https://github.com/LABHDUFBA/anpuh-scraper" target="_blank" rel="noopener">
  <span class="data-card__tag">Collecte de données</span>
  <h3 class="data-card__title">Extracteur Anpuh</h3>
  <p class="data-card__desc">Extracteur des résumés des Symposia nationaux d’histoire de l’ANPUH. Résumés des 27e à 31e symposiums (2013–2021).</p>
  <span class="data-card__arrow">En savoir plus →</span>
</a>

<a class="data-card" href="https://github.com/LABHDUFBA/Anais-Anpuh" target="_blank" rel="noopener">
  <span class="data-card__tag">Collecte de données</span>
  <h3 class="data-card__title">Anais Anpuh</h3>
  <p class="data-card__desc">Collecte de l’intégralité des actes de l’ANPUH. Articles en PDF de tous les Symposia nationaux, de 1963 à 2017.</p>
  <span class="data-card__arrow">En savoir plus →</span>
</a>

<a class="data-card" href="https://ericbrasiln.github.io/pyHDB/" target="_blank" rel="noopener">
  <span class="data-card__tag">Recherche</span>
  <h3 class="data-card__title">pyHDB</h3>
  <p class="data-card__desc">Outil pour la recherche dans la Bibliothèque numérique des journaux brésiliens de la BNB. Il documente et enregistre les étapes de la recherche avec une précision méthodologique.</p>
  <span class="data-card__arrow">En savoir plus →</span>
</a>

<a class="data-card" href="https://archivesmap.org" target="_blank" rel="noopener">
  <span class="data-card__tag">Référence</span>
  <h3 class="data-card__title">Carte mondiale des archives</h3>
  <p class="data-card__desc">Plateforme géospatiale collaborative destinée au catalogage des institutions archivistiques publiques à travers le monde. Près de 1 000 institutions sont enregistrées.</p>
  <span class="data-card__arrow">En savoir plus →</span>
</a>

</div>

<div class="upcoming-tools">
    <h3>En cours de développement</h3>
    <p>Nous travaillons activement à la création et à l’amélioration de nouveaux outils et fonctionnalités. Restez à l’écoute des mises à jour sur les projets suivants :</p>
    <div class="highlight-box">
        <p>Analyse de groupes Telegram</p>
        <p>Analyse de groupes WhatsApp</p>
    </div>
</div>
