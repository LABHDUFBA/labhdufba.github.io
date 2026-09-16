---
title: "Herramientas"
meta_title: "Herramientas de LABHD"
description: "Herramientas de LABHD"
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

Herramientas y recursos desarrollados por LABHD-UFBA para la investigación en Humanidades Digitales: extracción de datos, análisis de texto y plataformas de referencia.

<div class="data-cards">

<a class="data-card" href="https://labhdufba.github.io/ferramentas_scielo_v2/" target="_blank" rel="noopener">
  <span class="data-card__tag">Extracción de datos</span>
  <h3 class="data-card__title">Herramientas Scielo</h3>
  <p class="data-card__desc">Extracción, organización y análisis de artículos científicos de Scielo.br. Extrae por área de conocimiento o revista, con XML y PDF. Incluye convertidor de XML a CSV.</p>
  <span class="data-card__arrow">Más información →</span>
</a>

<a class="data-card" href="https://github.com/LABHDUFBA/anais_anped" target="_blank" rel="noopener">
  <span class="data-card__tag">Extracción de datos</span>
  <h3 class="data-card__title">Extractor ANPEd</h3>
  <p class="data-card__desc">Extracción de actas de ANPEd (Asociación Nacional de Estudios de Posgrado e Investigación en Educación). Artículos en PDF de las 38.ª, 39.ª y 40.ª reuniones (2017, 2019 y 2021).</p>
  <span class="data-card__arrow">Más información →</span>
</a>

<a class="data-card" href="https://github.com/LABHDUFBA/Anais-COMPOS-scraper" target="_blank" rel="noopener">
  <span class="data-card__tag">Extracción de datos</span>
  <h3 class="data-card__title">Extractor COMPÓS</h3>
  <p class="data-card__desc">Extracción de actas de COMPÓS (Asociación Nacional de Programas de Posgrado en Comunicación). Artículos en PDF de 2000 a 2020 con metadatos completos.</p>
  <span class="data-card__arrow">Más información →</span>
</a>

<a class="data-card" href="https://github.com/LABHDUFBA/anpuh-scraper" target="_blank" rel="noopener">
  <span class="data-card__tag">Extracción de datos</span>
  <h3 class="data-card__title">Extractor ANPUH</h3>
  <p class="data-card__desc">Extractor de resúmenes de los Simposios Nacionales de Historia de ANPUH. Resúmenes de los simposios 27.º al 31.º (2013–2021).</p>
  <span class="data-card__arrow">Más información →</span>
</a>

<a class="data-card" href="https://github.com/LABHDUFBA/Anais-Anpuh" target="_blank" rel="noopener">
  <span class="data-card__tag">Extracción de datos</span>
  <h3 class="data-card__title">Actas de ANPUH</h3>
  <p class="data-card__desc">Extracción de actas completas de ANPUH. Artículos en PDF de todos los Simposios Nacionales de 1963 a 2017.</p>
  <span class="data-card__arrow">Más información →</span>
</a>

<a class="data-card" href="https://ericbrasiln.github.io/pyHDB/" target="_blank" rel="noopener">
  <span class="data-card__tag">Investigación</span>
  <h3 class="data-card__title">pyHDB</h3>
  <p class="data-card__desc">Herramienta para la investigación en la Hemeroteca Digital Brasileña de la BNB. Documenta y registra las etapas de investigación con precisión metodológica.</p>
  <span class="data-card__arrow">Más información →</span>
</a>

<a class="data-card" href="https://archivesmap.org" target="_blank" rel="noopener">
  <span class="data-card__tag">Referencia</span>
  <h3 class="data-card__title">Mapa Mundial de Archivos</h3>
  <p class="data-card__desc">Plataforma geoespacial colaborativa para catalogar instituciones archivísticas públicas de todo el mundo. Casi 1.000 instituciones registradas.</p>
  <span class="data-card__arrow">Más información →</span>
</a>

</div>

<div class="upcoming-tools">
    <h3>En desarrollo</h3>
    <p>Trabajamos activamente en la creación y el perfeccionamiento de nuevas herramientas y funcionalidades. Mantente al tanto de las novedades sobre los siguientes proyectos:</p>
    <div class="highlight-box">
        <p>Análisis de grupos de Telegram</p>
        <p>Análisis de grupos de WhatsApp</p>
    </div>
</div>
