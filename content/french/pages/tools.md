---
title: "Outils"
meta_title: "Outils du LABHD"
description: "Outils du LABHD"
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
    .btn {
        display: inline-block;
        padding: 8px 12px;
        margin: 5px 0;
        background-color: black;
        color: white;
        text-decoration: none;
        border-radius: 7px;
        font-family: Arial, sans-serif;
        font-size: 14px;
    }
    .btn:hover {
        background-color: #858585;
    }
    .upcoming-tools {
        padding: 20px;
        margin-top: 20px;
        border: 1px solid #444;
        background-color: #1a1a1a;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    .upcoming-tools h3 {
        font-family: Arial, sans-serif;
        color: #f9f9f9;
        margin-bottom: 15px;
    }
    .upcoming-tools p {
        font-family: Arial, sans-serif;
        color: #cccccc;
        margin-bottom: 20px;
    }
    .highlight-box {
        background-color: #2a2a2a;
        padding: 15px;
        border-radius: 10px;
        font-family: Arial, sans-serif;
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
{{< toc >}}

## Outils SciELO

Propose des outils permettant d’extraire, d’organiser et d’analyser des articles scientifiques de Scielo.br. Le logiciel ferramentas_scielo_v2 permet l’extraction par domaine de connaissance ou par revue, avec des options pour récupérer uniquement les fichiers XML ou les fichiers XML et PDF. Il comprend également un outil de conversion des fichiers XML en CSV.

{{< button label="En savoir plus" link="https://labhdufba.github.io/ferramentas_scielo_v2/" style="solid" >}}

## Extracteur Anped

Un script d’extraction automatisée des actes de l’Association nationale des études et de la recherche de troisième cycle en éducation, Anped. Il récupère les articles au format PDF des 38e, 39e et 40e réunions nationales (2017, 2019 et 2021) pour le dépôt des humanités numériques.

{{< button label="En savoir plus" link="https://github.com/LABHDUFBA/anais_anped" style="solid" >}}

## Extracteur COMPOS

Un script d’extraction automatisée des actes de l’Association nationale des programmes d’études supérieures en communication, COMPÓS. Il récupère les articles au format PDF des réunions organisées entre 2000 et 2020 et crée une base de données comprenant l’édition de COMPÓS, les auteurs, les titres et les liens vers les PDF.

{{< button label="En savoir plus" link="https://github.com/LABHDUFBA/Anais-COMPOS-scraper" style="solid" >}}

## Extracteur de résumés Anpuh

Un extracteur de résumés des symposiums nationaux d’histoire de l’Association nationale d’histoire, Anpuh. Il récupère les résumés des 27e au 31e symposiums (2013, 2015, 2017, 2019 et 2021).

{{< button label="En savoir plus" link="https://github.com/LABHDUFBA/anpuh-scraper" style="solid" >}}

## Extracteur Anpuh

Un script d’extraction automatisée des actes de l’Association nationale d’histoire, Anpuh. Il récupère les articles au format PDF de tous les symposiums nationaux de l’Anpuh, de 1963 à 2017.

{{< button label="En savoir plus" link="https://github.com/LABHDUFBA/Anais-Anpuh" style="solid" >}}

## pyHDB

Un outil d’aide à la recherche dans l’Hémérothèque numérique brésilienne de la Bibliothèque nationale. Il permet de documenter et d’enregistrer avec précision les étapes de la recherche, afin d’en garantir la rigueur méthodologique.

{{< button label="En savoir plus" link="https://ericbrasiln.github.io/pyHDB/" style="solid" >}}

## Wiki des outils numériques

En 2018, le Laboratoire en réseau des humanités numériques de l’Institut brésilien de l’information en science et technologie (IBICT) a créé la première version du wiki des outils numériques. Son objectif était de servir de base de référence et de carrefour d’information pour la diffusion de connaissances dans l’environnement numérique, à destination des chercheurs en sciences de l’information intéressés par les humanités numériques et, plus largement, des chercheurs en sciences humaines lusophones.

À partir de 2020, le Wiki Larhud s’est associé au Laboratoire d’humanités numériques de l’UFBA (LABHD-UFBA), devenant le wiki de tutoriels sur les outils des humanités numériques de ces deux laboratoires.

Le wiki est entièrement en portugais et propose un glossaire ainsi qu’une liste des outils les plus couramment utilisés pour la recherche en humanités numériques.

{{< button label="En savoir plus" link="http://www.larhud.ibict.br/index.php?title=Página_principal" style="solid" >}}

<div class="upcoming-tools">
    <h3>En cours de développement</h3>
    <p>Nous travaillons activement à la création et à l’amélioration de nouveaux outils et de nouvelles fonctionnalités. Suivez les actualités des projets suivants :</p>
    <div class="highlight-box">
        <p>Analyse de groupes Telegram</p>
        <p>Analyse de groupes WhatsApp</p>
    </div>
</div>
