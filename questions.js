/**
 * CUET PG Data Structures Master Question Bank (220 Questions)
 * Formatted for Zero-CORS offline browsing and Netlify hosting.
 */
window.CUET_QUESTIONS = [
  {
    "id": 1,
    "unitId": 1,
    "unitTitle": "Unit 1: Introduction to Data Structures & Algorithm Analysis (Q1 - Q18)",
    "text": "Which of the following is a non-linear data structure?",
    "options": [
      {
        "key": "A",
        "text": "Stack"
      },
      {
        "key": "B",
        "text": "Queue"
      },
      {
        "key": "C",
        "text": "Tree"
      },
      {
        "key": "D",
        "text": "Array"
      }
    ],
    "correct": "C",
    "difficulty": "Easy",
    "explanation": "Tree aur Graph non-linear data structures hote hain kyunki inme data elements sequential order mein nahi balki hierarchical ya interconnected network relation mein hote hain. Stack, Queue, aur Array linear structures hain.",
    "trap": "Kayi students Linked List ko non-linear samajh lete hain kyunki usme pointers hote hain. Yaad rakhein Linked List linear hai!"
  },
  {
    "id": 2,
    "unitId": 1,
    "unitTitle": "Unit 1: Introduction to Data Structures & Algorithm Analysis (Q1 - Q18)",
    "text": "An Abstract Data Type (ADT) defines:",
    "options": [
      {
        "key": "A",
        "text": "How data is stored in hardware"
      },
      {
        "key": "B",
        "text": "What operations are performed, but not how they are implemented"
      },
      {
        "key": "C",
        "text": "Only the memory allocation algorithm"
      },
      {
        "key": "D",
        "text": "The exact C++ syntax for the data structure"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "ADT ek mathematical model hota hai jo sirf yeh specify karta hai ki data structure par \"KYA\" operations kiye ja sakte hain (jaise PUSH, POP), lekin yeh nahi batata ki implementation array se hoga ya linked list se.",
    "trap": "ADT implementation-independent hota hai."
  },
  {
    "id": 3,
    "unitId": 1,
    "unitTitle": "Unit 1: Introduction to Data Structures & Algorithm Analysis (Q1 - Q18)",
    "text": "Which asymptotic notation represents the strict upper bound of a function?",
    "options": [
      {
        "key": "A",
        "text": "Big-O (O)"
      },
      {
        "key": "B",
        "text": "Little-o (o)"
      },
      {
        "key": "C",
        "text": "Big-Omega (Omega)"
      },
      {
        "key": "D",
        "text": "Big-Theta (Theta)"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "Big-O represents upper bound (<=), jabki Little-o represents STRICT upper bound (<). Yani Little-o mein function kabhi bhi bound ke asymptotically equal nahi ho sakta.",
    "trap": "Big-O equality allow karta hai (f(n) = O(f(n))), lekin Little-o strict inequality chahta hai."
  },
  {
    "id": 4,
    "unitId": 1,
    "unitTitle": "Unit 1: Introduction to Data Structures & Algorithm Analysis (Q1 - Q18)",
    "text": "Arrange the following functions in increasing order of growth rate:\nf1(n) = 2^n, f2(n) = n^(3/2), f3(n) = n log n, f4(n) = n!",
    "options": [
      {
        "key": "A",
        "text": "f3 < f2 < f1 < f4"
      },
      {
        "key": "B",
        "text": "f2 < f3 < f1 < f4"
      },
      {
        "key": "C",
        "text": "f3 < f2 < f4 < f1"
      },
      {
        "key": "D",
        "text": "f2 < f3 < f4 < f1"
      }
    ],
    "correct": "A",
    "difficulty": "Medium",
    "explanation": "Growth rates: n log n (f3) < n^1.5 (f2) < 2^n (exponential, f1) < n! (factorial, f4). Isliye sahi sequence hai f3 < f2 < f1 < f4.",
    "trap": "Always remember: Exponential (2^n) grows much slower than Factorial (n!)."
  },
  {
    "id": 5,
    "unitId": 1,
    "unitTitle": "Unit 1: Introduction to Data Structures & Algorithm Analysis (Q1 - Q18)",
    "text": "What is the time complexity of the following code snippet?\nint count = 0;\nfor (int i = 1; i <= n; i *= 2)\n    count++;",
    "options": [
      {
        "key": "A",
        "text": "O(n)"
      },
      {
        "key": "B",
        "text": "O(n^2)"
      },
      {
        "key": "C",
        "text": "O(log n)"
      },
      {
        "key": "D",
        "text": "O(sqrt(n))"
      }
    ],
    "correct": "C",
    "difficulty": "Easy",
    "explanation": "Loop variable i har iteration mein 2 se multiply ho raha hai (1, 2, 4, 8, ..., 2^k). Jab 2^k >= n hoga, loop terminate ho jayega. Therefore, k = log2(n), so time complexity is O(log n).",
    "trap": "Agar i++ hota toh O(n) hota, lekin yahan i *= 2 hai jo logarithmic hota hai."
  },
  {
    "id": 6,
    "unitId": 1,
    "unitTitle": "Unit 1: Introduction to Data Structures & Algorithm Analysis (Q1 - Q18)",
    "text": "Visiting each element in a data structure exactly once is known as:",
    "options": [
      {
        "key": "A",
        "text": "Sorting"
      },
      {
        "key": "B",
        "text": "Traversing"
      },
      {
        "key": "C",
        "text": "Merging"
      },
      {
        "key": "D",
        "text": "Searching"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Traversing ka matlab hota hai data structure ke har element ko exactly ek baar access/process karna.",
    "trap": "Searching ka matlab kisi specific key ki location find karna hota hai, har element ko visit karna nahi."
  },
  {
    "id": 7,
    "unitId": 1,
    "unitTitle": "Unit 1: Introduction to Data Structures & Algorithm Analysis (Q1 - Q18)",
    "text": "Which of the following is a static data structure?",
    "options": [
      {
        "key": "A",
        "text": "Array"
      },
      {
        "key": "B",
        "text": "Singly Linked List"
      },
      {
        "key": "C",
        "text": "Dynamic Stack"
      },
      {
        "key": "D",
        "text": "Binary Search Tree"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "Array ek static data structure hai kyunki iska size compile time par fix ho jata hai aur runtime par change nahi ho sakta.",
    "trap": "Linked lists, trees aur dynamically allocated stacks runtime par grow karte hain."
  },
  {
    "id": 8,
    "unitId": 1,
    "unitTitle": "Unit 1: Introduction to Data Structures & Algorithm Analysis (Q1 - Q18)",
    "text": "If an algorithm takes 0.5 milliseconds for input size n = 100, and its complexity is O(n^2), how long will it take for n = 200?",
    "options": [
      {
        "key": "A",
        "text": "1.0 ms"
      },
      {
        "key": "B",
        "text": "2.0 ms"
      },
      {
        "key": "C",
        "text": "4.0 ms"
      },
      {
        "key": "D",
        "text": "8.0 ms"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "Time T(n) = c * n^2. Jab input size 100 se 200 hota hai (2 times double), toh time (2)^2 = 4 times badh jata hai. Therefore: 0.5 ms * 4 = 2.0 ms.",
    "trap": "Students often double the time (0.5 * 2 = 1.0) forgetting the quadratic n^2 square factor!"
  },
  {
    "id": 9,
    "unitId": 1,
    "unitTitle": "Unit 1: Introduction to Data Structures & Algorithm Analysis (Q1 - Q18)",
    "text": "The best case time complexity of an algorithm is mathematically represented by:",
    "options": [
      {
        "key": "A",
        "text": "O (Big-O)"
      },
      {
        "key": "B",
        "text": "Omega (Big-Omega)"
      },
      {
        "key": "C",
        "text": "Theta (Big-Theta)"
      },
      {
        "key": "D",
        "text": "o (Little-o)"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Big-Omega (Omega) lower bound ko denote karta hai, jo algorithm ke best-case time ko mathematically represent karta hai.",
    "trap": "Big-O upper bound (worst case) hota hai."
  },
  {
    "id": 10,
    "unitId": 1,
    "unitTitle": "Unit 1: Introduction to Data Structures & Algorithm Analysis (Q1 - Q18)",
    "text": "Which data structure is best suited to represent a hierarchical relationship among data items?",
    "options": [
      {
        "key": "A",
        "text": "Array"
      },
      {
        "key": "B",
        "text": "Stack"
      },
      {
        "key": "C",
        "text": "Tree"
      },
      {
        "key": "D",
        "text": "Queue"
      }
    ],
    "correct": "C",
    "difficulty": "Easy",
    "explanation": "Tree ek hierarchical data structure hai (jaise organization chart, family tree, folder system). Graphs network relationship represent karte hain.",
    "trap": "Graph is for general network relationships with cycles; Tree is strictly hierarchical and acyclic."
  },
  {
    "id": 11,
    "unitId": 1,
    "unitTitle": "Unit 1: Introduction to Data Structures & Algorithm Analysis (Q1 - Q18)",
    "text": "What is the time complexity of the following nested loop?\nfor (int i = 0; i < n; i++)\n    for (int j = 0; j < i; j++)\n        sum++;",
    "options": [
      {
        "key": "A",
        "text": "O(n)"
      },
      {
        "key": "B",
        "text": "O(n log n)"
      },
      {
        "key": "C",
        "text": "O(n^2)"
      },
      {
        "key": "D",
        "text": "O(n^3)"
      }
    ],
    "correct": "C",
    "difficulty": "Medium",
    "explanation": "Outer loop runs n times. Inner loop runs 0 + 1 + 2 + ... + (n-1) times = n(n-1)/2 times. Expanding gives (n^2 - n)/2 = O(n^2).",
    "trap": "Inner loop variable j depends on i; sum of first n integers is quadratic O(n^2)."
  },
  {
    "id": 12,
    "unitId": 1,
    "unitTitle": "Unit 1: Introduction to Data Structures & Algorithm Analysis (Q1 - Q18)",
    "text": "Which of the following statements about Big-Theta (Theta) notation is TRUE?",
    "options": [
      {
        "key": "A",
        "text": "f(n) = Theta(g(n)) iff f(n) = O(g(n)) and f(n) = Omega(g(n))"
      },
      {
        "key": "B",
        "text": "Big-Theta represents only worst case"
      },
      {
        "key": "C",
        "text": "Big-Theta represents only best case"
      },
      {
        "key": "D",
        "text": "Big-Theta is always linear"
      }
    ],
    "correct": "A",
    "difficulty": "Medium",
    "explanation": "Formal Theorem: f(n) = Theta(g(n)) agar aur sirf agar f(n) dono O(g(n)) [upper bound] aur Omega(g(n)) [lower bound] satisfy karta ho. Isse Tight Bound kehte hain.",
    "trap": "Theta is asymptotically tight, sandwiching the function between c1*g(n) and c2*g(n)."
  },
  {
    "id": 13,
    "unitId": 1,
    "unitTitle": "Unit 1: Introduction to Data Structures & Algorithm Analysis (Q1 - Q18)",
    "text": "What is the complexity of an algorithm that performs 3n^3 + 100n^2 + 5000n operations?",
    "options": [
      {
        "key": "A",
        "text": "O(n)"
      },
      {
        "key": "B",
        "text": "O(n^2)"
      },
      {
        "key": "C",
        "text": "O(n^3)"
      },
      {
        "key": "D",
        "text": "O(n!)"
      }
    ],
    "correct": "C",
    "difficulty": "Easy",
    "explanation": "Asymptotic analysis mein hum highest degree term (dominant term) ko rakhte hain aur constants drop karte hain. Yahan dominant term 3n^3 hai, so complexity is O(n^3).",
    "trap": "Low order terms like 100n^2 and large constant coefficients become negligible as n approaches infinity."
  },
  {
    "id": 14,
    "unitId": 1,
    "unitTitle": "Unit 1: Introduction to Data Structures & Algorithm Analysis (Q1 - Q18)",
    "text": "Which data structure allows both homogeneous and heterogeneous data representation depending on implementation?",
    "options": [
      {
        "key": "A",
        "text": "Array (Homogeneous) vs Structure/Record (Heterogeneous)"
      },
      {
        "key": "B",
        "text": "Stack vs Queue"
      },
      {
        "key": "C",
        "text": "Tree vs Graph"
      },
      {
        "key": "D",
        "text": "Singly vs Doubly list"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "Array strictly homogeneous (same data type) hota hai. Struct/Class heterogeneous (different data types) elements ko group karta hai.",
    "trap": "Arrays in C/C++ can never store mixed data types."
  },
  {
    "id": 15,
    "unitId": 1,
    "unitTitle": "Unit 1: Introduction to Data Structures & Algorithm Analysis (Q1 - Q18)",
    "text": "What is the time complexity of the following code?\nfor (int i = 1; i <= n; i++)\n    for (int j = 1; j <= n; j *= 2)\n        k++;",
    "options": [
      {
        "key": "A",
        "text": "O(n)"
      },
      {
        "key": "B",
        "text": "O(n log n)"
      },
      {
        "key": "C",
        "text": "O(n^2)"
      },
      {
        "key": "D",
        "text": "O(log n)"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "Outer loop runs n times. Inner loop doubles j every iteration, running log2(n) times. Total executions = n * log2(n) = O(n log n).",
    "trap": "Do not multiply to get O(n^2); the inner loop is logarithmic, not linear."
  },
  {
    "id": 16,
    "unitId": 1,
    "unitTitle": "Unit 1: Introduction to Data Structures & Algorithm Analysis (Q1 - Q18)",
    "text": "If f(n) = 100n and g(n) = n^2, which of the following is correct?",
    "options": [
      {
        "key": "A",
        "text": "f(n) = O(g(n))"
      },
      {
        "key": "B",
        "text": "g(n) = O(f(n))"
      },
      {
        "key": "C",
        "text": "f(n) = Theta(g(n))"
      },
      {
        "key": "D",
        "text": "f(n) = Omega(g(n))"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "Linear function 100n quadratic function n^2 se asymptotically bohot slow grow karta hai. For n > 100, 100n <= 1 * n^2. Therefore, f(n) = O(g(n)).",
    "trap": "The coefficient 100 does not matter for large n."
  },
  {
    "id": 17,
    "unitId": 1,
    "unitTitle": "Unit 1: Introduction to Data Structures & Algorithm Analysis (Q1 - Q18)",
    "text": "Space complexity of an algorithm considers:",
    "options": [
      {
        "key": "A",
        "text": "Only the input space"
      },
      {
        "key": "B",
        "text": "Fixed part (instruction space) + Variable part (dynamic memory & recursion stack)"
      },
      {
        "key": "C",
        "text": "Only the hard disk space"
      },
      {
        "key": "D",
        "text": "Only global variables"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Total Space = Fixed space (code size, constants) + Variable space (dynamically allocated memory, recursion stack, local variables).",
    "trap": "Recursion stack memory is an essential part of auxiliary space complexity."
  },
  {
    "id": 18,
    "unitId": 1,
    "unitTitle": "Unit 1: Introduction to Data Structures & Algorithm Analysis (Q1 - Q18)",
    "text": "Which asymptotic notation is symmetric (i.e., if f(n) is related to g(n), then g(n) is related to f(n))?",
    "options": [
      {
        "key": "A",
        "text": "Big-O"
      },
      {
        "key": "B",
        "text": "Big-Omega"
      },
      {
        "key": "C",
        "text": "Big-Theta (Theta)"
      },
      {
        "key": "D",
        "text": "Little-o"
      }
    ],
    "correct": "C",
    "difficulty": "Medium",
    "explanation": "Big-Theta is symmetric: f(n) = Theta(g(n)) if and only if g(n) = Theta(f(n)). Big-O and Big-Omega are transpose-symmetric, not symmetric.",
    "trap": "f(n) = O(g(n)) implies g(n) = Omega(f(n)), NOT g(n) = O(f(n))."
  },
  {
    "id": 19,
    "unitId": 2,
    "unitTitle": "Unit 2: Arrays & Memory Address Calculations (Q19 - Q36)",
    "text": "An array A[1..10, 1..15] is stored in Row-Major Order. If the base address is 1000 and each element occupies 2 bytes, what is the address of A[4][6]?",
    "options": [
      {
        "key": "A",
        "text": "1102"
      },
      {
        "key": "B",
        "text": "1100"
      },
      {
        "key": "C",
        "text": "1114"
      },
      {
        "key": "D",
        "text": "1110"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "Formula: Address = B + W * [(i - LB1) * C + (j - LB2)]. Yahan B = 1000, W = 2, LB1 = 1, LB2 = 1, Columns C = 15 - 1 + 1 = 15. For A[4][6]: i = 4, j = 6. Address = 1000 + 2 * [(4 - 1) * 15 + (6 - 1)] = 1000 + 2 * [3 * 15 + 5] = 1000 + 2 * [45 + 5] = 1000 + 2 * 50 = 1000 + 100 = 1100.",
    "trap": "Columns C = 15 use hoga, Rows R = 10 use nahi hoga!"
  },
  {
    "id": 20,
    "unitId": 2,
    "unitTitle": "Unit 2: Arrays & Memory Address Calculations (Q19 - Q36)",
    "text": "Given a 2D array A[1..10, 1..15] stored in Column-Major Order with base address 1000 and 2 bytes per element, what is the address of element A[4][6]?",
    "options": [
      {
        "key": "A",
        "text": "1106"
      },
      {
        "key": "B",
        "text": "1100"
      },
      {
        "key": "C",
        "text": "1104"
      },
      {
        "key": "D",
        "text": "1108"
      }
    ],
    "correct": "A",
    "difficulty": "Medium",
    "explanation": "Formula: Address = B + W * [(j - LB2) * R + (i - LB1)]. Yahan Rows R = 10 - 1 + 1 = 10. For A[4][6]: Address = 1000 + 2 * [(6 - 1) * 10 + (4 - 1)] = 1000 + 2 * [5 * 10 + 3] = 1000 + 2 * [53] = 1000 + 106 = 1106.",
    "trap": "In Column-Major order, multiply column offset by number of ROWS (R = 10)."
  },
  {
    "id": 21,
    "unitId": 2,
    "unitTitle": "Unit 2: Arrays & Memory Address Calculations (Q19 - Q36)",
    "text": "What is the number of elements in a 2D array defined as A[-3..5, 2..8]?",
    "options": [
      {
        "key": "A",
        "text": "54"
      },
      {
        "key": "B",
        "text": "63"
      },
      {
        "key": "C",
        "text": "48"
      },
      {
        "key": "D",
        "text": "56"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Rows = UB1 - LB1 + 1 = 5 - (-3) + 1 = 9. Columns = UB2 - LB2 + 1 = 8 - 2 + 1 = 7. Total elements = Rows * Columns = 9 * 7 = 63.",
    "trap": "Subtracting without adding 1 gives (8 * 6 = 48) which is incorrect!"
  },
  {
    "id": 22,
    "unitId": 2,
    "unitTitle": "Unit 2: Arrays & Memory Address Calculations (Q19 - Q36)",
    "text": "Which programming language stores 2D arrays in Column-Major Order by default?",
    "options": [
      {
        "key": "A",
        "text": "C"
      },
      {
        "key": "B",
        "text": "C++"
      },
      {
        "key": "C",
        "text": "FORTRAN"
      },
      {
        "key": "D",
        "text": "Java"
      }
    ],
    "correct": "C",
    "difficulty": "Easy",
    "explanation": "FORTRAN aur MATLAB column-major order use karte hain. C, C++, Python, aur Java row-major order use karte hain.",
    "trap": "Standard C family languages are strictly Row-Major."
  },
  {
    "id": 23,
    "unitId": 2,
    "unitTitle": "Unit 2: Arrays & Memory Address Calculations (Q19 - Q36)",
    "text": "What is the time complexity to insert an element at the beginning of an array of size n?",
    "options": [
      {
        "key": "A",
        "text": "O(1)"
      },
      {
        "key": "B",
        "text": "O(log n)"
      },
      {
        "key": "C",
        "text": "O(n)"
      },
      {
        "key": "D",
        "text": "O(n^2)"
      }
    ],
    "correct": "C",
    "difficulty": "Easy",
    "explanation": "Beginning par insert karne ke liye saare existing n elements ko ek-ek position right shift karna padta hai, isliye time complexity O(n) hoti hai.",
    "trap": "End par insert karna O(1) hota hai agar space available ho, lekin beginning par O(n) lagta hai."
  },
  {
    "id": 24,
    "unitId": 2,
    "unitTitle": "Unit 2: Arrays & Memory Address Calculations (Q19 - Q36)",
    "text": "Why does an array provide O(1) random access to its elements?",
    "options": [
      {
        "key": "A",
        "text": "Because elements are sorted"
      },
      {
        "key": "B",
        "text": "Because elements are stored in contiguous memory and have uniform size"
      },
      {
        "key": "C",
        "text": "Because it uses pointers"
      },
      {
        "key": "D",
        "text": "Because of hash functions"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Contiguous memory aur uniform data type hone ki wajah se index se direct memory address calculate ho jata hai: Base + i * W.",
    "trap": "Sorting se random access ka koi lena dena nahi hai."
  },
  {
    "id": 25,
    "unitId": 2,
    "unitTitle": "Unit 2: Arrays & Memory Address Calculations (Q19 - Q36)",
    "text": "A triangular matrix of size n x n has non-zero elements only on and below the main diagonal. How many elements need to be stored?",
    "options": [
      {
        "key": "A",
        "text": "n^2"
      },
      {
        "key": "B",
        "text": "n(n - 1) / 2"
      },
      {
        "key": "C",
        "text": "n(n + 1) / 2"
      },
      {
        "key": "D",
        "text": "2n - 1"
      }
    ],
    "correct": "C",
    "difficulty": "Medium",
    "explanation": "Row 1 has 1 element, Row 2 has 2 elements, ..., Row n has n elements. Total elements = 1 + 2 + ... + n = n(n + 1) / 2.",
    "trap": "Strictly lower triangular (excluding diagonal) has n(n-1)/2, but including diagonal has n(n+1)/2."
  },
  {
    "id": 26,
    "unitId": 2,
    "unitTitle": "Unit 2: Arrays & Memory Address Calculations (Q19 - Q36)",
    "text": "If an array is declared as `int arr[5] = {10, 20, 30};` in C, what is the value of `arr[4]`?",
    "options": [
      {
        "key": "A",
        "text": "Garbage value"
      },
      {
        "key": "B",
        "text": "0"
      },
      {
        "key": "C",
        "text": "30"
      },
      {
        "key": "D",
        "text": "Compilation error"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "C standard ke according, agar array partially initialize kiya jaye, toh remaining sabhi elements automatically 0 se initialize ho jaate hain.",
    "trap": "Agar bilkul initialize na karein tab garbage value hoti hai, partial initialization par 0 hota hai."
  },
  {
    "id": 27,
    "unitId": 2,
    "unitTitle": "Unit 2: Arrays & Memory Address Calculations (Q19 - Q36)",
    "text": "What is the time complexity of deleting an element from index i in an unsorted array if order does NOT need to be preserved?",
    "options": [
      {
        "key": "A",
        "text": "O(n)"
      },
      {
        "key": "B",
        "text": "O(log n)"
      },
      {
        "key": "C",
        "text": "O(1)"
      },
      {
        "key": "D",
        "text": "O(n log n)"
      }
    ],
    "correct": "C",
    "difficulty": "Difficult",
    "explanation": "Agar order preserve karna zaroori nahi hai, toh hum aakhiri element ko index i par copy karke array size ko 1 decrease kar sakte hain. Yeh constant time O(1) mein ho jata hai!",
    "trap": "Standard deletion with order preservation takes O(n) due to shifting, but without order preservation it is O(1)."
  },
  {
    "id": 28,
    "unitId": 2,
    "unitTitle": "Unit 2: Arrays & Memory Address Calculations (Q19 - Q36)",
    "text": "Given base address B = 500, element size W = 4, LB = -2. What is the address of element at index 3?",
    "options": [
      {
        "key": "A",
        "text": "512"
      },
      {
        "key": "B",
        "text": "520"
      },
      {
        "key": "C",
        "text": "508"
      },
      {
        "key": "D",
        "text": "516"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Formula: Loc(A[i]) = B + W * (i - LB) = 500 + 4 * (3 - (-2)) = 500 + 4 * (5) = 500 + 20 = 520.",
    "trap": "Be careful with negative lower bound: 3 - (-2) = 5, not 1."
  },
  {
    "id": 29,
    "unitId": 2,
    "unitTitle": "Unit 2: Arrays & Memory Address Calculations (Q19 - Q36)",
    "text": "What is a Sparse Matrix?",
    "options": [
      {
        "key": "A",
        "text": "A matrix with mostly non-zero elements"
      },
      {
        "key": "B",
        "text": "A matrix in which the majority of elements are zero"
      },
      {
        "key": "C",
        "text": "A matrix with only 1 row"
      },
      {
        "key": "D",
        "text": "A square matrix with determinant 0"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Sparse Matrix ek aisi matrix hoti hai jisme zero elements ki sankhya non-zero elements se bohot zyada hoti hai. Memory bachane ke liye isse 3-tuple format (Row, Col, Value) ya Linked List se represent karte hain.",
    "trap": "Dense matrix has mostly non-zero values; Sparse matrix has mostly zero values."
  },
  {
    "id": 30,
    "unitId": 2,
    "unitTitle": "Unit 2: Arrays & Memory Address Calculations (Q19 - Q36)",
    "text": "In 3-tuple representation of a sparse matrix, what do the three columns represent?",
    "options": [
      {
        "key": "A",
        "text": "Row index, Column index, Value of non-zero element"
      },
      {
        "key": "B",
        "text": "Base address, Offset, Length"
      },
      {
        "key": "C",
        "text": "Key, Left child, Right child"
      },
      {
        "key": "D",
        "text": "Row count, Column count, Total non-zero count"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "3-tuple array representation mein har row ek non-zero element ko store karti hai: (Row Index, Column Index, Value). First row store karti hai (Total Rows, Total Cols, Total Non-zeros).",
    "trap": "Header row stores dimensions, subsequent rows store individual non-zero entries."
  },
  {
    "id": 31,
    "unitId": 2,
    "unitTitle": "Unit 2: Arrays & Memory Address Calculations (Q19 - Q36)",
    "text": "An array A[0..5, 0..5] stores a tridiagonal matrix. How many non-zero diagonals does it contain, and what is the total number of non-zero elements?",
    "options": [
      {
        "key": "A",
        "text": "3 diagonals, 16 elements"
      },
      {
        "key": "B",
        "text": "3 diagonals, 18 elements"
      },
      {
        "key": "C",
        "text": "2 diagonals, 12 elements"
      },
      {
        "key": "D",
        "text": "1 diagonal, 6 elements"
      }
    ],
    "correct": "A",
    "difficulty": "Difficult",
    "explanation": "Tridiagonal matrix mein main diagonal, superdiagonal (above main), aur subdiagonal (below main) non-zero hote hain (total 3 diagonals). For size n = 6: Elements = n (main) + (n-1) (super) + (n-1) (sub) = 3n - 2 = 3(6) - 2 = 16 elements.",
    "trap": "Formula for tridiagonal non-zero elements is 3n - 2."
  },
  {
    "id": 32,
    "unitId": 2,
    "unitTitle": "Unit 2: Arrays & Memory Address Calculations (Q19 - Q36)",
    "text": "What is the minimum number of comparisons needed to find BOTH the maximum and minimum elements in an array of size n?",
    "options": [
      {
        "key": "A",
        "text": "2n - 2"
      },
      {
        "key": "B",
        "text": "ceil(3n / 2) - 2"
      },
      {
        "key": "C",
        "text": "n log n"
      },
      {
        "key": "D",
        "text": "n - 1"
      }
    ],
    "correct": "B",
    "difficulty": "Difficult",
    "explanation": "Elements ko pairs mein compare karke tournament method se: n is even -> 1.5n - 2 comparisons. Best algorithm takes ceil(3n/2) - 2 comparisons, which is strictly better than the naive 2n - 2.",
    "trap": "Naive linear search takes 2n - 2 comparisons. Tournament pair comparison takes 3n/2 - 2."
  },
  {
    "id": 33,
    "unitId": 2,
    "unitTitle": "Unit 2: Arrays & Memory Address Calculations (Q19 - Q36)",
    "text": "In a 3D array A[1..2, 1..3, 1..4] stored in Row-Major order with B = 100, W = 1 byte, what is the address of A[2][2][3]?",
    "options": [
      {
        "key": "A",
        "text": "118"
      },
      {
        "key": "B",
        "text": "119"
      },
      {
        "key": "C",
        "text": "120"
      },
      {
        "key": "D",
        "text": "117"
      }
    ],
    "correct": "A",
    "difficulty": "Difficult",
    "explanation": "Dimensions: D1 = 2, D2 = 3, D3 = 4. Index: i1=2, i2=2, i3=3. Offset = (i1-1)*(D2*D3) + (i2-1)*(D3) + (i3-1) = (2-1)*(3*4) + (2-1)*(4) + (3-1) = 1*12 + 1*4 + 2 = 18. Address = 100 + 1 * 18 = 118.",
    "trap": "In 3D Row-Major: multiply first index offset by product of remaining dimensions (D2 * D3)."
  },
  {
    "id": 34,
    "unitId": 2,
    "unitTitle": "Unit 2: Arrays & Memory Address Calculations (Q19 - Q36)",
    "text": "Which array operation takes O(1) time regardless of array size?",
    "options": [
      {
        "key": "A",
        "text": "Deleting by value"
      },
      {
        "key": "B",
        "text": "Accessing element by known index"
      },
      {
        "key": "C",
        "text": "Searching for an element in unsorted array"
      },
      {
        "key": "D",
        "text": "Inserting in sorted array"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Address computation Base + i * W takes constant CPU operations regardless of whether n is 10 or 10,000,000.",
    "trap": "Searching takes O(n), access by index takes O(1)."
  },
  {
    "id": 35,
    "unitId": 2,
    "unitTitle": "Unit 2: Arrays & Memory Address Calculations (Q19 - Q36)",
    "text": "What is the major disadvantage of using an array to implement dynamic data structures?",
    "options": [
      {
        "key": "A",
        "text": "Slow access time"
      },
      {
        "key": "B",
        "text": "Fixed memory size requiring expensive array resizing and memory copy"
      },
      {
        "key": "C",
        "text": "More pointer overhead"
      },
      {
        "key": "D",
        "text": "Lack of indexing"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Array ka size fixed hota hai. Jab array full ho jaye, toh naya bada array create karke saare elements copy karne padte hain (O(n) reallocation cost).",
    "trap": "Pointers are used in linked lists, not static arrays."
  },
  {
    "id": 36,
    "unitId": 2,
    "unitTitle": "Unit 2: Arrays & Memory Address Calculations (Q19 - Q36)",
    "text": "An array of pointers in C is useful because:",
    "options": [
      {
        "key": "A",
        "text": "It allows efficient handling of variable-length strings without wasting memory"
      },
      {
        "key": "B",
        "text": "It makes CPU faster"
      },
      {
        "key": "C",
        "text": "It converts arrays to trees"
      },
      {
        "key": "D",
        "text": "It eliminates base address"
      }
    ],
    "correct": "A",
    "difficulty": "Medium",
    "explanation": "Ragged arrays (array of pointers to char arrays) har string ke exact length ke barabar memory allocate karte hain, unlike 2D fixed char arrays jo rectangular padding waste karte hain.",
    "trap": "Array of pointers saves memory for jagged/ragged data structures."
  },
  {
    "id": 37,
    "unitId": 3,
    "unitTitle": "Unit 3: Stacks & Polish Notation Expressions (Q37 - Q54)",
    "text": "Which data structure is used by the compiler to manage function calls and local variables?",
    "options": [
      {
        "key": "A",
        "text": "Queue"
      },
      {
        "key": "B",
        "text": "Stack"
      },
      {
        "key": "C",
        "text": "Tree"
      },
      {
        "key": "D",
        "text": "Hash Table"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Function call stack (Call Stack / Runtime Stack) har function call ke Activation Record ko store karta hai. Yeh LIFO order follow karta hai.",
    "trap": "CPU task scheduling uses Queue, but function execution uses Stack."
  },
  {
    "id": 38,
    "unitId": 3,
    "unitTitle": "Unit 3: Stacks & Polish Notation Expressions (Q37 - Q54)",
    "text": "What is the postfix evaluation of the expression: `5 3 + 8 2 - *` ?",
    "options": [
      {
        "key": "A",
        "text": "48"
      },
      {
        "key": "B",
        "text": "16"
      },
      {
        "key": "C",
        "text": "32"
      },
      {
        "key": "D",
        "text": "24"
      }
    ],
    "correct": "A",
    "difficulty": "Medium",
    "explanation": "Step 1: Push 5, Push 3.\nStep 2: '+' -> pop 3, 5 -> 5 + 3 = 8 -> Push 8.\nStep 3: Push 8, Push 2.\nStep 4: '-' -> pop 2, 8 -> 8 - 2 = 6 -> Push 6.\nStep 5: '*' -> pop 6, 8 -> 8 * 6 = 48 -> Push 48. Answer = 48.",
    "trap": "Ensure correct order during subtraction: first popped is right operand, second popped is left operand."
  },
  {
    "id": 39,
    "unitId": 3,
    "unitTitle": "Unit 3: Stacks & Polish Notation Expressions (Q37 - Q54)",
    "text": "Convert the infix expression `A + B * C` to postfix notation:",
    "options": [
      {
        "key": "A",
        "text": "A B C * +"
      },
      {
        "key": "B",
        "text": "A B + C *"
      },
      {
        "key": "C",
        "text": "+ A * B C"
      },
      {
        "key": "D",
        "text": "A B C + *"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "'*' has higher precedence than '+'. So `B * C` converts first to `B C *`. Then `A + (B C *)` becomes `A B C * +`.",
    "trap": "Do not evaluate left to right without respecting operator precedence."
  },
  {
    "id": 40,
    "unitId": 3,
    "unitTitle": "Unit 3: Stacks & Polish Notation Expressions (Q37 - Q54)",
    "text": "Which operator has right-to-left associativity?",
    "options": [
      {
        "key": "A",
        "text": "Addition (+)"
      },
      {
        "key": "B",
        "text": "Multiplication (*)"
      },
      {
        "key": "C",
        "text": "Exponentiation (^)"
      },
      {
        "key": "D",
        "text": "Division (/)"
      }
    ],
    "correct": "C",
    "difficulty": "Easy",
    "explanation": "Exponentiation (^) right-to-left evaluate hota hai. E.g., `2 ^ 3 ^ 2` evaluates as `2 ^ (3 ^ 2) = 2 ^ 9 = 512`.",
    "trap": "All standard arithmetic operators (+, -, *, /) are left-to-right associative, EXCEPT exponentiation."
  },
  {
    "id": 41,
    "unitId": 3,
    "unitTitle": "Unit 3: Stacks & Polish Notation Expressions (Q37 - Q54)",
    "text": "How many minimum stacks are required to implement a FIFO Queue?",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "4"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Queue ko implement karne ke liye exactly 2 stacks ki zarurat hoti hai (Stack 1 for enqueue, Stack 2 for dequeue to invert the LIFO order to FIFO).",
    "trap": "A single stack cannot reverse the order twice."
  },
  {
    "id": 42,
    "unitId": 3,
    "unitTitle": "Unit 3: Stacks & Polish Notation Expressions (Q37 - Q54)",
    "text": "In an array implementation of a Stack of size MAX, the overflow condition occurs when:",
    "options": [
      {
        "key": "A",
        "text": "TOP == 0"
      },
      {
        "key": "B",
        "text": "TOP == MAX - 1"
      },
      {
        "key": "C",
        "text": "TOP == MAX"
      },
      {
        "key": "D",
        "text": "TOP == -1"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "0-based indexing mein array index 0 se MAX - 1 tak hota hai. Jab TOP == MAX - 1 ho jaye, stack full ho jata hai aur overflow condition aati hai.",
    "trap": "TOP == MAX is an out-of-bounds index."
  },
  {
    "id": 43,
    "unitId": 3,
    "unitTitle": "Unit 3: Stacks & Polish Notation Expressions (Q37 - Q54)",
    "text": "What is the postfix form of the infix expression: `(A + B) * (C - D)` ?",
    "options": [
      {
        "key": "A",
        "text": "A B + C D - *"
      },
      {
        "key": "B",
        "text": "A B C D + - *"
      },
      {
        "key": "C",
        "text": "* + A B - C D"
      },
      {
        "key": "D",
        "text": "A B + * C D -"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "Parentheses evaluate first: `(A + B)` becomes `A B +`, `(C - D)` becomes `C D -`. Multiplication joins them: `A B + C D - *`.",
    "trap": "Parentheses never appear in the final postfix expression."
  },
  {
    "id": 44,
    "unitId": 3,
    "unitTitle": "Unit 3: Stacks & Polish Notation Expressions (Q37 - Q54)",
    "text": "If the sequence of operations PUSH(1), PUSH(2), POP, PUSH(3), PUSH(4), POP, POP is executed, what is the sequence of popped elements?",
    "options": [
      {
        "key": "A",
        "text": "2, 4, 3"
      },
      {
        "key": "B",
        "text": "1, 2, 3"
      },
      {
        "key": "C",
        "text": "2, 3, 4"
      },
      {
        "key": "D",
        "text": "4, 3, 2"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "Stack state trace:\n• Push 1 -> [1]\n• Push 2 -> [1, 2]\n• POP -> returns 2. Stack: [1]\n• Push 3 -> [1, 3]\n• Push 4 -> [1, 3, 4]\n• POP -> returns 4. Stack: [1, 3]\n• POP -> returns 3. Stack: [1]. Sequence = 2, 4, 3.",
    "trap": "Follow stack LIFO carefully at each step."
  },
  {
    "id": 45,
    "unitId": 3,
    "unitTitle": "Unit 3: Stacks & Polish Notation Expressions (Q37 - Q54)",
    "text": "Which of the following problems can be solved using a Stack?",
    "options": [
      {
        "key": "A",
        "text": "Balanced parentheses checking"
      },
      {
        "key": "B",
        "text": "Decimal to Binary number conversion"
      },
      {
        "key": "C",
        "text": "Tower of Hanoi recursion"
      },
      {
        "key": "D",
        "text": "All of the above"
      }
    ],
    "correct": "D",
    "difficulty": "Easy",
    "explanation": "Stack parentheses matching, base conversion (remainders reverse order mein print karne ke liye), aur recursive Tower of Hanoi sabhi ke liye use hota hai.",
    "trap": "All three are classic standard stack applications."
  },
  {
    "id": 46,
    "unitId": 3,
    "unitTitle": "Unit 3: Stacks & Polish Notation Expressions (Q37 - Q54)",
    "text": "What is the prefix form of the expression: `A + B * C` ?",
    "options": [
      {
        "key": "A",
        "text": "+ A * B C"
      },
      {
        "key": "B",
        "text": "* + A B C"
      },
      {
        "key": "C",
        "text": "+ * A B C"
      },
      {
        "key": "D",
        "text": "A B C * +"
      }
    ],
    "correct": "A",
    "difficulty": "Medium",
    "explanation": "First evaluate `B * C` -> `* B C`. Then `A + (* B C)` -> `+ A * B C`.",
    "trap": "In Prefix (Polish Notation), the operator comes BEFORE operands."
  },
  {
    "id": 47,
    "unitId": 3,
    "unitTitle": "Unit 3: Stacks & Polish Notation Expressions (Q37 - Q54)",
    "text": "What is the result of evaluating the prefix expression: `+ * 2 3 4` ?",
    "options": [
      {
        "key": "A",
        "text": "10"
      },
      {
        "key": "B",
        "text": "14"
      },
      {
        "key": "C",
        "text": "24"
      },
      {
        "key": "D",
        "text": "12"
      }
    ],
    "correct": "A",
    "difficulty": "Medium",
    "explanation": "Prefix ko right-to-left scan karte hain:\nOperands: 4, 3, 2. Operator `*` applies to 2 and 3 -> 2 * 3 = 6. Then operator `+` applies to 6 and 4 -> 6 + 4 = 10.",
    "trap": "Prefix expressions are evaluated by scanning from RIGHT to LEFT."
  },
  {
    "id": 48,
    "unitId": 3,
    "unitTitle": "Unit 3: Stacks & Polish Notation Expressions (Q37 - Q54)",
    "text": "How can two stacks be implemented efficiently in a single 1D array of size N?",
    "options": [
      {
        "key": "A",
        "text": "Stack 1 starts at index 0 and grows right; Stack 2 starts at index N - 1 and grows left"
      },
      {
        "key": "B",
        "text": "Alternate slots (even indices for Stack 1, odd for Stack 2)"
      },
      {
        "key": "C",
        "text": "Divide array exactly in half at N / 2"
      },
      {
        "key": "D",
        "text": "Impossible in a single array"
      }
    ],
    "correct": "A",
    "difficulty": "Medium",
    "explanation": "Stack 1 starts at 0 (top1 = -1) aur right move karta hai. Stack 2 starts at N-1 (top2 = N) aur left move karta hai. Overflow tabhi hoga jab dono tops meet karein (`top1 + 1 == top2`), maximizing memory utilization.",
    "trap": "Dividing in half at N/2 causes false overflow when one stack is full and the other is empty."
  },
  {
    "id": 49,
    "unitId": 3,
    "unitTitle": "Unit 3: Stacks & Polish Notation Expressions (Q37 - Q54)",
    "text": "In the Min-Stack problem, how can we retrieve the minimum element in O(1) time?",
    "options": [
      {
        "key": "A",
        "text": "By scanning the stack in O(n)"
      },
      {
        "key": "B",
        "text": "By maintaining an auxiliary stack that stores the minimum element seen so far at each level"
      },
      {
        "key": "C",
        "text": "By keeping the main stack sorted"
      },
      {
        "key": "D",
        "text": "By using a circular queue"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "Ek auxiliary stack maintain kiya jata hai. Har push par, naye element aur current min ka minimum auxiliary stack mein push hota hai. `getMin()` simply auxiliary stack ke top ko constant time O(1) mein return karta hai.",
    "trap": "Sorting the stack would violate O(1) push and pop operations."
  },
  {
    "id": 50,
    "unitId": 3,
    "unitTitle": "Unit 3: Stacks & Polish Notation Expressions (Q37 - Q54)",
    "text": "Which data structure is required to reverse a string of characters?",
    "options": [
      {
        "key": "A",
        "text": "Queue"
      },
      {
        "key": "B",
        "text": "Stack"
      },
      {
        "key": "C",
        "text": "Tree"
      },
      {
        "key": "D",
        "text": "Hash Table"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Characters ko sequence mein stack mein PUSH karo, fir POP karke nikaloge toh LIFO property ki wajah se exact reverse order milega.",
    "trap": "Queue maintains original FIFO order, so it cannot reverse."
  },
  {
    "id": 51,
    "unitId": 3,
    "unitTitle": "Unit 3: Stacks & Polish Notation Expressions (Q37 - Q54)",
    "text": "What is the time complexity of PUSH and POP operations when a Stack is implemented using a Singly Linked List with head pointer?",
    "options": [
      {
        "key": "A",
        "text": "O(1) and O(1)"
      },
      {
        "key": "B",
        "text": "O(1) and O(n)"
      },
      {
        "key": "C",
        "text": "O(n) and O(1)"
      },
      {
        "key": "D",
        "text": "O(n) and O(n)"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "Linked list ke HEAD par insert (Push) aur HEAD se delete (Pop) dono O(1) constant time operations hote hain.",
    "trap": "If push/pop were implemented at the tail of a singly linked list without tail pointer, it would be O(n)."
  },
  {
    "id": 52,
    "unitId": 3,
    "unitTitle": "Unit 3: Stacks & Polish Notation Expressions (Q37 - Q54)",
    "text": "In an infix expression, which of the following is true regarding parentheses?",
    "options": [
      {
        "key": "A",
        "text": "They override normal operator precedence"
      },
      {
        "key": "B",
        "text": "They are preserved in postfix notation"
      },
      {
        "key": "C",
        "text": "They are only allowed with addition"
      },
      {
        "key": "D",
        "text": "They must always be square brackets"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "Parentheses highest priority hold karte hain aur default operator precedence ko override karte hain.",
    "trap": "Parentheses never appear in postfix or prefix expressions."
  },
  {
    "id": 53,
    "unitId": 3,
    "unitTitle": "Unit 3: Stacks & Polish Notation Expressions (Q37 - Q54)",
    "text": "What is the postfix equivalent of `A + B + C` assuming left-to-right associativity of `+`?",
    "options": [
      {
        "key": "A",
        "text": "A B + C +"
      },
      {
        "key": "B",
        "text": "A B C + +"
      },
      {
        "key": "C",
        "text": "+ + A B C"
      },
      {
        "key": "D",
        "text": "A B + + C"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "Due to left associativity: `(A + B) + C` -> `A B + + C` -> `A B + C +`.",
    "trap": "If right-associative, it would be A B C + +."
  },
  {
    "id": 54,
    "unitId": 3,
    "unitTitle": "Unit 3: Stacks & Polish Notation Expressions (Q37 - Q54)",
    "text": "What will happen if you POP from an empty stack?",
    "options": [
      {
        "key": "A",
        "text": "Stack Overflow"
      },
      {
        "key": "B",
        "text": "Stack Underflow error"
      },
      {
        "key": "C",
        "text": "Segmentation fault always"
      },
      {
        "key": "D",
        "text": "Stack doubles in size"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Empty stack se element remove karne ki koshish ko Stack Underflow kehte hain.",
    "trap": "Overflow happens on inserting into a full stack; Underflow on removing from an empty stack."
  },
  {
    "id": 55,
    "unitId": 4,
    "unitTitle": "Unit 4: Queues & Circular Queues (Q55 - Q72)",
    "text": "In a circular queue of capacity N implemented using an array, the condition for queue FULL is:",
    "options": [
      {
        "key": "A",
        "text": "(REAR + 1) % N == FRONT"
      },
      {
        "key": "B",
        "text": "REAR == FRONT"
      },
      {
        "key": "C",
        "text": "REAR == N - 1"
      },
      {
        "key": "D",
        "text": "FRONT == (REAR + 1)"
      }
    ],
    "correct": "A",
    "difficulty": "Medium",
    "explanation": "Circular queue mein jab agla rear index front ke barabar ho jaye, toh queue full hoti hai: `(REAR + 1) % N == FRONT`.",
    "trap": "REAR == FRONT empty condition ke liye use hota hai ya 1-element condition ke liye, full ke liye nahi."
  },
  {
    "id": 56,
    "unitId": 4,
    "unitTitle": "Unit 4: Queues & Circular Queues (Q55 - Q72)",
    "text": "What major drawback of a linear array-based queue is solved by a circular queue?",
    "options": [
      {
        "key": "A",
        "text": "Slow search time"
      },
      {
        "key": "B",
        "text": "False overflow (unused free spaces at front)"
      },
      {
        "key": "C",
        "text": "Lack of dynamic memory"
      },
      {
        "key": "D",
        "text": "Inability to insert integers"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Linear queue mein jab elements delete hote hain, front aage badh jata hai. Rear end par pahunchne ke baad naye elements insert nahi ho pate bhale hi aage slots khali hon (False Overflow). Circular queue modulo wrap se isko solve karta hai.",
    "trap": "Circular queue does not change O(1) time complexity; it saves memory space."
  },
  {
    "id": 57,
    "unitId": 4,
    "unitTitle": "Unit 4: Queues & Circular Queues (Q55 - Q72)",
    "text": "In a circular queue with size N = 5, FRONT = 2 and REAR = 1. How many elements are currently in the queue?",
    "options": [
      {
        "key": "A",
        "text": "4"
      },
      {
        "key": "B",
        "text": "1"
      },
      {
        "key": "C",
        "text": "5"
      },
      {
        "key": "D",
        "text": "3"
      }
    ],
    "correct": "A",
    "difficulty": "Difficult",
    "explanation": "Formula: Count = (REAR - FRONT + N) % N. If count == 0 and queue is full, count = N. Here: (1 - 2 + 5) % 5 = 4 % 5 = 4 elements. Elements are located at indices 2, 3, 4, 0.",
    "trap": "REAR < FRONT means the queue has wrapped around the circular boundary!"
  },
  {
    "id": 58,
    "unitId": 4,
    "unitTitle": "Unit 4: Queues & Circular Queues (Q55 - Q72)",
    "text": "A double-ended queue (Deque) that allows insertion at both ends but deletion only at one end is called:",
    "options": [
      {
        "key": "A",
        "text": "Input-restricted deque"
      },
      {
        "key": "B",
        "text": "Output-restricted deque"
      },
      {
        "key": "C",
        "text": "Priority queue"
      },
      {
        "key": "D",
        "text": "Circular queue"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "Output-restricted deque mein deletion sirf ek end se hota hai, jabki insertion dono ends se allow hota hai.",
    "trap": "Input-restricted deque mein insertion ek end se hota hai aur deletion dono ends se hota hai."
  },
  {
    "id": 59,
    "unitId": 4,
    "unitTitle": "Unit 4: Queues & Circular Queues (Q55 - Q72)",
    "text": "Which data structure is typically used to implement Breadth-First Search (BFS) traversal of a graph?",
    "options": [
      {
        "key": "A",
        "text": "Stack"
      },
      {
        "key": "B",
        "text": "Queue"
      },
      {
        "key": "C",
        "text": "Priority Queue"
      },
      {
        "key": "D",
        "text": "Binary Search Tree"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "BFS level-by-level traversal karta hai, jiske liye FIFO order zaroori hai. Isliye standard Queue use hoti hai.",
    "trap": "DFS uses Stack; BFS uses Queue."
  },
  {
    "id": 60,
    "unitId": 4,
    "unitTitle": "Unit 4: Queues & Circular Queues (Q55 - Q72)",
    "text": "How many queues are required to implement a LIFO Stack?",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "4"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Stack ko simulate karne ke liye 2 queues ki zarurat hoti hai.",
    "trap": "Just like 2 stacks make a queue, 2 queues make a stack."
  },
  {
    "id": 61,
    "unitId": 4,
    "unitTitle": "Unit 4: Queues & Circular Queues (Q55 - Q72)",
    "text": "In a priority queue, how are elements dequeued?",
    "options": [
      {
        "key": "A",
        "text": "Strictly in the order they arrived"
      },
      {
        "key": "B",
        "text": "According to their associated priority values"
      },
      {
        "key": "C",
        "text": "In random order"
      },
      {
        "key": "D",
        "text": "LIFO order"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Priority queue mein highest (ya lowest, depending on min/max heap) priority wala element sabse pehle dequeue hota hai.",
    "trap": "It does not strictly follow FIFO."
  },
  {
    "id": 62,
    "unitId": 4,
    "unitTitle": "Unit 4: Queues & Circular Queues (Q55 - Q72)",
    "text": "What is the time complexity of ENQUEUE and DEQUEUE operations in an array-based circular queue?",
    "options": [
      {
        "key": "A",
        "text": "O(1) and O(1)"
      },
      {
        "key": "B",
        "text": "O(1) and O(n)"
      },
      {
        "key": "C",
        "text": "O(n) and O(1)"
      },
      {
        "key": "D",
        "text": "O(n) and O(n)"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "Dono operations pointer arithmetic (modulo N) se instant hote hain, isliye dono O(1) constant time lete hain.",
    "trap": "No element shifting is performed in a circular queue."
  },
  {
    "id": 63,
    "unitId": 4,
    "unitTitle": "Unit 4: Queues & Circular Queues (Q55 - Q72)",
    "text": "If FRONT = -1 and REAR = -1 in a circular queue, the queue is:",
    "options": [
      {
        "key": "A",
        "text": "Full"
      },
      {
        "key": "B",
        "text": "Empty"
      },
      {
        "key": "C",
        "text": "Containing exactly 1 element"
      },
      {
        "key": "D",
        "text": "Overflowed"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "FRONT == -1 aur REAR == -1 standard empty (underflow) condition hoti hai.",
    "trap": "When 1 element is added, FRONT and REAR both become 0."
  },
  {
    "id": 64,
    "unitId": 4,
    "unitTitle": "Unit 4: Queues & Circular Queues (Q55 - Q72)",
    "text": "Which scheduling algorithm in Operating Systems directly uses a FIFO Queue?",
    "options": [
      {
        "key": "A",
        "text": "First-Come, First-Served (FCFS)"
      },
      {
        "key": "B",
        "text": "Shortest Job First (SJF)"
      },
      {
        "key": "C",
        "text": "Priority Scheduling"
      },
      {
        "key": "D",
        "text": "Multilevel Feedback Queue"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "FCFS CPU scheduling strictly FIFO queue principles par chalta hai.",
    "trap": "SJF and Priority scheduling use Priority Queues (Min-Heaps)."
  },
  {
    "id": 65,
    "unitId": 4,
    "unitTitle": "Unit 4: Queues & Circular Queues (Q55 - Q72)",
    "text": "What is an input-restricted deque?",
    "options": [
      {
        "key": "A",
        "text": "Insertion at one end, deletion at both ends"
      },
      {
        "key": "B",
        "text": "Deletion at one end, insertion at both ends"
      },
      {
        "key": "C",
        "text": "Insertion and deletion at both ends"
      },
      {
        "key": "D",
        "text": "Only allows positive inputs"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "Input-restricted deque mein insertion sirf ek end se allow hota hai, lekin deletion dono ends (front aur rear) se ho sakta hai.",
    "trap": "Output-restricted has deletion at one end and insertion at both."
  },
  {
    "id": 66,
    "unitId": 4,
    "unitTitle": "Unit 4: Queues & Circular Queues (Q55 - Q72)",
    "text": "In a queue implemented using a Singly Linked List, where should insertion and deletion take place for O(1) time efficiency?",
    "options": [
      {
        "key": "A",
        "text": "Insert at REAR (tail), Delete at FRONT (head)"
      },
      {
        "key": "B",
        "text": "Insert at FRONT, Delete at REAR"
      },
      {
        "key": "C",
        "text": "Both at FRONT"
      },
      {
        "key": "D",
        "text": "Both at REAR"
      }
    ],
    "correct": "A",
    "difficulty": "Medium",
    "explanation": "Head se delete karna O(1) hota hai. Tail pointer ke saath end par insert karna O(1) hota hai. Singly linked list mein tail se delete karna O(n) hota hai (prev node dhoondna padta hai). Isliye Insert at Tail and Delete at Head is optimal.",
    "trap": "Deleting at the tail of a singly linked list is O(n), so deletion MUST be at the head."
  },
  {
    "id": 67,
    "unitId": 4,
    "unitTitle": "Unit 4: Queues & Circular Queues (Q55 - Q72)",
    "text": "What happens when a circular queue of size 6 with FRONT = 3 and REAR = 2 tries to enqueue an element?",
    "options": [
      {
        "key": "A",
        "text": "Successful insertion at index 3"
      },
      {
        "key": "B",
        "text": "Queue Overflow error"
      },
      {
        "key": "C",
        "text": "FRONT becomes 4"
      },
      {
        "key": "D",
        "text": "REAR becomes 4"
      }
    ],
    "correct": "B",
    "difficulty": "Difficult",
    "explanation": "Check full condition: `(REAR + 1) % N == (2 + 1) % 6 = 3 % 6 = 3`. Yahan FRONT == 3 hai, so `(REAR + 1) % N == FRONT` is TRUE. Queue already full hai, isliye Queue Overflow hoga!",
    "trap": "REAR = FRONT - 1 in modulo N means full!"
  },
  {
    "id": 68,
    "unitId": 4,
    "unitTitle": "Unit 4: Queues & Circular Queues (Q55 - Q72)",
    "text": "Which data structure is most suitable for Round-Robin CPU scheduling?",
    "options": [
      {
        "key": "A",
        "text": "Circular Queue"
      },
      {
        "key": "B",
        "text": "Priority Queue"
      },
      {
        "key": "C",
        "text": "Binary Search Tree"
      },
      {
        "key": "D",
        "text": "Stack"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "Round Robin mein processes time quantum ke basis par cyclic order mein execute hoti hain. Circular Queue expired process ko pichhe bhej kar agle process ko instant run karne ke liye best hai.",
    "trap": "Priority queue is for Priority Scheduling, Circular queue is for Round Robin."
  },
  {
    "id": 69,
    "unitId": 4,
    "unitTitle": "Unit 4: Queues & Circular Queues (Q55 - Q72)",
    "text": "If FRONT = 0 and REAR = 0 in a circular queue, how many elements are in the queue?",
    "options": [
      {
        "key": "A",
        "text": "Exactly 0 elements (Empty)"
      },
      {
        "key": "B",
        "text": "Exactly 1 element"
      },
      {
        "key": "C",
        "text": "Full queue"
      },
      {
        "key": "D",
        "text": "Indeterminate without flags"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "Standard convention mein jab pehla element insert hota hai, FRONT aur REAR dono 0 par point karte hain. So there is exactly 1 element in the queue.",
    "trap": "Empty state is usually represented by FRONT = -1."
  },
  {
    "id": 70,
    "unitId": 4,
    "unitTitle": "Unit 4: Queues & Circular Queues (Q55 - Q72)",
    "text": "What is the time complexity to find the minimum element in a standard FIFO Queue of n elements?",
    "options": [
      {
        "key": "A",
        "text": "O(1)"
      },
      {
        "key": "B",
        "text": "O(log n)"
      },
      {
        "key": "C",
        "text": "O(n)"
      },
      {
        "key": "D",
        "text": "O(n^2)"
      }
    ],
    "correct": "C",
    "difficulty": "Easy",
    "explanation": "Queue unsorted hoti hai aur sirf FRONT se access deti hai. Minimum find karne ke liye saare n elements ko dequeue karke check karna padega (O(n) time).",
    "trap": "Queue does not keep elements sorted like a Min-Heap."
  },
  {
    "id": 71,
    "unitId": 4,
    "unitTitle": "Unit 4: Queues & Circular Queues (Q55 - Q72)",
    "text": "In a queue, deletion is also referred to as:",
    "options": [
      {
        "key": "A",
        "text": "PUSH"
      },
      {
        "key": "B",
        "text": "POP / DEQUEUE"
      },
      {
        "key": "C",
        "text": "PEEK"
      },
      {
        "key": "D",
        "text": "ENQUEUE"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Queue mein insert ko ENQUEUE aur delete ko DEQUEUE kehte hain.",
    "trap": "PUSH and POP are stack terminology."
  },
  {
    "id": 72,
    "unitId": 4,
    "unitTitle": "Unit 4: Queues & Circular Queues (Q55 - Q72)",
    "text": "Which underlying structure gives O(1) insertion and deletion at both ends for a Deque?",
    "options": [
      {
        "key": "A",
        "text": "Doubly Linked List"
      },
      {
        "key": "B",
        "text": "Singly Linked List without tail"
      },
      {
        "key": "C",
        "text": "Linear Array with fixed front"
      },
      {
        "key": "D",
        "text": "Binary Tree"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "Doubly Linked List mein HEAD aur TAIL dono ends par insert aur delete constant time O(1) mein ho jata hai.",
    "trap": "Singly linked list cannot delete from the tail in O(1)."
  },
  {
    "id": 73,
    "unitId": 5,
    "unitTitle": "Unit 5: Linked Lists (Q73 - Q90)",
    "text": "What is the time complexity to insert a new node at the beginning of a Singly Linked List of length n?",
    "options": [
      {
        "key": "A",
        "text": "O(1)"
      },
      {
        "key": "B",
        "text": "O(n)"
      },
      {
        "key": "C",
        "text": "O(log n)"
      },
      {
        "key": "D",
        "text": "O(n^2)"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "Head par insert karne ke liye sirf naye node ka next pointer HEAD par set karna hota hai aur HEAD ko update karna hota hai. Yeh O(1) constant time operation hai.",
    "trap": "Array mein beginning insert O(n) hota hai shifting ki wajah se, lekin linked list mein O(1) hota hai."
  },
  {
    "id": 74,
    "unitId": 5,
    "unitTitle": "Unit 5: Linked Lists (Q73 - Q90)",
    "text": "In a Singly Linked List with only a HEAD pointer, what is the time complexity to delete the LAST node?",
    "options": [
      {
        "key": "A",
        "text": "O(1)"
      },
      {
        "key": "B",
        "text": "O(n)"
      },
      {
        "key": "C",
        "text": "O(log n)"
      },
      {
        "key": "D",
        "text": "O(n^2)"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "Last node ko delete karne ke liye hume second-to-last node tak traverse karna padta hai taaki uska next pointer NULL kiya ja sake. Is traversal mein O(n) time lagta hai.",
    "trap": "Even if a TAIL pointer is given in Singly Linked List, deleting the last node still takes O(n) because we cannot move backward to find the second-to-last node!"
  },
  {
    "id": 75,
    "unitId": 5,
    "unitTitle": "Unit 5: Linked Lists (Q73 - Q90)",
    "text": "How does a Circular Linked List differ from a standard Singly Linked List?",
    "options": [
      {
        "key": "A",
        "text": "It has no data fields"
      },
      {
        "key": "B",
        "text": "The next pointer of the last node points back to the first node instead of NULL"
      },
      {
        "key": "C",
        "text": "It can only store numbers"
      },
      {
        "key": "D",
        "text": "It uses two pointers per node"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Circular linked list mein koi NULL pointer nahi hota. Last node ka next pointer first (HEAD) node ko point karta hai, forming a circle.",
    "trap": "Two pointers per node is the characteristic of a Doubly Linked List, not a Circular Singly Linked List."
  },
  {
    "id": 76,
    "unitId": 5,
    "unitTitle": "Unit 5: Linked Lists (Q73 - Q90)",
    "text": "How many pointers are changed when inserting a node between two existing nodes in a Doubly Linked List?",
    "options": [
      {
        "key": "A",
        "text": "2"
      },
      {
        "key": "B",
        "text": "3"
      },
      {
        "key": "C",
        "text": "4"
      },
      {
        "key": "D",
        "text": "1"
      }
    ],
    "correct": "C",
    "difficulty": "Medium",
    "explanation": "Total 4 pointers change hote hain:\n1. newNode->next = nextNode\n2. newNode->prev = prevNode\n3. prevNode->next = newNode\n4. nextNode->prev = newNode.",
    "trap": "Students often forget the backward pointers and answer 2."
  },
  {
    "id": 77,
    "unitId": 5,
    "unitTitle": "Unit 5: Linked Lists (Q73 - Q90)",
    "text": "How many minimum pointers are required to reverse a Singly Linked List iteratively in a single pass?",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "4"
      }
    ],
    "correct": "C",
    "difficulty": "Medium",
    "explanation": "Iterative reversal ke liye 3 pointers chahiye hote hain: `prev` (initially NULL), `curr` (initially HEAD), aur `next` (to store the rest of the list before breaking the link).",
    "trap": "Attempting with 2 pointers causes loss of reference to the remaining chain."
  },
  {
    "id": 78,
    "unitId": 5,
    "unitTitle": "Unit 5: Linked Lists (Q73 - Q90)",
    "text": "Floyd's Cycle-Finding Algorithm (Hare and Tortoise) to detect a loop in a linked list uses two pointers moving at speeds:",
    "options": [
      {
        "key": "A",
        "text": "Both move 1 step"
      },
      {
        "key": "B",
        "text": "Slow moves 1 step, Fast moves 2 steps"
      },
      {
        "key": "C",
        "text": "Slow moves 1 step, Fast moves 3 steps"
      },
      {
        "key": "D",
        "text": "Both move 2 steps"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Slow pointer 1 step aage badhta hai aur Fast pointer 2 steps. Agar cycle hoti hai, toh dono pointers loop ke andar kisi na kisi node par meet karte hain. Time: O(n), Space: O(1).",
    "trap": "If they move at the same speed, fast will never catch slow."
  },
  {
    "id": 79,
    "unitId": 5,
    "unitTitle": "Unit 5: Linked Lists (Q73 - Q90)",
    "text": "Which of the following is an advantage of a Linked List over an Array?",
    "options": [
      {
        "key": "A",
        "text": "Random access to elements"
      },
      {
        "key": "B",
        "text": "Dynamic size and efficient insertions/deletions without shifting"
      },
      {
        "key": "C",
        "text": "Lower memory usage per element"
      },
      {
        "key": "D",
        "text": "Better cache locality"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Linked list runtime par dynamically grow/shrink kar sakti hai aur bina elements shift kiye O(1) time mein insert/delete kar sakti hai.",
    "trap": "Arrays have better cache locality and zero pointer memory overhead."
  },
  {
    "id": 80,
    "unitId": 5,
    "unitTitle": "Unit 5: Linked Lists (Q73 - Q90)",
    "text": "A linked list where each node points to both its successor and its predecessor, and the last node connects to the first, is called:",
    "options": [
      {
        "key": "A",
        "text": "Circular Doubly Linked List"
      },
      {
        "key": "B",
        "text": "Singly Linked List"
      },
      {
        "key": "C",
        "text": "Header Linked List"
      },
      {
        "key": "D",
        "text": "Self-referential array"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "Dono directions mein movement + circular wrap-around is called Circular Doubly Linked List.",
    "trap": "Standard DLL is not circular."
  },
  {
    "id": 81,
    "unitId": 5,
    "unitTitle": "Unit 5: Linked Lists (Q73 - Q90)",
    "text": "What does the term \"self-referential structure\" mean in the context of linked list nodes in C?",
    "options": [
      {
        "key": "A",
        "text": "A structure that refers to standard library functions"
      },
      {
        "key": "B",
        "text": "A structure containing a pointer member that points to the same structure type"
      },
      {
        "key": "C",
        "text": "A structure that cannot be modified"
      },
      {
        "key": "D",
        "text": "A structure with only one variable"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "`struct Node { int data; struct Node *next; };` - yahan `next` pointer usi structure type ko point karta hai, isliye isse self-referential structure kehte hain.",
    "trap": "It contains a pointer to itself, not an actual embedded copy of itself."
  },
  {
    "id": 82,
    "unitId": 5,
    "unitTitle": "Unit 5: Linked Lists (Q73 - Q90)",
    "text": "What happens if you execute `free(head)` before `head = head->next` during node deletion in C?",
    "options": [
      {
        "key": "A",
        "text": "Normal deletion"
      },
      {
        "key": "B",
        "text": "Memory leak and dangling pointer bug (loss of rest of the list)"
      },
      {
        "key": "C",
        "text": "Automatic traversal"
      },
      {
        "key": "D",
        "text": "Compile time error"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "Agar `head` ko pehle free kar doge, toh `head->next` access karna undefined behavior ho jayega aur bachi hui list ka address kho jayega (Memory Leak).",
    "trap": "Always save `head->next` in a temporary pointer before calling free()."
  },
  {
    "id": 83,
    "unitId": 5,
    "unitTitle": "Unit 5: Linked Lists (Q73 - Q90)",
    "text": "How can you find the middle element of a Singly Linked List in a single pass?",
    "options": [
      {
        "key": "A",
        "text": "Traverse twice to count total nodes"
      },
      {
        "key": "B",
        "text": "Use two pointers: slow moves 1 step, fast moves 2 steps. When fast reaches end, slow is at the middle"
      },
      {
        "key": "C",
        "text": "Middle cannot be found in a single pass"
      },
      {
        "key": "D",
        "text": "Use binary search"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "Two-pointer (Runner technique): Fast pointer slow pointer se double speed par chalta hai. Jab fast end of list par pahunchta hai, slow pointer theek middle node par hota hai.",
    "trap": "Binary search is impossible on linked lists due to lack of random access."
  },
  {
    "id": 84,
    "unitId": 5,
    "unitTitle": "Unit 5: Linked Lists (Q73 - Q90)",
    "text": "In a Circular Linked List with pointer `last` pointing to the last node, what is the address of the first node?",
    "options": [
      {
        "key": "A",
        "text": "last"
      },
      {
        "key": "B",
        "text": "last->next"
      },
      {
        "key": "C",
        "text": "NULL"
      },
      {
        "key": "D",
        "text": "last->prev"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Circular list mein last node ka agla pointer pehle node ko point karta hai: `last->next` is the first node.",
    "trap": "Maintaining a `last` pointer gives O(1) access to both first (`last->next`) and last node!"
  },
  {
    "id": 85,
    "unitId": 5,
    "unitTitle": "Unit 5: Linked Lists (Q73 - Q90)",
    "text": "What is a Header Linked List?",
    "options": [
      {
        "key": "A",
        "text": "A list that has a special header node at the very beginning storing metadata like list length"
      },
      {
        "key": "B",
        "text": "A list with no pointers"
      },
      {
        "key": "C",
        "text": "A list stored in ROM"
      },
      {
        "key": "D",
        "text": "An array of headers"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "Header linked list mein first node ek dummy header hota hai jo actual data list ka part nahi hota balki list length, max value jaisi metadata store karta hai.",
    "trap": "Header node simplifies insertion/deletion edge cases at the beginning."
  },
  {
    "id": 86,
    "unitId": 5,
    "unitTitle": "Unit 5: Linked Lists (Q73 - Q90)",
    "text": "What is the time complexity to merge two sorted Singly Linked Lists of lengths m and n into a single sorted list?",
    "options": [
      {
        "key": "A",
        "text": "O(m * n)"
      },
      {
        "key": "B",
        "text": "O(m + n)"
      },
      {
        "key": "C",
        "text": "O(log(m + n))"
      },
      {
        "key": "D",
        "text": "O(1)"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Dono lists ke head elements ko compare karke pointers rewire karte hue O(m + n) time mein merge kiya ja sakta hai with O(1) extra space.",
    "trap": "Merge sort merge step on linked list takes linear O(m+n) time."
  },
  {
    "id": 87,
    "unitId": 5,
    "unitTitle": "Unit 5: Linked Lists (Q73 - Q90)",
    "text": "What is the space overhead of a Doubly Linked List with n nodes compared to a Singly Linked List on a 64-bit system?",
    "options": [
      {
        "key": "A",
        "text": "4n bytes"
      },
      {
        "key": "B",
        "text": "8n bytes (one extra 8-byte pointer per node)"
      },
      {
        "key": "C",
        "text": "No extra overhead"
      },
      {
        "key": "D",
        "text": "16n bytes"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "64-bit systems par har pointer 8 bytes leta hai. Doubly linked list har node mein ek extra `prev` pointer rakhti hai, so extra memory = 8 * n bytes.",
    "trap": "Pointer size on 64-bit systems is 8 bytes, on 32-bit it is 4 bytes."
  },
  {
    "id": 88,
    "unitId": 5,
    "unitTitle": "Unit 5: Linked Lists (Q73 - Q90)",
    "text": "Which linked list allows traversal in both directions without any NULL pointer?",
    "options": [
      {
        "key": "A",
        "text": "Singly Linked List"
      },
      {
        "key": "B",
        "text": "Circular Doubly Linked List"
      },
      {
        "key": "C",
        "text": "Standard Doubly Linked List"
      },
      {
        "key": "D",
        "text": "Header Linked List"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Circular Doubly Linked List has prev and next pointers in all nodes, and wraps around circularly at both ends with no NULL.",
    "trap": "Standard DLL has NULL at both ends."
  },
  {
    "id": 89,
    "unitId": 5,
    "unitTitle": "Unit 5: Linked Lists (Q73 - Q90)",
    "text": "If a node `p` is in a doubly linked list, how do you remove `p` assuming it is not head or tail?",
    "options": [
      {
        "key": "A",
        "text": "p->prev->next = p->next; p->next->prev = p->prev; free(p);"
      },
      {
        "key": "B",
        "text": "p->next = p->prev; free(p);"
      },
      {
        "key": "C",
        "text": "free(p); p->prev->next = p->next;"
      },
      {
        "key": "D",
        "text": "p = p->next;"
      }
    ],
    "correct": "A",
    "difficulty": "Medium",
    "explanation": "Node p ko bypass karne ke liye uske predecessor ke next ko p->next aur successor ke prev ko p->prev set karte hain, fir p ko free karte hain.",
    "trap": "Freeing p before updating pointers causes dangling pointers and crashes."
  },
  {
    "id": 90,
    "unitId": 5,
    "unitTitle": "Unit 5: Linked Lists (Q73 - Q90)",
    "text": "Why can Binary Search NOT be efficiently executed on a Singly Linked List?",
    "options": [
      {
        "key": "A",
        "text": "Linked list cannot be sorted"
      },
      {
        "key": "B",
        "text": "Calculating and accessing the middle element in a linked list requires O(n) sequential traversal"
      },
      {
        "key": "C",
        "text": "Pointers cannot be compared"
      },
      {
        "key": "D",
        "text": "Memory is continuous"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Binary Search requires O(1) random access to find `mid`. Linked list mein middle tak pahunchne ke liye hi O(n) lag jata hai, ruining the O(log n) efficiency.",
    "trap": "Binary Search requires random access (arrays), not sequential access."
  },
  {
    "id": 91,
    "unitId": 6,
    "unitTitle": "Unit 6: Recursion & Recurrences (Q91 - Q105)",
    "text": "What is the base case in a recursive algorithm?",
    "options": [
      {
        "key": "A",
        "text": "The case that calls the function again"
      },
      {
        "key": "B",
        "text": "The condition under which recursion terminates without making further recursive calls"
      },
      {
        "key": "C",
        "text": "The largest input value"
      },
      {
        "key": "D",
        "text": "The main function"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Base case terminating condition hoti hai jo infinite recursion aur Stack Overflow se bachati hai.",
    "trap": "Without a base case, recursion causes stack overflow."
  },
  {
    "id": 92,
    "unitId": 6,
    "unitTitle": "Unit 6: Recursion & Recurrences (Q91 - Q105)",
    "text": "What is the solution to the recurrence relation: T(n) = 2T(n/2) + O(n) ?",
    "options": [
      {
        "key": "A",
        "text": "O(n)"
      },
      {
        "key": "B",
        "text": "O(n log n)"
      },
      {
        "key": "C",
        "text": "O(n^2)"
      },
      {
        "key": "D",
        "text": "O(log n)"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "By Master Theorem: a = 2, b = 2, f(n) = n. Since n^(log_b a) = n^(log2 2) = n^1 = f(n), this falls under Case 2 of Master Theorem. Hence T(n) = O(n log n). This is the Merge Sort recurrence.",
    "trap": "Recognize this immediately as standard Merge Sort recurrence."
  },
  {
    "id": 93,
    "unitId": 6,
    "unitTitle": "Unit 6: Recursion & Recurrences (Q91 - Q105)",
    "text": "What is the solution to the recurrence relation: T(n) = T(n - 1) + O(1) with T(1) = 1?",
    "options": [
      {
        "key": "A",
        "text": "O(1)"
      },
      {
        "key": "B",
        "text": "O(log n)"
      },
      {
        "key": "C",
        "text": "O(n)"
      },
      {
        "key": "D",
        "text": "O(n^2)"
      }
    ],
    "correct": "C",
    "difficulty": "Easy",
    "explanation": "T(n) = T(n-1) + 1 = T(n-2) + 1 + 1 = ... = T(1) + (n - 1) = 1 + n - 1 = n. So T(n) = O(n).",
    "trap": "Decreasing recurrence by 1 with constant work solves to O(n)."
  },
  {
    "id": 94,
    "unitId": 6,
    "unitTitle": "Unit 6: Recursion & Recurrences (Q91 - Q105)",
    "text": "How many moves are required to solve the Tower of Hanoi problem with n disks?",
    "options": [
      {
        "key": "A",
        "text": "2n - 1"
      },
      {
        "key": "B",
        "text": "2^n - 1"
      },
      {
        "key": "C",
        "text": "n^2"
      },
      {
        "key": "D",
        "text": "2^n + 1"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Recurrence: T(n) = 2T(n-1) + 1. Solving gives T(n) = 2^n - 1 moves. For n = 3, moves = 2^3 - 1 = 7.",
    "trap": "2n - 1 is linear, 2^n - 1 is exponential."
  },
  {
    "id": 95,
    "unitId": 6,
    "unitTitle": "Unit 6: Recursion & Recurrences (Q91 - Q105)",
    "text": "What is tail recursion?",
    "options": [
      {
        "key": "A",
        "text": "Recursion where the recursive call is the very last statement executed in the function"
      },
      {
        "key": "B",
        "text": "Recursion that has two base cases"
      },
      {
        "key": "C",
        "text": "Recursion that occurs at the beginning of the function"
      },
      {
        "key": "D",
        "text": "Recursion that takes O(n^2) space"
      }
    ],
    "correct": "A",
    "difficulty": "Medium",
    "explanation": "Tail recursion mein recursive call ke baad koi work perform nahi hota. Modern compilers tail call optimization (TCO) karke isse constant stack space O(1) mein run kar sakte hain.",
    "trap": "If any calculation happens after recursive call (like n * fact(n-1)), it is NOT tail recursive."
  },
  {
    "id": 96,
    "unitId": 6,
    "unitTitle": "Unit 6: Recursion & Recurrences (Q91 - Q105)",
    "text": "What is the auxiliary stack space complexity of recursive Binary Search on an array of size n?",
    "options": [
      {
        "key": "A",
        "text": "O(1)"
      },
      {
        "key": "B",
        "text": "O(log n)"
      },
      {
        "key": "C",
        "text": "O(n)"
      },
      {
        "key": "D",
        "text": "O(n log n)"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Har recursive call array ko half karti hai, isliye maximum call stack depth log2(n) hoti hai. Space = O(log n). (Iterative binary search takes O(1) space).",
    "trap": "Iterative binary search is O(1) space, but recursive binary search is O(log n) space due to call stack."
  },
  {
    "id": 97,
    "unitId": 6,
    "unitTitle": "Unit 6: Recursion & Recurrences (Q91 - Q105)",
    "text": "What does the following recursive function return for n = 4?\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 1);\n}",
    "options": [
      {
        "key": "A",
        "text": "10"
      },
      {
        "key": "B",
        "text": "24"
      },
      {
        "key": "C",
        "text": "7"
      },
      {
        "key": "D",
        "text": "15"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "fun(4) = 4 + fun(3) = 4 + 3 + fun(2) = 4 + 3 + 2 + fun(1) = 4 + 3 + 2 + 1 = 10. (Sum of first n natural numbers).",
    "trap": "It is addition (+), not multiplication (*) like factorial."
  },
  {
    "id": 98,
    "unitId": 6,
    "unitTitle": "Unit 6: Recursion & Recurrences (Q91 - Q105)",
    "text": "Which data structure can be used to convert any recursive algorithm into an iterative one?",
    "options": [
      {
        "key": "A",
        "text": "Queue"
      },
      {
        "key": "B",
        "text": "Stack"
      },
      {
        "key": "C",
        "text": "Array"
      },
      {
        "key": "D",
        "text": "Hash Table"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Recursion internally system call stack use karta hai. Isliye explicit Stack data structure use karke kisi bhi recursive function ko iterative banaya ja sakta hai.",
    "trap": "Queue gives BFS traversal, Stack simulates recursion."
  },
  {
    "id": 99,
    "unitId": 6,
    "unitTitle": "Unit 6: Recursion & Recurrences (Q91 - Q105)",
    "text": "What is the time complexity of the naive recursive Fibonacci algorithm: `fib(n) = fib(n-1) + fib(n-2)`?",
    "options": [
      {
        "key": "A",
        "text": "O(n)"
      },
      {
        "key": "B",
        "text": "O(2^n)"
      },
      {
        "key": "C",
        "text": "O(n^2)"
      },
      {
        "key": "D",
        "text": "O(log n)"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "Har call do nayi recursive calls branch karti hai without memoization, creating a binary recursion tree of depth n. Time complexity is exponential O(2^n) (more precisely O(1.618^n)).",
    "trap": "Dynamic programming reduces this to O(n), but naive recursion is exponential O(2^n)."
  },
  {
    "id": 100,
    "unitId": 6,
    "unitTitle": "Unit 6: Recursion & Recurrences (Q91 - Q105)",
    "text": "What is indirect recursion?",
    "options": [
      {
        "key": "A",
        "text": "A function calling itself directly"
      },
      {
        "key": "B",
        "text": "Function A calling Function B, and Function B calling Function A"
      },
      {
        "key": "C",
        "text": "A loop inside a function"
      },
      {
        "key": "D",
        "text": "A function with no return value"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Direct recursion mein function khud ko directly call karta hai. Indirect recursion mein ek cycle hoti hai: A calls B, B calls A.",
    "trap": "Mutual recursion is also known as indirect recursion."
  },
  {
    "id": 101,
    "unitId": 6,
    "unitTitle": "Unit 6: Recursion & Recurrences (Q91 - Q105)",
    "text": "What is the solution of the recurrence: T(n) = 2T(n/2) + O(1)?",
    "options": [
      {
        "key": "A",
        "text": "O(n)"
      },
      {
        "key": "B",
        "text": "O(log n)"
      },
      {
        "key": "C",
        "text": "O(n log n)"
      },
      {
        "key": "D",
        "text": "O(1)"
      }
    ],
    "correct": "A",
    "difficulty": "Medium",
    "explanation": "By Master Theorem: a = 2, b = 2, f(n) = O(1) = n^0. Here n^(log_b a) = n^(log2 2) = n^1. Since n^1 > n^0, Case 1 applies: T(n) = Theta(n^(log_b a)) = Theta(n).",
    "trap": "Do not confuse with Merge sort where f(n) is n. Here f(n) is 1, so answer is O(n)."
  },
  {
    "id": 102,
    "unitId": 6,
    "unitTitle": "Unit 6: Recursion & Recurrences (Q91 - Q105)",
    "text": "What is the solution of the recurrence: T(n) = T(n/2) + O(1) with T(1) = 1?",
    "options": [
      {
        "key": "A",
        "text": "O(1)"
      },
      {
        "key": "B",
        "text": "O(log n)"
      },
      {
        "key": "C",
        "text": "O(n)"
      },
      {
        "key": "D",
        "text": "O(n log n)"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "This is the classic Binary Search recurrence relation. Halving the problem size with constant comparison work solves to O(log n).",
    "trap": "Standard Binary Search recurrence."
  },
  {
    "id": 103,
    "unitId": 6,
    "unitTitle": "Unit 6: Recursion & Recurrences (Q91 - Q105)",
    "text": "What is the maximum depth of the recursion tree for Quick Sort in the worst case?",
    "options": [
      {
        "key": "A",
        "text": "O(log n)"
      },
      {
        "key": "B",
        "text": "O(n)"
      },
      {
        "key": "C",
        "text": "O(1)"
      },
      {
        "key": "D",
        "text": "O(n^2)"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "Worst case mein pivot har baar 1 aur n-1 elements ka partition banata hai. Isse recursion depth n tak chali jaati hai, taking O(n) stack memory.",
    "trap": "Average depth is O(log n), but worst-case depth is O(n)."
  },
  {
    "id": 104,
    "unitId": 6,
    "unitTitle": "Unit 6: Recursion & Recurrences (Q91 - Q105)",
    "text": "What error occurs if a recursive function never reaches its base case?",
    "options": [
      {
        "key": "A",
        "text": "CPU Overheating"
      },
      {
        "key": "B",
        "text": "Stack Overflow runtime error"
      },
      {
        "key": "C",
        "text": "Compile time syntax error"
      },
      {
        "key": "D",
        "text": "Array bounds error"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Infinite recursive calls continuously system call stack par activation records push karti rehti hain jab tak allocated stack memory exhaust nahi ho jaati (Stack Overflow).",
    "trap": "It is a runtime crash, not a compilation error."
  },
  {
    "id": 105,
    "unitId": 6,
    "unitTitle": "Unit 6: Recursion & Recurrences (Q91 - Q105)",
    "text": "What does the following recursive function return for fun(5)?\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n * fun(n - 1);\n}",
    "options": [
      {
        "key": "A",
        "text": "15"
      },
      {
        "key": "B",
        "text": "120"
      },
      {
        "key": "C",
        "text": "24"
      },
      {
        "key": "D",
        "text": "60"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "This is the standard factorial function: 5! = 5 * 4 * 3 * 2 * 1 = 120.",
    "trap": "5! = 120."
  },
  {
    "id": 106,
    "unitId": 7,
    "unitTitle": "Unit 7: Trees & Binary Tree Properties (Q106 - Q125)",
    "text": "In any non-empty binary tree, if n0 is the number of leaf nodes and n2 is the number of nodes with degree 2, then:",
    "options": [
      {
        "key": "A",
        "text": "n0 = n2"
      },
      {
        "key": "B",
        "text": "n0 = n2 + 1"
      },
      {
        "key": "C",
        "text": "n0 = n2 - 1"
      },
      {
        "key": "D",
        "text": "n0 = 2 * n2"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Standard Binary Tree Theorem: n0 = n2 + 1. Leaf nodes ki sankhya hamesha degree-2 nodes se exactly 1 zyada hoti hai.",
    "trap": "This holds for ANY binary tree, not just full or complete binary trees."
  },
  {
    "id": 107,
    "unitId": 7,
    "unitTitle": "Unit 7: Trees & Binary Tree Properties (Q106 - Q125)",
    "text": "What is the maximum number of nodes in a binary tree of height h (assuming root is at height 0)?",
    "options": [
      {
        "key": "A",
        "text": "2^h"
      },
      {
        "key": "B",
        "text": "2^(h+1) - 1"
      },
      {
        "key": "C",
        "text": "2^(h-1)"
      },
      {
        "key": "D",
        "text": "2^h - 1"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Height 0 par 1 node (2^1 - 1 = 1). Height h par total nodes = 2^0 + 2^1 + ... + 2^h = 2^(h+1) - 1.",
    "trap": "If root is defined at height 1, formula is 2^h - 1. CUET PG standard assumes root at height 0, giving 2^(h+1) - 1."
  },
  {
    "id": 108,
    "unitId": 7,
    "unitTitle": "Unit 7: Trees & Binary Tree Properties (Q106 - Q125)",
    "text": "A Full Binary Tree has 15 leaf nodes. How many internal nodes with degree 2 does it have?",
    "options": [
      {
        "key": "A",
        "text": "14"
      },
      {
        "key": "B",
        "text": "15"
      },
      {
        "key": "C",
        "text": "16"
      },
      {
        "key": "D",
        "text": "7"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "Formula: n0 = n2 + 1. Given n0 = 15 => 15 = n2 + 1 => n2 = 14.",
    "trap": "Simple direct formula application: n2 = n0 - 1."
  },
  {
    "id": 109,
    "unitId": 7,
    "unitTitle": "Unit 7: Trees & Binary Tree Properties (Q106 - Q125)",
    "text": "What is the minimum height of a binary tree containing 100 nodes (root at height 0)?",
    "options": [
      {
        "key": "A",
        "text": "6"
      },
      {
        "key": "B",
        "text": "7"
      },
      {
        "key": "C",
        "text": "5"
      },
      {
        "key": "D",
        "text": "8"
      }
    ],
    "correct": "A",
    "difficulty": "Medium",
    "explanation": "Min height formula: h_min = ceil(log2(n + 1)) - 1. For n = 100: n + 1 = 101. log2(101) ~= 6.658 -> ceil is 7. Height = 7 - 1 = 6. (Check: height 6 can hold up to 2^7 - 1 = 127 nodes; height 5 can only hold 63 nodes).",
    "trap": "Height 5 can only hold 63 nodes, so 100 nodes require height 6."
  },
  {
    "id": 110,
    "unitId": 7,
    "unitTitle": "Unit 7: Trees & Binary Tree Properties (Q106 - Q125)",
    "text": "How many structurally distinct binary trees can be formed with n = 3 unlabelled nodes?",
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "4"
      },
      {
        "key": "C",
        "text": "5"
      },
      {
        "key": "D",
        "text": "6"
      }
    ],
    "correct": "C",
    "difficulty": "Medium",
    "explanation": "Catalan Number C3 = (1 / (3 + 1)) * (6 choose 3) = (1 / 4) * (20) = 5 distinct binary trees.",
    "trap": "For labelled nodes it would be C_n * n! = 5 * 6 = 30, but for unlabelled nodes it is strictly 5."
  },
  {
    "id": 111,
    "unitId": 7,
    "unitTitle": "Unit 7: Trees & Binary Tree Properties (Q106 - Q125)",
    "text": "Which two traversals are sufficient to uniquely construct a binary tree?",
    "options": [
      {
        "key": "A",
        "text": "Preorder and Postorder"
      },
      {
        "key": "B",
        "text": "Inorder and Preorder"
      },
      {
        "key": "C",
        "text": "Level order and Postorder"
      },
      {
        "key": "D",
        "text": "Preorder and Level order"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Unique binary tree construct karne ke liye INORDER traversal ke saath PREORDER ya POSTORDER ka hona mandatory hai. Preorder + Postorder cannot guarantee a unique tree.",
    "trap": "Inorder is compulsory because it tells what is on the left and right of the root."
  },
  {
    "id": 112,
    "unitId": 7,
    "unitTitle": "Unit 7: Trees & Binary Tree Properties (Q106 - Q125)",
    "text": "Given Inorder traversal: `D B E A F C` and Preorder traversal: `A B D E C F`. What is the Postorder traversal?",
    "options": [
      {
        "key": "A",
        "text": "D E B F C A"
      },
      {
        "key": "B",
        "text": "D E B C F A"
      },
      {
        "key": "C",
        "text": "E D B F C A"
      },
      {
        "key": "D",
        "text": "D B E F C A"
      }
    ],
    "correct": "A",
    "difficulty": "Medium",
    "explanation": "From Preorder, root is A.\nIn Inorder, left subtree is `D B E`, right subtree is `F C`.\nIn left subtree `D B E`, Preorder says B is root, D is left, E is right.\nIn right subtree `F C`, Preorder says C is root, F is left.\nPostorder (Left, Right, Root): Left of A gives `D E B`, Right of A gives `F C`, Root is A.\nCombined Postorder: `D E B F C A`.",
    "trap": "Root is always at the end in Postorder traversal."
  },
  {
    "id": 113,
    "unitId": 7,
    "unitTitle": "Unit 7: Trees & Binary Tree Properties (Q106 - Q125)",
    "text": "In a complete binary tree stored in an array with 1-based indexing, where is the parent of node at index i located?",
    "options": [
      {
        "key": "A",
        "text": "2 * i"
      },
      {
        "key": "B",
        "text": "2 * i + 1"
      },
      {
        "key": "C",
        "text": "floor(i / 2)"
      },
      {
        "key": "D",
        "text": "i - 1"
      }
    ],
    "correct": "C",
    "difficulty": "Easy",
    "explanation": "For 1-based indexing:\nParent(i) = floor(i / 2)\nLeft Child(i) = 2 * i\nRight Child(i) = 2 * i + 1.",
    "trap": "In 0-based indexing, Parent is floor((i - 1) / 2)."
  },
  {
    "id": 114,
    "unitId": 7,
    "unitTitle": "Unit 7: Trees & Binary Tree Properties (Q106 - Q125)",
    "text": "A binary tree in which every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible, is called:",
    "options": [
      {
        "key": "A",
        "text": "Full Binary Tree"
      },
      {
        "key": "B",
        "text": "Complete Binary Tree"
      },
      {
        "key": "C",
        "text": "Perfect Binary Tree"
      },
      {
        "key": "D",
        "text": "Balanced Tree"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "This is the exact formal definition of a Complete Binary Tree, which is used to implement Binary Heaps.",
    "trap": "Perfect binary tree requires even the last level to be completely full."
  },
  {
    "id": 115,
    "unitId": 7,
    "unitTitle": "Unit 7: Trees & Binary Tree Properties (Q106 - Q125)",
    "text": "What is the maximum number of nodes at level k of a binary tree (root at level 0)?",
    "options": [
      {
        "key": "A",
        "text": "2^k"
      },
      {
        "key": "B",
        "text": "2^(k-1)"
      },
      {
        "key": "C",
        "text": "2^(k+1)"
      },
      {
        "key": "D",
        "text": "2k"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "Level 0 has 2^0 = 1 node. Level 1 has 2^1 = 2 nodes. Level k has 2^k nodes.",
    "trap": "At level k, max nodes is 2^k."
  },
  {
    "id": 116,
    "unitId": 7,
    "unitTitle": "Unit 7: Trees & Binary Tree Properties (Q106 - Q125)",
    "text": "What is the degree of a leaf node in any tree?",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "0"
      },
      {
        "key": "C",
        "text": "2"
      },
      {
        "key": "D",
        "text": "-1"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Degree of a node is the number of children it has. Leaf nodes have 0 children, so their degree is 0.",
    "trap": "Do not confuse tree node degree (number of children) with graph vertex degree (number of incident edges)."
  },
  {
    "id": 117,
    "unitId": 7,
    "unitTitle": "Unit 7: Trees & Binary Tree Properties (Q106 - Q125)",
    "text": "A tree with 25 vertices has how many edges?",
    "options": [
      {
        "key": "A",
        "text": "25"
      },
      {
        "key": "B",
        "text": "24"
      },
      {
        "key": "C",
        "text": "50"
      },
      {
        "key": "D",
        "text": "12"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Any tree with n vertices has exactly n - 1 edges: 25 - 1 = 24.",
    "trap": "Direct property: |E| = |V| - 1 for any tree."
  },
  {
    "id": 118,
    "unitId": 7,
    "unitTitle": "Unit 7: Trees & Binary Tree Properties (Q106 - Q125)",
    "text": "How many distinct binary search trees (BSTs) can be created with 4 distinct keys?",
    "options": [
      {
        "key": "A",
        "text": "14"
      },
      {
        "key": "B",
        "text": "24"
      },
      {
        "key": "C",
        "text": "5"
      },
      {
        "key": "D",
        "text": "42"
      }
    ],
    "correct": "A",
    "difficulty": "Medium",
    "explanation": "Catalan number C4 = (1 / 5) * (8 choose 4) = (1 / 5) * (70) = 14 distinct BSTs.",
    "trap": "C1 = 1, C2 = 2, C3 = 5, C4 = 14, C5 = 42."
  },
  {
    "id": 119,
    "unitId": 7,
    "unitTitle": "Unit 7: Trees & Binary Tree Properties (Q106 - Q125)",
    "text": "In which tree traversal is the root node visited FIRST?",
    "options": [
      {
        "key": "A",
        "text": "Inorder"
      },
      {
        "key": "B",
        "text": "Preorder"
      },
      {
        "key": "C",
        "text": "Postorder"
      },
      {
        "key": "D",
        "text": "Euler tour"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Preorder traversal visits Node (Root) first, then Left Subtree, then Right Subtree (NLR).",
    "trap": "Postorder visits root last; Inorder visits root in the middle."
  },
  {
    "id": 120,
    "unitId": 7,
    "unitTitle": "Unit 7: Trees & Binary Tree Properties (Q106 - Q125)",
    "text": "In which tree traversal is the root node visited LAST?",
    "options": [
      {
        "key": "A",
        "text": "Inorder"
      },
      {
        "key": "B",
        "text": "Preorder"
      },
      {
        "key": "C",
        "text": "Postorder"
      },
      {
        "key": "D",
        "text": "Level order"
      }
    ],
    "correct": "C",
    "difficulty": "Easy",
    "explanation": "Postorder visits Left Subtree, Right Subtree, and finally the Node (Root) (LRN).",
    "trap": "Post means after/last."
  },
  {
    "id": 121,
    "unitId": 7,
    "unitTitle": "Unit 7: Trees & Binary Tree Properties (Q106 - Q125)",
    "text": "A full binary tree has 20 internal nodes. What is the total number of nodes in the tree?",
    "options": [
      {
        "key": "A",
        "text": "40"
      },
      {
        "key": "B",
        "text": "41"
      },
      {
        "key": "C",
        "text": "39"
      },
      {
        "key": "D",
        "text": "21"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "In a full binary tree with I internal nodes: Leaf nodes L = I + 1 = 20 + 1 = 21. Total nodes N = I + L = 20 + 21 = 41. (Or direct formula: N = 2I + 1 = 2(20) + 1 = 41).",
    "trap": "Total nodes in a full binary tree with I internal nodes is always 2I + 1."
  },
  {
    "id": 122,
    "unitId": 7,
    "unitTitle": "Unit 7: Trees & Binary Tree Properties (Q106 - Q125)",
    "text": "What is the height of a degenerate (completely skewed) binary tree with n nodes?",
    "options": [
      {
        "key": "A",
        "text": "log2(n)"
      },
      {
        "key": "B",
        "text": "n - 1"
      },
      {
        "key": "C",
        "text": "n / 2"
      },
      {
        "key": "D",
        "text": "2^n"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Degenerate tree basically ek linear linked list ban jata hai, jahan har node ka sirf 1 child hota hai. Height = n - 1.",
    "trap": "Degenerate tree has worst-case height and O(n) search time."
  },
  {
    "id": 123,
    "unitId": 7,
    "unitTitle": "Unit 7: Trees & Binary Tree Properties (Q106 - Q125)",
    "text": "In a binary tree, an ancestor of node X is defined as:",
    "options": [
      {
        "key": "A",
        "text": "Any node on the unique path from root to X (excluding X)"
      },
      {
        "key": "B",
        "text": "Only the immediate parent of X"
      },
      {
        "key": "C",
        "text": "Any leaf node"
      },
      {
        "key": "D",
        "text": "Siblings of X"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "Root se node X tak ke path par jitne bhi nodes aate hain (excluding X), woh sabhi node X ke ancestors hote hain.",
    "trap": "Immediate parent is just one ancestor; all nodes above X on the path to root are ancestors."
  },
  {
    "id": 124,
    "unitId": 7,
    "unitTitle": "Unit 7: Trees & Binary Tree Properties (Q106 - Q125)",
    "text": "If every internal node of a tree has at most m children, the tree is called an:",
    "options": [
      {
        "key": "A",
        "text": "Binary tree"
      },
      {
        "key": "B",
        "text": "m-ary (or multiway) tree"
      },
      {
        "key": "C",
        "text": "AVL tree"
      },
      {
        "key": "D",
        "text": "Bipartite tree"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Generalization of binary trees (where m = 2) to m children is called an m-ary tree.",
    "trap": "When m = 3, it is ternary; general m is m-ary."
  },
  {
    "id": 125,
    "unitId": 7,
    "unitTitle": "Unit 7: Trees & Binary Tree Properties (Q106 - Q125)",
    "text": "Can a binary tree be uniquely reconstructed if ONLY Preorder and Postorder traversals are given?",
    "options": [
      {
        "key": "A",
        "text": "Yes, always"
      },
      {
        "key": "B",
        "text": "No, unless the tree is known to be a Full Binary Tree"
      },
      {
        "key": "C",
        "text": "Never possible"
      },
      {
        "key": "D",
        "text": "Only if all keys are negative"
      }
    ],
    "correct": "B",
    "difficulty": "Difficult",
    "explanation": "General binary tree cannot be reconstructed uniquely without Inorder. BUT if the tree is strictly Full (every node has 0 or 2 children), then Preorder + Postorder can uniquely construct it!",
    "trap": "Standard answer is NO for general binary trees, but for FULL binary trees it is YES."
  },
  {
    "id": 126,
    "unitId": 8,
    "unitTitle": "Unit 8: Binary Search Trees & AVL Trees (Q126 - Q145)",
    "text": "The Inorder traversal of a Binary Search Tree (BST) always produces keys in:",
    "options": [
      {
        "key": "A",
        "text": "Random order"
      },
      {
        "key": "B",
        "text": "Strictly ascending (sorted) order"
      },
      {
        "key": "C",
        "text": "Strictly descending order"
      },
      {
        "key": "D",
        "text": "Level-wise order"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "BST property: Left < Root < Right. Inorder visits Left, Root, Right, which guarantees keys in strictly ascending sorted order.",
    "trap": "This is the most celebrated property of BSTs; use it to identify BSTs in MCQ options!"
  },
  {
    "id": 127,
    "unitId": 8,
    "unitTitle": "Unit 8: Binary Search Trees & AVL Trees (Q126 - Q145)",
    "text": "What is the worst-case time complexity of searching a key in a Binary Search Tree of n nodes?",
    "options": [
      {
        "key": "A",
        "text": "O(log n)"
      },
      {
        "key": "B",
        "text": "O(n)"
      },
      {
        "key": "C",
        "text": "O(n log n)"
      },
      {
        "key": "D",
        "text": "O(1)"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Worst case tab hota hai jab tree completely skewed ban jaye (e.g., elements inserted in already sorted order). Skewed BST linked list ki tarah behave karta hai, taking O(n) time.",
    "trap": "Average case is O(log n), but worst case is O(n)."
  },
  {
    "id": 128,
    "unitId": 8,
    "unitTitle": "Unit 8: Binary Search Trees & AVL Trees (Q126 - Q145)",
    "text": "What is the allowed range of Balance Factor for any node in an AVL Tree?",
    "options": [
      {
        "key": "A",
        "text": "{0, 1}"
      },
      {
        "key": "B",
        "text": "{-1, 0, 1}"
      },
      {
        "key": "C",
        "text": "{-2, 0, 2}"
      },
      {
        "key": "D",
        "text": "Any integer"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "AVL tree self-balancing BST hota hai jisme har node ka balance factor BF = Height(Left) - Height(Right) strictly {-1, 0, +1} hona chahiye.",
    "trap": "If BF becomes +2 or -2, rotations are immediately triggered."
  },
  {
    "id": 129,
    "unitId": 8,
    "unitTitle": "Unit 8: Binary Search Trees & AVL Trees (Q126 - Q145)",
    "text": "When a new node is inserted into the right subtree of the left child, causing an imbalance, which rotation is required?",
    "options": [
      {
        "key": "A",
        "text": "LL Rotation"
      },
      {
        "key": "B",
        "text": "RR Rotation"
      },
      {
        "key": "C",
        "text": "LR Rotation"
      },
      {
        "key": "D",
        "text": "RL Rotation"
      }
    ],
    "correct": "C",
    "difficulty": "Medium",
    "explanation": "Left child (L) ke Right subtree (R) mein insert hone se LR imbalance banta hai. Iske liye LR double rotation (first left rotate on child, then right rotate on parent) ki zarurat hoti hai.",
    "trap": "LR imbalance requires Left then Right rotation."
  },
  {
    "id": 130,
    "unitId": 8,
    "unitTitle": "Unit 8: Binary Search Trees & AVL Trees (Q126 - Q145)",
    "text": "What is the minimum number of nodes in an AVL Tree of height h = 3 (where height of single node is 0)?",
    "options": [
      {
        "key": "A",
        "text": "4"
      },
      {
        "key": "B",
        "text": "7"
      },
      {
        "key": "C",
        "text": "8"
      },
      {
        "key": "D",
        "text": "10"
      }
    ],
    "correct": "B",
    "difficulty": "Difficult",
    "explanation": "Recurrence: N(h) = N(h-1) + N(h-2) + 1. Base cases: N(0) = 1, N(1) = 2.\nN(2) = N(1) + N(0) + 1 = 2 + 1 + 1 = 4.\nN(3) = N(2) + N(1) + 1 = 4 + 2 + 1 = 7 nodes.",
    "trap": "For height 3, minimum nodes is 7, maximum is 2^(3+1) - 1 = 15."
  },
  {
    "id": 131,
    "unitId": 8,
    "unitTitle": "Unit 8: Binary Search Trees & AVL Trees (Q126 - Q145)",
    "text": "When deleting a node with two children in a BST, it is replaced by its:",
    "options": [
      {
        "key": "A",
        "text": "Root node"
      },
      {
        "key": "B",
        "text": "Inorder Successor or Inorder Predecessor"
      },
      {
        "key": "C",
        "text": "Leftmost child of tree"
      },
      {
        "key": "D",
        "text": "Any leaf node"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Two children waale node ko delete karte time BST property maintain rakhne ke liye use ya toh Inorder Predecessor (maximum of left subtree) ya Inorder Successor (minimum of right subtree) se replace karte hain.",
    "trap": "Replacing with arbitrary nodes violates the BST property."
  },
  {
    "id": 132,
    "unitId": 8,
    "unitTitle": "Unit 8: Binary Search Trees & AVL Trees (Q126 - Q145)",
    "text": "What is the worst-case time complexity of search, insertion, and deletion in an AVL Tree with n nodes?",
    "options": [
      {
        "key": "A",
        "text": "O(n)"
      },
      {
        "key": "B",
        "text": "O(log n)"
      },
      {
        "key": "C",
        "text": "O(n^2)"
      },
      {
        "key": "D",
        "text": "O(1)"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Kyunki AVL tree hamesha balanced rehta hai (height bounded by 1.44 log2 n), iske search, insert, aur delete operations sabhi worst case mein bhi strictly O(log n) hote hain.",
    "trap": "Unlike regular BST which degrades to O(n), AVL guarantees O(log n)."
  },
  {
    "id": 133,
    "unitId": 8,
    "unitTitle": "Unit 8: Binary Search Trees & AVL Trees (Q126 - Q145)",
    "text": "If the Preorder traversal of a BST is: `30, 20, 10, 25, 40, 35, 50`, what is its Inorder traversal?",
    "options": [
      {
        "key": "A",
        "text": "10, 20, 25, 30, 35, 40, 50"
      },
      {
        "key": "B",
        "text": "50, 40, 35, 30, 25, 20, 10"
      },
      {
        "key": "C",
        "text": "30, 20, 40, 10, 25, 35, 50"
      },
      {
        "key": "D",
        "text": "Cannot be determined without Postorder"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "Trick question! Kisi bhi BST ka Inorder traversal hamesha elements ka sorted order hota hai. Bas diye gaye elements ko sort kar do: `10, 20, 25, 30, 35, 40, 50`!",
    "trap": "Do not waste time drawing the tree; just sort the elements in ascending order!"
  },
  {
    "id": 134,
    "unitId": 8,
    "unitTitle": "Unit 8: Binary Search Trees & AVL Trees (Q126 - Q145)",
    "text": "An AVL tree has how many single rotations and double rotations respectively?",
    "options": [
      {
        "key": "A",
        "text": "2 single (LL, RR) and 2 double (LR, RL)"
      },
      {
        "key": "B",
        "text": "4 single and 0 double"
      },
      {
        "key": "C",
        "text": "1 single and 3 double"
      },
      {
        "key": "D",
        "text": "0 single and 4 double"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "LL aur RR single rotations hain (1 rotation around root). LR aur RL double rotations hain (2 rotations: child then root).",
    "trap": "LR and RL are composite double rotations."
  },
  {
    "id": 135,
    "unitId": 8,
    "unitTitle": "Unit 8: Binary Search Trees & AVL Trees (Q126 - Q145)",
    "text": "In a BST, the maximum key is always located at:",
    "options": [
      {
        "key": "A",
        "text": "The root node"
      },
      {
        "key": "B",
        "text": "The rightmost node"
      },
      {
        "key": "C",
        "text": "The leftmost node"
      },
      {
        "key": "D",
        "text": "Any leaf node"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "BST property ke mutabiq bade elements hamesha right mein hote hain, isliye root se lagaatar right pointers follow karne par rightmost node maximum element hota hai.",
    "trap": "Minimum element leftmost node par hota hai."
  },
  {
    "id": 136,
    "unitId": 8,
    "unitTitle": "Unit 8: Binary Search Trees & AVL Trees (Q126 - Q145)",
    "text": "What is the maximum height of an AVL tree with n nodes?",
    "options": [
      {
        "key": "A",
        "text": "log2(n)"
      },
      {
        "key": "B",
        "text": "1.44 log2(n)"
      },
      {
        "key": "C",
        "text": "n - 1"
      },
      {
        "key": "D",
        "text": "2 * log2(n)"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "AVL tree height formula: h <= 1.4404 * log2(n + 2) - 0.328 ~= 1.44 log2 n.",
    "trap": "Red-Black tree has maximum height 2 log2(n + 1); AVL is tighter at 1.44 log2 n."
  },
  {
    "id": 137,
    "unitId": 8,
    "unitTitle": "Unit 8: Binary Search Trees & AVL Trees (Q126 - Q145)",
    "text": "Which of the following is true regarding AVL Trees compared to Red-Black Trees?",
    "options": [
      {
        "key": "A",
        "text": "AVL trees are more rigidly balanced, making search faster but insertion/deletion slower due to more rotations"
      },
      {
        "key": "B",
        "text": "Red-Black trees are strictly more balanced than AVL trees"
      },
      {
        "key": "C",
        "text": "AVL trees require more storage space for colors"
      },
      {
        "key": "D",
        "text": "AVL trees have O(n) search time"
      }
    ],
    "correct": "A",
    "difficulty": "Difficult",
    "explanation": "AVL trees strictly height balanced hoti hain (BF <= 1), isliye AVL mein search faster hota hai. Red-Black trees thodi loose hoti hain (height <= 2 log n), jisse insertion/deletion mein kam rotations lagte hain.",
    "trap": "AVL is preferred for lookup-intensive systems; Red-Black for insert/delete-intensive systems."
  },
  {
    "id": 138,
    "unitId": 8,
    "unitTitle": "Unit 8: Binary Search Trees & AVL Trees (Q126 - Q145)",
    "text": "What is the Balance Factor of a leaf node in any AVL tree?",
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "1"
      },
      {
        "key": "C",
        "text": "-1"
      },
      {
        "key": "D",
        "text": "2"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "Leaf node ka left child bhi NULL hota hai (height -1) aur right child bhi NULL (height -1). BF = (-1) - (-1) = 0.",
    "trap": "Leaf node has balance factor exactly 0."
  },
  {
    "id": 139,
    "unitId": 8,
    "unitTitle": "Unit 8: Binary Search Trees & AVL Trees (Q126 - Q145)",
    "text": "In a BST, what is the Inorder Successor of a node with a non-empty right subtree?",
    "options": [
      {
        "key": "A",
        "text": "The minimum node in its right subtree (leftmost child of right subtree)"
      },
      {
        "key": "B",
        "text": "Its parent node"
      },
      {
        "key": "C",
        "text": "The maximum node in its left subtree"
      },
      {
        "key": "D",
        "text": "The root node"
      }
    ],
    "correct": "A",
    "difficulty": "Medium",
    "explanation": "Inorder successor means the immediately next larger element. Agar right subtree exist karta hai, toh right subtree ka sabse chhota element (leftmost node) hi Inorder Successor hota hai.",
    "trap": "If right subtree is empty, Inorder successor is the deepest ancestor whose left child is also an ancestor."
  },
  {
    "id": 140,
    "unitId": 8,
    "unitTitle": "Unit 8: Binary Search Trees & AVL Trees (Q126 - Q145)",
    "text": "Inserting keys into a BST in strictly descending order results in what shape of tree?",
    "options": [
      {
        "key": "A",
        "text": "Perfect binary tree"
      },
      {
        "key": "B",
        "text": "Left-skewed binary tree"
      },
      {
        "key": "C",
        "text": "Right-skewed binary tree"
      },
      {
        "key": "D",
        "text": "Full binary tree"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Har naya key pichhle key se chhota hoga, isliye har naya element left child banta chala jayega (Left-Skewed Tree).",
    "trap": "Ascending order creates Right-Skewed; Descending creates Left-Skewed."
  },
  {
    "id": 141,
    "unitId": 8,
    "unitTitle": "Unit 8: Binary Search Trees & AVL Trees (Q126 - Q145)",
    "text": "What is the minimum number of nodes in an AVL tree of height h = 4?",
    "options": [
      {
        "key": "A",
        "text": "12"
      },
      {
        "key": "B",
        "text": "16"
      },
      {
        "key": "C",
        "text": "20"
      },
      {
        "key": "D",
        "text": "15"
      }
    ],
    "correct": "A",
    "difficulty": "Medium",
    "explanation": "N(0)=1, N(1)=2, N(2)=4, N(3)=7, N(4) = N(3) + N(2) + 1 = 7 + 4 + 1 = 12 nodes.",
    "trap": "Follow recurrence: N(h) = N(h-1) + N(h-2) + 1."
  },
  {
    "id": 142,
    "unitId": 8,
    "unitTitle": "Unit 8: Binary Search Trees & AVL Trees (Q126 - Q145)",
    "text": "Which rotation is performed when a node is inserted into the left subtree of the left child?",
    "options": [
      {
        "key": "A",
        "text": "Single Right Rotation (LL Rotation)"
      },
      {
        "key": "B",
        "text": "Single Left Rotation (RR Rotation)"
      },
      {
        "key": "C",
        "text": "Double LR Rotation"
      },
      {
        "key": "D",
        "text": "Double RL Rotation"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "LL case: Left child ke Left subtree mein insertion causes right-leaning push, which is balanced by a Single Right Rotation around the unbalanced node.",
    "trap": "LL imbalance is resolved by RIGHT rotation; RR imbalance by LEFT rotation."
  },
  {
    "id": 143,
    "unitId": 8,
    "unitTitle": "Unit 8: Binary Search Trees & AVL Trees (Q126 - Q145)",
    "text": "Can a BST contain duplicate keys in its standard textbook implementation?",
    "options": [
      {
        "key": "A",
        "text": "No, all keys must be distinct"
      },
      {
        "key": "B",
        "text": "Yes, duplicates are allowed in both subtrees simultaneously"
      },
      {
        "key": "C",
        "text": "Only at the root"
      },
      {
        "key": "D",
        "text": "Yes, but only in red-black trees"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "Standard BST formal definition specifies strict inequalities: Left < Root < Right. Duplicates are either disallowed or handled with a counter in the node.",
    "trap": "If duplicates are allowed, a convention (e.g. <= left) must be consistently maintained."
  },
  {
    "id": 144,
    "unitId": 8,
    "unitTitle": "Unit 8: Binary Search Trees & AVL Trees (Q126 - Q145)",
    "text": "How many rotations are required in the WORST case after an insertion in an AVL tree?",
    "options": [
      {
        "key": "A",
        "text": "At most 1 single or double rotation"
      },
      {
        "key": "B",
        "text": "O(log n) rotations"
      },
      {
        "key": "C",
        "text": "O(n) rotations"
      },
      {
        "key": "D",
        "text": "Exactly 4 rotations"
      }
    ],
    "correct": "A",
    "difficulty": "Difficult",
    "explanation": "Beautiful property of AVL trees: Single insertion requires AT MOST ONE rotation (either single or double) to restore balance to the entire tree! Deletion, however, may require up to O(log n) rotations along the path to root.",
    "trap": "Insertion needs at most 1 rotation; Deletion may propagate O(log n) rotations."
  },
  {
    "id": 145,
    "unitId": 8,
    "unitTitle": "Unit 8: Binary Search Trees & AVL Trees (Q126 - Q145)",
    "text": "What is the time complexity to find the minimum element in an AVL tree with n nodes?",
    "options": [
      {
        "key": "A",
        "text": "O(1)"
      },
      {
        "key": "B",
        "text": "O(log n)"
      },
      {
        "key": "C",
        "text": "O(n)"
      },
      {
        "key": "D",
        "text": "O(n log n)"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Leftmost leaf tak traverse karna hota hai. Since AVL tree height is strictly bounded by O(log n), finding minimum takes O(log n) time.",
    "trap": "In regular skewed BST it can take O(n), but in AVL it is strictly O(log n)."
  },
  {
    "id": 146,
    "unitId": 9,
    "unitTitle": "Unit 9: B-Trees & B+ Trees (Q146 - Q163)",
    "text": "In a B-Tree of order m, what is the maximum number of keys an internal node can hold?",
    "options": [
      {
        "key": "A",
        "text": "m"
      },
      {
        "key": "B",
        "text": "m - 1"
      },
      {
        "key": "C",
        "text": "ceil(m / 2)"
      },
      {
        "key": "D",
        "text": "2m"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Order m ka matlab max children = m. Ek node mein keys ki sankhya hamesha children se 1 kam hoti hai: Max Keys = m - 1.",
    "trap": "Max children is m, but Max keys is m - 1."
  },
  {
    "id": 147,
    "unitId": 9,
    "unitTitle": "Unit 9: B-Trees & B+ Trees (Q146 - Q163)",
    "text": "In a B-Tree of order 5, what is the minimum number of keys that a non-root internal node must contain?",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "4"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "Min keys formula = ceil(m / 2) - 1. For m = 5: ceil(5 / 2) - 1 = ceil(2.5) - 1 = 3 - 1 = 2 keys.",
    "trap": "ceil(5/2) = 3 gives the minimum CHILDREN; subtract 1 to get minimum KEYS (3 - 1 = 2)."
  },
  {
    "id": 148,
    "unitId": 9,
    "unitTitle": "Unit 9: B-Trees & B+ Trees (Q146 - Q163)",
    "text": "Where are data records and pointers stored in a B+ Tree?",
    "options": [
      {
        "key": "A",
        "text": "In internal nodes only"
      },
      {
        "key": "B",
        "text": "In all nodes equally"
      },
      {
        "key": "C",
        "text": "ONLY in the leaf nodes"
      },
      {
        "key": "D",
        "text": "In the root node only"
      }
    ],
    "correct": "C",
    "difficulty": "Easy",
    "explanation": "B+ Tree mein actual data pointers sirf aur sirf LEAF NODES mein store hote hain. Internal nodes sirf router/index keys store karte hain.",
    "trap": "In standard B-Trees, data is stored in both internal and leaf nodes."
  },
  {
    "id": 149,
    "unitId": 9,
    "unitTitle": "Unit 9: B-Trees & B+ Trees (Q146 - Q163)",
    "text": "Why are leaf nodes linked together as a linked list in a B+ Tree?",
    "options": [
      {
        "key": "A",
        "text": "To reduce height"
      },
      {
        "key": "B",
        "text": "To enable extremely efficient range queries and sequential scanning"
      },
      {
        "key": "C",
        "text": "To prevent deletion"
      },
      {
        "key": "D",
        "text": "To store negative numbers"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Database queries jaise `WHERE age BETWEEN 20 AND 30` ke liye B+ tree direct leaf linked list ko linearly traverse kar leta hai bina root par wapas jaye.",
    "trap": "Range search efficiency is the primary reason databases use B+ Trees over B-Trees."
  },
  {
    "id": 150,
    "unitId": 9,
    "unitTitle": "Unit 9: B-Trees & B+ Trees (Q146 - Q163)",
    "text": "In a B-Tree of order m, what is the minimum number of children the ROOT node can have (if not a leaf)?",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "ceil(m / 2)"
      },
      {
        "key": "D",
        "text": "m - 1"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "Root node ke liye special exception hota hai: Root must have AT LEAST 2 children (unless the tree has only 1 node). It does NOT need to satisfy the ceil(m/2) rule.",
    "trap": "Internal nodes require ceil(m/2) children, but the ROOT only requires at least 2 children."
  },
  {
    "id": 151,
    "unitId": 9,
    "unitTitle": "Unit 9: B-Trees & B+ Trees (Q146 - Q163)",
    "text": "All leaf nodes in a B-Tree are located at:",
    "options": [
      {
        "key": "A",
        "text": "Different levels depending on balance"
      },
      {
        "key": "B",
        "text": "The EXACT same level (depth)"
      },
      {
        "key": "C",
        "text": "Level 1"
      },
      {
        "key": "D",
        "text": "Alternating levels"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "B-Tree hamesha perfectly height balanced hoti hai: Saare leaf nodes exact same depth par hote hain.",
    "trap": "Leaves can never be at different levels in a B-Tree."
  },
  {
    "id": 152,
    "unitId": 9,
    "unitTitle": "Unit 9: B-Trees & B+ Trees (Q146 - Q163)",
    "text": "Why are B-Trees preferred over Binary Search Trees for disk-based databases?",
    "options": [
      {
        "key": "A",
        "text": "B-Trees have shorter height and larger node capacity, minimizing expensive disk I/O operations"
      },
      {
        "key": "B",
        "text": "BST uses too much RAM"
      },
      {
        "key": "C",
        "text": "B-Trees don't need sorting"
      },
      {
        "key": "D",
        "text": "B-Trees are faster in CPU cache"
      }
    ],
    "correct": "A",
    "difficulty": "Medium",
    "explanation": "Disk block reading bohot slow hoti hai. B-Tree ek hi disk block mein multiple keys fit kar deta hai, jisse tree ki height bohot kam hoti hai (2-3 levels for millions of records), minimizing disk reads.",
    "trap": "Disk access time is the bottleneck, not CPU cycles."
  },
  {
    "id": 153,
    "unitId": 9,
    "unitTitle": "Unit 9: B-Trees & B+ Trees (Q146 - Q163)",
    "text": "When a node overflows in a B-Tree during insertion, what operation is performed?",
    "options": [
      {
        "key": "A",
        "text": "Rotation"
      },
      {
        "key": "B",
        "text": "Node Splitting and pushing the median key up to the parent"
      },
      {
        "key": "C",
        "text": "Deletion of root"
      },
      {
        "key": "D",
        "text": "Rehashing"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Jab node mein m keys ho jaati hain, node split hota hai do halves mein aur median key parent node mein push ho jaati hai.",
    "trap": "B-Trees grow from the leaves towards the root via node splitting."
  },
  {
    "id": 154,
    "unitId": 9,
    "unitTitle": "Unit 9: B-Trees & B+ Trees (Q146 - Q163)",
    "text": "In a B-Tree of order 4 (2-3-4 Tree), what is the maximum number of children an internal node can have?",
    "options": [
      {
        "key": "A",
        "text": "2"
      },
      {
        "key": "B",
        "text": "3"
      },
      {
        "key": "C",
        "text": "4"
      },
      {
        "key": "D",
        "text": "5"
      }
    ],
    "correct": "C",
    "difficulty": "Easy",
    "explanation": "Order m = 4 means maximum number of children is m = 4.",
    "trap": "Order defines maximum children."
  },
  {
    "id": 155,
    "unitId": 9,
    "unitTitle": "Unit 9: B-Trees & B+ Trees (Q146 - Q163)",
    "text": "In a B-Tree of order 4, what are the possible numbers of keys an internal non-root node can contain?",
    "options": [
      {
        "key": "A",
        "text": "1, 2, or 3 keys"
      },
      {
        "key": "B",
        "text": "Exactly 4 keys"
      },
      {
        "key": "C",
        "text": "2 or 3 keys"
      },
      {
        "key": "D",
        "text": "0 keys"
      }
    ],
    "correct": "A",
    "difficulty": "Medium",
    "explanation": "Min keys = ceil(4 / 2) - 1 = 2 - 1 = 1 key. Max keys = 4 - 1 = 3 keys. So node can hold 1, 2, or 3 keys.",
    "trap": "A 2-3-4 tree node can have 1, 2, or 3 keys (having 2, 3, or 4 children)."
  },
  {
    "id": 156,
    "unitId": 9,
    "unitTitle": "Unit 9: B-Trees & B+ Trees (Q146 - Q163)",
    "text": "What happens when a key is deleted from a leaf in a B-Tree and causes underflow?",
    "options": [
      {
        "key": "A",
        "text": "Tree crashes"
      },
      {
        "key": "B",
        "text": "The node borrows a key from an immediate sibling or merges with a sibling"
      },
      {
        "key": "C",
        "text": "The root is automatically deleted"
      },
      {
        "key": "D",
        "text": "Tree converts to BST"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "Underflow handle karne ke liye pehle sibling se borrow (key redistribution) ki koshish karte hain. Agar sibling ke paas bhi minimum keys hon, toh dono siblings parent key ke saath merge ho jaate hain.",
    "trap": "Borrow first, merge if borrowing is impossible."
  },
  {
    "id": 157,
    "unitId": 9,
    "unitTitle": "Unit 9: B-Trees & B+ Trees (Q146 - Q163)",
    "text": "In a B+ Tree, search keys present in internal nodes:",
    "options": [
      {
        "key": "A",
        "text": "Never appear in leaf nodes"
      },
      {
        "key": "B",
        "text": "MUST also appear in leaf nodes along with their associated data records"
      },
      {
        "key": "C",
        "text": "Are encrypted"
      },
      {
        "key": "D",
        "text": "Store actual file contents"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "B+ Tree internal nodes serve only as routers/indices. Every search key must ultimately reside in a leaf node where the actual record pointer is stored.",
    "trap": "Key duplication between internal and leaf nodes is an inherent feature of B+ Trees."
  },
  {
    "id": 158,
    "unitId": 9,
    "unitTitle": "Unit 9: B-Trees & B+ Trees (Q146 - Q163)",
    "text": "What is the order of growth for search time in a B-Tree with n keys and order m?",
    "options": [
      {
        "key": "A",
        "text": "O(log_m n)"
      },
      {
        "key": "B",
        "text": "O(n)"
      },
      {
        "key": "C",
        "text": "O(m * n)"
      },
      {
        "key": "D",
        "text": "O(n^2)"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "Tree height is proportional to log base m of n. Search takes O(log_m n) disk operations.",
    "trap": "Since m is large (often 100 to 1000 in DBs), log_m n is extremely small (2 to 4)."
  },
  {
    "id": 159,
    "unitId": 9,
    "unitTitle": "Unit 9: B-Trees & B+ Trees (Q146 - Q163)",
    "text": "Which popular database storage engine uses B+ Trees for primary clustered indexing?",
    "options": [
      {
        "key": "A",
        "text": "MySQL InnoDB"
      },
      {
        "key": "B",
        "text": "Redis"
      },
      {
        "key": "C",
        "text": "Memcached"
      },
      {
        "key": "D",
        "text": "Apache Kafka"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "MySQL InnoDB, PostgreSQL, aur Oracle tables primary index ke liye B+ Trees use karte hain.",
    "trap": "Redis is an in-memory hash/skiplist store; InnoDB is standard B+ Tree."
  },
  {
    "id": 160,
    "unitId": 9,
    "unitTitle": "Unit 9: B-Trees & B+ Trees (Q146 - Q163)",
    "text": "If a B-Tree of order m = 3 has 3 levels (root at level 1), what is the maximum number of keys it can hold?",
    "options": [
      {
        "key": "A",
        "text": "8"
      },
      {
        "key": "B",
        "text": "26"
      },
      {
        "key": "C",
        "text": "27"
      },
      {
        "key": "D",
        "text": "13"
      }
    ],
    "correct": "B",
    "difficulty": "Difficult",
    "explanation": "Max keys formula: m^h - 1. For m = 3, h = 3: 3^3 - 1 = 27 - 1 = 26 keys. (Level 1: 2 keys, Level 2: 3 nodes * 2 = 6 keys, Level 3: 9 nodes * 2 = 18 keys. Total = 2 + 6 + 18 = 26).",
    "trap": "Formula is m^h - 1, not m^h."
  },
  {
    "id": 161,
    "unitId": 9,
    "unitTitle": "Unit 9: B-Trees & B+ Trees (Q146 - Q163)",
    "text": "What distinguishes a B* Tree from a standard B-Tree?",
    "options": [
      {
        "key": "A",
        "text": "B* Tree internal nodes must be at least 2/3 full instead of 1/2 full"
      },
      {
        "key": "B",
        "text": "B* Tree has no leaves"
      },
      {
        "key": "C",
        "text": "B* Tree stores characters only"
      },
      {
        "key": "D",
        "text": "B* Tree is unbalanced"
      }
    ],
    "correct": "A",
    "difficulty": "Difficult",
    "explanation": "B* Tree node fill factor ko increase karta hai: Non-root nodes must be at least 2/3 full (floor((2m-1)/3) keys), reducing node splits and increasing disk space utilization.",
    "trap": "Standard B-Tree is 1/2 full; B* Tree is 2/3 full."
  },
  {
    "id": 162,
    "unitId": 9,
    "unitTitle": "Unit 9: B-Trees & B+ Trees (Q146 - Q163)",
    "text": "Can a B-Tree grow taller from the leaves?",
    "options": [
      {
        "key": "A",
        "text": "Yes, by adding leaves at the bottom"
      },
      {
        "key": "B",
        "text": "No, B-Trees grow upwards towards the root when the root splits"
      },
      {
        "key": "C",
        "text": "B-Trees never change height"
      },
      {
        "key": "D",
        "text": "Only when elements are deleted"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "B-Tree hamesha leaves par insert karta hai. Jab root full ho kar split hota hai, tab ek naya root banta hai aur tree ki height 1 level badhti hai (Grows from root upwards).",
    "trap": "Binary trees grow downwards; B-Trees grow upwards!"
  },
  {
    "id": 163,
    "unitId": 9,
    "unitTitle": "Unit 9: B-Trees & B+ Trees (Q146 - Q163)",
    "text": "In a B-Tree of order 7, what is the minimum number of children for a non-root internal node?",
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "4"
      },
      {
        "key": "C",
        "text": "5"
      },
      {
        "key": "D",
        "text": "6"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "Min children = ceil(m / 2) = ceil(7 / 2) = ceil(3.5) = 4 children.",
    "trap": "ceil(7/2) is 4."
  },
  {
    "id": 164,
    "unitId": 10,
    "unitTitle": "Unit 10: Hashing & Collision Resolution (Q164 - Q182)",
    "text": "What is the Load Factor (alpha) of a Hash Table with n keys and table size m?",
    "options": [
      {
        "key": "A",
        "text": "m / n"
      },
      {
        "key": "B",
        "text": "n / m"
      },
      {
        "key": "C",
        "text": "n * m"
      },
      {
        "key": "D",
        "text": "n + m"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Load Factor alpha = n / m (Number of keys / Table size). Yeh table ki fullness ko measure karta hai.",
    "trap": "Do not invert: it is n / m, not m / n."
  },
  {
    "id": 165,
    "unitId": 10,
    "unitTitle": "Unit 10: Hashing & Collision Resolution (Q164 - Q182)",
    "text": "Which collision resolution technique suffers from Primary Clustering?",
    "options": [
      {
        "key": "A",
        "text": "Separate Chaining"
      },
      {
        "key": "B",
        "text": "Linear Probing"
      },
      {
        "key": "C",
        "text": "Quadratic Probing"
      },
      {
        "key": "D",
        "text": "Double Hashing"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Linear probing mein agar kisi index par collision hota hai toh consecutive occupied slots ka cluster ban jata hai (Primary Clustering), jisse search time dramatically badh jata hai.",
    "trap": "Quadratic probing causes Secondary Clustering; Linear probing causes Primary Clustering."
  },
  {
    "id": 166,
    "unitId": 10,
    "unitTitle": "Unit 10: Hashing & Collision Resolution (Q164 - Q182)",
    "text": "What is the probe sequence formula in Double Hashing for probe attempt i?",
    "options": [
      {
        "key": "A",
        "text": "(h1(k) + i * h2(k)) % m"
      },
      {
        "key": "B",
        "text": "(h1(k) * h2(k) + i) % m"
      },
      {
        "key": "C",
        "text": "(h1(k) + i^2) % m"
      },
      {
        "key": "D",
        "text": "(h1(k) + h2(k)) % m"
      }
    ],
    "correct": "A",
    "difficulty": "Medium",
    "explanation": "Double Hashing probe sequence: `hash(k, i) = (h1(k) + i * h2(k)) % m`. Yahan step size `h2(k)` key par depend karta hai, eliminating clustering.",
    "trap": "h2(k) must never evaluate to 0 and must be relatively prime to m."
  },
  {
    "id": 167,
    "unitId": 10,
    "unitTitle": "Unit 10: Hashing & Collision Resolution (Q164 - Q182)",
    "text": "In Open Addressing hashing, what is the maximum possible value of the Load Factor alpha?",
    "options": [
      {
        "key": "A",
        "text": "alpha can be any value > 1"
      },
      {
        "key": "B",
        "text": "alpha <= 1"
      },
      {
        "key": "C",
        "text": "alpha must be 0"
      },
      {
        "key": "D",
        "text": "alpha = 2"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "Open Addressing mein har slot mein maximum 1 key store ho sakti hai. Isliye total keys n kabhi bhi table size m se zyada nahi ho sakti: n <= m, so alpha <= 1.",
    "trap": "Separate chaining can have alpha > 1, but open addressing CANNOT exceed 1."
  },
  {
    "id": 168,
    "unitId": 10,
    "unitTitle": "Unit 10: Hashing & Collision Resolution (Q164 - Q182)",
    "text": "Given hash function h(k) = k mod 7. Keys 15, 22, 8 are inserted using Linear Probing in an array of size 7 (indices 0..6). What is the index of key 8?",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "4"
      }
    ],
    "correct": "C",
    "difficulty": "Medium",
    "explanation": "Table size m = 7.\n• Insert 15: 15 % 7 = 1 -> slot 1 is empty -> stored at index 1.\n• Insert 22: 22 % 7 = 1 -> collision at slot 1! Linear probe checks slot 2 -> empty -> stored at index 2.\n• Insert 8: 8 % 7 = 1 -> collision at slot 1! Probe slot 2 -> collision! Probe slot 3 -> empty -> stored at index 3.\nFinal index of 8 = 3.",
    "trap": "Trace each collision probe sequentially: index 1 occupied, index 2 occupied, goes into index 3."
  },
  {
    "id": 169,
    "unitId": 10,
    "unitTitle": "Unit 10: Hashing & Collision Resolution (Q164 - Q182)",
    "text": "What is the worst-case search time complexity in a Hash Table of size m containing n keys implemented using Separate Chaining?",
    "options": [
      {
        "key": "A",
        "text": "O(1)"
      },
      {
        "key": "B",
        "text": "O(log n)"
      },
      {
        "key": "C",
        "text": "O(n)"
      },
      {
        "key": "D",
        "text": "O(m)"
      }
    ],
    "correct": "C",
    "difficulty": "Easy",
    "explanation": "Worst case tab hota hai jab sabhi n keys same hash slot par collide ho jayein. Saare elements ek single linked list mein chale jaate hain, resulting in O(n) linear search time.",
    "trap": "Average case is O(1), but WORST case is strictly O(n)."
  },
  {
    "id": 170,
    "unitId": 10,
    "unitTitle": "Unit 10: Hashing & Collision Resolution (Q164 - Q182)",
    "text": "What is the desirable property of a good hash function?",
    "options": [
      {
        "key": "A",
        "text": "Minimizes collisions by distributing keys uniformly across the table"
      },
      {
        "key": "B",
        "text": "Maps all keys to index 0"
      },
      {
        "key": "C",
        "text": "Is as complex and slow as possible"
      },
      {
        "key": "D",
        "text": "Produces negative indices"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "Uniform hashing distribution minimizes collisions and ensures near O(1) average performance.",
    "trap": "Uniform distribution and low computation overhead are the primary criteria."
  },
  {
    "id": 171,
    "unitId": 10,
    "unitTitle": "Unit 10: Hashing & Collision Resolution (Q164 - Q182)",
    "text": "Secondary clustering in quadratic probing occurs because:",
    "options": [
      {
        "key": "A",
        "text": "Keys that hash to different positions follow the same probe sequence"
      },
      {
        "key": "B",
        "text": "Keys that hash to the same initial position follow the exact same probe sequence"
      },
      {
        "key": "C",
        "text": "The table size is prime"
      },
      {
        "key": "D",
        "text": "Elements are deleted"
      }
    ],
    "correct": "B",
    "difficulty": "Difficult",
    "explanation": "Agar do alag-alag keys ka initial hash value same ho `h'(k1) == h'(k2)`, toh unka quadratic probe offset sequence `(i, i^2)` identical hota hai. This is called Secondary Clustering.",
    "trap": "Secondary clustering is milder than primary clustering, but still degrades performance."
  },
  {
    "id": 172,
    "unitId": 10,
    "unitTitle": "Unit 10: Hashing & Collision Resolution (Q164 - Q182)",
    "text": "Why is the table size m usually chosen as a prime number in the division hash method h(k) = k mod m?",
    "options": [
      {
        "key": "A",
        "text": "To make modulo calculation faster"
      },
      {
        "key": "B",
        "text": "To reduce patterns and common factors between keys and table size, minimizing collisions"
      },
      {
        "key": "C",
        "text": "To allow negative numbers"
      },
      {
        "key": "D",
        "text": "Because computers prefer prime numbers"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "Agar m prime nahi hoga (e.g. power of 2), toh hash values sirf lower-order bits par depend karengi, leading to frequent collisions for structured keys.",
    "trap": "Prime modulo distributes clustered keys evenly."
  },
  {
    "id": 173,
    "unitId": 10,
    "unitTitle": "Unit 10: Hashing & Collision Resolution (Q164 - Q182)",
    "text": "In separate chaining, what data structure is maintained at each slot of the hash table?",
    "options": [
      {
        "key": "A",
        "text": "Stack"
      },
      {
        "key": "B",
        "text": "Linked List"
      },
      {
        "key": "C",
        "text": "Binary Tree"
      },
      {
        "key": "D",
        "text": "Circular Array"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Each bucket in separate chaining maintains a Singly Linked List of colliding keys.",
    "trap": "Some modern implementations like Java 8 HashMap convert linked list to Red-Black Tree when chain length exceeds 8, but classical definition is Linked List."
  },
  {
    "id": 174,
    "unitId": 10,
    "unitTitle": "Unit 10: Hashing & Collision Resolution (Q164 - Q182)",
    "text": "In Quadratic Probing, the probe sequence is defined as:",
    "options": [
      {
        "key": "A",
        "text": "(h(k) + i) % m"
      },
      {
        "key": "B",
        "text": "(h(k) + c1*i + c2*i^2) % m"
      },
      {
        "key": "C",
        "text": "(h(k) * i^2) % m"
      },
      {
        "key": "D",
        "text": "(h(k) + 2^i) % m"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Quadratic probing quadratic polynomial function use karta hai: `(h(k) + c1*i + c2*i^2) % m`. Usually c1 = 1, c2 = 1.",
    "trap": "Linear uses i; Quadratic uses i^2."
  },
  {
    "id": 175,
    "unitId": 10,
    "unitTitle": "Unit 10: Hashing & Collision Resolution (Q164 - Q182)",
    "text": "What is Rehashing?",
    "options": [
      {
        "key": "A",
        "text": "Re-running the hash function twice"
      },
      {
        "key": "B",
        "text": "Dynamically allocating a larger hash table (typically double the size) and re-inserting all existing keys when load factor exceeds a threshold"
      },
      {
        "key": "C",
        "text": "Deleting the hash table"
      },
      {
        "key": "D",
        "text": "Using two hash functions"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "Jab hash table ka load factor threshold (e.g. 0.75) cross karta hai, performance degrade hone lagti hai. Naya double-sized table banakar sabhi keys ko naye table size par re-insert karne ko Rehashing kehte hain.",
    "trap": "Rehashing takes O(n) time, but amortized insertion remains O(1)."
  },
  {
    "id": 176,
    "unitId": 10,
    "unitTitle": "Unit 10: Hashing & Collision Resolution (Q164 - Q182)",
    "text": "How is deletion typically handled in an Open Addressing hash table using Linear Probing?",
    "options": [
      {
        "key": "A",
        "text": "Directly setting the slot to NULL/empty"
      },
      {
        "key": "B",
        "text": "Marking the slot with a special \"DELETED\" (tombstone) flag so subsequent searches do not terminate prematurely"
      },
      {
        "key": "C",
        "text": "Shifting all subsequent elements left"
      },
      {
        "key": "D",
        "text": "Deletion is impossible"
      }
    ],
    "correct": "B",
    "difficulty": "Difficult",
    "explanation": "Agar slot ko direct empty (NULL) kar denge, toh search algorithm wahan search stop kar dega aur uske aage probe hui keys kabhi nahi milengi. Isliye slot ko tombstone marker se mark kiya jata hai.",
    "trap": "Directly setting to NULL breaks probe sequences for keys inserted after collisions."
  },
  {
    "id": 177,
    "unitId": 10,
    "unitTitle": "Unit 10: Hashing & Collision Resolution (Q164 - Q182)",
    "text": "In the Mid-Square hash method, if key k = 45, what is the hash code using the middle two digits of k^2?",
    "options": [
      {
        "key": "A",
        "text": "20"
      },
      {
        "key": "B",
        "text": "02"
      },
      {
        "key": "C",
        "text": "25"
      },
      {
        "key": "D",
        "text": "45"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Mid-Square method mein key ka square calculate karte hain: k = 45 => 45^2 = 2025. 2025 ke 4 digits [2, 0, 2, 5] hain, jisme middle two digits 02 hain. Isliye hash address 02 (ya 2) hoga.",
    "trap": "Calculate square first: 45 * 45 = 2025, then extract the middle digits 02."
  },
  {
    "id": 178,
    "unitId": 10,
    "unitTitle": "Unit 10: Hashing & Collision Resolution (Q164 - Q182)",
    "text": "What is the average number of probes for a successful search in an open addressing hash table with uniform hashing?",
    "options": [
      {
        "key": "A",
        "text": "(1 / alpha) * ln(1 / (1 - alpha))"
      },
      {
        "key": "B",
        "text": "1 / (1 - alpha)"
      },
      {
        "key": "C",
        "text": "alpha"
      },
      {
        "key": "D",
        "text": "O(n)"
      }
    ],
    "correct": "A",
    "difficulty": "Difficult",
    "explanation": "Standard Knuth formula: Average probes for successful search is `(1 / alpha) * ln(1 / (1 - alpha))`. For unsuccessful search it is `1 / (1 - alpha)`.",
    "trap": "1 / (1 - alpha) is for UNSUCCESSFUL search; the ln form is for SUCCESSFUL search."
  },
  {
    "id": 179,
    "unitId": 10,
    "unitTitle": "Unit 10: Hashing & Collision Resolution (Q164 - Q182)",
    "text": "Which collision resolution method requires no dynamic memory allocation at runtime?",
    "options": [
      {
        "key": "A",
        "text": "Separate Chaining"
      },
      {
        "key": "B",
        "text": "Open Addressing (Linear Probing, Quadratic Probing, Double Hashing)"
      },
      {
        "key": "C",
        "text": "Binary Search Tree hashing"
      },
      {
        "key": "D",
        "text": "Skip list hashing"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Open Addressing ek pre-allocated static array ke andar hi probes dhoondti hai, so no dynamic pointer allocation (malloc) is needed.",
    "trap": "Separate chaining continuously allocates new nodes via malloc."
  },
  {
    "id": 180,
    "unitId": 10,
    "unitTitle": "Unit 10: Hashing & Collision Resolution (Q164 - Q182)",
    "text": "If a hash table has size m = 11 and 7 keys are inserted, what is the load factor?",
    "options": [
      {
        "key": "A",
        "text": "11 / 7"
      },
      {
        "key": "B",
        "text": "7 / 11 = 0.636"
      },
      {
        "key": "C",
        "text": "77"
      },
      {
        "key": "D",
        "text": "4 / 11"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "alpha = n / m = 7 / 11 ~= 0.636.",
    "trap": "alpha = keys / table_size."
  },
  {
    "id": 181,
    "unitId": 10,
    "unitTitle": "Unit 10: Hashing & Collision Resolution (Q164 - Q182)",
    "text": "What is the folding method of hashing?",
    "options": [
      {
        "key": "A",
        "text": "Dividing key into multiple parts, adding the parts together, and taking modulo m"
      },
      {
        "key": "B",
        "text": "Folding the array into 2D"
      },
      {
        "key": "C",
        "text": "Inverting the bits"
      },
      {
        "key": "D",
        "text": "Multiplying by 2"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "Example: Telephone number 9876543210 -> parts: 987 + 654 + 321 + 0 = sum, then sum % m.",
    "trap": "Boundary folding folds digits like accordion paper, shift folding adds directly."
  },
  {
    "id": 182,
    "unitId": 10,
    "unitTitle": "Unit 10: Hashing & Collision Resolution (Q164 - Q182)",
    "text": "What is the time complexity to insert a new element in Separate Chaining at the head of the chain?",
    "options": [
      {
        "key": "A",
        "text": "O(1) after computing hash function"
      },
      {
        "key": "B",
        "text": "O(n)"
      },
      {
        "key": "C",
        "text": "O(log n)"
      },
      {
        "key": "D",
        "text": "O(m)"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "Hash compute karna O(1) hai, aur bucket ke head par node insert karna O(1) hai. Total time = O(1).",
    "trap": "Inserting at head avoids traversing the existing linked list chain."
  },
  {
    "id": 183,
    "unitId": 11,
    "unitTitle": "Unit 11: Graph Theory & Traversals (Q183 - Q202)",
    "text": "According to the Handshaking Lemma, the sum of degrees of all vertices in an undirected graph is equal to:",
    "options": [
      {
        "key": "A",
        "text": "|E|"
      },
      {
        "key": "B",
        "text": "2 * |E|"
      },
      {
        "key": "C",
        "text": "|V| - 1"
      },
      {
        "key": "D",
        "text": "2 * |V|"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Har edge do vertices par incident hoti hai, isliye har edge total degree mein 2 contribute karti hai: Sum deg(v) = 2 * |E|.",
    "trap": "Sum is 2 * E, not 2 * V."
  },
  {
    "id": 184,
    "unitId": 11,
    "unitTitle": "Unit 11: Graph Theory & Traversals (Q183 - Q202)",
    "text": "Can a simple undirected graph have 5 vertices, each having degree 3?",
    "options": [
      {
        "key": "A",
        "text": "Yes, always"
      },
      {
        "key": "B",
        "text": "No, because the sum of degrees would be odd (15), which violates the Handshaking Lemma"
      },
      {
        "key": "C",
        "text": "Yes, if it is complete"
      },
      {
        "key": "D",
        "text": "Yes, if it has cycles"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "Sum of degrees = 5 * 3 = 15. Handshaking theorem says Sum deg(v) = 2E (must be an even number). 15 is odd, so such a graph is mathematically IMPOSSIBLE!",
    "trap": "The number of vertices with odd degree MUST always be even!"
  },
  {
    "id": 185,
    "unitId": 11,
    "unitTitle": "Unit 11: Graph Theory & Traversals (Q183 - Q202)",
    "text": "How many edges are in a complete undirected graph Kn with n vertices?",
    "options": [
      {
        "key": "A",
        "text": "n"
      },
      {
        "key": "B",
        "text": "n(n - 1)"
      },
      {
        "key": "C",
        "text": "n(n - 1) / 2"
      },
      {
        "key": "D",
        "text": "2n - 1"
      }
    ],
    "correct": "C",
    "difficulty": "Easy",
    "explanation": "Har vertex baaki n - 1 vertices se connect hota hai: n * (n - 1) / 2.",
    "trap": "For directed graph it is n(n - 1), for undirected it is n(n - 1) / 2."
  },
  {
    "id": 186,
    "unitId": 11,
    "unitTitle": "Unit 11: Graph Theory & Traversals (Q183 - Q202)",
    "text": "An undirected graph has an Eulerian Circuit if and only if it is connected and:",
    "options": [
      {
        "key": "A",
        "text": "Every vertex has an odd degree"
      },
      {
        "key": "B",
        "text": "Every vertex has an even degree"
      },
      {
        "key": "C",
        "text": "Exactly two vertices have odd degree"
      },
      {
        "key": "D",
        "text": "It has no cycles"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "Eulerian circuit visits every edge exactly once and returns to the start vertex. Yeh tabhi possible hai jab har vertex ki degree EVEN ho.",
    "trap": "If exactly 2 vertices have odd degree, it has an Eulerian PATH, not an Eulerian CIRCUIT."
  },
  {
    "id": 187,
    "unitId": 11,
    "unitTitle": "Unit 11: Graph Theory & Traversals (Q183 - Q202)",
    "text": "What is the space complexity of representing a graph with V vertices and E edges using an Adjacency Matrix?",
    "options": [
      {
        "key": "A",
        "text": "O(V + E)"
      },
      {
        "key": "B",
        "text": "O(V^2)"
      },
      {
        "key": "C",
        "text": "O(E^2)"
      },
      {
        "key": "D",
        "text": "O(V log V)"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Adjacency Matrix ek V x V 2D array allocate karti hai, isliye memory hamesha O(V^2) hoti hai, chahe graph mein 0 edges hon ya maximum edges.",
    "trap": "Adjacency List takes O(V + E), Adjacency Matrix takes O(V^2)."
  },
  {
    "id": 188,
    "unitId": 11,
    "unitTitle": "Unit 11: Graph Theory & Traversals (Q183 - Q202)",
    "text": "Which traversal algorithm can be used to find the shortest path between two vertices in an unweighted graph?",
    "options": [
      {
        "key": "A",
        "text": "Depth-First Search (DFS)"
      },
      {
        "key": "B",
        "text": "Breadth-First Search (BFS)"
      },
      {
        "key": "C",
        "text": "Inorder Traversal"
      },
      {
        "key": "D",
        "text": "Preorder Traversal"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "BFS level-by-level explore karta hai, isliye unweighted graph mein source se kisi bhi target tak pehli baar pahunchne wala path guaranteed shortest path hota hai.",
    "trap": "DFS goes deep and does NOT find the shortest path in unweighted graphs."
  },
  {
    "id": 189,
    "unitId": 11,
    "unitTitle": "Unit 11: Graph Theory & Traversals (Q183 - Q202)",
    "text": "What is the time complexity of BFS or DFS on a graph represented using an Adjacency List?",
    "options": [
      {
        "key": "A",
        "text": "O(V^2)"
      },
      {
        "key": "B",
        "text": "O(V + E)"
      },
      {
        "key": "C",
        "text": "O(V * E)"
      },
      {
        "key": "D",
        "text": "O(log V)"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Har vertex ek baar visit hota hai (O(V)) aur har edge Adjacency List mein traverse hoti hai (O(E)). Total time: O(V + E).",
    "trap": "If using Adjacency Matrix, the time complexity is O(V^2)."
  },
  {
    "id": 190,
    "unitId": 11,
    "unitTitle": "Unit 11: Graph Theory & Traversals (Q183 - Q202)",
    "text": "According to Euler's formula for connected planar graphs, the relationship between vertices (V), edges (E), and faces/regions (F) is:",
    "options": [
      {
        "key": "A",
        "text": "V - E + F = 2"
      },
      {
        "key": "B",
        "text": "V + E - F = 2"
      },
      {
        "key": "C",
        "text": "V - E - F = 2"
      },
      {
        "key": "D",
        "text": "V + E + F = 2"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "Euler's Planar Graph Formula: V - E + F = 2.",
    "trap": "Remember the signs: V (positive), E (negative), F (positive): V - E + F = 2."
  },
  {
    "id": 191,
    "unitId": 11,
    "unitTitle": "Unit 11: Graph Theory & Traversals (Q183 - Q202)",
    "text": "In a directed graph, if node 4 has 3 incoming edges and 3 outgoing edges, what are its in-degree, out-degree, and total degree?",
    "options": [
      {
        "key": "A",
        "text": "In-degree = 3, Out-degree = 6, Total = 9"
      },
      {
        "key": "B",
        "text": "In-degree = 3, Out-degree = 3, Total degree = 6"
      },
      {
        "key": "C",
        "text": "In-degree = 6, Out-degree = 3, Total = 9"
      },
      {
        "key": "D",
        "text": "In-degree = 6, Out-degree = 6, Total = 12"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "In-degree = incoming edges = 3. Out-degree = outgoing edges = 3. Total degree = In-degree + Out-degree = 6. (Note: Original course slide had a typo stating outdegree 6).",
    "trap": "Do not confuse total degree (6) with outdegree (3)."
  },
  {
    "id": 192,
    "unitId": 11,
    "unitTitle": "Unit 11: Graph Theory & Traversals (Q183 - Q202)",
    "text": "What is the chromatic number of a complete graph Kn with n vertices?",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "n"
      },
      {
        "key": "D",
        "text": "n - 1"
      }
    ],
    "correct": "C",
    "difficulty": "Medium",
    "explanation": "Kn mein har vertex har doosre vertex se adjacent hota hai. Isliye kisi bhi do vertices ko same color nahi mil sakta. Hence, chromatic number = n colors.",
    "trap": "Every vertex in Kn requires a distinct unique color."
  },
  {
    "id": 193,
    "unitId": 11,
    "unitTitle": "Unit 11: Graph Theory & Traversals (Q183 - Q202)",
    "text": "A bipartite graph can be colored using how many minimum colors?",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "4"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Bipartite graph ke vertices do disjoint sets mein divide hote hain aur edges sirf ek set se doosre set ke beech hoti hain. Set 1 ko color A aur Set 2 ko color B de sakte hain. Chromatic number = 2.",
    "trap": "A graph is bipartite if and only if it has no odd-length cycles and can be 2-colored."
  },
  {
    "id": 194,
    "unitId": 11,
    "unitTitle": "Unit 11: Graph Theory & Traversals (Q183 - Q202)",
    "text": "In an undirected graph with 10 vertices and 15 edges, what is the sum of degrees of all vertices?",
    "options": [
      {
        "key": "A",
        "text": "15"
      },
      {
        "key": "B",
        "text": "30"
      },
      {
        "key": "C",
        "text": "25"
      },
      {
        "key": "D",
        "text": "45"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "By Handshaking Lemma: Sum deg(v) = 2 * |E| = 2 * 15 = 30.",
    "trap": "Number of vertices (10) is irrelevant here; sum is strictly 2 * E."
  },
  {
    "id": 195,
    "unitId": 11,
    "unitTitle": "Unit 11: Graph Theory & Traversals (Q183 - Q202)",
    "text": "What is a Hamiltonian Cycle in a graph?",
    "options": [
      {
        "key": "A",
        "text": "A cycle that visits every edge exactly once"
      },
      {
        "key": "B",
        "text": "A closed loop that visits every VERTEX exactly once and returns to starting vertex"
      },
      {
        "key": "C",
        "text": "A tree with no leaves"
      },
      {
        "key": "D",
        "text": "A path of length 2"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Eulerian visits every EDGE once; Hamiltonian visits every VERTEX once.",
    "trap": "Eulerian = Edges; Hamiltonian = Vertices."
  },
  {
    "id": 196,
    "unitId": 11,
    "unitTitle": "Unit 11: Graph Theory & Traversals (Q183 - Q202)",
    "text": "What is a Spanning Tree of a connected undirected graph G with V vertices?",
    "options": [
      {
        "key": "A",
        "text": "A subgraph that connects all V vertices and has exactly V - 1 edges with no cycles"
      },
      {
        "key": "B",
        "text": "A tree with V edges"
      },
      {
        "key": "C",
        "text": "The complete graph"
      },
      {
        "key": "D",
        "text": "A disconnected subgraph"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "Spanning tree graph ke sabhi V vertices ko bina kisi cycle ke connect karta hai, containing exactly V - 1 edges.",
    "trap": "Number of edges in any spanning tree of V vertices is strictly V - 1."
  },
  {
    "id": 197,
    "unitId": 11,
    "unitTitle": "Unit 11: Graph Theory & Traversals (Q183 - Q202)",
    "text": "Which algorithm is used to find the Minimum Spanning Tree (MST) of a weighted graph using a greedy edge-by-edge approach with cycle checking?",
    "options": [
      {
        "key": "A",
        "text": "Kruskal's Algorithm (using Disjoint Set Union)"
      },
      {
        "key": "B",
        "text": "Dijkstra's Algorithm"
      },
      {
        "key": "C",
        "text": "Floyd-Warshall"
      },
      {
        "key": "D",
        "text": "Bellman-Ford"
      }
    ],
    "correct": "A",
    "difficulty": "Medium",
    "explanation": "Kruskal's algorithm edges ko weight ke ascending order mein sort karta hai aur cycle avoid karte hue MST banata hai (using Union-Find). Time: O(E log E).",
    "trap": "Dijkstra finds Single Source Shortest Path, not MST."
  },
  {
    "id": 198,
    "unitId": 11,
    "unitTitle": "Unit 11: Graph Theory & Traversals (Q183 - Q202)",
    "text": "What is the maximum number of edges in a connected planar simple graph with V >= 3 vertices?",
    "options": [
      {
        "key": "A",
        "text": "3V - 6"
      },
      {
        "key": "B",
        "text": "2V - 4"
      },
      {
        "key": "C",
        "text": "V(V-1)/2"
      },
      {
        "key": "D",
        "text": "3V"
      }
    ],
    "correct": "A",
    "difficulty": "Difficult",
    "explanation": "Planar graph theorem: Har face kam se kam 3 edges se bound hota hai (2E >= 3F). Euler formula V - E + F = 2 mein substitute karne par: E <= 3V - 6.",
    "trap": "If the planar graph is bipartite (no triangles, 2E >= 4F), E <= 2V - 4."
  },
  {
    "id": 199,
    "unitId": 11,
    "unitTitle": "Unit 11: Graph Theory & Traversals (Q183 - Q202)",
    "text": "What is a Cut Vertex (Articulation Point) in a graph?",
    "options": [
      {
        "key": "A",
        "text": "A vertex with degree 0"
      },
      {
        "key": "B",
        "text": "A vertex whose removal increases the number of connected components (disconnects the graph)"
      },
      {
        "key": "C",
        "text": "A leaf node"
      },
      {
        "key": "D",
        "text": "The root of a tree"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "Articulation point woh critical vertex hota hai jisko remove karne par graph disconnected ho jata hai. Discovered via DFS in O(V + E).",
    "trap": "Bridge is the equivalent concept for an EDGE whose removal disconnects the graph."
  },
  {
    "id": 200,
    "unitId": 11,
    "unitTitle": "Unit 11: Graph Theory & Traversals (Q183 - Q202)",
    "text": "Topological Sort can only be performed on which type of graph?",
    "options": [
      {
        "key": "A",
        "text": "Undirected Graphs"
      },
      {
        "key": "B",
        "text": "Directed Acyclic Graphs (DAG)"
      },
      {
        "key": "C",
        "text": "Graphs with negative cycles"
      },
      {
        "key": "D",
        "text": "Complete Graphs Kn"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Topological sort linear ordering deta hai jisme har directed edge u -> v ke liye u hamesha v se pehle aata hai. Yeh sirf DAGs par possible hai.",
    "trap": "If the graph has a directed cycle, topological sort is impossible."
  },
  {
    "id": 201,
    "unitId": 11,
    "unitTitle": "Unit 11: Graph Theory & Traversals (Q183 - Q202)",
    "text": "What is the time complexity of Dijkstra's algorithm using a Min-Heap (Priority Queue)?",
    "options": [
      {
        "key": "A",
        "text": "O(V^2)"
      },
      {
        "key": "B",
        "text": "O((V + E) log V)"
      },
      {
        "key": "C",
        "text": "O(V * E)"
      },
      {
        "key": "D",
        "text": "O(V^3)"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "Min-Heap ke saath Dijkstra Single Source Shortest Path find karta hai in O((V + E) log V) time.",
    "trap": "With simple array it is O(V^2); with binary heap it is O((V + E) log V)."
  },
  {
    "id": 202,
    "unitId": 11,
    "unitTitle": "Unit 11: Graph Theory & Traversals (Q183 - Q202)",
    "text": "An undirected graph is called regular if:",
    "options": [
      {
        "key": "A",
        "text": "It has no cycles"
      },
      {
        "key": "B",
        "text": "Every vertex has the exact same degree"
      },
      {
        "key": "C",
        "text": "It is planar"
      },
      {
        "key": "D",
        "text": "It has an even number of vertices"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "k-regular graph mein har vertex ki degree k hoti hai (e.g. Petersen graph is 3-regular).",
    "trap": "Complete graph Kn is (n-1)-regular."
  },
  {
    "id": 203,
    "unitId": 12,
    "unitTitle": "Unit 12: Searching & Sorting Algorithms (Q203 - Q220)",
    "text": "Which sorting algorithm makes the minimum number of memory swaps (exactly O(n)) in the worst case?",
    "options": [
      {
        "key": "A",
        "text": "Bubble Sort"
      },
      {
        "key": "B",
        "text": "Selection Sort"
      },
      {
        "key": "C",
        "text": "Insertion Sort"
      },
      {
        "key": "D",
        "text": "Quick Sort"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "Selection sort har pass mein exactly ek swap karta hai minimum element ko uske position par laane ke liye. Total swaps = n - 1 = O(n). Isliye jab memory writes expensive hon (jaise EEPROM/Flash), Selection Sort prefer hota hai.",
    "trap": "Comparisons are O(n^2), but SWAPS are strictly O(n)!"
  },
  {
    "id": 204,
    "unitId": 12,
    "unitTitle": "Unit 12: Searching & Sorting Algorithms (Q203 - Q220)",
    "text": "What is the worst-case time complexity of Quick Sort, and under what condition does it occur?",
    "options": [
      {
        "key": "A",
        "text": "O(n log n), when array is randomly shuffled"
      },
      {
        "key": "B",
        "text": "O(n^2), when array is already sorted and first/last element is picked as pivot"
      },
      {
        "key": "C",
        "text": "O(n), when all elements are distinct"
      },
      {
        "key": "D",
        "text": "O(n log n), when array has duplicates"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Jab array already sorted ya reverse-sorted ho aur pehla ya aakhiri element pivot chuna jaye, toh partition completely unbalanced (0 aur n-1) hota hai. Recurrence: T(n) = T(n-1) + O(n) = O(n^2).",
    "trap": "Quick sort is NOT O(n log n) in all cases; its worst case is O(n^2)."
  },
  {
    "id": 205,
    "unitId": 12,
    "unitTitle": "Unit 12: Searching & Sorting Algorithms (Q203 - Q220)",
    "text": "Which of the following sorting algorithms is STABLE and has a worst-case time complexity of O(n log n)?",
    "options": [
      {
        "key": "A",
        "text": "Quick Sort"
      },
      {
        "key": "B",
        "text": "Heap Sort"
      },
      {
        "key": "C",
        "text": "Merge Sort"
      },
      {
        "key": "D",
        "text": "Selection Sort"
      }
    ],
    "correct": "C",
    "difficulty": "Easy",
    "explanation": "Merge Sort guarantees O(n log n) in best, average, and worst cases, and it is STABLE (preserves relative order of equal keys). Heap sort and Quick sort are unstable.",
    "trap": "Heap sort is O(n log n) worst case, but it is UNSTABLE."
  },
  {
    "id": 206,
    "unitId": 12,
    "unitTitle": "Unit 12: Searching & Sorting Algorithms (Q203 - Q220)",
    "text": "What is the best-case time complexity of Insertion Sort, and when does it occur?",
    "options": [
      {
        "key": "A",
        "text": "O(n^2), when array is reverse sorted"
      },
      {
        "key": "B",
        "text": "O(n), when array is already sorted"
      },
      {
        "key": "C",
        "text": "O(n log n), when array has random order"
      },
      {
        "key": "D",
        "text": "O(1), when array has 10 elements"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Jab array already sorted hota hai, Insertion Sort har element ko sirf ek comparison ke baad aage badha deta hai (0 inner loop shifts). Total comparisons = n - 1 = O(n).",
    "trap": "Insertion sort is an adaptive sorting algorithm."
  },
  {
    "id": 207,
    "unitId": 12,
    "unitTitle": "Unit 12: Searching & Sorting Algorithms (Q203 - Q220)",
    "text": "How much auxiliary (extra) memory does Merge Sort require to sort an array of size n?",
    "options": [
      {
        "key": "A",
        "text": "O(1)"
      },
      {
        "key": "B",
        "text": "O(log n)"
      },
      {
        "key": "C",
        "text": "O(n)"
      },
      {
        "key": "D",
        "text": "O(n^2)"
      }
    ],
    "correct": "C",
    "difficulty": "Easy",
    "explanation": "Merge sort ko arrays merge karne ke liye ek temporary array allocate karni padti hai jiska size n hota hai. Auxiliary space = O(n). This makes it an OUT-OF-PLACE sort for arrays.",
    "trap": "Merge sort is in-place for Linked Lists, but out-of-place (O(n) space) for Arrays."
  },
  {
    "id": 208,
    "unitId": 12,
    "unitTitle": "Unit 12: Searching & Sorting Algorithms (Q203 - Q220)",
    "text": "What is the time complexity to build a Binary Max-Heap from an unsorted array of n elements (Build-Heap operation)?",
    "options": [
      {
        "key": "A",
        "text": "O(n log n)"
      },
      {
        "key": "B",
        "text": "O(n)"
      },
      {
        "key": "C",
        "text": "O(n^2)"
      },
      {
        "key": "D",
        "text": "O(log n)"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "Mathematical analysis of bottom-up heap construction shows that sum of heights over all nodes converges: Sum (n / 2^(h+1)) * O(h) = O(n). Building a heap takes linear O(n) time, NOT O(n log n).",
    "trap": "Inserting elements one by one takes O(n log n), but Build-Heap bottom-up takes strictly O(n)!"
  },
  {
    "id": 209,
    "unitId": 12,
    "unitTitle": "Unit 12: Searching & Sorting Algorithms (Q203 - Q220)",
    "text": "Which sorting algorithm is UNSTABLE among the following?",
    "options": [
      {
        "key": "A",
        "text": "Bubble Sort"
      },
      {
        "key": "B",
        "text": "Insertion Sort"
      },
      {
        "key": "C",
        "text": "Selection Sort"
      },
      {
        "key": "D",
        "text": "Merge Sort"
      }
    ],
    "correct": "C",
    "difficulty": "Easy",
    "explanation": "Selection sort long-distance swaps karta hai jo equal keys ke relative order ko change kar deta hai (e.g. sorting [4a, 4b, 2] -> 2 swaps with 4a -> [2, 4b, 4a]).",
    "trap": "Remember the unstable trio: Quick Sort, Heap Sort, Selection Sort."
  },
  {
    "id": 210,
    "unitId": 12,
    "unitTitle": "Unit 12: Searching & Sorting Algorithms (Q203 - Q220)",
    "text": "What is the maximum number of comparisons required to search for an element in a sorted array of 1024 elements using Binary Search?",
    "options": [
      {
        "key": "A",
        "text": "10"
      },
      {
        "key": "B",
        "text": "11"
      },
      {
        "key": "C",
        "text": "1024"
      },
      {
        "key": "D",
        "text": "512"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "Max comparisons = floor(log2(n)) + 1. For n = 1024: log2(1024) = 10. Maximum comparisons = 10 + 1 = 11 comparisons (in worst case when element is not found or at the leaf).",
    "trap": "log2(1024) is 10, but in worst case (not found) it performs 11 comparisons."
  },
  {
    "id": 211,
    "unitId": 12,
    "unitTitle": "Unit 12: Searching & Sorting Algorithms (Q203 - Q220)",
    "text": "Which sorting algorithm has the best average-case time complexity of O(n + k), where k is the range of input values?",
    "options": [
      {
        "key": "A",
        "text": "Counting Sort"
      },
      {
        "key": "B",
        "text": "Quick Sort"
      },
      {
        "key": "C",
        "text": "Heap Sort"
      },
      {
        "key": "D",
        "text": "Bubble Sort"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "Counting sort non-comparison based algorithm hai jo element frequencies count karke O(n + k) time mein sort karta hai.",
    "trap": "It is efficient only when range k is not significantly larger than n."
  },
  {
    "id": 212,
    "unitId": 12,
    "unitTitle": "Unit 12: Searching & Sorting Algorithms (Q203 - Q220)",
    "text": "In Max-Heap, where is the second largest element always located?",
    "options": [
      {
        "key": "A",
        "text": "At the root"
      },
      {
        "key": "B",
        "text": "At index 1 or index 2 (children of root)"
      },
      {
        "key": "C",
        "text": "At any leaf node"
      },
      {
        "key": "D",
        "text": "At the bottom right"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "Root contains the largest element. Second largest element can only be one of the immediate children of the root (Level 1, index 1 or 2).",
    "trap": "It cannot be at level 2 because root's children are larger than their respective subtrees."
  },
  {
    "id": 213,
    "unitId": 12,
    "unitTitle": "Unit 12: Searching & Sorting Algorithms (Q203 - Q220)",
    "text": "What is an In-Place sorting algorithm?",
    "options": [
      {
        "key": "A",
        "text": "An algorithm that requires no CPU registers"
      },
      {
        "key": "B",
        "text": "An algorithm that requires O(1) or O(log n) auxiliary space beyond the input array"
      },
      {
        "key": "C",
        "text": "An algorithm that sorts in O(n) time"
      },
      {
        "key": "D",
        "text": "An algorithm that does not modify the original array"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "In-place sorting algorithm input array ke andar hi elements ko rearrange karta hai and requires negligible extra space (O(1) auxiliary memory).",
    "trap": "Merge sort is out-of-place because it needs O(n) auxiliary space."
  },
  {
    "id": 214,
    "unitId": 12,
    "unitTitle": "Unit 12: Searching & Sorting Algorithms (Q203 - Q220)",
    "text": "Radix Sort uses which underlying stable sorting algorithm to sort keys digit by digit?",
    "options": [
      {
        "key": "A",
        "text": "Counting Sort"
      },
      {
        "key": "B",
        "text": "Quick Sort"
      },
      {
        "key": "C",
        "text": "Heap Sort"
      },
      {
        "key": "D",
        "text": "Selection Sort"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "Radix sort least significant digit (LSD) se most significant digit tak sort karta hai. Digit sorting ke liye Counting Sort use hota hai kyunki digits 0..9 limited range ki hoti hain aur Counting Sort stable hai.",
    "trap": "Radix sort requires a STABLE subroutine; unstable sort will destroy previous digit ordering."
  },
  {
    "id": 215,
    "unitId": 12,
    "unitTitle": "Unit 12: Searching & Sorting Algorithms (Q203 - Q220)",
    "text": "If an array is already sorted, which algorithm will perform the MAXIMUM number of comparisons?",
    "options": [
      {
        "key": "A",
        "text": "Insertion Sort"
      },
      {
        "key": "B",
        "text": "Selection Sort"
      },
      {
        "key": "C",
        "text": "Bubble Sort with flag"
      },
      {
        "key": "D",
        "text": "Binary Search"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "Selection sort input order check nahi karta; woh hamesha poore unsorted part ko scan karta hai: exactly n(n-1)/2 comparisons in ALL cases! Insertion sort and Bubble sort with flag will only make n-1 comparisons.",
    "trap": "Selection sort is NOT adaptive: it works equally hard on sorted data!"
  },
  {
    "id": 216,
    "unitId": 12,
    "unitTitle": "Unit 12: Searching & Sorting Algorithms (Q203 - Q220)",
    "text": "What is the recurrence relation for the best-case of Quick Sort with equal partitioning?",
    "options": [
      {
        "key": "A",
        "text": "T(n) = 2T(n/2) + O(n)"
      },
      {
        "key": "B",
        "text": "T(n) = T(n - 1) + O(n)"
      },
      {
        "key": "C",
        "text": "T(n) = 2T(n/2) + O(1)"
      },
      {
        "key": "D",
        "text": "T(n) = T(n/2) + O(1)"
      }
    ],
    "correct": "A",
    "difficulty": "Easy",
    "explanation": "Best case partition array ko do equal halves (n/2 aur n/2) mein baant ta hai with O(n) partition work: T(n) = 2T(n/2) + O(n) = O(n log n).",
    "trap": "Worst case recurrence is T(n) = T(n-1) + O(n)."
  },
  {
    "id": 217,
    "unitId": 12,
    "unitTitle": "Unit 12: Searching & Sorting Algorithms (Q203 - Q220)",
    "text": "What is the time complexity of Heapify operation on a binary heap of size n?",
    "options": [
      {
        "key": "A",
        "text": "O(1)"
      },
      {
        "key": "B",
        "text": "O(log n)"
      },
      {
        "key": "C",
        "text": "O(n)"
      },
      {
        "key": "D",
        "text": "O(n log n)"
      }
    ],
    "correct": "B",
    "difficulty": "Easy",
    "explanation": "Heapify node ko downwards push karta hai till leaf. Maximum path length tree height hoti hai: O(log n).",
    "trap": "Build-Heap is O(n), but single Heapify is O(log n)."
  },
  {
    "id": 218,
    "unitId": 12,
    "unitTitle": "Unit 12: Searching & Sorting Algorithms (Q203 - Q220)",
    "text": "What is the lower bound on the number of comparisons for ANY comparison-based sorting algorithm in the worst case?",
    "options": [
      {
        "key": "A",
        "text": "Omega(n)"
      },
      {
        "key": "B",
        "text": "Omega(n log n)"
      },
      {
        "key": "C",
        "text": "Omega(n^2)"
      },
      {
        "key": "D",
        "text": "Omega(log n)"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "Decision tree model theorem: An n-element array has n! permutations. Decision tree height must be at least log2(n!) = Omega(n log n). No comparison-based sort can beat Omega(n log n) worst case.",
    "trap": "Non-comparison sorts (Counting, Radix) can achieve O(n) because they do not use comparisons."
  },
  {
    "id": 219,
    "unitId": 12,
    "unitTitle": "Unit 12: Searching & Sorting Algorithms (Q203 - Q220)",
    "text": "In an array representation of a binary heap with 0-based indexing, where is the right child of element at index i?",
    "options": [
      {
        "key": "A",
        "text": "2 * i"
      },
      {
        "key": "B",
        "text": "2 * i + 1"
      },
      {
        "key": "C",
        "text": "2 * i + 2"
      },
      {
        "key": "D",
        "text": "floor((i - 1) / 2)"
      }
    ],
    "correct": "C",
    "difficulty": "Easy",
    "explanation": "In 0-based indexing: Left child = 2i + 1, Right child = 2i + 2, Parent = floor((i - 1) / 2).",
    "trap": "In 1-based indexing, right child is 2i + 1. In 0-based indexing, it is 2i + 2."
  },
  {
    "id": 220,
    "unitId": 12,
    "unitTitle": "Unit 12: Searching & Sorting Algorithms (Q203 - Q220)",
    "text": "Which algorithm is best suited for sorting a linked list efficiently without random access?",
    "options": [
      {
        "key": "A",
        "text": "Quick Sort"
      },
      {
        "key": "B",
        "text": "Merge Sort"
      },
      {
        "key": "C",
        "text": "Heap Sort"
      },
      {
        "key": "D",
        "text": "Binary Search"
      }
    ],
    "correct": "B",
    "difficulty": "Medium",
    "explanation": "Merge sort does not require random access (it splits list using slow/fast pointers in O(n) and merges sequentially in O(n)), and can be done IN-PLACE on linked lists without extra array allocation. Ideal for Linked Lists!",
    "trap": "Quick sort and Heap sort require random indexing and are inefficient for linked lists."
  }
];
