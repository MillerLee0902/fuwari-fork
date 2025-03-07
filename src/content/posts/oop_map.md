---
title: map
published: 2025-03-07
tags: [ Markdown, Blogging]
category: "object-oriented program"
draft: false

---
# map  

---
## **介紹**
map 在 C++ 的標準函示庫( STL )， 他的容器類型是關聯式容器，那甚麼是關聯式容器呢，我們先來了解一下關聯式容器與循序式容器的差別吧
---
## 循序式容器 sequence container  
### 特色  
線性排列(記憶體連續)  
搜尋元素是以position來搜尋  
搜尋順序從頭開始，例如找index 2的value，會從index 1, index 2才能找到value  
---
## 關聯式容器 associative container  
### 特色  
每組資料已pair(key, value)來存放  
樹狀結構 hash table 來放key and value  
不需要一個一個找資料，可以用key來找value 
有 map, set, multimap, multiset  

```cpp
#include <vector>
#include <iostream>

using namespce std;

int main() {
    vector<int> v1;
    vector<int> v2 = {2, 3, 4};

    return 0;
}
```
##*how to operate the vector*
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<char> v = {'a', 'b', 'c'};
      // Inserting 'z' at the back
      v.push_back('z'); // 'a', 'b', 'c', 'z'
  
      // Inserting 'c' at index 1
      v.insert(v.begin() + 1, 'c'); // 'a', 'b', 'c', 'z'
        
      // Inserting 'q' at index 1, and push the element back for 1 space
      v.emplace(v.begin() + 1, 'q'); // 'a', 'b', 'q', 'c', 'z'
      
      // Inserting 'r' in the end
      v.push_back('r'); // 'a', 'b', 'q', 'c', 'z', 'r'
      
      // vector output method 
      for (int i : v)
        cout << i << " "; // 'a', 'b', 'q', 'c', 'z', 'r'
        
      // vector search method "at()"
      try {
        // 使用 at() 訪問元素
        cout << "Element at index 2: " << v.at(2) << endl;  // 'q'
        
        // 使用 at() 訪問越界元素
        cout << "Element at index 10: " << v.at(10) << endl;  // throw an error std::out_of_range
      } catch (const out_of_range& e) {
        // 捕獲範圍錯誤
        cout << "Error: " << e.what() << endl;
      }

      // vector delect the least element
      v.push_back() // 'a', 'b', 'q', 'c', 'z'
      
      // declare 二階矩陣
      vector<vector<int> v; // default
      vector<vector<int> > matrix(3, vector<int>(3)); // declare a 2 demisional [[0,0,0], [0,0,0], [0,0,0]]
 
    return 0;
}
```