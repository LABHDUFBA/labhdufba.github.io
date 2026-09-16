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

## Herramientas de SciELO

Proporciona herramientas para extraer, organizar y analizar artículos científicos de SciELO.br. ferramentas_scielo_v2 permite la extracción por área de conocimiento o revista, y ofrece opciones para obtener solo XML o XML y PDF. Incluye una herramienta para convertir XML a CSV.

{{< button label="Más información" link="https://labhdufba.github.io/ferramentas_scielo_v2/" style="solid" >}}

## Extractor de ANPEd

Un script para extraer de la web las actas de la Asociación Nacional de Estudios de Posgrado e Investigación en Educación, ANPEd. Extrae artículos en PDF de las 38.ª, 39.ª y 40.ª reuniones nacionales (2017, 2019 y 2021) para el Repositorio de Humanidades Digitales.

{{< button label="Más información" link="https://github.com/LABHDUFBA/anais_anped" style="solid" >}}

## Extractor de COMPÓS

Un script para extraer de la web las actas de la Asociación Nacional de Programas de Posgrado en Comunicación, COMPÓS. Extrae artículos en PDF de reuniones celebradas entre 2000 y 2020, y crea una base de datos con la edición de COMPÓS, autores, títulos y enlaces a los PDF.

{{< button label="Más información" link="https://github.com/LABHDUFBA/Anais-COMPOS-scraper" style="solid" >}}

## Extractor de resúmenes de ANPUH

Un extractor de resúmenes de los Simposios Nacionales de Historia de la Asociación Nacional de Historia, ANPUH. Extrae resúmenes de los simposios 27.º al 31.º (2013, 2015, 2017, 2019 y 2021).

{{< button label="Más información" link="https://github.com/LABHDUFBA/anpuh-scraper" style="solid" >}}

## Extractor de ANPUH

Un script para extraer de la web las actas de la Asociación Nacional de Historia, ANPUH. Extrae artículos en PDF de todos los Simposios Nacionales de ANPUH entre 1963 y 2017.

{{< button label="Más información" link="https://github.com/LABHDUFBA/Anais-Anpuh" style="solid" >}}

## pyHDB

Una herramienta para apoyar la investigación en la Hemeroteca Digital Brasileña de la Biblioteca Nacional. Ayuda a documentar y registrar las etapas de la investigación con precisión, garantizando rigor metodológico.

{{< button label="Más información" link="https://ericbrasiln.github.io/pyHDB/" style="solid" >}}

## Wiki de herramientas digitales

En 2018, el Laboratorio en Red de Humanidades Digitales del Instituto Brasileño de Información en Ciencia y Tecnología (IBICT) creó la primera versión de la wiki de herramientas digitales. El objetivo era servir como base de referencia y centro de información para la difusión del conocimiento en el entorno digital, dirigido a investigadores del campo de las Ciencias de la Información, interesados en el tema de las Humanidades Digitales, y de las humanidades en general en lengua portuguesa.

A partir de 2020, la Wiki Larhud cuenta con la colaboración del Laboratorio de Humanidades Digitales de la UFBA (LABHD-UFBA), y se convirtió en la wiki de tutoriales sobre herramientas de humanidades digitales de estos dos laboratorios.

La wiki está íntegramente en portugués e incluye un glosario y una lista de las herramientas más utilizadas para la investigación en humanidades digitales.

{{< button label="Más información" link="http://www.larhud.ibict.br/index.php?title=Página_principal" style="solid" >}}

<div class="upcoming-tools">
    <h3>En desarrollo</h3>
    <p>Estamos trabajando activamente en la creación y el perfeccionamiento de nuevas herramientas y funcionalidades. Manténgase al tanto de las novedades sobre los siguientes proyectos:</p>
    <div class="highlight-box">
        <p>Análisis de grupos de Telegram</p>
        <p>Análisis de grupos de WhatsApp</p>
    </div>
</div>
