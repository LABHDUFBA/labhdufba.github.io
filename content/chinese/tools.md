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

LABHD-UFBA 为数字人文研究开发的工具与资源，包括数据抓取、文本分析和参考平台。

<div class="data-cards">

<a class="data-card" href="https://labhdufba.github.io/ferramentas_scielo_v2/" target="_blank" rel="noopener">
  <span class="data-card__tag">抓取</span>
  <h3 class="data-card__title">Scielo 工具</h3>
  <p class="data-card__desc">对来自 Scielo.br 的科学论文进行抓取、整理和分析。可按知识领域或期刊抓取，并提供 XML 和 PDF 文件。包含 XML→CSV 转换器。</p>
  <span class="data-card__arrow">了解更多 →</span>
</a>

<a class="data-card" href="https://github.com/LABHDUFBA/anais_anped" target="_blank" rel="noopener">
  <span class="data-card__tag">抓取</span>
  <h3 class="data-card__title">Anped 抓取器</h3>
  <p class="data-card__desc">抓取 ANPEd（全国教育研究生教育与研究协会）的会议论文集。包括第 38、39 和 40 届会议（2017、2019、2021 年）的 PDF 论文。</p>
  <span class="data-card__arrow">了解更多 →</span>
</a>

<a class="data-card" href="https://github.com/LABHDUFBA/Anais-COMPOS-scraper" target="_blank" rel="noopener">
  <span class="data-card__tag">抓取</span>
  <h3 class="data-card__title">COMPOS 抓取器</h3>
  <p class="data-card__desc">抓取 COMPÓS（全国传播学研究生项目协会）的会议论文集。包括 2000 年至 2020 年的 PDF 论文及完整元数据。</p>
  <span class="data-card__arrow">了解更多 →</span>
</a>

<a class="data-card" href="https://github.com/LABHDUFBA/anpuh-scraper" target="_blank" rel="noopener">
  <span class="data-card__tag">抓取</span>
  <h3 class="data-card__title">Anpuh 抓取器</h3>
  <p class="data-card__desc">用于抓取 ANPUH 全国历史学研讨会摘要的工具。包括第 27 至 31 届研讨会（2013–2021 年）的摘要。</p>
  <span class="data-card__arrow">了解更多 →</span>
</a>

<a class="data-card" href="https://github.com/LABHDUFBA/Anais-Anpuh" target="_blank" rel="noopener">
  <span class="data-card__tag">抓取</span>
  <h3 class="data-card__title">Anais Anpuh</h3>
  <p class="data-card__desc">抓取 ANPUH 的完整会议论文集，包括 1963 年至 2017 年历届全国研讨会的 PDF 论文。</p>
  <span class="data-card__arrow">了解更多 →</span>
</a>

<a class="data-card" href="https://ericbrasiln.github.io/pyHDB/" target="_blank" rel="noopener">
  <span class="data-card__tag">研究</span>
  <h3 class="data-card__title">pyHDB</h3>
  <p class="data-card__desc">用于在 BNB 巴西数字报纸图书馆开展研究的工具。以方法论的精确性记录研究阶段与过程。</p>
  <span class="data-card__arrow">了解更多 →</span>
</a>

<a class="data-card" href="https://archivesmap.org" target="_blank" rel="noopener">
  <span class="data-card__tag">参考</span>
  <h3 class="data-card__title">世界档案地图</h3>
  <p class="data-card__desc">用于编目全球公共档案机构的协作地理空间平台。已登记近 1,000 家机构。</p>
  <span class="data-card__arrow">了解更多 →</span>
</a>

</div>

<div class="upcoming-tools">
    <h3>开发中</h3>
    <p>我们正在积极创建和完善新的工具与功能。敬请关注以下项目的更新：</p>
    <div class="highlight-box">
        <p>Telegram 群组分析</p>
        <p>WhatsApp 群组分析</p>
    </div>
</div>