/* This is a script to create a new post markdown file with front-matter */

import fs from "fs"
import path from "path"

function getDate() {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, "0")
  const day = String(today.getDate()).padStart(2, "0")

  return `${year}-${month}-${day}`
}

const args = process.argv.slice(2)

if (args.length === 0) {
  console.error(`Error: No filename argument provided
Usage: npm run new-post -- <filename>`)
  process.exit(1) // Terminate the script and return error code 1
}

let fileName = args[0]

// Add .md extension if not present
const fileExtensionRegex = /\.(md|mdx)$/i
if (!fileExtensionRegex.test(fileName)) {
  fileName += ".md"
}

const targetDir = "./src/content/posts/"
const fullPath = path.join(targetDir, fileName)

if (fs.existsSync(fullPath)) {
  console.error(`Error: File ${fullPath} already exists `)
  process.exit(1)
}

const content = `---
title: ${args[0]}
published: ${getDate()}
description: ''
image: ''
tags: []
category: ''
draft: false 
lang: ''
---
`

fs.writeFileSync(path.join(targetDir, fileName), content)

document.addEventListener('DOMContentLoaded', function () {
  // 檢查是否存在棋盤容器
  var container = document.getElementById('board-container');
  if (container) {
    initializeBoard(container);
  }
});

function initializeBoard(container) {
  // 初始化棋盤，這邊設定棋盤尺寸（可根據需求調整）
  var board = new WGo.Board(container, {
    width: 500,
    height: 500,
    // 其他設定參數，可參考 wgo.js 的文件
  });

  // 假設你將 SGF 檔案路徑透過 front matter 或自訂屬性儲存在 container 上
  var sgfPath = container.getAttribute('data-sgf');
  if (sgfPath) {
    fetch(sgfPath)
        .then(response => response.text())
        .then(sgfText => {
          try {
            // 使用 wgo.js 的 SGF 解析工具，根據版本不同可能有差異
            var game = new WGo.SGF.Game(sgfText);
            // 將棋譜加入棋盤，這邊的寫法需要參考你使用的 wgo.js 版本
            board.addObject(game.root);
          } catch (err) {
            console.error('SGF 解析失敗：', err);
          }
        })
        .catch(err => console.error('讀取 SGF 檔案失敗：', err));
  }
}


console.log(`Post ${fullPath} created`)
