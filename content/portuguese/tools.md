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

## Ferramentas Scielo

Fornece ferramentas para raspagem, organização e análise de artigos científicos do Scielo.br. O ferramentas_scielo_v2 permite a raspagem por área do conhecimento ou periódico, oferecendo opções para XML somente ou XML e PDFs. Inclui uma ferramenta para converter XMLs para CSV.

{{< button label="Saiba Mais" link="https://labhdufba.github.io/ferramentas_scielo_v2/" style="solid" >}}

## Anped Scraper

Um script para raspagem dos anais da Associação Nacional de Pós-Graduação e Pesquisa em Educação - Anped. Faz a raspagem dos artigos em PDF dos 38º, 39º e 40º encontros nacionais (2017, 2019, 2021) para o Repositório de Humanidades Digitais.

{{< button label="Saiba Mais" link="https://github.com/LABHDUFBA/anais_anped" style="solid" >}}


## COMPOS Scraper

Um script para raspagem dos anais da Associação Nacional dos Programas de Pós-Graduação em Comunicação - COMPÓS. Faz a raspagem dos artigos em PDF dos encontros entre 2000 e 2020, criando um banco de dados com a edição do COMPÓS, autores, títulos e links para os PDFs.

{{< button label="Saiba Mais" link="https://github.com/LABHDUFBA/Anais-COMPOS-scraper" style="solid" >}}

## Anpuh abstracts Scraper

Um raspador de resumos dos Simpósios Nacionais de História da Associação Nacional de História - Anpuh. Faz a raspagem dos resumos dos 27º ao 31º simpósios (2013, 2015, 2017, 2019, 2021).

{{< button label="Saiba Mais" link="https://github.com/LABHDUFBA/anpuh-scraper" style="solid" >}}

## Anpuh Scraper

Um script para raspagem dos anais da Associação Nacional de História - Anpuh. Faz a raspagem dos artigos em PDF de todos os Simpósios Nacionais da Anpuh de 1963 a 2017.

{{< button label="Saiba Mais" link="https://github.com/LABHDUFBA/Anais-Anpuh" style="solid" >}}

## pyHDB

Uma ferramenta para auxiliar a pesquisa na Biblioteca Digital de Jornais Brasileiros da Biblioteca Nacional. Ajuda a documentar e registrar etapas da pesquisa com precisão, garantindo rigor metodológico.

{{< button label="Saiba Mais" link="https://ericbrasiln.github.io/pyHDB/" style="solid" >}}

## Wiki de Ferramentas Digitais

Em 2018, o Laboratório em Rede de Humanidades Digitais do Instituto Brasileiro de Informação em Ciência e Tecnologia (IBICT) criou a primeira versão da wiki de ferramentas digitais. O objetivo era servir como uma base de referência e um hub de informações para a disseminação de conhecimento no ambiente digital voltado para pesquisadores da área de Ciência da Informação (interessados no tema das Humanidades Digitais) e humanidades em geral na língua portuguesa.

A partir de 2020, a Wiki do Larhud agora conta com a parceria do Laboratório de Humanidades Digitais da UFBA (LABHD-UFBA), tornando-se a Wiki de tutoriais para ferramentas de humanidades digitais desses dois laboratórios!

A wiki está inteiramente em português, com um glossário e uma lista das ferramentas mais comumente usadas para pesquisa em humanidades digitais.

{{< button label="Saiba Mais" link="http://www.larhud.ibict.br/index.php?title=Página_principal" style="solid" >}}

<div class="upcoming-tools">
    <h3>Em Desenvolvimento</h3>
    <p>Estamos ativamente trabalhando em criar e refinar novas ferramentas e funcionalidades. Fique atento para atualizações nos seguintes projetos:</p>
    <div class="highlight-box">
        <p>Análise de Grupos do Telegram (em desenvolvimento)</p>
        <p>Análise de Grupos do Whatsapp (em desenvolvimento)</p>
    </div>
</div>