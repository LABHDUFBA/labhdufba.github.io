---
title: "工具"
meta_title: "LABHD 工具"
description: "LABHD 工具"
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

## Scielo 工具

提供用于抓取、整理和分析 Scielo.br 科学论文的工具。ferramentas_scielo_v2 支持按知识领域或期刊抓取，并提供仅获取 XML 或同时获取 XML 与 PDF 的选项，还包括将 XML 转换为 CSV 的工具。

{{< button label="Learn More" link="https://labhdufba.github.io/ferramentas_scielo_v2/" style="solid" >}}

## Anped 抓取工具

用于抓取全国研究生教育与研究协会（Anped）会议论文集的网页抓取脚本。它为数字人文资料库抓取第 38、39 和 40 届全国会议（2017、2019、2021 年）的 PDF 论文。

{{< button label="Learn More" link="https://github.com/LABHDUFBA/anais_anped" style="solid" >}}

## COMPÓS 抓取工具

用于抓取全国传播学研究生项目协会（COMPÓS）会议论文集的网页抓取脚本。它抓取 2000 至 2020 年会议的 PDF 论文，并创建包含 COMPÓS 届次、作者、标题和 PDF 链接的数据库。

{{< button label="Learn More" link="https://github.com/LABHDUFBA/Anais-COMPOS-scraper" style="solid" >}}

## Anpuh 摘要抓取工具

用于抓取全国历史协会（Anpuh）全国历史研讨会摘要的工具。它抓取第 27 至 31 届研讨会（2013、2015、2017、2019、2021 年）的摘要。

{{< button label="Learn More" link="https://github.com/LABHDUFBA/anpuh-scraper" style="solid" >}}

## Anpuh 抓取工具

用于抓取全国历史协会（Anpuh）会议论文集的网页抓取脚本。它抓取 1963 至 2017 年 Anpuh 全部全国研讨会的 PDF 论文。

{{< button label="Learn More" link="https://github.com/LABHDUFBA/Anais-Anpuh" style="solid" >}}

## pyHDB

一款辅助巴西国家图书馆巴西数字报刊馆研究的工具。它有助于精确记录研究阶段，确保方法论严谨性。

{{< button label="Learn More" link="https://ericbrasiln.github.io/pyHDB/" style="solid" >}}

## 数字工具维基

2018 年，巴西科学技术信息研究所（IBICT）的网络化数字人文实验室创建了首个数字工具维基版本。其目标是面向信息科学领域的研究人员（尤其是对数字人文议题感兴趣者）以及广义人文学科的葡语研究者，作为数字环境中知识传播的参考平台与信息枢纽。

自 2020 年起，Larhud Wiki 与巴伊亚联邦大学数字人文实验室（LABHD-UFBA）建立合作，成为这两个实验室共同维护的数字人文工具教程维基。

该维基完全使用葡萄牙语，包含术语表以及数字人文研究中最常用工具的清单。

{{< button label="Learn More" link="http://www.larhud.ibict.br/index.php?title=Página_principal" style="solid" >}}

<div class="upcoming-tools">
    <h3>开发中</h3>
    <p>我们正在积极开发和完善新的工具与功能。以下项目的更新，敬请关注：</p>
    <div class="highlight-box">
        <p>Telegram 群组分析</p>
        <p>Whatsapp 群组分析</p>
    </div>
</div>
