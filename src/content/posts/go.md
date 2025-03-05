---
title: "定石"
published: 2025-03-05
tags: [Markdown, Blogging, go]
category: go
draft: false
---

# 小馬步掛角連扳定石

This article is currently in a draft state and is not published. Therefore, it will not be visible to the general audience. The content is still a work in progress and may require further editing and review.

When the article is ready for publication, you can update the "draft" field to "false" in the Frontmatter:

### 星位定石

markdown

### 小目定石
<!-- WGo.js 核心程式 -->
<script src="https://wgo.waltheri.net/wgo.min.js"></script>

<!-- WGo.js 播放器 -->
<script src="https://wgo.waltheri.net/wgo.player.min.js"></script>

<!-- 播放器的樣式 -->
<link href="https://wgo.waltheri.net/wgo.player.css" rel="stylesheet">

<div id="board" style="width:400px; height:400px;"></div>

<script>
  var board = new WGo.Board(document.getElementById("board"), {
    width: 400,
    height: 400
  });

  board.addObject({
    x: 3,
    y: 3,
    c: WGo.B
  });

  board.addObject({
    x: 4,
    y: 4,
    c: WGo.W
  });
</script>
<div id="board" style="width:400px; height:400px;"></div>

<script>
  var board = new WGo.Board(document.getElementById("board"), {
    width: 400,
    height: 400
  });

  board.addObject({ x: 3, y: 3, c: WGo.B }); // 黑子
  board.addObject({ x: 4, y: 4, c: WGo.W }); // 白子
</script>


pnpm dev run code from local
shift shift search something from project
ctrl shift r reflash website