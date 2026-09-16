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

## Scielo tools

Provides tools for scraping, organizing, and analyzing scientific articles from Scielo.br. The ferramentas_scielo_v2 allows scraping by knowledge area or journal, offering options for XML only or XML and PDFs. Includes a tool to convert XMLs to CSV.

{{< button label="Learn More" link="https://labhdufba.github.io/ferramentas_scielo_v2/" style="solid" >}}

## Anped Scraper

A script for web scraping the proceedings of the National Association of Graduate Studies and Research in Education - Anped. It scrapes PDF papers from the 38th, 39th, and 40th national meetings (2017, 2019, 2021) for the Digital Humanities Repository.

{{< button label="Learn More" link="https://github.com/LABHDUFBA/anais_anped" style="solid" >}}

## COMPOS Scraper

A script for web scraping the proceedings of the National Association of Graduate Programs in Communication - COMPÓS. It scrapes PDF papers from meetings between 2000 and 2020, creating a database with COMPÓS edition, authors, titles, and PDF links.

{{< button label="Learn More" link="https://github.com/LABHDUFBA/Anais-COMPOS-scraper" style="solid" >}}

## Anpuh abstracts Scraper

A scraper for abstracts from the National History Symposia of the National Association of History - Anpuh. It scrapes abstracts from the 27th to the 31st symposia (2013, 2015, 2017, 2019, 2021).

{{< button label="Learn More" link="https://github.com/LABHDUFBA/anpuh-scraper" style="solid" >}}

## Anpuh Scraper

A script for web scraping the proceedings of the National Association of History - Anpuh. It scrapes PDF papers from all National Symposia of Anpuh from 1963 to 2017.

{{< button label="Learn More" link="https://github.com/LABHDUFBA/Anais-Anpuh" style="solid" >}}

## pyHDB

A tool for aiding research in the Brazilian Digital Newspapers Library of the National Library. It helps document and record research stages precisely, ensuring methodological rigor.

{{< button label="Learn More" link="https://ericbrasiln.github.io/pyHDB/" style="solid" >}}

## Digital Tools Wiki

In 2018, the Networked Laboratory of Digital Humanities at the Brazilian Institute of Information in Science and Technology (IBICT) created the first version of the digital tools wiki. The goal was to serve as a reference base and information hub for the dissemination of knowledge in the digital environment aimed at researchers in the field of Information Science (interested in the topic of Digital Humanities) and humanities in general in the Portuguese language.

Starting from 2020, the Larhud Wiki now has the partnership of the Digital Humanities Laboratory at UFBA (LABHD-UFBA), becoming the Wiki of tutorials for digital humanities tools from these two laboratories!

The wiki is entirely in Portuguese, with a glossary and a list of the most commonly used tools for research in digital humanities.

{{< button label="Learn More" link="http://www.larhud.ibict.br/index.php?title=Página_principal" style="solid" >}}

<div class="upcoming-tools">
    <h3>Under development</h3>
    <p>We are actively working on creating and refining new tools and features. Stay tuned for updates on the following projects:</p>
    <div class="highlight-box">
        <p>Telegram Group Analysis</p>
        <p>Whatsapp Group Analysis</p>
    </div>
</div>
