---
title: "元素"
# meta title
meta_title: ""
# meta description
description: "这是元描述"
# save as draft
draft: false
---

{{< toc >}}

以下展示标题的示例。您可按照下列 Markdown 规则使用标题：例如，使用 `#` 表示一级标题，使用 `######` 表示六级标题。

# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

<hr>

### 强调

强调，即斜体，可使用 _asterisks_ 或 _underscores_。

强强调，即粗体，可使用 **asterisks** 或 **underscores**。

组合强调可使用 **asterisks 和 _underscores_**。

删除线使用两个波浪号。~~删除此内容。~~

<hr>

### 按钮

{{< button label="Button" link="/" style="solid" >}}

<hr>

### 链接

[我是一个内嵌式链接](https://www.google.com)

[我是一个带标题的内嵌式链接](https://www.google.com "Google's Homepage")

[我是一个参考式链接][Arbitrary case-insensitive reference text]

[我是一个指向仓库文件的相对引用](../blob/master/LICENSE)

[可使用数字定义参考式链接][1]

也可以留空并使用 [链接文本本身][link text itself]。

URL 及尖括号中的 URL 将自动转换为链接。
<http://www.example.com> 或 <http://www.example.com>，有时也包括
example.com（但在 Github 上并非如此）。

以下文字用于说明参考链接可以在后文定义。

[arbitrary case-insensitive reference text]: https://www.themefisher.com
[1]: https://gethugothemes.com
[link text itself]: https://www.getjekyllthemes.com

<hr>

### 段落

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus, facilis placeat pariatur! Voluptatem, sed harum pariatur adipisci voluptates voluptatum cumque, porro sint minima similique magni perferendis fuga! Optio vel ipsum excepturi tempore reiciendis id quidem? Vel in, doloribus debitis nesciunt fugit sequi magnam accusantium modi neque quis, vitae velit, pariatur harum autem a! Velit impedit atque maiores animi possimus asperiores natus repellendus excepturi sint architecto eligendi non, omnis nihil. Facilis, doloremque illum. Fugit optio laborum minus debitis natus illo perspiciatis corporis voluptatum rerum laboriosam.

<hr>

### 有序列表

1. 列表项
2. 列表项
3. 列表项
4. 列表项
5. 列表项

<hr>

### 无序列表

- 列表项
- 列表项
- 列表项
- 列表项
- 列表项

<hr>

### 提示信息

{{< notice "note" >}}
这是一条简要说明。
{{< /notice >}}

{{< notice "tip" >}}
这是一条简要提示。
{{< /notice >}}

{{< notice "info" >}}
这是一条简要信息。
{{< /notice >}}

{{< notice "warning" >}}
这是一条简要警告。
{{< /notice >}}

<hr>

### 选项卡

{{< tabs >}}
{{< tab "Tab 1" >}}

#### 您好，我是一个选项卡

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

{{< /tab >}}

{{< tab "Tab 2" >}}

#### 我想谈谈那次刺杀未遂事件

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

{{< /tab >}}

{{< tab "Tab 3" >}}

#### 我们知道你在交易被盗矿石

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo

{{< /tab >}}
{{< /tabs >}}

<hr>

### 折叠面板

{{< accordion "Why should you need to do this?" >}}

- Lorem ipsum dolor sit amet consectetur adipisicing elit.
- Lorem ipsum dolor sit amet consectetur adipisicing elit.
- Lorem ipsum dolor sit amet consectetur

{{< /accordion >}}

{{< accordion "How can I adjust Horizontal centering" >}}

- Lorem ipsum dolor sit amet consectetur adipisicing elit.
- Lorem ipsum dolor sit amet consectetur adipisicing elit.
- Lorem ipsum dolor sit amet consectetur

{{< /accordion >}}

{{< accordion "Should you use Negative margin?" >}}

- Lorem ipsum dolor sit amet consectetur adipisicing elit.
- Lorem ipsum dolor sit amet consectetur adipisicing elit.
- Lorem ipsum dolor sit amet consectetur

{{< /accordion >}}

<hr>

### 代码与语法高亮

这是一个 `Inline code` 示例。

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

<hr>

### 引用块

> 您到这里是为了某件具体事情，还是仅仅为了泛泛地抨击 Riker？当您加速至最高曲速时，曾在瞬间同时出现在两个地点。

<hr>

### 表格

| 表格        |      很      |  酷 |
| ------------- | :-----------: | ----: |
| 第 3 列      | 右对齐 | $1600 |
| 第 2 列      |   居中    |   $12 |
| 斑马纹 |   整齐    |    $1 |

<hr>

### 图像

{{< image src="images/image-placeholder.png" caption="" alt="alter-text" height="" width="" position="center" command="fill" option="q100" class="img-fluid" title="image title"  webp="false" >}}

<hr>

### 图库

{{< gallery dir="images/gallery" class="" height="400" width="400" webp="true" command="Fit" option="" zoomable="true" >}}

<hr>

### 幻灯片

{{< slider dir="images/gallery" class="max-w-[600px] ml-0" height="400" width="400" webp="true" command="Fit" option="" zoomable="true" >}}

<hr>

### YouTube 视频

{{< youtube ResipmZmpDU >}}

<hr>

### 自定义视频

{{< video src="https://www.w3schools.com/html/mov_bbb.mp4" width="100%" height="auto" autoplay="false" loop="false" muted="false" controls="true" class="rounded-lg" >}}
