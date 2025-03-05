---
title: Declare two-dimensional array
published: 2025-03-04
tags: [ Markdown, Blogging, Demo ]
category: "object-oriented program"
draft: false

---

# How to declare two-dimensional array

***pointer***
declaration

```cpp
---
[type]** [name];
int** arr; // example
---
```

how to malloc the memory

```cpp
---
int long = 10, int width = 9;
arr = new int*[long];
for (int i = 0; i < long; i ++){
    
}


```

*vector*  
vector 優點在於不需要事先宣告記憶體大小，並且支持使用中括號[]搜尋(與array相同)，缺點是內部操作銷率差


initialize vector

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