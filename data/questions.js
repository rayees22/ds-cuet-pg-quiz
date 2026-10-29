// CUET PG Data Structures Question Bank (220 Questions)
// Master data bundle for offline browser compatibility & Netlify hosting
window.CUET_DS_DATA = {
  "version": "1.0.0",
  "title": "CUET PG Data Structures Question Bank",
  "totalQuestions": 220,
  "sections": [
    {
      "id": 1,
      "rawHeader": "Unit 1: Introduction to Data Structures & Algorithm Analysis (Q1 - Q18)",
      "title": "Introduction to Data Structures & Algorithm Analysis",
      "questionCount": 18
    },
    {
      "id": 2,
      "rawHeader": "Unit 2: Arrays & Memory Address Calculations (Q19 - Q36)",
      "title": "Arrays & Memory Address Calculations",
      "questionCount": 18
    },
    {
      "id": 3,
      "rawHeader": "Unit 3: Stacks & Polish Notation Expressions (Q37 - Q54)",
      "title": "Stacks & Polish Notation Expressions",
      "questionCount": 18
    },
    {
      "id": 4,
      "rawHeader": "Unit 4: Queues & Circular Queues (Q55 - Q72)",
      "title": "Queues & Circular Queues",
      "questionCount": 18
    },
    {
      "id": 5,
      "rawHeader": "Unit 5: Linked Lists (Q73 - Q90)",
      "title": "Linked Lists",
      "questionCount": 18
    },
    {
      "id": 6,
      "rawHeader": "Unit 6: Recursion & Recurrences (Q91 - Q105)",
      "title": "Recursion & Recurrences",
      "questionCount": 15
    },
    {
      "id": 7,
      "rawHeader": "Unit 7: Trees & Binary Tree Properties (Q106 - Q125)",
      "title": "Trees & Binary Tree Properties",
      "questionCount": 20
    },
    {
      "id": 8,
      "rawHeader": "Unit 8: Binary Search Trees & AVL Trees (Q126 - Q145)",
      "title": "Binary Search Trees & AVL Trees",
      "questionCount": 20
    },
    {
      "id": 9,
      "rawHeader": "Unit 9: B-Trees & B+ Trees (Q146 - Q163)",
      "title": "B-Trees & B+ Trees",
      "questionCount": 18
    },
    {
      "id": 10,
      "rawHeader": "Unit 10: Hashing & Collision Resolution (Q164 - Q182)",
      "title": "Hashing & Collision Resolution",
      "questionCount": 19
    },
    {
      "id": 11,
      "rawHeader": "Unit 11: Graph Theory & Traversals (Q183 - Q202)",
      "title": "Graph Theory & Traversals",
      "questionCount": 20
    },
    {
      "id": 12,
      "rawHeader": "Unit 12: Searching & Sorting Algorithms (Q203 - Q220)",
      "title": "Searching & Sorting Algorithms",
      "questionCount": 18
    }
  ],
  "questions": [
    {
      "id": 1,
      "originalNum": 1,
      "sectionId": 1,
      "sectionTitle": "Introduction to Data Structures & Algorithm Analysis",
      "question": "Which of the following is a non-linear data structure?",
      "rawQuestion": "Q1. Which of the following is a non-linear data structure?",
      "options": [
        {
          "key": "A",
          "text": "Stack",
          "raw": "A) Stack"
        },
        {
          "key": "B",
          "text": "Queue",
          "raw": "B) Queue"
        },
        {
          "key": "C",
          "text": "Tree",
          "raw": "C) Tree"
        },
        {
          "key": "D",
          "text": "Array",
          "raw": "D) Array"
        }
      ],
      "correctAnswer": "C",
      "difficulty": "Easy",
      "explanation": "Tree aur Graph non-linear data structures hote hain kyunki inme data elements sequential order mein nahi balki hierarchical ya interconnected network relation mein hote hain. Stack, Queue, aur Array linear structures hain.",
      "trap": "Kayi students Linked List ko non-linear samajh lete hain kyunki usme pointers hote hain. Yaad rakhein Linked List linear hai!"
    },
    {
      "id": 2,
      "originalNum": 2,
      "sectionId": 1,
      "sectionTitle": "Introduction to Data Structures & Algorithm Analysis",
      "question": "An Abstract Data Type (ADT) defines:",
      "rawQuestion": "Q2. An Abstract Data Type (ADT) defines:",
      "options": [
        {
          "key": "A",
          "text": "How data is stored in hardware",
          "raw": "A) How data is stored in hardware"
        },
        {
          "key": "B",
          "text": "What operations are performed, but not how they are implemented",
          "raw": "B) What operations are performed, but not how they are implemented"
        },
        {
          "key": "C",
          "text": "Only the memory allocation algorithm",
          "raw": "C) Only the memory allocation algorithm"
        },
        {
          "key": "D",
          "text": "The exact C++ syntax for the data structure",
          "raw": "D) The exact C++ syntax for the data structure"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "ADT ek mathematical model hota hai jo sirf yeh specify karta hai ki data structure par \"KYA\" operations kiye ja sakte hain (jaise PUSH, POP), lekin yeh nahi batata ki implementation array se hoga ya linked list se.",
      "trap": "ADT implementation-independent hota hai."
    },
    {
      "id": 3,
      "originalNum": 3,
      "sectionId": 1,
      "sectionTitle": "Introduction to Data Structures & Algorithm Analysis",
      "question": "Which asymptotic notation represents the strict upper bound of a function?",
      "rawQuestion": "Q3. Which asymptotic notation represents the strict upper bound of a function?",
      "options": [
        {
          "key": "A",
          "text": "Big-O (O)",
          "raw": "A) Big-O (O)"
        },
        {
          "key": "B",
          "text": "Little-o (o)",
          "raw": "B) Little-o (o)"
        },
        {
          "key": "C",
          "text": "Big-Omega (Omega)",
          "raw": "C) Big-Omega (Omega)"
        },
        {
          "key": "D",
          "text": "Big-Theta (Theta)",
          "raw": "D) Big-Theta (Theta)"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "Big-O represents upper bound (<=), jabki Little-o represents STRICT upper bound (<). Yani Little-o mein function kabhi bhi bound ke asymptotically equal nahi ho sakta.",
      "trap": "Big-O equality allow karta hai (f(n) = O(f(n))), lekin Little-o strict inequality chahta hai."
    },
    {
      "id": 4,
      "originalNum": 4,
      "sectionId": 1,
      "sectionTitle": "Introduction to Data Structures & Algorithm Analysis",
      "question": "Arrange the following functions in increasing order of growth rate:\nf1(n) = 2^n, f2(n) = n^(3/2), f3(n) = n log n, f4(n) = n!",
      "rawQuestion": "Q4. Arrange the following functions in increasing order of growth rate:\nf1(n) = 2^n, f2(n) = n^(3/2), f3(n) = n log n, f4(n) = n!",
      "options": [
        {
          "key": "A",
          "text": "f3 < f2 < f1 < f4",
          "raw": "A) f3 < f2 < f1 < f4"
        },
        {
          "key": "B",
          "text": "f2 < f3 < f1 < f4",
          "raw": "B) f2 < f3 < f1 < f4"
        },
        {
          "key": "C",
          "text": "f3 < f2 < f4 < f1",
          "raw": "C) f3 < f2 < f4 < f1"
        },
        {
          "key": "D",
          "text": "f2 < f3 < f4 < f1",
          "raw": "D) f2 < f3 < f4 < f1"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Medium",
      "explanation": "Growth rates: n log n (f3) < n^1.5 (f2) < 2^n (exponential, f1) < n! (factorial, f4). Isliye sahi sequence hai f3 < f2 < f1 < f4.",
      "trap": "Always remember: Exponential (2^n) grows much slower than Factorial (n!)."
    },
    {
      "id": 5,
      "originalNum": 5,
      "sectionId": 1,
      "sectionTitle": "Introduction to Data Structures & Algorithm Analysis",
      "question": "What is the time complexity of the following code snippet?\nint count = 0;\nfor (int i = 1; i <= n; i *= 2)\n    count++;",
      "rawQuestion": "Q5. What is the time complexity of the following code snippet?\nint count = 0;\nfor (int i = 1; i <= n; i *= 2)\n    count++;",
      "options": [
        {
          "key": "A",
          "text": "O(n)",
          "raw": "A) O(n)"
        },
        {
          "key": "B",
          "text": "O(n^2)",
          "raw": "B) O(n^2)"
        },
        {
          "key": "C",
          "text": "O(log n)",
          "raw": "C) O(log n)"
        },
        {
          "key": "D",
          "text": "O(sqrt(n))",
          "raw": "D) O(sqrt(n))"
        }
      ],
      "correctAnswer": "C",
      "difficulty": "Easy",
      "explanation": "Loop variable i har iteration mein 2 se multiply ho raha hai (1, 2, 4, 8, ..., 2^k). Jab 2^k >= n hoga, loop terminate ho jayega. Therefore, k = log2(n), so time complexity is O(log n).",
      "trap": "Agar i++ hota toh O(n) hota, lekin yahan i *= 2 hai jo logarithmic hota hai."
    },
    {
      "id": 6,
      "originalNum": 6,
      "sectionId": 1,
      "sectionTitle": "Introduction to Data Structures & Algorithm Analysis",
      "question": "Visiting each element in a data structure exactly once is known as:",
      "rawQuestion": "Q6. Visiting each element in a data structure exactly once is known as:",
      "options": [
        {
          "key": "A",
          "text": "Sorting",
          "raw": "A) Sorting"
        },
        {
          "key": "B",
          "text": "Traversing",
          "raw": "B) Traversing"
        },
        {
          "key": "C",
          "text": "Merging",
          "raw": "C) Merging"
        },
        {
          "key": "D",
          "text": "Searching",
          "raw": "D) Searching"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Traversing ka matlab hota hai data structure ke har element ko exactly ek baar access/process karna.",
      "trap": "Searching ka matlab kisi specific key ki location find karna hota hai, har element ko visit karna nahi."
    },
    {
      "id": 7,
      "originalNum": 7,
      "sectionId": 1,
      "sectionTitle": "Introduction to Data Structures & Algorithm Analysis",
      "question": "Which of the following is a static data structure?",
      "rawQuestion": "Q7. Which of the following is a static data structure?",
      "options": [
        {
          "key": "A",
          "text": "Array",
          "raw": "A) Array"
        },
        {
          "key": "B",
          "text": "Singly Linked List",
          "raw": "B) Singly Linked List"
        },
        {
          "key": "C",
          "text": "Dynamic Stack",
          "raw": "C) Dynamic Stack"
        },
        {
          "key": "D",
          "text": "Binary Search Tree",
          "raw": "D) Binary Search Tree"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "Array ek static data structure hai kyunki iska size compile time par fix ho jata hai aur runtime par change nahi ho sakta.",
      "trap": "Linked lists, trees aur dynamically allocated stacks runtime par grow karte hain."
    },
    {
      "id": 8,
      "originalNum": 8,
      "sectionId": 1,
      "sectionTitle": "Introduction to Data Structures & Algorithm Analysis",
      "question": "If an algorithm takes 0.5 milliseconds for input size n = 100, and its complexity is O(n^2), how long will it take for n = 200?",
      "rawQuestion": "Q8. If an algorithm takes 0.5 milliseconds for input size n = 100, and its complexity is O(n^2), how long will it take for n = 200?",
      "options": [
        {
          "key": "A",
          "text": "1.0 ms",
          "raw": "A) 1.0 ms"
        },
        {
          "key": "B",
          "text": "2.0 ms",
          "raw": "B) 2.0 ms"
        },
        {
          "key": "C",
          "text": "4.0 ms",
          "raw": "C) 4.0 ms"
        },
        {
          "key": "D",
          "text": "8.0 ms",
          "raw": "D) 8.0 ms"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "Time T(n) = c * n^2. Jab input size 100 se 200 hota hai (2 times double), toh time (2)^2 = 4 times badh jata hai. Therefore: 0.5 ms * 4 = 2.0 ms.",
      "trap": "Students often double the time (0.5 * 2 = 1.0) forgetting the quadratic n^2 square factor!"
    },
    {
      "id": 9,
      "originalNum": 9,
      "sectionId": 1,
      "sectionTitle": "Introduction to Data Structures & Algorithm Analysis",
      "question": "The best case time complexity of an algorithm is mathematically represented by:",
      "rawQuestion": "Q9. The best case time complexity of an algorithm is mathematically represented by:",
      "options": [
        {
          "key": "A",
          "text": "O (Big-O)",
          "raw": "A) O (Big-O)"
        },
        {
          "key": "B",
          "text": "Omega (Big-Omega)",
          "raw": "B) Omega (Big-Omega)"
        },
        {
          "key": "C",
          "text": "Theta (Big-Theta)",
          "raw": "C) Theta (Big-Theta)"
        },
        {
          "key": "D",
          "text": "o (Little-o)",
          "raw": "D) o (Little-o)"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Big-Omega (Omega) lower bound ko denote karta hai, jo algorithm ke best-case time ko mathematically represent karta hai.",
      "trap": "Big-O upper bound (worst case) hota hai."
    },
    {
      "id": 10,
      "originalNum": 10,
      "sectionId": 1,
      "sectionTitle": "Introduction to Data Structures & Algorithm Analysis",
      "question": "Which data structure is best suited to represent a hierarchical relationship among data items?",
      "rawQuestion": "Q10. Which data structure is best suited to represent a hierarchical relationship among data items?",
      "options": [
        {
          "key": "A",
          "text": "Array",
          "raw": "A) Array"
        },
        {
          "key": "B",
          "text": "Stack",
          "raw": "B) Stack"
        },
        {
          "key": "C",
          "text": "Tree",
          "raw": "C) Tree"
        },
        {
          "key": "D",
          "text": "Queue",
          "raw": "D) Queue"
        }
      ],
      "correctAnswer": "C",
      "difficulty": "Easy",
      "explanation": "Tree ek hierarchical data structure hai (jaise organization chart, family tree, folder system). Graphs network relationship represent karte hain.",
      "trap": "Graph is for general network relationships with cycles; Tree is strictly hierarchical and acyclic."
    },
    {
      "id": 11,
      "originalNum": 11,
      "sectionId": 1,
      "sectionTitle": "Introduction to Data Structures & Algorithm Analysis",
      "question": "What is the time complexity of the following nested loop?\nfor (int i = 0; i < n; i++)\n    for (int j = 0; j < i; j++)\n        sum++;",
      "rawQuestion": "Q11. What is the time complexity of the following nested loop?\nfor (int i = 0; i < n; i++)\n    for (int j = 0; j < i; j++)\n        sum++;",
      "options": [
        {
          "key": "A",
          "text": "O(n)",
          "raw": "A) O(n)"
        },
        {
          "key": "B",
          "text": "O(n log n)",
          "raw": "B) O(n log n)"
        },
        {
          "key": "C",
          "text": "O(n^2)",
          "raw": "C) O(n^2)"
        },
        {
          "key": "D",
          "text": "O(n^3)",
          "raw": "D) O(n^3)"
        }
      ],
      "correctAnswer": "C",
      "difficulty": "Medium",
      "explanation": "Outer loop runs n times. Inner loop runs 0 + 1 + 2 + ... + (n-1) times = n(n-1)/2 times. Expanding gives (n^2 - n)/2 = O(n^2).",
      "trap": "Inner loop variable j depends on i; sum of first n integers is quadratic O(n^2)."
    },
    {
      "id": 12,
      "originalNum": 12,
      "sectionId": 1,
      "sectionTitle": "Introduction to Data Structures & Algorithm Analysis",
      "question": "Which of the following statements about Big-Theta (Theta) notation is TRUE?",
      "rawQuestion": "Q12. Which of the following statements about Big-Theta (Theta) notation is TRUE?",
      "options": [
        {
          "key": "A",
          "text": "f(n) = Theta(g(n)) iff f(n) = O(g(n)) and f(n) = Omega(g(n))",
          "raw": "A) f(n) = Theta(g(n)) iff f(n) = O(g(n)) and f(n) = Omega(g(n))"
        },
        {
          "key": "B",
          "text": "Big-Theta represents only worst case",
          "raw": "B) Big-Theta represents only worst case"
        },
        {
          "key": "C",
          "text": "Big-Theta represents only best case",
          "raw": "C) Big-Theta represents only best case"
        },
        {
          "key": "D",
          "text": "Big-Theta is always linear",
          "raw": "D) Big-Theta is always linear"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Medium",
      "explanation": "Formal Theorem: f(n) = Theta(g(n)) agar aur sirf agar f(n) dono O(g(n)) [upper bound] aur Omega(g(n)) [lower bound] satisfy karta ho. Isse Tight Bound kehte hain.",
      "trap": "Theta is asymptotically tight, sandwiching the function between c1*g(n) and c2*g(n)."
    },
    {
      "id": 13,
      "originalNum": 13,
      "sectionId": 1,
      "sectionTitle": "Introduction to Data Structures & Algorithm Analysis",
      "question": "What is the complexity of an algorithm that performs 3n^3 + 100n^2 + 5000n operations?",
      "rawQuestion": "Q13. What is the complexity of an algorithm that performs 3n^3 + 100n^2 + 5000n operations?",
      "options": [
        {
          "key": "A",
          "text": "O(n)",
          "raw": "A) O(n)"
        },
        {
          "key": "B",
          "text": "O(n^2)",
          "raw": "B) O(n^2)"
        },
        {
          "key": "C",
          "text": "O(n^3)",
          "raw": "C) O(n^3)"
        },
        {
          "key": "D",
          "text": "O(n!)",
          "raw": "D) O(n!)"
        }
      ],
      "correctAnswer": "C",
      "difficulty": "Easy",
      "explanation": "Asymptotic analysis mein hum highest degree term (dominant term) ko rakhte hain aur constants drop karte hain. Yahan dominant term 3n^3 hai, so complexity is O(n^3).",
      "trap": "Low order terms like 100n^2 and large constant coefficients become negligible as n approaches infinity."
    },
    {
      "id": 14,
      "originalNum": 14,
      "sectionId": 1,
      "sectionTitle": "Introduction to Data Structures & Algorithm Analysis",
      "question": "Which data structure allows both homogeneous and heterogeneous data representation depending on implementation?",
      "rawQuestion": "Q14. Which data structure allows both homogeneous and heterogeneous data representation depending on implementation?",
      "options": [
        {
          "key": "A",
          "text": "Array (Homogeneous) vs Structure/Record (Heterogeneous)",
          "raw": "A) Array (Homogeneous) vs Structure/Record (Heterogeneous)"
        },
        {
          "key": "B",
          "text": "Stack vs Queue",
          "raw": "B) Stack vs Queue"
        },
        {
          "key": "C",
          "text": "Tree vs Graph",
          "raw": "C) Tree vs Graph"
        },
        {
          "key": "D",
          "text": "Singly vs Doubly list",
          "raw": "D) Singly vs Doubly list"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "Array strictly homogeneous (same data type) hota hai. Struct/Class heterogeneous (different data types) elements ko group karta hai.",
      "trap": "Arrays in C/C++ can never store mixed data types."
    },
    {
      "id": 15,
      "originalNum": 15,
      "sectionId": 1,
      "sectionTitle": "Introduction to Data Structures & Algorithm Analysis",
      "question": "What is the time complexity of the following code?\nfor (int i = 1; i <= n; i++)\n    for (int j = 1; j <= n; j *= 2)\n        k++;",
      "rawQuestion": "Q15. What is the time complexity of the following code?\nfor (int i = 1; i <= n; i++)\n    for (int j = 1; j <= n; j *= 2)\n        k++;",
      "options": [
        {
          "key": "A",
          "text": "O(n)",
          "raw": "A) O(n)"
        },
        {
          "key": "B",
          "text": "O(n log n)",
          "raw": "B) O(n log n)"
        },
        {
          "key": "C",
          "text": "O(n^2)",
          "raw": "C) O(n^2)"
        },
        {
          "key": "D",
          "text": "O(log n)",
          "raw": "D) O(log n)"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "Outer loop runs n times. Inner loop doubles j every iteration, running log2(n) times. Total executions = n * log2(n) = O(n log n).",
      "trap": "Do not multiply to get O(n^2); the inner loop is logarithmic, not linear."
    },
    {
      "id": 16,
      "originalNum": 16,
      "sectionId": 1,
      "sectionTitle": "Introduction to Data Structures & Algorithm Analysis",
      "question": "If f(n) = 100n and g(n) = n^2, which of the following is correct?",
      "rawQuestion": "Q16. If f(n) = 100n and g(n) = n^2, which of the following is correct?",
      "options": [
        {
          "key": "A",
          "text": "f(n) = O(g(n))",
          "raw": "A) f(n) = O(g(n))"
        },
        {
          "key": "B",
          "text": "g(n) = O(f(n))",
          "raw": "B) g(n) = O(f(n))"
        },
        {
          "key": "C",
          "text": "f(n) = Theta(g(n))",
          "raw": "C) f(n) = Theta(g(n))"
        },
        {
          "key": "D",
          "text": "f(n) = Omega(g(n))",
          "raw": "D) f(n) = Omega(g(n))"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "Linear function 100n quadratic function n^2 se asymptotically bohot slow grow karta hai. For n > 100, 100n <= 1 * n^2. Therefore, f(n) = O(g(n)).",
      "trap": "The coefficient 100 does not matter for large n."
    },
    {
      "id": 17,
      "originalNum": 17,
      "sectionId": 1,
      "sectionTitle": "Introduction to Data Structures & Algorithm Analysis",
      "question": "Space complexity of an algorithm considers:",
      "rawQuestion": "Q17. Space complexity of an algorithm considers:",
      "options": [
        {
          "key": "A",
          "text": "Only the input space",
          "raw": "A) Only the input space"
        },
        {
          "key": "B",
          "text": "Fixed part (instruction space) + Variable part (dynamic memory & recursion stack)",
          "raw": "B) Fixed part (instruction space) + Variable part (dynamic memory & recursion stack)"
        },
        {
          "key": "C",
          "text": "Only the hard disk space",
          "raw": "C) Only the hard disk space"
        },
        {
          "key": "D",
          "text": "Only global variables",
          "raw": "D) Only global variables"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Total Space = Fixed space (code size, constants) + Variable space (dynamically allocated memory, recursion stack, local variables).",
      "trap": "Recursion stack memory is an essential part of auxiliary space complexity."
    },
    {
      "id": 18,
      "originalNum": 18,
      "sectionId": 1,
      "sectionTitle": "Introduction to Data Structures & Algorithm Analysis",
      "question": "Which asymptotic notation is symmetric (i.e., if f(n) is related to g(n), then g(n) is related to f(n))?",
      "rawQuestion": "Q18. Which asymptotic notation is symmetric (i.e., if f(n) is related to g(n), then g(n) is related to f(n))?",
      "options": [
        {
          "key": "A",
          "text": "Big-O",
          "raw": "A) Big-O"
        },
        {
          "key": "B",
          "text": "Big-Omega",
          "raw": "B) Big-Omega"
        },
        {
          "key": "C",
          "text": "Big-Theta (Theta)",
          "raw": "C) Big-Theta (Theta)"
        },
        {
          "key": "D",
          "text": "Little-o",
          "raw": "D) Little-o"
        }
      ],
      "correctAnswer": "C",
      "difficulty": "Medium",
      "explanation": "Big-Theta is symmetric: f(n) = Theta(g(n)) if and only if g(n) = Theta(f(n)). Big-O and Big-Omega are transpose-symmetric, not symmetric.",
      "trap": "f(n) = O(g(n)) implies g(n) = Omega(f(n)), NOT g(n) = O(f(n))."
    },
    {
      "id": 19,
      "originalNum": 19,
      "sectionId": 2,
      "sectionTitle": "Arrays & Memory Address Calculations",
      "question": "An array A[1..10, 1..15] is stored in Row-Major Order. If the base address is 1000 and each element occupies 2 bytes, what is the address of A[4][6]?",
      "rawQuestion": "Q19. An array A[1..10, 1..15] is stored in Row-Major Order. If the base address is 1000 and each element occupies 2 bytes, what is the address of A[4][6]?",
      "options": [
        {
          "key": "A",
          "text": "1102",
          "raw": "A) 1102"
        },
        {
          "key": "B",
          "text": "1100",
          "raw": "B) 1100"
        },
        {
          "key": "C",
          "text": "1114",
          "raw": "C) 1114"
        },
        {
          "key": "D",
          "text": "1110",
          "raw": "D) 1110"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "Formula: Address = B + W * [(i - LB1) * C + (j - LB2)]. Yahan B = 1000, W = 2, LB1 = 1, LB2 = 1, Columns C = 15 - 1 + 1 = 15. For A[4][6]: i = 4, j = 6. Address = 1000 + 2 * [(4 - 1) * 15 + (6 - 1)] = 1000 + 2 * [3 * 15 + 5] = 1000 + 2 * [45 + 5] = 1000 + 2 * 50 = 1000 + 100 = 1100.",
      "trap": "Columns C = 15 use hoga, Rows R = 10 use nahi hoga!"
    },
    {
      "id": 20,
      "originalNum": 20,
      "sectionId": 2,
      "sectionTitle": "Arrays & Memory Address Calculations",
      "question": "Given a 2D array A[1..10, 1..15] stored in Column-Major Order with base address 1000 and 2 bytes per element, what is the address of element A[4][6]?",
      "rawQuestion": "Q20. Given a 2D array A[1..10, 1..15] stored in Column-Major Order with base address 1000 and 2 bytes per element, what is the address of element A[4][6]?",
      "options": [
        {
          "key": "A",
          "text": "1106",
          "raw": "A) 1106"
        },
        {
          "key": "B",
          "text": "1100",
          "raw": "B) 1100"
        },
        {
          "key": "C",
          "text": "1104",
          "raw": "C) 1104"
        },
        {
          "key": "D",
          "text": "1108",
          "raw": "D) 1108"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Medium",
      "explanation": "Formula: Address = B + W * [(j - LB2) * R + (i - LB1)]. Yahan Rows R = 10 - 1 + 1 = 10. For A[4][6]: Address = 1000 + 2 * [(6 - 1) * 10 + (4 - 1)] = 1000 + 2 * [5 * 10 + 3] = 1000 + 2 * [53] = 1000 + 106 = 1106.",
      "trap": "In Column-Major order, multiply column offset by number of ROWS (R = 10)."
    },
    {
      "id": 21,
      "originalNum": 21,
      "sectionId": 2,
      "sectionTitle": "Arrays & Memory Address Calculations",
      "question": "What is the number of elements in a 2D array defined as A[-3..5, 2..8]?",
      "rawQuestion": "Q21. What is the number of elements in a 2D array defined as A[-3..5, 2..8]?",
      "options": [
        {
          "key": "A",
          "text": "54",
          "raw": "A) 54"
        },
        {
          "key": "B",
          "text": "63",
          "raw": "B) 63"
        },
        {
          "key": "C",
          "text": "48",
          "raw": "C) 48"
        },
        {
          "key": "D",
          "text": "56",
          "raw": "D) 56"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Rows = UB1 - LB1 + 1 = 5 - (-3) + 1 = 9. Columns = UB2 - LB2 + 1 = 8 - 2 + 1 = 7. Total elements = Rows * Columns = 9 * 7 = 63.",
      "trap": "Subtracting without adding 1 gives (8 * 6 = 48) which is incorrect!"
    },
    {
      "id": 22,
      "originalNum": 22,
      "sectionId": 2,
      "sectionTitle": "Arrays & Memory Address Calculations",
      "question": "Which programming language stores 2D arrays in Column-Major Order by default?",
      "rawQuestion": "Q22. Which programming language stores 2D arrays in Column-Major Order by default?",
      "options": [
        {
          "key": "A",
          "text": "C",
          "raw": "A) C"
        },
        {
          "key": "B",
          "text": "C++",
          "raw": "B) C++"
        },
        {
          "key": "C",
          "text": "FORTRAN",
          "raw": "C) FORTRAN"
        },
        {
          "key": "D",
          "text": "Java",
          "raw": "D) Java"
        }
      ],
      "correctAnswer": "C",
      "difficulty": "Easy",
      "explanation": "FORTRAN aur MATLAB column-major order use karte hain. C, C++, Python, aur Java row-major order use karte hain.",
      "trap": "Standard C family languages are strictly Row-Major."
    },
    {
      "id": 23,
      "originalNum": 23,
      "sectionId": 2,
      "sectionTitle": "Arrays & Memory Address Calculations",
      "question": "What is the time complexity to insert an element at the beginning of an array of size n?",
      "rawQuestion": "Q23. What is the time complexity to insert an element at the beginning of an array of size n?",
      "options": [
        {
          "key": "A",
          "text": "O(1)",
          "raw": "A) O(1)"
        },
        {
          "key": "B",
          "text": "O(log n)",
          "raw": "B) O(log n)"
        },
        {
          "key": "C",
          "text": "O(n)",
          "raw": "C) O(n)"
        },
        {
          "key": "D",
          "text": "O(n^2)",
          "raw": "D) O(n^2)"
        }
      ],
      "correctAnswer": "C",
      "difficulty": "Easy",
      "explanation": "Beginning par insert karne ke liye saare existing n elements ko ek-ek position right shift karna padta hai, isliye time complexity O(n) hoti hai.",
      "trap": "End par insert karna O(1) hota hai agar space available ho, lekin beginning par O(n) lagta hai."
    },
    {
      "id": 24,
      "originalNum": 24,
      "sectionId": 2,
      "sectionTitle": "Arrays & Memory Address Calculations",
      "question": "Why does an array provide O(1) random access to its elements?",
      "rawQuestion": "Q24. Why does an array provide O(1) random access to its elements?",
      "options": [
        {
          "key": "A",
          "text": "Because elements are sorted",
          "raw": "A) Because elements are sorted"
        },
        {
          "key": "B",
          "text": "Because elements are stored in contiguous memory and have uniform size",
          "raw": "B) Because elements are stored in contiguous memory and have uniform size"
        },
        {
          "key": "C",
          "text": "Because it uses pointers",
          "raw": "C) Because it uses pointers"
        },
        {
          "key": "D",
          "text": "Because of hash functions",
          "raw": "D) Because of hash functions"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Contiguous memory aur uniform data type hone ki wajah se index se direct memory address calculate ho jata hai: Base + i * W.",
      "trap": "Sorting se random access ka koi lena dena nahi hai."
    },
    {
      "id": 25,
      "originalNum": 25,
      "sectionId": 2,
      "sectionTitle": "Arrays & Memory Address Calculations",
      "question": "A triangular matrix of size n x n has non-zero elements only on and below the main diagonal. How many elements need to be stored?",
      "rawQuestion": "Q25. A triangular matrix of size n x n has non-zero elements only on and below the main diagonal. How many elements need to be stored?",
      "options": [
        {
          "key": "A",
          "text": "n^2",
          "raw": "A) n^2"
        },
        {
          "key": "B",
          "text": "n(n - 1) / 2",
          "raw": "B) n(n - 1) / 2"
        },
        {
          "key": "C",
          "text": "n(n + 1) / 2",
          "raw": "C) n(n + 1) / 2"
        },
        {
          "key": "D",
          "text": "2n - 1",
          "raw": "D) 2n - 1"
        }
      ],
      "correctAnswer": "C",
      "difficulty": "Medium",
      "explanation": "Row 1 has 1 element, Row 2 has 2 elements, ..., Row n has n elements. Total elements = 1 + 2 + ... + n = n(n + 1) / 2.",
      "trap": "Strictly lower triangular (excluding diagonal) has n(n-1)/2, but including diagonal has n(n+1)/2."
    },
    {
      "id": 26,
      "originalNum": 26,
      "sectionId": 2,
      "sectionTitle": "Arrays & Memory Address Calculations",
      "question": "If an array is declared as `int arr[5] = {10, 20, 30};` in C, what is the value of `arr[4]`?",
      "rawQuestion": "Q26. If an array is declared as `int arr[5] = {10, 20, 30};` in C, what is the value of `arr[4]`?",
      "options": [
        {
          "key": "A",
          "text": "Garbage value",
          "raw": "A) Garbage value"
        },
        {
          "key": "B",
          "text": "0",
          "raw": "B) 0"
        },
        {
          "key": "C",
          "text": "30",
          "raw": "C) 30"
        },
        {
          "key": "D",
          "text": "Compilation error",
          "raw": "D) Compilation error"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "C standard ke according, agar array partially initialize kiya jaye, toh remaining sabhi elements automatically 0 se initialize ho jaate hain.",
      "trap": "Agar bilkul initialize na karein tab garbage value hoti hai, partial initialization par 0 hota hai."
    },
    {
      "id": 27,
      "originalNum": 27,
      "sectionId": 2,
      "sectionTitle": "Arrays & Memory Address Calculations",
      "question": "What is the time complexity of deleting an element from index i in an unsorted array if order does NOT need to be preserved?",
      "rawQuestion": "Q27. What is the time complexity of deleting an element from index i in an unsorted array if order does NOT need to be preserved?",
      "options": [
        {
          "key": "A",
          "text": "O(n)",
          "raw": "A) O(n)"
        },
        {
          "key": "B",
          "text": "O(log n)",
          "raw": "B) O(log n)"
        },
        {
          "key": "C",
          "text": "O(1)",
          "raw": "C) O(1)"
        },
        {
          "key": "D",
          "text": "O(n log n)",
          "raw": "D) O(n log n)"
        }
      ],
      "correctAnswer": "C",
      "difficulty": "Difficult",
      "explanation": "Agar order preserve karna zaroori nahi hai, toh hum aakhiri element ko index i par copy karke array size ko 1 decrease kar sakte hain. Yeh constant time O(1) mein ho jata hai!",
      "trap": "Standard deletion with order preservation takes O(n) due to shifting, but without order preservation it is O(1)."
    },
    {
      "id": 28,
      "originalNum": 28,
      "sectionId": 2,
      "sectionTitle": "Arrays & Memory Address Calculations",
      "question": "Given base address B = 500, element size W = 4, LB = -2. What is the address of element at index 3?",
      "rawQuestion": "Q28. Given base address B = 500, element size W = 4, LB = -2. What is the address of element at index 3?",
      "options": [
        {
          "key": "A",
          "text": "512",
          "raw": "A) 512"
        },
        {
          "key": "B",
          "text": "520",
          "raw": "B) 520"
        },
        {
          "key": "C",
          "text": "508",
          "raw": "C) 508"
        },
        {
          "key": "D",
          "text": "516",
          "raw": "D) 516"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Formula: Loc(A[i]) = B + W * (i - LB) = 500 + 4 * (3 - (-2)) = 500 + 4 * (5) = 500 + 20 = 520.",
      "trap": "Be careful with negative lower bound: 3 - (-2) = 5, not 1."
    },
    {
      "id": 29,
      "originalNum": 29,
      "sectionId": 2,
      "sectionTitle": "Arrays & Memory Address Calculations",
      "question": "What is a Sparse Matrix?",
      "rawQuestion": "Q29. What is a Sparse Matrix?",
      "options": [
        {
          "key": "A",
          "text": "A matrix with mostly non-zero elements",
          "raw": "A) A matrix with mostly non-zero elements"
        },
        {
          "key": "B",
          "text": "A matrix in which the majority of elements are zero",
          "raw": "B) A matrix in which the majority of elements are zero"
        },
        {
          "key": "C",
          "text": "A matrix with only 1 row",
          "raw": "C) A matrix with only 1 row"
        },
        {
          "key": "D",
          "text": "A square matrix with determinant 0",
          "raw": "D) A square matrix with determinant 0"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Sparse Matrix ek aisi matrix hoti hai jisme zero elements ki sankhya non-zero elements se bohot zyada hoti hai. Memory bachane ke liye isse 3-tuple format (Row, Col, Value) ya Linked List se represent karte hain.",
      "trap": "Dense matrix has mostly non-zero values; Sparse matrix has mostly zero values."
    },
    {
      "id": 30,
      "originalNum": 30,
      "sectionId": 2,
      "sectionTitle": "Arrays & Memory Address Calculations",
      "question": "In 3-tuple representation of a sparse matrix, what do the three columns represent?",
      "rawQuestion": "Q30. In 3-tuple representation of a sparse matrix, what do the three columns represent?",
      "options": [
        {
          "key": "A",
          "text": "Row index, Column index, Value of non-zero element",
          "raw": "A) Row index, Column index, Value of non-zero element"
        },
        {
          "key": "B",
          "text": "Base address, Offset, Length",
          "raw": "B) Base address, Offset, Length"
        },
        {
          "key": "C",
          "text": "Key, Left child, Right child",
          "raw": "C) Key, Left child, Right child"
        },
        {
          "key": "D",
          "text": "Row count, Column count, Total non-zero count",
          "raw": "D) Row count, Column count, Total non-zero count"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "3-tuple array representation mein har row ek non-zero element ko store karti hai: (Row Index, Column Index, Value). First row store karti hai (Total Rows, Total Cols, Total Non-zeros).",
      "trap": "Header row stores dimensions, subsequent rows store individual non-zero entries."
    },
    {
      "id": 31,
      "originalNum": 31,
      "sectionId": 2,
      "sectionTitle": "Arrays & Memory Address Calculations",
      "question": "An array A[0..5, 0..5] stores a tridiagonal matrix. How many non-zero diagonals does it contain, and what is the total number of non-zero elements?",
      "rawQuestion": "Q31. An array A[0..5, 0..5] stores a tridiagonal matrix. How many non-zero diagonals does it contain, and what is the total number of non-zero elements?",
      "options": [
        {
          "key": "A",
          "text": "3 diagonals, 16 elements",
          "raw": "A) 3 diagonals, 16 elements"
        },
        {
          "key": "B",
          "text": "3 diagonals, 18 elements",
          "raw": "B) 3 diagonals, 18 elements"
        },
        {
          "key": "C",
          "text": "2 diagonals, 12 elements",
          "raw": "C) 2 diagonals, 12 elements"
        },
        {
          "key": "D",
          "text": "1 diagonal, 6 elements",
          "raw": "D) 1 diagonal, 6 elements"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Difficult",
      "explanation": "Tridiagonal matrix mein main diagonal, superdiagonal (above main), aur subdiagonal (below main) non-zero hote hain (total 3 diagonals). For size n = 6: Elements = n (main) + (n-1) (super) + (n-1) (sub) = 3n - 2 = 3(6) - 2 = 16 elements.",
      "trap": "Formula for tridiagonal non-zero elements is 3n - 2."
    },
    {
      "id": 32,
      "originalNum": 32,
      "sectionId": 2,
      "sectionTitle": "Arrays & Memory Address Calculations",
      "question": "What is the minimum number of comparisons needed to find BOTH the maximum and minimum elements in an array of size n?",
      "rawQuestion": "Q32. What is the minimum number of comparisons needed to find BOTH the maximum and minimum elements in an array of size n?",
      "options": [
        {
          "key": "A",
          "text": "2n - 2",
          "raw": "A) 2n - 2"
        },
        {
          "key": "B",
          "text": "ceil(3n / 2) - 2",
          "raw": "B) ceil(3n / 2) - 2"
        },
        {
          "key": "C",
          "text": "n log n",
          "raw": "C) n log n"
        },
        {
          "key": "D",
          "text": "n - 1",
          "raw": "D) n - 1"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Difficult",
      "explanation": "Elements ko pairs mein compare karke tournament method se: n is even -> 1.5n - 2 comparisons. Best algorithm takes ceil(3n/2) - 2 comparisons, which is strictly better than the naive 2n - 2.",
      "trap": "Naive linear search takes 2n - 2 comparisons. Tournament pair comparison takes 3n/2 - 2."
    },
    {
      "id": 33,
      "originalNum": 33,
      "sectionId": 2,
      "sectionTitle": "Arrays & Memory Address Calculations",
      "question": "In a 3D array A[1..2, 1..3, 1..4] stored in Row-Major order with B = 100, W = 1 byte, what is the address of A[2][2][3]?",
      "rawQuestion": "Q33. In a 3D array A[1..2, 1..3, 1..4] stored in Row-Major order with B = 100, W = 1 byte, what is the address of A[2][2][3]?",
      "options": [
        {
          "key": "A",
          "text": "118",
          "raw": "A) 118"
        },
        {
          "key": "B",
          "text": "119",
          "raw": "B) 119"
        },
        {
          "key": "C",
          "text": "120",
          "raw": "C) 120"
        },
        {
          "key": "D",
          "text": "117",
          "raw": "D) 117"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Difficult",
      "explanation": "Dimensions: D1 = 2, D2 = 3, D3 = 4. Index: i1=2, i2=2, i3=3. Offset = (i1-1)*(D2*D3) + (i2-1)*(D3) + (i3-1) = (2-1)*(3*4) + (2-1)*(4) + (3-1) = 1*12 + 1*4 + 2 = 18. Address = 100 + 1 * 18 = 118.",
      "trap": "In 3D Row-Major: multiply first index offset by product of remaining dimensions (D2 * D3)."
    },
    {
      "id": 34,
      "originalNum": 34,
      "sectionId": 2,
      "sectionTitle": "Arrays & Memory Address Calculations",
      "question": "Which array operation takes O(1) time regardless of array size?",
      "rawQuestion": "Q34. Which array operation takes O(1) time regardless of array size?",
      "options": [
        {
          "key": "A",
          "text": "Deleting by value",
          "raw": "A) Deleting by value"
        },
        {
          "key": "B",
          "text": "Accessing element by known index",
          "raw": "B) Accessing element by known index"
        },
        {
          "key": "C",
          "text": "Searching for an element in unsorted array",
          "raw": "C) Searching for an element in unsorted array"
        },
        {
          "key": "D",
          "text": "Inserting in sorted array",
          "raw": "D) Inserting in sorted array"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Address computation Base + i * W takes constant CPU operations regardless of whether n is 10 or 10,000,000.",
      "trap": "Searching takes O(n), access by index takes O(1)."
    },
    {
      "id": 35,
      "originalNum": 35,
      "sectionId": 2,
      "sectionTitle": "Arrays & Memory Address Calculations",
      "question": "What is the major disadvantage of using an array to implement dynamic data structures?",
      "rawQuestion": "Q35. What is the major disadvantage of using an array to implement dynamic data structures?",
      "options": [
        {
          "key": "A",
          "text": "Slow access time",
          "raw": "A) Slow access time"
        },
        {
          "key": "B",
          "text": "Fixed memory size requiring expensive array resizing and memory copy",
          "raw": "B) Fixed memory size requiring expensive array resizing and memory copy"
        },
        {
          "key": "C",
          "text": "More pointer overhead",
          "raw": "C) More pointer overhead"
        },
        {
          "key": "D",
          "text": "Lack of indexing",
          "raw": "D) Lack of indexing"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Array ka size fixed hota hai. Jab array full ho jaye, toh naya bada array create karke saare elements copy karne padte hain (O(n) reallocation cost).",
      "trap": "Pointers are used in linked lists, not static arrays."
    },
    {
      "id": 36,
      "originalNum": 36,
      "sectionId": 2,
      "sectionTitle": "Arrays & Memory Address Calculations",
      "question": "An array of pointers in C is useful because:",
      "rawQuestion": "Q36. An array of pointers in C is useful because:",
      "options": [
        {
          "key": "A",
          "text": "It allows efficient handling of variable-length strings without wasting memory",
          "raw": "A) It allows efficient handling of variable-length strings without wasting memory"
        },
        {
          "key": "B",
          "text": "It makes CPU faster",
          "raw": "B) It makes CPU faster"
        },
        {
          "key": "C",
          "text": "It converts arrays to trees",
          "raw": "C) It converts arrays to trees"
        },
        {
          "key": "D",
          "text": "It eliminates base address",
          "raw": "D) It eliminates base address"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Medium",
      "explanation": "Ragged arrays (array of pointers to char arrays) har string ke exact length ke barabar memory allocate karte hain, unlike 2D fixed char arrays jo rectangular padding waste karte hain.",
      "trap": "Array of pointers saves memory for jagged/ragged data structures."
    },
    {
      "id": 37,
      "originalNum": 37,
      "sectionId": 3,
      "sectionTitle": "Stacks & Polish Notation Expressions",
      "question": "Which data structure is used by the compiler to manage function calls and local variables?",
      "rawQuestion": "Q37. Which data structure is used by the compiler to manage function calls and local variables?",
      "options": [
        {
          "key": "A",
          "text": "Queue",
          "raw": "A) Queue"
        },
        {
          "key": "B",
          "text": "Stack",
          "raw": "B) Stack"
        },
        {
          "key": "C",
          "text": "Tree",
          "raw": "C) Tree"
        },
        {
          "key": "D",
          "text": "Hash Table",
          "raw": "D) Hash Table"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Function call stack (Call Stack / Runtime Stack) har function call ke Activation Record ko store karta hai. Yeh LIFO order follow karta hai.",
      "trap": "CPU task scheduling uses Queue, but function execution uses Stack."
    },
    {
      "id": 38,
      "originalNum": 38,
      "sectionId": 3,
      "sectionTitle": "Stacks & Polish Notation Expressions",
      "question": "What is the postfix evaluation of the expression: `5 3 + 8 2 - *` ?",
      "rawQuestion": "Q38. What is the postfix evaluation of the expression: `5 3 + 8 2 - *` ?",
      "options": [
        {
          "key": "A",
          "text": "48",
          "raw": "A) 48"
        },
        {
          "key": "B",
          "text": "16",
          "raw": "B) 16"
        },
        {
          "key": "C",
          "text": "32",
          "raw": "C) 32"
        },
        {
          "key": "D",
          "text": "24",
          "raw": "D) 24"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Medium",
      "explanation": "Step 1: Push 5, Push 3.\nStep 2: '+' -> pop 3, 5 -> 5 + 3 = 8 -> Push 8.\nStep 3: Push 8, Push 2.\nStep 4: '-' -> pop 2, 8 -> 8 - 2 = 6 -> Push 6.\nStep 5: '*' -> pop 6, 8 -> 8 * 6 = 48 -> Push 48. Answer = 48.",
      "trap": "Ensure correct order during subtraction: first popped is right operand, second popped is left operand."
    },
    {
      "id": 39,
      "originalNum": 39,
      "sectionId": 3,
      "sectionTitle": "Stacks & Polish Notation Expressions",
      "question": "Convert the infix expression `A + B * C` to postfix notation:",
      "rawQuestion": "Q39. Convert the infix expression `A + B * C` to postfix notation:",
      "options": [
        {
          "key": "A",
          "text": "A B C * +",
          "raw": "A) A B C * +"
        },
        {
          "key": "B",
          "text": "A B + C *",
          "raw": "B) A B + C *"
        },
        {
          "key": "C",
          "text": "+ A * B C",
          "raw": "C) + A * B C"
        },
        {
          "key": "D",
          "text": "A B C + *",
          "raw": "D) A B C + *"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "'*' has higher precedence than '+'. So `B * C` converts first to `B C *`. Then `A + (B C *)` becomes `A B C * +`.",
      "trap": "Do not evaluate left to right without respecting operator precedence."
    },
    {
      "id": 40,
      "originalNum": 40,
      "sectionId": 3,
      "sectionTitle": "Stacks & Polish Notation Expressions",
      "question": "Which operator has right-to-left associativity?",
      "rawQuestion": "Q40. Which operator has right-to-left associativity?",
      "options": [
        {
          "key": "A",
          "text": "Addition (+)",
          "raw": "A) Addition (+)"
        },
        {
          "key": "B",
          "text": "Multiplication (*)",
          "raw": "B) Multiplication (*)"
        },
        {
          "key": "C",
          "text": "Exponentiation (^)",
          "raw": "C) Exponentiation (^)"
        },
        {
          "key": "D",
          "text": "Division (/)",
          "raw": "D) Division (/)"
        }
      ],
      "correctAnswer": "C",
      "difficulty": "Easy",
      "explanation": "Exponentiation (^) right-to-left evaluate hota hai. E.g., `2 ^ 3 ^ 2` evaluates as `2 ^ (3 ^ 2) = 2 ^ 9 = 512`.",
      "trap": "All standard arithmetic operators (+, -, *, /) are left-to-right associative, EXCEPT exponentiation."
    },
    {
      "id": 41,
      "originalNum": 41,
      "sectionId": 3,
      "sectionTitle": "Stacks & Polish Notation Expressions",
      "question": "How many minimum stacks are required to implement a FIFO Queue?",
      "rawQuestion": "Q41. How many minimum stacks are required to implement a FIFO Queue?",
      "options": [
        {
          "key": "A",
          "text": "1",
          "raw": "A) 1"
        },
        {
          "key": "B",
          "text": "2",
          "raw": "B) 2"
        },
        {
          "key": "C",
          "text": "3",
          "raw": "C) 3"
        },
        {
          "key": "D",
          "text": "4",
          "raw": "D) 4"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Queue ko implement karne ke liye exactly 2 stacks ki zarurat hoti hai (Stack 1 for enqueue, Stack 2 for dequeue to invert the LIFO order to FIFO).",
      "trap": "A single stack cannot reverse the order twice."
    },
    {
      "id": 42,
      "originalNum": 42,
      "sectionId": 3,
      "sectionTitle": "Stacks & Polish Notation Expressions",
      "question": "In an array implementation of a Stack of size MAX, the overflow condition occurs when:",
      "rawQuestion": "Q42. In an array implementation of a Stack of size MAX, the overflow condition occurs when:",
      "options": [
        {
          "key": "A",
          "text": "TOP == 0",
          "raw": "A) TOP == 0"
        },
        {
          "key": "B",
          "text": "TOP == MAX - 1",
          "raw": "B) TOP == MAX - 1"
        },
        {
          "key": "C",
          "text": "TOP == MAX",
          "raw": "C) TOP == MAX"
        },
        {
          "key": "D",
          "text": "TOP == -1",
          "raw": "D) TOP == -1"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "0-based indexing mein array index 0 se MAX - 1 tak hota hai. Jab TOP == MAX - 1 ho jaye, stack full ho jata hai aur overflow condition aati hai.",
      "trap": "TOP == MAX is an out-of-bounds index."
    },
    {
      "id": 43,
      "originalNum": 43,
      "sectionId": 3,
      "sectionTitle": "Stacks & Polish Notation Expressions",
      "question": "What is the postfix form of the infix expression: `(A + B) * (C - D)` ?",
      "rawQuestion": "Q43. What is the postfix form of the infix expression: `(A + B) * (C - D)` ?",
      "options": [
        {
          "key": "A",
          "text": "A B + C D - *",
          "raw": "A) A B + C D - *"
        },
        {
          "key": "B",
          "text": "A B C D + - *",
          "raw": "B) A B C D + - *"
        },
        {
          "key": "C",
          "text": "* + A B - C D",
          "raw": "C) * + A B - C D"
        },
        {
          "key": "D",
          "text": "A B + * C D -",
          "raw": "D) A B + * C D -"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "Parentheses evaluate first: `(A + B)` becomes `A B +`, `(C - D)` becomes `C D -`. Multiplication joins them: `A B + C D - *`.",
      "trap": "Parentheses never appear in the final postfix expression."
    },
    {
      "id": 44,
      "originalNum": 44,
      "sectionId": 3,
      "sectionTitle": "Stacks & Polish Notation Expressions",
      "question": "If the sequence of operations PUSH(1), PUSH(2), POP, PUSH(3), PUSH(4), POP, POP is executed, what is the sequence of popped elements?",
      "rawQuestion": "Q44. If the sequence of operations PUSH(1), PUSH(2), POP, PUSH(3), PUSH(4), POP, POP is executed, what is the sequence of popped elements?",
      "options": [
        {
          "key": "A",
          "text": "2, 4, 3",
          "raw": "A) 2, 4, 3"
        },
        {
          "key": "B",
          "text": "1, 2, 3",
          "raw": "B) 1, 2, 3"
        },
        {
          "key": "C",
          "text": "2, 3, 4",
          "raw": "C) 2, 3, 4"
        },
        {
          "key": "D",
          "text": "4, 3, 2",
          "raw": "D) 4, 3, 2"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "Stack state trace:\n• Push 1 -> [1]\n• Push 2 -> [1, 2]\n• POP -> returns 2. Stack: [1]\n• Push 3 -> [1, 3]\n• Push 4 -> [1, 3, 4]\n• POP -> returns 4. Stack: [1, 3]\n• POP -> returns 3. Stack: [1]. Sequence = 2, 4, 3.",
      "trap": "Follow stack LIFO carefully at each step."
    },
    {
      "id": 45,
      "originalNum": 45,
      "sectionId": 3,
      "sectionTitle": "Stacks & Polish Notation Expressions",
      "question": "Which of the following problems can be solved using a Stack?",
      "rawQuestion": "Q45. Which of the following problems can be solved using a Stack?",
      "options": [
        {
          "key": "A",
          "text": "Balanced parentheses checking",
          "raw": "A) Balanced parentheses checking"
        },
        {
          "key": "B",
          "text": "Decimal to Binary number conversion",
          "raw": "B) Decimal to Binary number conversion"
        },
        {
          "key": "C",
          "text": "Tower of Hanoi recursion",
          "raw": "C) Tower of Hanoi recursion"
        },
        {
          "key": "D",
          "text": "All of the above",
          "raw": "D) All of the above"
        }
      ],
      "correctAnswer": "D",
      "difficulty": "Easy",
      "explanation": "Stack parentheses matching, base conversion (remainders reverse order mein print karne ke liye), aur recursive Tower of Hanoi sabhi ke liye use hota hai.",
      "trap": "All three are classic standard stack applications."
    },
    {
      "id": 46,
      "originalNum": 46,
      "sectionId": 3,
      "sectionTitle": "Stacks & Polish Notation Expressions",
      "question": "What is the prefix form of the expression: `A + B * C` ?",
      "rawQuestion": "Q46. What is the prefix form of the expression: `A + B * C` ?",
      "options": [
        {
          "key": "A",
          "text": "+ A * B C",
          "raw": "A) + A * B C"
        },
        {
          "key": "B",
          "text": "* + A B C",
          "raw": "B) * + A B C"
        },
        {
          "key": "C",
          "text": "+ * A B C",
          "raw": "C) + * A B C"
        },
        {
          "key": "D",
          "text": "A B C * +",
          "raw": "D) A B C * +"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Medium",
      "explanation": "First evaluate `B * C` -> `* B C`. Then `A + (* B C)` -> `+ A * B C`.",
      "trap": "In Prefix (Polish Notation), the operator comes BEFORE operands."
    },
    {
      "id": 47,
      "originalNum": 47,
      "sectionId": 3,
      "sectionTitle": "Stacks & Polish Notation Expressions",
      "question": "What is the result of evaluating the prefix expression: `+ * 2 3 4` ?",
      "rawQuestion": "Q47. What is the result of evaluating the prefix expression: `+ * 2 3 4` ?",
      "options": [
        {
          "key": "A",
          "text": "10",
          "raw": "A) 10"
        },
        {
          "key": "B",
          "text": "14",
          "raw": "B) 14"
        },
        {
          "key": "C",
          "text": "24",
          "raw": "C) 24"
        },
        {
          "key": "D",
          "text": "12",
          "raw": "D) 12"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Medium",
      "explanation": "Prefix ko right-to-left scan karte hain:\nOperands: 4, 3, 2. Operator `*` applies to 2 and 3 -> 2 * 3 = 6. Then operator `+` applies to 6 and 4 -> 6 + 4 = 10.",
      "trap": "Prefix expressions are evaluated by scanning from RIGHT to LEFT."
    },
    {
      "id": 48,
      "originalNum": 48,
      "sectionId": 3,
      "sectionTitle": "Stacks & Polish Notation Expressions",
      "question": "How can two stacks be implemented efficiently in a single 1D array of size N?",
      "rawQuestion": "Q48. How can two stacks be implemented efficiently in a single 1D array of size N?",
      "options": [
        {
          "key": "A",
          "text": "Stack 1 starts at index 0 and grows right; Stack 2 starts at index N - 1 and grows left",
          "raw": "A) Stack 1 starts at index 0 and grows right; Stack 2 starts at index N - 1 and grows left"
        },
        {
          "key": "B",
          "text": "Alternate slots (even indices for Stack 1, odd for Stack 2)",
          "raw": "B) Alternate slots (even indices for Stack 1, odd for Stack 2)"
        },
        {
          "key": "C",
          "text": "Divide array exactly in half at N / 2",
          "raw": "C) Divide array exactly in half at N / 2"
        },
        {
          "key": "D",
          "text": "Impossible in a single array",
          "raw": "D) Impossible in a single array"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Medium",
      "explanation": "Stack 1 starts at 0 (top1 = -1) aur right move karta hai. Stack 2 starts at N-1 (top2 = N) aur left move karta hai. Overflow tabhi hoga jab dono tops meet karein (`top1 + 1 == top2`), maximizing memory utilization.",
      "trap": "Dividing in half at N/2 causes false overflow when one stack is full and the other is empty."
    },
    {
      "id": 49,
      "originalNum": 49,
      "sectionId": 3,
      "sectionTitle": "Stacks & Polish Notation Expressions",
      "question": "In the Min-Stack problem, how can we retrieve the minimum element in O(1) time?",
      "rawQuestion": "Q49. In the Min-Stack problem, how can we retrieve the minimum element in O(1) time?",
      "options": [
        {
          "key": "A",
          "text": "By scanning the stack in O(n)",
          "raw": "A) By scanning the stack in O(n)"
        },
        {
          "key": "B",
          "text": "By maintaining an auxiliary stack that stores the minimum element seen so far at each level",
          "raw": "B) By maintaining an auxiliary stack that stores the minimum element seen so far at each level"
        },
        {
          "key": "C",
          "text": "By keeping the main stack sorted",
          "raw": "C) By keeping the main stack sorted"
        },
        {
          "key": "D",
          "text": "By using a circular queue",
          "raw": "D) By using a circular queue"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "Ek auxiliary stack maintain kiya jata hai. Har push par, naye element aur current min ka minimum auxiliary stack mein push hota hai. `getMin()` simply auxiliary stack ke top ko constant time O(1) mein return karta hai.",
      "trap": "Sorting the stack would violate O(1) push and pop operations."
    },
    {
      "id": 50,
      "originalNum": 50,
      "sectionId": 3,
      "sectionTitle": "Stacks & Polish Notation Expressions",
      "question": "Which data structure is required to reverse a string of characters?",
      "rawQuestion": "Q50. Which data structure is required to reverse a string of characters?",
      "options": [
        {
          "key": "A",
          "text": "Queue",
          "raw": "A) Queue"
        },
        {
          "key": "B",
          "text": "Stack",
          "raw": "B) Stack"
        },
        {
          "key": "C",
          "text": "Tree",
          "raw": "C) Tree"
        },
        {
          "key": "D",
          "text": "Hash Table",
          "raw": "D) Hash Table"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Characters ko sequence mein stack mein PUSH karo, fir POP karke nikaloge toh LIFO property ki wajah se exact reverse order milega.",
      "trap": "Queue maintains original FIFO order, so it cannot reverse."
    },
    {
      "id": 51,
      "originalNum": 51,
      "sectionId": 3,
      "sectionTitle": "Stacks & Polish Notation Expressions",
      "question": "What is the time complexity of PUSH and POP operations when a Stack is implemented using a Singly Linked List with head pointer?",
      "rawQuestion": "Q51. What is the time complexity of PUSH and POP operations when a Stack is implemented using a Singly Linked List with head pointer?",
      "options": [
        {
          "key": "A",
          "text": "O(1) and O(1)",
          "raw": "A) O(1) and O(1)"
        },
        {
          "key": "B",
          "text": "O(1) and O(n)",
          "raw": "B) O(1) and O(n)"
        },
        {
          "key": "C",
          "text": "O(n) and O(1)",
          "raw": "C) O(n) and O(1)"
        },
        {
          "key": "D",
          "text": "O(n) and O(n)",
          "raw": "D) O(n) and O(n)"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "Linked list ke HEAD par insert (Push) aur HEAD se delete (Pop) dono O(1) constant time operations hote hain.",
      "trap": "If push/pop were implemented at the tail of a singly linked list without tail pointer, it would be O(n)."
    },
    {
      "id": 52,
      "originalNum": 52,
      "sectionId": 3,
      "sectionTitle": "Stacks & Polish Notation Expressions",
      "question": "In an infix expression, which of the following is true regarding parentheses?",
      "rawQuestion": "Q52. In an infix expression, which of the following is true regarding parentheses?",
      "options": [
        {
          "key": "A",
          "text": "They override normal operator precedence",
          "raw": "A) They override normal operator precedence"
        },
        {
          "key": "B",
          "text": "They are preserved in postfix notation",
          "raw": "B) They are preserved in postfix notation"
        },
        {
          "key": "C",
          "text": "They are only allowed with addition",
          "raw": "C) They are only allowed with addition"
        },
        {
          "key": "D",
          "text": "They must always be square brackets",
          "raw": "D) They must always be square brackets"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "Parentheses highest priority hold karte hain aur default operator precedence ko override karte hain.",
      "trap": "Parentheses never appear in postfix or prefix expressions."
    },
    {
      "id": 53,
      "originalNum": 53,
      "sectionId": 3,
      "sectionTitle": "Stacks & Polish Notation Expressions",
      "question": "What is the postfix equivalent of `A + B + C` assuming left-to-right associativity of `+`?",
      "rawQuestion": "Q53. What is the postfix equivalent of `A + B + C` assuming left-to-right associativity of `+`?",
      "options": [
        {
          "key": "A",
          "text": "A B + C +",
          "raw": "A) A B + C +"
        },
        {
          "key": "B",
          "text": "A B C + +",
          "raw": "B) A B C + +"
        },
        {
          "key": "C",
          "text": "+ + A B C",
          "raw": "C) + + A B C"
        },
        {
          "key": "D",
          "text": "A B + + C",
          "raw": "D) A B + + C"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "Due to left associativity: `(A + B) + C` -> `A B + + C` -> `A B + C +`.",
      "trap": "If right-associative, it would be A B C + +."
    },
    {
      "id": 54,
      "originalNum": 54,
      "sectionId": 3,
      "sectionTitle": "Stacks & Polish Notation Expressions",
      "question": "What will happen if you POP from an empty stack?",
      "rawQuestion": "Q54. What will happen if you POP from an empty stack?",
      "options": [
        {
          "key": "A",
          "text": "Stack Overflow",
          "raw": "A) Stack Overflow"
        },
        {
          "key": "B",
          "text": "Stack Underflow error",
          "raw": "B) Stack Underflow error"
        },
        {
          "key": "C",
          "text": "Segmentation fault always",
          "raw": "C) Segmentation fault always"
        },
        {
          "key": "D",
          "text": "Stack doubles in size",
          "raw": "D) Stack doubles in size"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Empty stack se element remove karne ki koshish ko Stack Underflow kehte hain.",
      "trap": "Overflow happens on inserting into a full stack; Underflow on removing from an empty stack."
    },
    {
      "id": 55,
      "originalNum": 55,
      "sectionId": 4,
      "sectionTitle": "Queues & Circular Queues",
      "question": "In a circular queue of capacity N implemented using an array, the condition for queue FULL is:",
      "rawQuestion": "Q55. In a circular queue of capacity N implemented using an array, the condition for queue FULL is:",
      "options": [
        {
          "key": "A",
          "text": "(REAR + 1) % N == FRONT",
          "raw": "A) (REAR + 1) % N == FRONT"
        },
        {
          "key": "B",
          "text": "REAR == FRONT",
          "raw": "B) REAR == FRONT"
        },
        {
          "key": "C",
          "text": "REAR == N - 1",
          "raw": "C) REAR == N - 1"
        },
        {
          "key": "D",
          "text": "FRONT == (REAR + 1)",
          "raw": "D) FRONT == (REAR + 1)"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Medium",
      "explanation": "Circular queue mein jab agla rear index front ke barabar ho jaye, toh queue full hoti hai: `(REAR + 1) % N == FRONT`.",
      "trap": "REAR == FRONT empty condition ke liye use hota hai ya 1-element condition ke liye, full ke liye nahi."
    },
    {
      "id": 56,
      "originalNum": 56,
      "sectionId": 4,
      "sectionTitle": "Queues & Circular Queues",
      "question": "What major drawback of a linear array-based queue is solved by a circular queue?",
      "rawQuestion": "Q56. What major drawback of a linear array-based queue is solved by a circular queue?",
      "options": [
        {
          "key": "A",
          "text": "Slow search time",
          "raw": "A) Slow search time"
        },
        {
          "key": "B",
          "text": "False overflow (unused free spaces at front)",
          "raw": "B) False overflow (unused free spaces at front)"
        },
        {
          "key": "C",
          "text": "Lack of dynamic memory",
          "raw": "C) Lack of dynamic memory"
        },
        {
          "key": "D",
          "text": "Inability to insert integers",
          "raw": "D) Inability to insert integers"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Linear queue mein jab elements delete hote hain, front aage badh jata hai. Rear end par pahunchne ke baad naye elements insert nahi ho pate bhale hi aage slots khali hon (False Overflow). Circular queue modulo wrap se isko solve karta hai.",
      "trap": "Circular queue does not change O(1) time complexity; it saves memory space."
    },
    {
      "id": 57,
      "originalNum": 57,
      "sectionId": 4,
      "sectionTitle": "Queues & Circular Queues",
      "question": "In a circular queue with size N = 5, FRONT = 2 and REAR = 1. How many elements are currently in the queue?",
      "rawQuestion": "Q57. In a circular queue with size N = 5, FRONT = 2 and REAR = 1. How many elements are currently in the queue?",
      "options": [
        {
          "key": "A",
          "text": "4",
          "raw": "A) 4"
        },
        {
          "key": "B",
          "text": "1",
          "raw": "B) 1"
        },
        {
          "key": "C",
          "text": "5",
          "raw": "C) 5"
        },
        {
          "key": "D",
          "text": "3",
          "raw": "D) 3"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Difficult",
      "explanation": "Formula: Count = (REAR - FRONT + N) % N. If count == 0 and queue is full, count = N. Here: (1 - 2 + 5) % 5 = 4 % 5 = 4 elements. Elements are located at indices 2, 3, 4, 0.",
      "trap": "REAR < FRONT means the queue has wrapped around the circular boundary!"
    },
    {
      "id": 58,
      "originalNum": 58,
      "sectionId": 4,
      "sectionTitle": "Queues & Circular Queues",
      "question": "A double-ended queue (Deque) that allows insertion at both ends but deletion only at one end is called:",
      "rawQuestion": "Q58. A double-ended queue (Deque) that allows insertion at both ends but deletion only at one end is called:",
      "options": [
        {
          "key": "A",
          "text": "Input-restricted deque",
          "raw": "A) Input-restricted deque"
        },
        {
          "key": "B",
          "text": "Output-restricted deque",
          "raw": "B) Output-restricted deque"
        },
        {
          "key": "C",
          "text": "Priority queue",
          "raw": "C) Priority queue"
        },
        {
          "key": "D",
          "text": "Circular queue",
          "raw": "D) Circular queue"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "Output-restricted deque mein deletion sirf ek end se hota hai, jabki insertion dono ends se allow hota hai.",
      "trap": "Input-restricted deque mein insertion ek end se hota hai aur deletion dono ends se hota hai."
    },
    {
      "id": 59,
      "originalNum": 59,
      "sectionId": 4,
      "sectionTitle": "Queues & Circular Queues",
      "question": "Which data structure is typically used to implement Breadth-First Search (BFS) traversal of a graph?",
      "rawQuestion": "Q59. Which data structure is typically used to implement Breadth-First Search (BFS) traversal of a graph?",
      "options": [
        {
          "key": "A",
          "text": "Stack",
          "raw": "A) Stack"
        },
        {
          "key": "B",
          "text": "Queue",
          "raw": "B) Queue"
        },
        {
          "key": "C",
          "text": "Priority Queue",
          "raw": "C) Priority Queue"
        },
        {
          "key": "D",
          "text": "Binary Search Tree",
          "raw": "D) Binary Search Tree"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "BFS level-by-level traversal karta hai, jiske liye FIFO order zaroori hai. Isliye standard Queue use hoti hai.",
      "trap": "DFS uses Stack; BFS uses Queue."
    },
    {
      "id": 60,
      "originalNum": 60,
      "sectionId": 4,
      "sectionTitle": "Queues & Circular Queues",
      "question": "How many queues are required to implement a LIFO Stack?",
      "rawQuestion": "Q60. How many queues are required to implement a LIFO Stack?",
      "options": [
        {
          "key": "A",
          "text": "1",
          "raw": "A) 1"
        },
        {
          "key": "B",
          "text": "2",
          "raw": "B) 2"
        },
        {
          "key": "C",
          "text": "3",
          "raw": "C) 3"
        },
        {
          "key": "D",
          "text": "4",
          "raw": "D) 4"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Stack ko simulate karne ke liye 2 queues ki zarurat hoti hai.",
      "trap": "Just like 2 stacks make a queue, 2 queues make a stack."
    },
    {
      "id": 61,
      "originalNum": 61,
      "sectionId": 4,
      "sectionTitle": "Queues & Circular Queues",
      "question": "In a priority queue, how are elements dequeued?",
      "rawQuestion": "Q61. In a priority queue, how are elements dequeued?",
      "options": [
        {
          "key": "A",
          "text": "Strictly in the order they arrived",
          "raw": "A) Strictly in the order they arrived"
        },
        {
          "key": "B",
          "text": "According to their associated priority values",
          "raw": "B) According to their associated priority values"
        },
        {
          "key": "C",
          "text": "In random order",
          "raw": "C) In random order"
        },
        {
          "key": "D",
          "text": "LIFO order",
          "raw": "D) LIFO order"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Priority queue mein highest (ya lowest, depending on min/max heap) priority wala element sabse pehle dequeue hota hai.",
      "trap": "It does not strictly follow FIFO."
    },
    {
      "id": 62,
      "originalNum": 62,
      "sectionId": 4,
      "sectionTitle": "Queues & Circular Queues",
      "question": "What is the time complexity of ENQUEUE and DEQUEUE operations in an array-based circular queue?",
      "rawQuestion": "Q62. What is the time complexity of ENQUEUE and DEQUEUE operations in an array-based circular queue?",
      "options": [
        {
          "key": "A",
          "text": "O(1) and O(1)",
          "raw": "A) O(1) and O(1)"
        },
        {
          "key": "B",
          "text": "O(1) and O(n)",
          "raw": "B) O(1) and O(n)"
        },
        {
          "key": "C",
          "text": "O(n) and O(1)",
          "raw": "C) O(n) and O(1)"
        },
        {
          "key": "D",
          "text": "O(n) and O(n)",
          "raw": "D) O(n) and O(n)"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "Dono operations pointer arithmetic (modulo N) se instant hote hain, isliye dono O(1) constant time lete hain.",
      "trap": "No element shifting is performed in a circular queue."
    },
    {
      "id": 63,
      "originalNum": 63,
      "sectionId": 4,
      "sectionTitle": "Queues & Circular Queues",
      "question": "If FRONT = -1 and REAR = -1 in a circular queue, the queue is:",
      "rawQuestion": "Q63. If FRONT = -1 and REAR = -1 in a circular queue, the queue is:",
      "options": [
        {
          "key": "A",
          "text": "Full",
          "raw": "A) Full"
        },
        {
          "key": "B",
          "text": "Empty",
          "raw": "B) Empty"
        },
        {
          "key": "C",
          "text": "Containing exactly 1 element",
          "raw": "C) Containing exactly 1 element"
        },
        {
          "key": "D",
          "text": "Overflowed",
          "raw": "D) Overflowed"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "FRONT == -1 aur REAR == -1 standard empty (underflow) condition hoti hai.",
      "trap": "When 1 element is added, FRONT and REAR both become 0."
    },
    {
      "id": 64,
      "originalNum": 64,
      "sectionId": 4,
      "sectionTitle": "Queues & Circular Queues",
      "question": "Which scheduling algorithm in Operating Systems directly uses a FIFO Queue?",
      "rawQuestion": "Q64. Which scheduling algorithm in Operating Systems directly uses a FIFO Queue?",
      "options": [
        {
          "key": "A",
          "text": "First-Come, First-Served (FCFS)",
          "raw": "A) First-Come, First-Served (FCFS)"
        },
        {
          "key": "B",
          "text": "Shortest Job First (SJF)",
          "raw": "B) Shortest Job First (SJF)"
        },
        {
          "key": "C",
          "text": "Priority Scheduling",
          "raw": "C) Priority Scheduling"
        },
        {
          "key": "D",
          "text": "Multilevel Feedback Queue",
          "raw": "D) Multilevel Feedback Queue"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "FCFS CPU scheduling strictly FIFO queue principles par chalta hai.",
      "trap": "SJF and Priority scheduling use Priority Queues (Min-Heaps)."
    },
    {
      "id": 65,
      "originalNum": 65,
      "sectionId": 4,
      "sectionTitle": "Queues & Circular Queues",
      "question": "What is an input-restricted deque?",
      "rawQuestion": "Q65. What is an input-restricted deque?",
      "options": [
        {
          "key": "A",
          "text": "Insertion at one end, deletion at both ends",
          "raw": "A) Insertion at one end, deletion at both ends"
        },
        {
          "key": "B",
          "text": "Deletion at one end, insertion at both ends",
          "raw": "B) Deletion at one end, insertion at both ends"
        },
        {
          "key": "C",
          "text": "Insertion and deletion at both ends",
          "raw": "C) Insertion and deletion at both ends"
        },
        {
          "key": "D",
          "text": "Only allows positive inputs",
          "raw": "D) Only allows positive inputs"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "Input-restricted deque mein insertion sirf ek end se allow hota hai, lekin deletion dono ends (front aur rear) se ho sakta hai.",
      "trap": "Output-restricted has deletion at one end and insertion at both."
    },
    {
      "id": 66,
      "originalNum": 66,
      "sectionId": 4,
      "sectionTitle": "Queues & Circular Queues",
      "question": "In a queue implemented using a Singly Linked List, where should insertion and deletion take place for O(1) time efficiency?",
      "rawQuestion": "Q66. In a queue implemented using a Singly Linked List, where should insertion and deletion take place for O(1) time efficiency?",
      "options": [
        {
          "key": "A",
          "text": "Insert at REAR (tail), Delete at FRONT (head)",
          "raw": "A) Insert at REAR (tail), Delete at FRONT (head)"
        },
        {
          "key": "B",
          "text": "Insert at FRONT, Delete at REAR",
          "raw": "B) Insert at FRONT, Delete at REAR"
        },
        {
          "key": "C",
          "text": "Both at FRONT",
          "raw": "C) Both at FRONT"
        },
        {
          "key": "D",
          "text": "Both at REAR",
          "raw": "D) Both at REAR"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Medium",
      "explanation": "Head se delete karna O(1) hota hai. Tail pointer ke saath end par insert karna O(1) hota hai. Singly linked list mein tail se delete karna O(n) hota hai (prev node dhoondna padta hai). Isliye Insert at Tail and Delete at Head is optimal.",
      "trap": "Deleting at the tail of a singly linked list is O(n), so deletion MUST be at the head."
    },
    {
      "id": 67,
      "originalNum": 67,
      "sectionId": 4,
      "sectionTitle": "Queues & Circular Queues",
      "question": "What happens when a circular queue of size 6 with FRONT = 3 and REAR = 2 tries to enqueue an element?",
      "rawQuestion": "Q67. What happens when a circular queue of size 6 with FRONT = 3 and REAR = 2 tries to enqueue an element?",
      "options": [
        {
          "key": "A",
          "text": "Successful insertion at index 3",
          "raw": "A) Successful insertion at index 3"
        },
        {
          "key": "B",
          "text": "Queue Overflow error",
          "raw": "B) Queue Overflow error"
        },
        {
          "key": "C",
          "text": "FRONT becomes 4",
          "raw": "C) FRONT becomes 4"
        },
        {
          "key": "D",
          "text": "REAR becomes 4",
          "raw": "D) REAR becomes 4"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Difficult",
      "explanation": "Check full condition: `(REAR + 1) % N == (2 + 1) % 6 = 3 % 6 = 3`. Yahan FRONT == 3 hai, so `(REAR + 1) % N == FRONT` is TRUE. Queue already full hai, isliye Queue Overflow hoga!",
      "trap": "REAR = FRONT - 1 in modulo N means full!"
    },
    {
      "id": 68,
      "originalNum": 68,
      "sectionId": 4,
      "sectionTitle": "Queues & Circular Queues",
      "question": "Which data structure is most suitable for Round-Robin CPU scheduling?",
      "rawQuestion": "Q68. Which data structure is most suitable for Round-Robin CPU scheduling?",
      "options": [
        {
          "key": "A",
          "text": "Circular Queue",
          "raw": "A) Circular Queue"
        },
        {
          "key": "B",
          "text": "Priority Queue",
          "raw": "B) Priority Queue"
        },
        {
          "key": "C",
          "text": "Binary Search Tree",
          "raw": "C) Binary Search Tree"
        },
        {
          "key": "D",
          "text": "Stack",
          "raw": "D) Stack"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "Round Robin mein processes time quantum ke basis par cyclic order mein execute hoti hain. Circular Queue expired process ko pichhe bhej kar agle process ko instant run karne ke liye best hai.",
      "trap": "Priority queue is for Priority Scheduling, Circular queue is for Round Robin."
    },
    {
      "id": 69,
      "originalNum": 69,
      "sectionId": 4,
      "sectionTitle": "Queues & Circular Queues",
      "question": "If FRONT = 0 and REAR = 0 in a circular queue, how many elements are in the queue?",
      "rawQuestion": "Q69. If FRONT = 0 and REAR = 0 in a circular queue, how many elements are in the queue?",
      "options": [
        {
          "key": "A",
          "text": "Exactly 0 elements (Empty)",
          "raw": "A) Exactly 0 elements (Empty)"
        },
        {
          "key": "B",
          "text": "Exactly 1 element",
          "raw": "B) Exactly 1 element"
        },
        {
          "key": "C",
          "text": "Full queue",
          "raw": "C) Full queue"
        },
        {
          "key": "D",
          "text": "Indeterminate without flags",
          "raw": "D) Indeterminate without flags"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "Standard convention mein jab pehla element insert hota hai, FRONT aur REAR dono 0 par point karte hain. So there is exactly 1 element in the queue.",
      "trap": "Empty state is usually represented by FRONT = -1."
    },
    {
      "id": 70,
      "originalNum": 70,
      "sectionId": 4,
      "sectionTitle": "Queues & Circular Queues",
      "question": "What is the time complexity to find the minimum element in a standard FIFO Queue of n elements?",
      "rawQuestion": "Q70. What is the time complexity to find the minimum element in a standard FIFO Queue of n elements?",
      "options": [
        {
          "key": "A",
          "text": "O(1)",
          "raw": "A) O(1)"
        },
        {
          "key": "B",
          "text": "O(log n)",
          "raw": "B) O(log n)"
        },
        {
          "key": "C",
          "text": "O(n)",
          "raw": "C) O(n)"
        },
        {
          "key": "D",
          "text": "O(n^2)",
          "raw": "D) O(n^2)"
        }
      ],
      "correctAnswer": "C",
      "difficulty": "Easy",
      "explanation": "Queue unsorted hoti hai aur sirf FRONT se access deti hai. Minimum find karne ke liye saare n elements ko dequeue karke check karna padega (O(n) time).",
      "trap": "Queue does not keep elements sorted like a Min-Heap."
    },
    {
      "id": 71,
      "originalNum": 71,
      "sectionId": 4,
      "sectionTitle": "Queues & Circular Queues",
      "question": "In a queue, deletion is also referred to as:",
      "rawQuestion": "Q71. In a queue, deletion is also referred to as:",
      "options": [
        {
          "key": "A",
          "text": "PUSH",
          "raw": "A) PUSH"
        },
        {
          "key": "B",
          "text": "POP / DEQUEUE",
          "raw": "B) POP / DEQUEUE"
        },
        {
          "key": "C",
          "text": "PEEK",
          "raw": "C) PEEK"
        },
        {
          "key": "D",
          "text": "ENQUEUE",
          "raw": "D) ENQUEUE"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Queue mein insert ko ENQUEUE aur delete ko DEQUEUE kehte hain.",
      "trap": "PUSH and POP are stack terminology."
    },
    {
      "id": 72,
      "originalNum": 72,
      "sectionId": 4,
      "sectionTitle": "Queues & Circular Queues",
      "question": "Which underlying structure gives O(1) insertion and deletion at both ends for a Deque?",
      "rawQuestion": "Q72. Which underlying structure gives O(1) insertion and deletion at both ends for a Deque?",
      "options": [
        {
          "key": "A",
          "text": "Doubly Linked List",
          "raw": "A) Doubly Linked List"
        },
        {
          "key": "B",
          "text": "Singly Linked List without tail",
          "raw": "B) Singly Linked List without tail"
        },
        {
          "key": "C",
          "text": "Linear Array with fixed front",
          "raw": "C) Linear Array with fixed front"
        },
        {
          "key": "D",
          "text": "Binary Tree",
          "raw": "D) Binary Tree"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "Doubly Linked List mein HEAD aur TAIL dono ends par insert aur delete constant time O(1) mein ho jata hai.",
      "trap": "Singly linked list cannot delete from the tail in O(1)."
    },
    {
      "id": 73,
      "originalNum": 73,
      "sectionId": 5,
      "sectionTitle": "Linked Lists",
      "question": "What is the time complexity to insert a new node at the beginning of a Singly Linked List of length n?",
      "rawQuestion": "Q73. What is the time complexity to insert a new node at the beginning of a Singly Linked List of length n?",
      "options": [
        {
          "key": "A",
          "text": "O(1)",
          "raw": "A) O(1)"
        },
        {
          "key": "B",
          "text": "O(n)",
          "raw": "B) O(n)"
        },
        {
          "key": "C",
          "text": "O(log n)",
          "raw": "C) O(log n)"
        },
        {
          "key": "D",
          "text": "O(n^2)",
          "raw": "D) O(n^2)"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "Head par insert karne ke liye sirf naye node ka next pointer HEAD par set karna hota hai aur HEAD ko update karna hota hai. Yeh O(1) constant time operation hai.",
      "trap": "Array mein beginning insert O(n) hota hai shifting ki wajah se, lekin linked list mein O(1) hota hai."
    },
    {
      "id": 74,
      "originalNum": 74,
      "sectionId": 5,
      "sectionTitle": "Linked Lists",
      "question": "In a Singly Linked List with only a HEAD pointer, what is the time complexity to delete the LAST node?",
      "rawQuestion": "Q74. In a Singly Linked List with only a HEAD pointer, what is the time complexity to delete the LAST node?",
      "options": [
        {
          "key": "A",
          "text": "O(1)",
          "raw": "A) O(1)"
        },
        {
          "key": "B",
          "text": "O(n)",
          "raw": "B) O(n)"
        },
        {
          "key": "C",
          "text": "O(log n)",
          "raw": "C) O(log n)"
        },
        {
          "key": "D",
          "text": "O(n^2)",
          "raw": "D) O(n^2)"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "Last node ko delete karne ke liye hume second-to-last node tak traverse karna padta hai taaki uska next pointer NULL kiya ja sake. Is traversal mein O(n) time lagta hai.",
      "trap": "Even if a TAIL pointer is given in Singly Linked List, deleting the last node still takes O(n) because we cannot move backward to find the second-to-last node!"
    },
    {
      "id": 75,
      "originalNum": 75,
      "sectionId": 5,
      "sectionTitle": "Linked Lists",
      "question": "How does a Circular Linked List differ from a standard Singly Linked List?",
      "rawQuestion": "Q75. How does a Circular Linked List differ from a standard Singly Linked List?",
      "options": [
        {
          "key": "A",
          "text": "It has no data fields",
          "raw": "A) It has no data fields"
        },
        {
          "key": "B",
          "text": "The next pointer of the last node points back to the first node instead of NULL",
          "raw": "B) The next pointer of the last node points back to the first node instead of NULL"
        },
        {
          "key": "C",
          "text": "It can only store numbers",
          "raw": "C) It can only store numbers"
        },
        {
          "key": "D",
          "text": "It uses two pointers per node",
          "raw": "D) It uses two pointers per node"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Circular linked list mein koi NULL pointer nahi hota. Last node ka next pointer first (HEAD) node ko point karta hai, forming a circle.",
      "trap": "Two pointers per node is the characteristic of a Doubly Linked List, not a Circular Singly Linked List."
    },
    {
      "id": 76,
      "originalNum": 76,
      "sectionId": 5,
      "sectionTitle": "Linked Lists",
      "question": "How many pointers are changed when inserting a node between two existing nodes in a Doubly Linked List?",
      "rawQuestion": "Q76. How many pointers are changed when inserting a node between two existing nodes in a Doubly Linked List?",
      "options": [
        {
          "key": "A",
          "text": "2",
          "raw": "A) 2"
        },
        {
          "key": "B",
          "text": "3",
          "raw": "B) 3"
        },
        {
          "key": "C",
          "text": "4",
          "raw": "C) 4"
        },
        {
          "key": "D",
          "text": "1",
          "raw": "D) 1"
        }
      ],
      "correctAnswer": "C",
      "difficulty": "Medium",
      "explanation": "Total 4 pointers change hote hain:\n1. newNode->next = nextNode\n2. newNode->prev = prevNode\n3. prevNode->next = newNode\n4. nextNode->prev = newNode.",
      "trap": "Students often forget the backward pointers and answer 2."
    },
    {
      "id": 77,
      "originalNum": 77,
      "sectionId": 5,
      "sectionTitle": "Linked Lists",
      "question": "How many minimum pointers are required to reverse a Singly Linked List iteratively in a single pass?",
      "rawQuestion": "Q77. How many minimum pointers are required to reverse a Singly Linked List iteratively in a single pass?",
      "options": [
        {
          "key": "A",
          "text": "1",
          "raw": "A) 1"
        },
        {
          "key": "B",
          "text": "2",
          "raw": "B) 2"
        },
        {
          "key": "C",
          "text": "3",
          "raw": "C) 3"
        },
        {
          "key": "D",
          "text": "4",
          "raw": "D) 4"
        }
      ],
      "correctAnswer": "C",
      "difficulty": "Medium",
      "explanation": "Iterative reversal ke liye 3 pointers chahiye hote hain: `prev` (initially NULL), `curr` (initially HEAD), aur `next` (to store the rest of the list before breaking the link).",
      "trap": "Attempting with 2 pointers causes loss of reference to the remaining chain."
    },
    {
      "id": 78,
      "originalNum": 78,
      "sectionId": 5,
      "sectionTitle": "Linked Lists",
      "question": "Floyd's Cycle-Finding Algorithm (Hare and Tortoise) to detect a loop in a linked list uses two pointers moving at speeds:",
      "rawQuestion": "Q78. Floyd's Cycle-Finding Algorithm (Hare and Tortoise) to detect a loop in a linked list uses two pointers moving at speeds:",
      "options": [
        {
          "key": "A",
          "text": "Both move 1 step",
          "raw": "A) Both move 1 step"
        },
        {
          "key": "B",
          "text": "Slow moves 1 step, Fast moves 2 steps",
          "raw": "B) Slow moves 1 step, Fast moves 2 steps"
        },
        {
          "key": "C",
          "text": "Slow moves 1 step, Fast moves 3 steps",
          "raw": "C) Slow moves 1 step, Fast moves 3 steps"
        },
        {
          "key": "D",
          "text": "Both move 2 steps",
          "raw": "D) Both move 2 steps"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Slow pointer 1 step aage badhta hai aur Fast pointer 2 steps. Agar cycle hoti hai, toh dono pointers loop ke andar kisi na kisi node par meet karte hain. Time: O(n), Space: O(1).",
      "trap": "If they move at the same speed, fast will never catch slow."
    },
    {
      "id": 79,
      "originalNum": 79,
      "sectionId": 5,
      "sectionTitle": "Linked Lists",
      "question": "Which of the following is an advantage of a Linked List over an Array?",
      "rawQuestion": "Q79. Which of the following is an advantage of a Linked List over an Array?",
      "options": [
        {
          "key": "A",
          "text": "Random access to elements",
          "raw": "A) Random access to elements"
        },
        {
          "key": "B",
          "text": "Dynamic size and efficient insertions/deletions without shifting",
          "raw": "B) Dynamic size and efficient insertions/deletions without shifting"
        },
        {
          "key": "C",
          "text": "Lower memory usage per element",
          "raw": "C) Lower memory usage per element"
        },
        {
          "key": "D",
          "text": "Better cache locality",
          "raw": "D) Better cache locality"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Linked list runtime par dynamically grow/shrink kar sakti hai aur bina elements shift kiye O(1) time mein insert/delete kar sakti hai.",
      "trap": "Arrays have better cache locality and zero pointer memory overhead."
    },
    {
      "id": 80,
      "originalNum": 80,
      "sectionId": 5,
      "sectionTitle": "Linked Lists",
      "question": "A linked list where each node points to both its successor and its predecessor, and the last node connects to the first, is called:",
      "rawQuestion": "Q80. A linked list where each node points to both its successor and its predecessor, and the last node connects to the first, is called:",
      "options": [
        {
          "key": "A",
          "text": "Circular Doubly Linked List",
          "raw": "A) Circular Doubly Linked List"
        },
        {
          "key": "B",
          "text": "Singly Linked List",
          "raw": "B) Singly Linked List"
        },
        {
          "key": "C",
          "text": "Header Linked List",
          "raw": "C) Header Linked List"
        },
        {
          "key": "D",
          "text": "Self-referential array",
          "raw": "D) Self-referential array"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "Dono directions mein movement + circular wrap-around is called Circular Doubly Linked List.",
      "trap": "Standard DLL is not circular."
    },
    {
      "id": 81,
      "originalNum": 81,
      "sectionId": 5,
      "sectionTitle": "Linked Lists",
      "question": "What does the term \"self-referential structure\" mean in the context of linked list nodes in C?",
      "rawQuestion": "Q81. What does the term \"self-referential structure\" mean in the context of linked list nodes in C?",
      "options": [
        {
          "key": "A",
          "text": "A structure that refers to standard library functions",
          "raw": "A) A structure that refers to standard library functions"
        },
        {
          "key": "B",
          "text": "A structure containing a pointer member that points to the same structure type",
          "raw": "B) A structure containing a pointer member that points to the same structure type"
        },
        {
          "key": "C",
          "text": "A structure that cannot be modified",
          "raw": "C) A structure that cannot be modified"
        },
        {
          "key": "D",
          "text": "A structure with only one variable",
          "raw": "D) A structure with only one variable"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "`struct Node { int data; struct Node *next; };` - yahan `next` pointer usi structure type ko point karta hai, isliye isse self-referential structure kehte hain.",
      "trap": "It contains a pointer to itself, not an actual embedded copy of itself."
    },
    {
      "id": 82,
      "originalNum": 82,
      "sectionId": 5,
      "sectionTitle": "Linked Lists",
      "question": "What happens if you execute `free(head)` before `head = head->next` during node deletion in C?",
      "rawQuestion": "Q82. What happens if you execute `free(head)` before `head = head->next` during node deletion in C?",
      "options": [
        {
          "key": "A",
          "text": "Normal deletion",
          "raw": "A) Normal deletion"
        },
        {
          "key": "B",
          "text": "Memory leak and dangling pointer bug (loss of rest of the list)",
          "raw": "B) Memory leak and dangling pointer bug (loss of rest of the list)"
        },
        {
          "key": "C",
          "text": "Automatic traversal",
          "raw": "C) Automatic traversal"
        },
        {
          "key": "D",
          "text": "Compile time error",
          "raw": "D) Compile time error"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "Agar `head` ko pehle free kar doge, toh `head->next` access karna undefined behavior ho jayega aur bachi hui list ka address kho jayega (Memory Leak).",
      "trap": "Always save `head->next` in a temporary pointer before calling free()."
    },
    {
      "id": 83,
      "originalNum": 83,
      "sectionId": 5,
      "sectionTitle": "Linked Lists",
      "question": "How can you find the middle element of a Singly Linked List in a single pass?",
      "rawQuestion": "Q83. How can you find the middle element of a Singly Linked List in a single pass?",
      "options": [
        {
          "key": "A",
          "text": "Traverse twice to count total nodes",
          "raw": "A) Traverse twice to count total nodes"
        },
        {
          "key": "B",
          "text": "Use two pointers: slow moves 1 step, fast moves 2 steps. When fast reaches end, slow is at the middle",
          "raw": "B) Use two pointers: slow moves 1 step, fast moves 2 steps. When fast reaches end, slow is at the middle"
        },
        {
          "key": "C",
          "text": "Middle cannot be found in a single pass",
          "raw": "C) Middle cannot be found in a single pass"
        },
        {
          "key": "D",
          "text": "Use binary search",
          "raw": "D) Use binary search"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "Two-pointer (Runner technique): Fast pointer slow pointer se double speed par chalta hai. Jab fast end of list par pahunchta hai, slow pointer theek middle node par hota hai.",
      "trap": "Binary search is impossible on linked lists due to lack of random access."
    },
    {
      "id": 84,
      "originalNum": 84,
      "sectionId": 5,
      "sectionTitle": "Linked Lists",
      "question": "In a Circular Linked List with pointer `last` pointing to the last node, what is the address of the first node?",
      "rawQuestion": "Q84. In a Circular Linked List with pointer `last` pointing to the last node, what is the address of the first node?",
      "options": [
        {
          "key": "A",
          "text": "last",
          "raw": "A) last"
        },
        {
          "key": "B",
          "text": "last->next",
          "raw": "B) last->next"
        },
        {
          "key": "C",
          "text": "NULL",
          "raw": "C) NULL"
        },
        {
          "key": "D",
          "text": "last->prev",
          "raw": "D) last->prev"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Circular list mein last node ka agla pointer pehle node ko point karta hai: `last->next` is the first node.",
      "trap": "Maintaining a `last` pointer gives O(1) access to both first (`last->next`) and last node!"
    },
    {
      "id": 85,
      "originalNum": 85,
      "sectionId": 5,
      "sectionTitle": "Linked Lists",
      "question": "What is a Header Linked List?",
      "rawQuestion": "Q85. What is a Header Linked List?",
      "options": [
        {
          "key": "A",
          "text": "A list that has a special header node at the very beginning storing metadata like list length",
          "raw": "A) A list that has a special header node at the very beginning storing metadata like list length"
        },
        {
          "key": "B",
          "text": "A list with no pointers",
          "raw": "B) A list with no pointers"
        },
        {
          "key": "C",
          "text": "A list stored in ROM",
          "raw": "C) A list stored in ROM"
        },
        {
          "key": "D",
          "text": "An array of headers",
          "raw": "D) An array of headers"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "Header linked list mein first node ek dummy header hota hai jo actual data list ka part nahi hota balki list length, max value jaisi metadata store karta hai.",
      "trap": "Header node simplifies insertion/deletion edge cases at the beginning."
    },
    {
      "id": 86,
      "originalNum": 86,
      "sectionId": 5,
      "sectionTitle": "Linked Lists",
      "question": "What is the time complexity to merge two sorted Singly Linked Lists of lengths m and n into a single sorted list?",
      "rawQuestion": "Q86. What is the time complexity to merge two sorted Singly Linked Lists of lengths m and n into a single sorted list?",
      "options": [
        {
          "key": "A",
          "text": "O(m * n)",
          "raw": "A) O(m * n)"
        },
        {
          "key": "B",
          "text": "O(m + n)",
          "raw": "B) O(m + n)"
        },
        {
          "key": "C",
          "text": "O(log(m + n))",
          "raw": "C) O(log(m + n))"
        },
        {
          "key": "D",
          "text": "O(1)",
          "raw": "D) O(1)"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Dono lists ke head elements ko compare karke pointers rewire karte hue O(m + n) time mein merge kiya ja sakta hai with O(1) extra space.",
      "trap": "Merge sort merge step on linked list takes linear O(m+n) time."
    },
    {
      "id": 87,
      "originalNum": 87,
      "sectionId": 5,
      "sectionTitle": "Linked Lists",
      "question": "What is the space overhead of a Doubly Linked List with n nodes compared to a Singly Linked List on a 64-bit system?",
      "rawQuestion": "Q87. What is the space overhead of a Doubly Linked List with n nodes compared to a Singly Linked List on a 64-bit system?",
      "options": [
        {
          "key": "A",
          "text": "4n bytes",
          "raw": "A) 4n bytes"
        },
        {
          "key": "B",
          "text": "8n bytes (one extra 8-byte pointer per node)",
          "raw": "B) 8n bytes (one extra 8-byte pointer per node)"
        },
        {
          "key": "C",
          "text": "No extra overhead",
          "raw": "C) No extra overhead"
        },
        {
          "key": "D",
          "text": "16n bytes",
          "raw": "D) 16n bytes"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "64-bit systems par har pointer 8 bytes leta hai. Doubly linked list har node mein ek extra `prev` pointer rakhti hai, so extra memory = 8 * n bytes.",
      "trap": "Pointer size on 64-bit systems is 8 bytes, on 32-bit it is 4 bytes."
    },
    {
      "id": 88,
      "originalNum": 88,
      "sectionId": 5,
      "sectionTitle": "Linked Lists",
      "question": "Which linked list allows traversal in both directions without any NULL pointer?",
      "rawQuestion": "Q88. Which linked list allows traversal in both directions without any NULL pointer?",
      "options": [
        {
          "key": "A",
          "text": "Singly Linked List",
          "raw": "A) Singly Linked List"
        },
        {
          "key": "B",
          "text": "Circular Doubly Linked List",
          "raw": "B) Circular Doubly Linked List"
        },
        {
          "key": "C",
          "text": "Standard Doubly Linked List",
          "raw": "C) Standard Doubly Linked List"
        },
        {
          "key": "D",
          "text": "Header Linked List",
          "raw": "D) Header Linked List"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Circular Doubly Linked List has prev and next pointers in all nodes, and wraps around circularly at both ends with no NULL.",
      "trap": "Standard DLL has NULL at both ends."
    },
    {
      "id": 89,
      "originalNum": 89,
      "sectionId": 5,
      "sectionTitle": "Linked Lists",
      "question": "If a node `p` is in a doubly linked list, how do you remove `p` assuming it is not head or tail?",
      "rawQuestion": "Q89. If a node `p` is in a doubly linked list, how do you remove `p` assuming it is not head or tail?",
      "options": [
        {
          "key": "A",
          "text": "p->prev->next = p->next; p->next->prev = p->prev; free(p);",
          "raw": "A) p->prev->next = p->next; p->next->prev = p->prev; free(p);"
        },
        {
          "key": "B",
          "text": "p->next = p->prev; free(p);",
          "raw": "B) p->next = p->prev; free(p);"
        },
        {
          "key": "C",
          "text": "free(p); p->prev->next = p->next;",
          "raw": "C) free(p); p->prev->next = p->next;"
        },
        {
          "key": "D",
          "text": "p = p->next;",
          "raw": "D) p = p->next;"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Medium",
      "explanation": "Node p ko bypass karne ke liye uske predecessor ke next ko p->next aur successor ke prev ko p->prev set karte hain, fir p ko free karte hain.",
      "trap": "Freeing p before updating pointers causes dangling pointers and crashes."
    },
    {
      "id": 90,
      "originalNum": 90,
      "sectionId": 5,
      "sectionTitle": "Linked Lists",
      "question": "Why can Binary Search NOT be efficiently executed on a Singly Linked List?",
      "rawQuestion": "Q90. Why can Binary Search NOT be efficiently executed on a Singly Linked List?",
      "options": [
        {
          "key": "A",
          "text": "Linked list cannot be sorted",
          "raw": "A) Linked list cannot be sorted"
        },
        {
          "key": "B",
          "text": "Calculating and accessing the middle element in a linked list requires O(n) sequential traversal",
          "raw": "B) Calculating and accessing the middle element in a linked list requires O(n) sequential traversal"
        },
        {
          "key": "C",
          "text": "Pointers cannot be compared",
          "raw": "C) Pointers cannot be compared"
        },
        {
          "key": "D",
          "text": "Memory is continuous",
          "raw": "D) Memory is continuous"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Binary Search requires O(1) random access to find `mid`. Linked list mein middle tak pahunchne ke liye hi O(n) lag jata hai, ruining the O(log n) efficiency.",
      "trap": "Binary Search requires random access (arrays), not sequential access."
    },
    {
      "id": 91,
      "originalNum": 91,
      "sectionId": 6,
      "sectionTitle": "Recursion & Recurrences",
      "question": "What is the base case in a recursive algorithm?",
      "rawQuestion": "Q91. What is the base case in a recursive algorithm?",
      "options": [
        {
          "key": "A",
          "text": "The case that calls the function again",
          "raw": "A) The case that calls the function again"
        },
        {
          "key": "B",
          "text": "The condition under which recursion terminates without making further recursive calls",
          "raw": "B) The condition under which recursion terminates without making further recursive calls"
        },
        {
          "key": "C",
          "text": "The largest input value",
          "raw": "C) The largest input value"
        },
        {
          "key": "D",
          "text": "The main function",
          "raw": "D) The main function"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Base case terminating condition hoti hai jo infinite recursion aur Stack Overflow se bachati hai.",
      "trap": "Without a base case, recursion causes stack overflow."
    },
    {
      "id": 92,
      "originalNum": 92,
      "sectionId": 6,
      "sectionTitle": "Recursion & Recurrences",
      "question": "What is the solution to the recurrence relation: T(n) = 2T(n/2) + O(n) ?",
      "rawQuestion": "Q92. What is the solution to the recurrence relation: T(n) = 2T(n/2) + O(n) ?",
      "options": [
        {
          "key": "A",
          "text": "O(n)",
          "raw": "A) O(n)"
        },
        {
          "key": "B",
          "text": "O(n log n)",
          "raw": "B) O(n log n)"
        },
        {
          "key": "C",
          "text": "O(n^2)",
          "raw": "C) O(n^2)"
        },
        {
          "key": "D",
          "text": "O(log n)",
          "raw": "D) O(log n)"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "By Master Theorem: a = 2, b = 2, f(n) = n. Since n^(log_b a) = n^(log2 2) = n^1 = f(n), this falls under Case 2 of Master Theorem. Hence T(n) = O(n log n). This is the Merge Sort recurrence.",
      "trap": "Recognize this immediately as standard Merge Sort recurrence."
    },
    {
      "id": 93,
      "originalNum": 93,
      "sectionId": 6,
      "sectionTitle": "Recursion & Recurrences",
      "question": "What is the solution to the recurrence relation: T(n) = T(n - 1) + O(1) with T(1) = 1?",
      "rawQuestion": "Q93. What is the solution to the recurrence relation: T(n) = T(n - 1) + O(1) with T(1) = 1?",
      "options": [
        {
          "key": "A",
          "text": "O(1)",
          "raw": "A) O(1)"
        },
        {
          "key": "B",
          "text": "O(log n)",
          "raw": "B) O(log n)"
        },
        {
          "key": "C",
          "text": "O(n)",
          "raw": "C) O(n)"
        },
        {
          "key": "D",
          "text": "O(n^2)",
          "raw": "D) O(n^2)"
        }
      ],
      "correctAnswer": "C",
      "difficulty": "Easy",
      "explanation": "T(n) = T(n-1) + 1 = T(n-2) + 1 + 1 = ... = T(1) + (n - 1) = 1 + n - 1 = n. So T(n) = O(n).",
      "trap": "Decreasing recurrence by 1 with constant work solves to O(n)."
    },
    {
      "id": 94,
      "originalNum": 94,
      "sectionId": 6,
      "sectionTitle": "Recursion & Recurrences",
      "question": "How many moves are required to solve the Tower of Hanoi problem with n disks?",
      "rawQuestion": "Q94. How many moves are required to solve the Tower of Hanoi problem with n disks?",
      "options": [
        {
          "key": "A",
          "text": "2n - 1",
          "raw": "A) 2n - 1"
        },
        {
          "key": "B",
          "text": "2^n - 1",
          "raw": "B) 2^n - 1"
        },
        {
          "key": "C",
          "text": "n^2",
          "raw": "C) n^2"
        },
        {
          "key": "D",
          "text": "2^n + 1",
          "raw": "D) 2^n + 1"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Recurrence: T(n) = 2T(n-1) + 1. Solving gives T(n) = 2^n - 1 moves. For n = 3, moves = 2^3 - 1 = 7.",
      "trap": "2n - 1 is linear, 2^n - 1 is exponential."
    },
    {
      "id": 95,
      "originalNum": 95,
      "sectionId": 6,
      "sectionTitle": "Recursion & Recurrences",
      "question": "What is tail recursion?",
      "rawQuestion": "Q95. What is tail recursion?",
      "options": [
        {
          "key": "A",
          "text": "Recursion where the recursive call is the very last statement executed in the function",
          "raw": "A) Recursion where the recursive call is the very last statement executed in the function"
        },
        {
          "key": "B",
          "text": "Recursion that has two base cases",
          "raw": "B) Recursion that has two base cases"
        },
        {
          "key": "C",
          "text": "Recursion that occurs at the beginning of the function",
          "raw": "C) Recursion that occurs at the beginning of the function"
        },
        {
          "key": "D",
          "text": "Recursion that takes O(n^2) space",
          "raw": "D) Recursion that takes O(n^2) space"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Medium",
      "explanation": "Tail recursion mein recursive call ke baad koi work perform nahi hota. Modern compilers tail call optimization (TCO) karke isse constant stack space O(1) mein run kar sakte hain.",
      "trap": "If any calculation happens after recursive call (like n * fact(n-1)), it is NOT tail recursive."
    },
    {
      "id": 96,
      "originalNum": 96,
      "sectionId": 6,
      "sectionTitle": "Recursion & Recurrences",
      "question": "What is the auxiliary stack space complexity of recursive Binary Search on an array of size n?",
      "rawQuestion": "Q96. What is the auxiliary stack space complexity of recursive Binary Search on an array of size n?",
      "options": [
        {
          "key": "A",
          "text": "O(1)",
          "raw": "A) O(1)"
        },
        {
          "key": "B",
          "text": "O(log n)",
          "raw": "B) O(log n)"
        },
        {
          "key": "C",
          "text": "O(n)",
          "raw": "C) O(n)"
        },
        {
          "key": "D",
          "text": "O(n log n)",
          "raw": "D) O(n log n)"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Har recursive call array ko half karti hai, isliye maximum call stack depth log2(n) hoti hai. Space = O(log n). (Iterative binary search takes O(1) space).",
      "trap": "Iterative binary search is O(1) space, but recursive binary search is O(log n) space due to call stack."
    },
    {
      "id": 97,
      "originalNum": 97,
      "sectionId": 6,
      "sectionTitle": "Recursion & Recurrences",
      "question": "What does the following recursive function return for n = 4?\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 1);\n}",
      "rawQuestion": "Q97. What does the following recursive function return for n = 4?\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n + fun(n - 1);\n}",
      "options": [
        {
          "key": "A",
          "text": "10",
          "raw": "A) 10"
        },
        {
          "key": "B",
          "text": "24",
          "raw": "B) 24"
        },
        {
          "key": "C",
          "text": "7",
          "raw": "C) 7"
        },
        {
          "key": "D",
          "text": "15",
          "raw": "D) 15"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "fun(4) = 4 + fun(3) = 4 + 3 + fun(2) = 4 + 3 + 2 + fun(1) = 4 + 3 + 2 + 1 = 10. (Sum of first n natural numbers).",
      "trap": "It is addition (+), not multiplication (*) like factorial."
    },
    {
      "id": 98,
      "originalNum": 98,
      "sectionId": 6,
      "sectionTitle": "Recursion & Recurrences",
      "question": "Which data structure can be used to convert any recursive algorithm into an iterative one?",
      "rawQuestion": "Q98. Which data structure can be used to convert any recursive algorithm into an iterative one?",
      "options": [
        {
          "key": "A",
          "text": "Queue",
          "raw": "A) Queue"
        },
        {
          "key": "B",
          "text": "Stack",
          "raw": "B) Stack"
        },
        {
          "key": "C",
          "text": "Array",
          "raw": "C) Array"
        },
        {
          "key": "D",
          "text": "Hash Table",
          "raw": "D) Hash Table"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Recursion internally system call stack use karta hai. Isliye explicit Stack data structure use karke kisi bhi recursive function ko iterative banaya ja sakta hai.",
      "trap": "Queue gives BFS traversal, Stack simulates recursion."
    },
    {
      "id": 99,
      "originalNum": 99,
      "sectionId": 6,
      "sectionTitle": "Recursion & Recurrences",
      "question": "What is the time complexity of the naive recursive Fibonacci algorithm: `fib(n) = fib(n-1) + fib(n-2)`?",
      "rawQuestion": "Q99. What is the time complexity of the naive recursive Fibonacci algorithm: `fib(n) = fib(n-1) + fib(n-2)`?",
      "options": [
        {
          "key": "A",
          "text": "O(n)",
          "raw": "A) O(n)"
        },
        {
          "key": "B",
          "text": "O(2^n)",
          "raw": "B) O(2^n)"
        },
        {
          "key": "C",
          "text": "O(n^2)",
          "raw": "C) O(n^2)"
        },
        {
          "key": "D",
          "text": "O(log n)",
          "raw": "D) O(log n)"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "Har call do nayi recursive calls branch karti hai without memoization, creating a binary recursion tree of depth n. Time complexity is exponential O(2^n) (more precisely O(1.618^n)).",
      "trap": "Dynamic programming reduces this to O(n), but naive recursion is exponential O(2^n)."
    },
    {
      "id": 100,
      "originalNum": 100,
      "sectionId": 6,
      "sectionTitle": "Recursion & Recurrences",
      "question": "What is indirect recursion?",
      "rawQuestion": "Q100. What is indirect recursion?",
      "options": [
        {
          "key": "A",
          "text": "A function calling itself directly",
          "raw": "A) A function calling itself directly"
        },
        {
          "key": "B",
          "text": "Function A calling Function B, and Function B calling Function A",
          "raw": "B) Function A calling Function B, and Function B calling Function A"
        },
        {
          "key": "C",
          "text": "A loop inside a function",
          "raw": "C) A loop inside a function"
        },
        {
          "key": "D",
          "text": "A function with no return value",
          "raw": "D) A function with no return value"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Direct recursion mein function khud ko directly call karta hai. Indirect recursion mein ek cycle hoti hai: A calls B, B calls A.",
      "trap": "Mutual recursion is also known as indirect recursion."
    },
    {
      "id": 101,
      "originalNum": 101,
      "sectionId": 6,
      "sectionTitle": "Recursion & Recurrences",
      "question": "What is the solution of the recurrence: T(n) = 2T(n/2) + O(1)?",
      "rawQuestion": "Q101. What is the solution of the recurrence: T(n) = 2T(n/2) + O(1)?",
      "options": [
        {
          "key": "A",
          "text": "O(n)",
          "raw": "A) O(n)"
        },
        {
          "key": "B",
          "text": "O(log n)",
          "raw": "B) O(log n)"
        },
        {
          "key": "C",
          "text": "O(n log n)",
          "raw": "C) O(n log n)"
        },
        {
          "key": "D",
          "text": "O(1)",
          "raw": "D) O(1)"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Medium",
      "explanation": "By Master Theorem: a = 2, b = 2, f(n) = O(1) = n^0. Here n^(log_b a) = n^(log2 2) = n^1. Since n^1 > n^0, Case 1 applies: T(n) = Theta(n^(log_b a)) = Theta(n).",
      "trap": "Do not confuse with Merge sort where f(n) is n. Here f(n) is 1, so answer is O(n)."
    },
    {
      "id": 102,
      "originalNum": 102,
      "sectionId": 6,
      "sectionTitle": "Recursion & Recurrences",
      "question": "What is the solution of the recurrence: T(n) = T(n/2) + O(1) with T(1) = 1?",
      "rawQuestion": "Q102. What is the solution of the recurrence: T(n) = T(n/2) + O(1) with T(1) = 1?",
      "options": [
        {
          "key": "A",
          "text": "O(1)",
          "raw": "A) O(1)"
        },
        {
          "key": "B",
          "text": "O(log n)",
          "raw": "B) O(log n)"
        },
        {
          "key": "C",
          "text": "O(n)",
          "raw": "C) O(n)"
        },
        {
          "key": "D",
          "text": "O(n log n)",
          "raw": "D) O(n log n)"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "This is the classic Binary Search recurrence relation. Halving the problem size with constant comparison work solves to O(log n).",
      "trap": "Standard Binary Search recurrence."
    },
    {
      "id": 103,
      "originalNum": 103,
      "sectionId": 6,
      "sectionTitle": "Recursion & Recurrences",
      "question": "What is the maximum depth of the recursion tree for Quick Sort in the worst case?",
      "rawQuestion": "Q103. What is the maximum depth of the recursion tree for Quick Sort in the worst case?",
      "options": [
        {
          "key": "A",
          "text": "O(log n)",
          "raw": "A) O(log n)"
        },
        {
          "key": "B",
          "text": "O(n)",
          "raw": "B) O(n)"
        },
        {
          "key": "C",
          "text": "O(1)",
          "raw": "C) O(1)"
        },
        {
          "key": "D",
          "text": "O(n^2)",
          "raw": "D) O(n^2)"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "Worst case mein pivot har baar 1 aur n-1 elements ka partition banata hai. Isse recursion depth n tak chali jaati hai, taking O(n) stack memory.",
      "trap": "Average depth is O(log n), but worst-case depth is O(n)."
    },
    {
      "id": 104,
      "originalNum": 104,
      "sectionId": 6,
      "sectionTitle": "Recursion & Recurrences",
      "question": "What error occurs if a recursive function never reaches its base case?",
      "rawQuestion": "Q104. What error occurs if a recursive function never reaches its base case?",
      "options": [
        {
          "key": "A",
          "text": "CPU Overheating",
          "raw": "A) CPU Overheating"
        },
        {
          "key": "B",
          "text": "Stack Overflow runtime error",
          "raw": "B) Stack Overflow runtime error"
        },
        {
          "key": "C",
          "text": "Compile time syntax error",
          "raw": "C) Compile time syntax error"
        },
        {
          "key": "D",
          "text": "Array bounds error",
          "raw": "D) Array bounds error"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Infinite recursive calls continuously system call stack par activation records push karti rehti hain jab tak allocated stack memory exhaust nahi ho jaati (Stack Overflow).",
      "trap": "It is a runtime crash, not a compilation error."
    },
    {
      "id": 105,
      "originalNum": 105,
      "sectionId": 6,
      "sectionTitle": "Recursion & Recurrences",
      "question": "What does the following recursive function return for fun(5)?\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n * fun(n - 1);\n}",
      "rawQuestion": "Q105. What does the following recursive function return for fun(5)?\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n * fun(n - 1);\n}",
      "options": [
        {
          "key": "A",
          "text": "15",
          "raw": "A) 15"
        },
        {
          "key": "B",
          "text": "120",
          "raw": "B) 120"
        },
        {
          "key": "C",
          "text": "24",
          "raw": "C) 24"
        },
        {
          "key": "D",
          "text": "60",
          "raw": "D) 60"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "This is the standard factorial function: 5! = 5 * 4 * 3 * 2 * 1 = 120.",
      "trap": "5! = 120."
    },
    {
      "id": 106,
      "originalNum": 106,
      "sectionId": 7,
      "sectionTitle": "Trees & Binary Tree Properties",
      "question": "In any non-empty binary tree, if n0 is the number of leaf nodes and n2 is the number of nodes with degree 2, then:",
      "rawQuestion": "Q106. In any non-empty binary tree, if n0 is the number of leaf nodes and n2 is the number of nodes with degree 2, then:",
      "options": [
        {
          "key": "A",
          "text": "n0 = n2",
          "raw": "A) n0 = n2"
        },
        {
          "key": "B",
          "text": "n0 = n2 + 1",
          "raw": "B) n0 = n2 + 1"
        },
        {
          "key": "C",
          "text": "n0 = n2 - 1",
          "raw": "C) n0 = n2 - 1"
        },
        {
          "key": "D",
          "text": "n0 = 2 * n2",
          "raw": "D) n0 = 2 * n2"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Standard Binary Tree Theorem: n0 = n2 + 1. Leaf nodes ki sankhya hamesha degree-2 nodes se exactly 1 zyada hoti hai.",
      "trap": "This holds for ANY binary tree, not just full or complete binary trees."
    },
    {
      "id": 107,
      "originalNum": 107,
      "sectionId": 7,
      "sectionTitle": "Trees & Binary Tree Properties",
      "question": "What is the maximum number of nodes in a binary tree of height h (assuming root is at height 0)?",
      "rawQuestion": "Q107. What is the maximum number of nodes in a binary tree of height h (assuming root is at height 0)?",
      "options": [
        {
          "key": "A",
          "text": "2^h",
          "raw": "A) 2^h"
        },
        {
          "key": "B",
          "text": "2^(h+1) - 1",
          "raw": "B) 2^(h+1) - 1"
        },
        {
          "key": "C",
          "text": "2^(h-1)",
          "raw": "C) 2^(h-1)"
        },
        {
          "key": "D",
          "text": "2^h - 1",
          "raw": "D) 2^h - 1"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Height 0 par 1 node (2^1 - 1 = 1). Height h par total nodes = 2^0 + 2^1 + ... + 2^h = 2^(h+1) - 1.",
      "trap": "If root is defined at height 1, formula is 2^h - 1. CUET PG standard assumes root at height 0, giving 2^(h+1) - 1."
    },
    {
      "id": 108,
      "originalNum": 108,
      "sectionId": 7,
      "sectionTitle": "Trees & Binary Tree Properties",
      "question": "A Full Binary Tree has 15 leaf nodes. How many internal nodes with degree 2 does it have?",
      "rawQuestion": "Q108. A Full Binary Tree has 15 leaf nodes. How many internal nodes with degree 2 does it have?",
      "options": [
        {
          "key": "A",
          "text": "14",
          "raw": "A) 14"
        },
        {
          "key": "B",
          "text": "15",
          "raw": "B) 15"
        },
        {
          "key": "C",
          "text": "16",
          "raw": "C) 16"
        },
        {
          "key": "D",
          "text": "7",
          "raw": "D) 7"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "Formula: n0 = n2 + 1. Given n0 = 15 => 15 = n2 + 1 => n2 = 14.",
      "trap": "Simple direct formula application: n2 = n0 - 1."
    },
    {
      "id": 109,
      "originalNum": 109,
      "sectionId": 7,
      "sectionTitle": "Trees & Binary Tree Properties",
      "question": "What is the minimum height of a binary tree containing 100 nodes (root at height 0)?",
      "rawQuestion": "Q109. What is the minimum height of a binary tree containing 100 nodes (root at height 0)?",
      "options": [
        {
          "key": "A",
          "text": "6",
          "raw": "A) 6"
        },
        {
          "key": "B",
          "text": "7",
          "raw": "B) 7"
        },
        {
          "key": "C",
          "text": "5",
          "raw": "C) 5"
        },
        {
          "key": "D",
          "text": "8",
          "raw": "D) 8"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Medium",
      "explanation": "Min height formula: h_min = ceil(log2(n + 1)) - 1. For n = 100: n + 1 = 101. log2(101) ~= 6.658 -> ceil is 7. Height = 7 - 1 = 6. (Check: height 6 can hold up to 2^7 - 1 = 127 nodes; height 5 can only hold 63 nodes).",
      "trap": "Height 5 can only hold 63 nodes, so 100 nodes require height 6."
    },
    {
      "id": 110,
      "originalNum": 110,
      "sectionId": 7,
      "sectionTitle": "Trees & Binary Tree Properties",
      "question": "How many structurally distinct binary trees can be formed with n = 3 unlabelled nodes?",
      "rawQuestion": "Q110. How many structurally distinct binary trees can be formed with n = 3 unlabelled nodes?",
      "options": [
        {
          "key": "A",
          "text": "3",
          "raw": "A) 3"
        },
        {
          "key": "B",
          "text": "4",
          "raw": "B) 4"
        },
        {
          "key": "C",
          "text": "5",
          "raw": "C) 5"
        },
        {
          "key": "D",
          "text": "6",
          "raw": "D) 6"
        }
      ],
      "correctAnswer": "C",
      "difficulty": "Medium",
      "explanation": "Catalan Number C3 = (1 / (3 + 1)) * (6 choose 3) = (1 / 4) * (20) = 5 distinct binary trees.",
      "trap": "For labelled nodes it would be C_n * n! = 5 * 6 = 30, but for unlabelled nodes it is strictly 5."
    },
    {
      "id": 111,
      "originalNum": 111,
      "sectionId": 7,
      "sectionTitle": "Trees & Binary Tree Properties",
      "question": "Which two traversals are sufficient to uniquely construct a binary tree?",
      "rawQuestion": "Q111. Which two traversals are sufficient to uniquely construct a binary tree?",
      "options": [
        {
          "key": "A",
          "text": "Preorder and Postorder",
          "raw": "A) Preorder and Postorder"
        },
        {
          "key": "B",
          "text": "Inorder and Preorder",
          "raw": "B) Inorder and Preorder"
        },
        {
          "key": "C",
          "text": "Level order and Postorder",
          "raw": "C) Level order and Postorder"
        },
        {
          "key": "D",
          "text": "Preorder and Level order",
          "raw": "D) Preorder and Level order"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Unique binary tree construct karne ke liye INORDER traversal ke saath PREORDER ya POSTORDER ka hona mandatory hai. Preorder + Postorder cannot guarantee a unique tree.",
      "trap": "Inorder is compulsory because it tells what is on the left and right of the root."
    },
    {
      "id": 112,
      "originalNum": 112,
      "sectionId": 7,
      "sectionTitle": "Trees & Binary Tree Properties",
      "question": "Given Inorder traversal: `D B E A F C` and Preorder traversal: `A B D E C F`. What is the Postorder traversal?",
      "rawQuestion": "Q112. Given Inorder traversal: `D B E A F C` and Preorder traversal: `A B D E C F`. What is the Postorder traversal?",
      "options": [
        {
          "key": "A",
          "text": "D E B F C A",
          "raw": "A) D E B F C A"
        },
        {
          "key": "B",
          "text": "D E B C F A",
          "raw": "B) D E B C F A"
        },
        {
          "key": "C",
          "text": "E D B F C A",
          "raw": "C) E D B F C A"
        },
        {
          "key": "D",
          "text": "D B E F C A",
          "raw": "D) D B E F C A"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Medium",
      "explanation": "From Preorder, root is A.\nIn Inorder, left subtree is `D B E`, right subtree is `F C`.\nIn left subtree `D B E`, Preorder says B is root, D is left, E is right.\nIn right subtree `F C`, Preorder says C is root, F is left.\nPostorder (Left, Right, Root): Left of A gives `D E B`, Right of A gives `F C`, Root is A.\nCombined Postorder: `D E B F C A`.",
      "trap": "Root is always at the end in Postorder traversal."
    },
    {
      "id": 113,
      "originalNum": 113,
      "sectionId": 7,
      "sectionTitle": "Trees & Binary Tree Properties",
      "question": "In a complete binary tree stored in an array with 1-based indexing, where is the parent of node at index i located?",
      "rawQuestion": "Q113. In a complete binary tree stored in an array with 1-based indexing, where is the parent of node at index i located?",
      "options": [
        {
          "key": "A",
          "text": "2 * i",
          "raw": "A) 2 * i"
        },
        {
          "key": "B",
          "text": "2 * i + 1",
          "raw": "B) 2 * i + 1"
        },
        {
          "key": "C",
          "text": "floor(i / 2)",
          "raw": "C) floor(i / 2)"
        },
        {
          "key": "D",
          "text": "i - 1",
          "raw": "D) i - 1"
        }
      ],
      "correctAnswer": "C",
      "difficulty": "Easy",
      "explanation": "For 1-based indexing:\nParent(i) = floor(i / 2)\nLeft Child(i) = 2 * i\nRight Child(i) = 2 * i + 1.",
      "trap": "In 0-based indexing, Parent is floor((i - 1) / 2)."
    },
    {
      "id": 114,
      "originalNum": 114,
      "sectionId": 7,
      "sectionTitle": "Trees & Binary Tree Properties",
      "question": "A binary tree in which every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible, is called:",
      "rawQuestion": "Q114. A binary tree in which every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible, is called:",
      "options": [
        {
          "key": "A",
          "text": "Full Binary Tree",
          "raw": "A) Full Binary Tree"
        },
        {
          "key": "B",
          "text": "Complete Binary Tree",
          "raw": "B) Complete Binary Tree"
        },
        {
          "key": "C",
          "text": "Perfect Binary Tree",
          "raw": "C) Perfect Binary Tree"
        },
        {
          "key": "D",
          "text": "Balanced Tree",
          "raw": "D) Balanced Tree"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "This is the exact formal definition of a Complete Binary Tree, which is used to implement Binary Heaps.",
      "trap": "Perfect binary tree requires even the last level to be completely full."
    },
    {
      "id": 115,
      "originalNum": 115,
      "sectionId": 7,
      "sectionTitle": "Trees & Binary Tree Properties",
      "question": "What is the maximum number of nodes at level k of a binary tree (root at level 0)?",
      "rawQuestion": "Q115. What is the maximum number of nodes at level k of a binary tree (root at level 0)?",
      "options": [
        {
          "key": "A",
          "text": "2^k",
          "raw": "A) 2^k"
        },
        {
          "key": "B",
          "text": "2^(k-1)",
          "raw": "B) 2^(k-1)"
        },
        {
          "key": "C",
          "text": "2^(k+1)",
          "raw": "C) 2^(k+1)"
        },
        {
          "key": "D",
          "text": "2k",
          "raw": "D) 2k"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "Level 0 has 2^0 = 1 node. Level 1 has 2^1 = 2 nodes. Level k has 2^k nodes.",
      "trap": "At level k, max nodes is 2^k."
    },
    {
      "id": 116,
      "originalNum": 116,
      "sectionId": 7,
      "sectionTitle": "Trees & Binary Tree Properties",
      "question": "What is the degree of a leaf node in any tree?",
      "rawQuestion": "Q116. What is the degree of a leaf node in any tree?",
      "options": [
        {
          "key": "A",
          "text": "1",
          "raw": "A) 1"
        },
        {
          "key": "B",
          "text": "0",
          "raw": "B) 0"
        },
        {
          "key": "C",
          "text": "2",
          "raw": "C) 2"
        },
        {
          "key": "D",
          "text": "-1",
          "raw": "D) -1"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Degree of a node is the number of children it has. Leaf nodes have 0 children, so their degree is 0.",
      "trap": "Do not confuse tree node degree (number of children) with graph vertex degree (number of incident edges)."
    },
    {
      "id": 117,
      "originalNum": 117,
      "sectionId": 7,
      "sectionTitle": "Trees & Binary Tree Properties",
      "question": "A tree with 25 vertices has how many edges?",
      "rawQuestion": "Q117. A tree with 25 vertices has how many edges?",
      "options": [
        {
          "key": "A",
          "text": "25",
          "raw": "A) 25"
        },
        {
          "key": "B",
          "text": "24",
          "raw": "B) 24"
        },
        {
          "key": "C",
          "text": "50",
          "raw": "C) 50"
        },
        {
          "key": "D",
          "text": "12",
          "raw": "D) 12"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Any tree with n vertices has exactly n - 1 edges: 25 - 1 = 24.",
      "trap": "Direct property: |E| = |V| - 1 for any tree."
    },
    {
      "id": 118,
      "originalNum": 118,
      "sectionId": 7,
      "sectionTitle": "Trees & Binary Tree Properties",
      "question": "How many distinct binary search trees (BSTs) can be created with 4 distinct keys?",
      "rawQuestion": "Q118. How many distinct binary search trees (BSTs) can be created with 4 distinct keys?",
      "options": [
        {
          "key": "A",
          "text": "14",
          "raw": "A) 14"
        },
        {
          "key": "B",
          "text": "24",
          "raw": "B) 24"
        },
        {
          "key": "C",
          "text": "5",
          "raw": "C) 5"
        },
        {
          "key": "D",
          "text": "42",
          "raw": "D) 42"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Medium",
      "explanation": "Catalan number C4 = (1 / 5) * (8 choose 4) = (1 / 5) * (70) = 14 distinct BSTs.",
      "trap": "C1 = 1, C2 = 2, C3 = 5, C4 = 14, C5 = 42."
    },
    {
      "id": 119,
      "originalNum": 119,
      "sectionId": 7,
      "sectionTitle": "Trees & Binary Tree Properties",
      "question": "In which tree traversal is the root node visited FIRST?",
      "rawQuestion": "Q119. In which tree traversal is the root node visited FIRST?",
      "options": [
        {
          "key": "A",
          "text": "Inorder",
          "raw": "A) Inorder"
        },
        {
          "key": "B",
          "text": "Preorder",
          "raw": "B) Preorder"
        },
        {
          "key": "C",
          "text": "Postorder",
          "raw": "C) Postorder"
        },
        {
          "key": "D",
          "text": "Euler tour",
          "raw": "D) Euler tour"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Preorder traversal visits Node (Root) first, then Left Subtree, then Right Subtree (NLR).",
      "trap": "Postorder visits root last; Inorder visits root in the middle."
    },
    {
      "id": 120,
      "originalNum": 120,
      "sectionId": 7,
      "sectionTitle": "Trees & Binary Tree Properties",
      "question": "In which tree traversal is the root node visited LAST?",
      "rawQuestion": "Q120. In which tree traversal is the root node visited LAST?",
      "options": [
        {
          "key": "A",
          "text": "Inorder",
          "raw": "A) Inorder"
        },
        {
          "key": "B",
          "text": "Preorder",
          "raw": "B) Preorder"
        },
        {
          "key": "C",
          "text": "Postorder",
          "raw": "C) Postorder"
        },
        {
          "key": "D",
          "text": "Level order",
          "raw": "D) Level order"
        }
      ],
      "correctAnswer": "C",
      "difficulty": "Easy",
      "explanation": "Postorder visits Left Subtree, Right Subtree, and finally the Node (Root) (LRN).",
      "trap": "Post means after/last."
    },
    {
      "id": 121,
      "originalNum": 121,
      "sectionId": 7,
      "sectionTitle": "Trees & Binary Tree Properties",
      "question": "A full binary tree has 20 internal nodes. What is the total number of nodes in the tree?",
      "rawQuestion": "Q121. A full binary tree has 20 internal nodes. What is the total number of nodes in the tree?",
      "options": [
        {
          "key": "A",
          "text": "40",
          "raw": "A) 40"
        },
        {
          "key": "B",
          "text": "41",
          "raw": "B) 41"
        },
        {
          "key": "C",
          "text": "39",
          "raw": "C) 39"
        },
        {
          "key": "D",
          "text": "21",
          "raw": "D) 21"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "In a full binary tree with I internal nodes: Leaf nodes L = I + 1 = 20 + 1 = 21. Total nodes N = I + L = 20 + 21 = 41. (Or direct formula: N = 2I + 1 = 2(20) + 1 = 41).",
      "trap": "Total nodes in a full binary tree with I internal nodes is always 2I + 1."
    },
    {
      "id": 122,
      "originalNum": 122,
      "sectionId": 7,
      "sectionTitle": "Trees & Binary Tree Properties",
      "question": "What is the height of a degenerate (completely skewed) binary tree with n nodes?",
      "rawQuestion": "Q122. What is the height of a degenerate (completely skewed) binary tree with n nodes?",
      "options": [
        {
          "key": "A",
          "text": "log2(n)",
          "raw": "A) log2(n)"
        },
        {
          "key": "B",
          "text": "n - 1",
          "raw": "B) n - 1"
        },
        {
          "key": "C",
          "text": "n / 2",
          "raw": "C) n / 2"
        },
        {
          "key": "D",
          "text": "2^n",
          "raw": "D) 2^n"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Degenerate tree basically ek linear linked list ban jata hai, jahan har node ka sirf 1 child hota hai. Height = n - 1.",
      "trap": "Degenerate tree has worst-case height and O(n) search time."
    },
    {
      "id": 123,
      "originalNum": 123,
      "sectionId": 7,
      "sectionTitle": "Trees & Binary Tree Properties",
      "question": "In a binary tree, an ancestor of node X is defined as:",
      "rawQuestion": "Q123. In a binary tree, an ancestor of node X is defined as:",
      "options": [
        {
          "key": "A",
          "text": "Any node on the unique path from root to X (excluding X)",
          "raw": "A) Any node on the unique path from root to X (excluding X)"
        },
        {
          "key": "B",
          "text": "Only the immediate parent of X",
          "raw": "B) Only the immediate parent of X"
        },
        {
          "key": "C",
          "text": "Any leaf node",
          "raw": "C) Any leaf node"
        },
        {
          "key": "D",
          "text": "Siblings of X",
          "raw": "D) Siblings of X"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "Root se node X tak ke path par jitne bhi nodes aate hain (excluding X), woh sabhi node X ke ancestors hote hain.",
      "trap": "Immediate parent is just one ancestor; all nodes above X on the path to root are ancestors."
    },
    {
      "id": 124,
      "originalNum": 124,
      "sectionId": 7,
      "sectionTitle": "Trees & Binary Tree Properties",
      "question": "If every internal node of a tree has at most m children, the tree is called an:",
      "rawQuestion": "Q124. If every internal node of a tree has at most m children, the tree is called an:",
      "options": [
        {
          "key": "A",
          "text": "Binary tree",
          "raw": "A) Binary tree"
        },
        {
          "key": "B",
          "text": "m-ary (or multiway) tree",
          "raw": "B) m-ary (or multiway) tree"
        },
        {
          "key": "C",
          "text": "AVL tree",
          "raw": "C) AVL tree"
        },
        {
          "key": "D",
          "text": "Bipartite tree",
          "raw": "D) Bipartite tree"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Generalization of binary trees (where m = 2) to m children is called an m-ary tree.",
      "trap": "When m = 3, it is ternary; general m is m-ary."
    },
    {
      "id": 125,
      "originalNum": 125,
      "sectionId": 7,
      "sectionTitle": "Trees & Binary Tree Properties",
      "question": "Can a binary tree be uniquely reconstructed if ONLY Preorder and Postorder traversals are given?",
      "rawQuestion": "Q125. Can a binary tree be uniquely reconstructed if ONLY Preorder and Postorder traversals are given?",
      "options": [
        {
          "key": "A",
          "text": "Yes, always",
          "raw": "A) Yes, always"
        },
        {
          "key": "B",
          "text": "No, unless the tree is known to be a Full Binary Tree",
          "raw": "B) No, unless the tree is known to be a Full Binary Tree"
        },
        {
          "key": "C",
          "text": "Never possible",
          "raw": "C) Never possible"
        },
        {
          "key": "D",
          "text": "Only if all keys are negative",
          "raw": "D) Only if all keys are negative"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Difficult",
      "explanation": "General binary tree cannot be reconstructed uniquely without Inorder. BUT if the tree is strictly Full (every node has 0 or 2 children), then Preorder + Postorder can uniquely construct it!",
      "trap": "Standard answer is NO for general binary trees, but for FULL binary trees it is YES."
    },
    {
      "id": 126,
      "originalNum": 126,
      "sectionId": 8,
      "sectionTitle": "Binary Search Trees & AVL Trees",
      "question": "The Inorder traversal of a Binary Search Tree (BST) always produces keys in:",
      "rawQuestion": "Q126. The Inorder traversal of a Binary Search Tree (BST) always produces keys in:",
      "options": [
        {
          "key": "A",
          "text": "Random order",
          "raw": "A) Random order"
        },
        {
          "key": "B",
          "text": "Strictly ascending (sorted) order",
          "raw": "B) Strictly ascending (sorted) order"
        },
        {
          "key": "C",
          "text": "Strictly descending order",
          "raw": "C) Strictly descending order"
        },
        {
          "key": "D",
          "text": "Level-wise order",
          "raw": "D) Level-wise order"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "BST property: Left < Root < Right. Inorder visits Left, Root, Right, which guarantees keys in strictly ascending sorted order.",
      "trap": "This is the most celebrated property of BSTs; use it to identify BSTs in MCQ options!"
    },
    {
      "id": 127,
      "originalNum": 127,
      "sectionId": 8,
      "sectionTitle": "Binary Search Trees & AVL Trees",
      "question": "What is the worst-case time complexity of searching a key in a Binary Search Tree of n nodes?",
      "rawQuestion": "Q127. What is the worst-case time complexity of searching a key in a Binary Search Tree of n nodes?",
      "options": [
        {
          "key": "A",
          "text": "O(log n)",
          "raw": "A) O(log n)"
        },
        {
          "key": "B",
          "text": "O(n)",
          "raw": "B) O(n)"
        },
        {
          "key": "C",
          "text": "O(n log n)",
          "raw": "C) O(n log n)"
        },
        {
          "key": "D",
          "text": "O(1)",
          "raw": "D) O(1)"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Worst case tab hota hai jab tree completely skewed ban jaye (e.g., elements inserted in already sorted order). Skewed BST linked list ki tarah behave karta hai, taking O(n) time.",
      "trap": "Average case is O(log n), but worst case is O(n)."
    },
    {
      "id": 128,
      "originalNum": 128,
      "sectionId": 8,
      "sectionTitle": "Binary Search Trees & AVL Trees",
      "question": "What is the allowed range of Balance Factor for any node in an AVL Tree?",
      "rawQuestion": "Q128. What is the allowed range of Balance Factor for any node in an AVL Tree?",
      "options": [
        {
          "key": "A",
          "text": "{0, 1}",
          "raw": "A) {0, 1}"
        },
        {
          "key": "B",
          "text": "{-1, 0, 1}",
          "raw": "B) {-1, 0, 1}"
        },
        {
          "key": "C",
          "text": "{-2, 0, 2}",
          "raw": "C) {-2, 0, 2}"
        },
        {
          "key": "D",
          "text": "Any integer",
          "raw": "D) Any integer"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "AVL tree self-balancing BST hota hai jisme har node ka balance factor BF = Height(Left) - Height(Right) strictly {-1, 0, +1} hona chahiye.",
      "trap": "If BF becomes +2 or -2, rotations are immediately triggered."
    },
    {
      "id": 129,
      "originalNum": 129,
      "sectionId": 8,
      "sectionTitle": "Binary Search Trees & AVL Trees",
      "question": "When a new node is inserted into the right subtree of the left child, causing an imbalance, which rotation is required?",
      "rawQuestion": "Q129. When a new node is inserted into the right subtree of the left child, causing an imbalance, which rotation is required?",
      "options": [
        {
          "key": "A",
          "text": "LL Rotation",
          "raw": "A) LL Rotation"
        },
        {
          "key": "B",
          "text": "RR Rotation",
          "raw": "B) RR Rotation"
        },
        {
          "key": "C",
          "text": "LR Rotation",
          "raw": "C) LR Rotation"
        },
        {
          "key": "D",
          "text": "RL Rotation",
          "raw": "D) RL Rotation"
        }
      ],
      "correctAnswer": "C",
      "difficulty": "Medium",
      "explanation": "Left child (L) ke Right subtree (R) mein insert hone se LR imbalance banta hai. Iske liye LR double rotation (first left rotate on child, then right rotate on parent) ki zarurat hoti hai.",
      "trap": "LR imbalance requires Left then Right rotation."
    },
    {
      "id": 130,
      "originalNum": 130,
      "sectionId": 8,
      "sectionTitle": "Binary Search Trees & AVL Trees",
      "question": "What is the minimum number of nodes in an AVL Tree of height h = 3 (where height of single node is 0)?",
      "rawQuestion": "Q130. What is the minimum number of nodes in an AVL Tree of height h = 3 (where height of single node is 0)?",
      "options": [
        {
          "key": "A",
          "text": "4",
          "raw": "A) 4"
        },
        {
          "key": "B",
          "text": "7",
          "raw": "B) 7"
        },
        {
          "key": "C",
          "text": "8",
          "raw": "C) 8"
        },
        {
          "key": "D",
          "text": "10",
          "raw": "D) 10"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Difficult",
      "explanation": "Recurrence: N(h) = N(h-1) + N(h-2) + 1. Base cases: N(0) = 1, N(1) = 2.\nN(2) = N(1) + N(0) + 1 = 2 + 1 + 1 = 4.\nN(3) = N(2) + N(1) + 1 = 4 + 2 + 1 = 7 nodes.",
      "trap": "For height 3, minimum nodes is 7, maximum is 2^(3+1) - 1 = 15."
    },
    {
      "id": 131,
      "originalNum": 131,
      "sectionId": 8,
      "sectionTitle": "Binary Search Trees & AVL Trees",
      "question": "When deleting a node with two children in a BST, it is replaced by its:",
      "rawQuestion": "Q131. When deleting a node with two children in a BST, it is replaced by its:",
      "options": [
        {
          "key": "A",
          "text": "Root node",
          "raw": "A) Root node"
        },
        {
          "key": "B",
          "text": "Inorder Successor or Inorder Predecessor",
          "raw": "B) Inorder Successor or Inorder Predecessor"
        },
        {
          "key": "C",
          "text": "Leftmost child of tree",
          "raw": "C) Leftmost child of tree"
        },
        {
          "key": "D",
          "text": "Any leaf node",
          "raw": "D) Any leaf node"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Two children waale node ko delete karte time BST property maintain rakhne ke liye use ya toh Inorder Predecessor (maximum of left subtree) ya Inorder Successor (minimum of right subtree) se replace karte hain.",
      "trap": "Replacing with arbitrary nodes violates the BST property."
    },
    {
      "id": 132,
      "originalNum": 132,
      "sectionId": 8,
      "sectionTitle": "Binary Search Trees & AVL Trees",
      "question": "What is the worst-case time complexity of search, insertion, and deletion in an AVL Tree with n nodes?",
      "rawQuestion": "Q132. What is the worst-case time complexity of search, insertion, and deletion in an AVL Tree with n nodes?",
      "options": [
        {
          "key": "A",
          "text": "O(n)",
          "raw": "A) O(n)"
        },
        {
          "key": "B",
          "text": "O(log n)",
          "raw": "B) O(log n)"
        },
        {
          "key": "C",
          "text": "O(n^2)",
          "raw": "C) O(n^2)"
        },
        {
          "key": "D",
          "text": "O(1)",
          "raw": "D) O(1)"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Kyunki AVL tree hamesha balanced rehta hai (height bounded by 1.44 log2 n), iske search, insert, aur delete operations sabhi worst case mein bhi strictly O(log n) hote hain.",
      "trap": "Unlike regular BST which degrades to O(n), AVL guarantees O(log n)."
    },
    {
      "id": 133,
      "originalNum": 133,
      "sectionId": 8,
      "sectionTitle": "Binary Search Trees & AVL Trees",
      "question": "If the Preorder traversal of a BST is: `30, 20, 10, 25, 40, 35, 50`, what is its Inorder traversal?",
      "rawQuestion": "Q133. If the Preorder traversal of a BST is: `30, 20, 10, 25, 40, 35, 50`, what is its Inorder traversal?",
      "options": [
        {
          "key": "A",
          "text": "10, 20, 25, 30, 35, 40, 50",
          "raw": "A) 10, 20, 25, 30, 35, 40, 50"
        },
        {
          "key": "B",
          "text": "50, 40, 35, 30, 25, 20, 10",
          "raw": "B) 50, 40, 35, 30, 25, 20, 10"
        },
        {
          "key": "C",
          "text": "30, 20, 40, 10, 25, 35, 50",
          "raw": "C) 30, 20, 40, 10, 25, 35, 50"
        },
        {
          "key": "D",
          "text": "Cannot be determined without Postorder",
          "raw": "D) Cannot be determined without Postorder"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "Trick question! Kisi bhi BST ka Inorder traversal hamesha elements ka sorted order hota hai. Bas diye gaye elements ko sort kar do: `10, 20, 25, 30, 35, 40, 50`!",
      "trap": "Do not waste time drawing the tree; just sort the elements in ascending order!"
    },
    {
      "id": 134,
      "originalNum": 134,
      "sectionId": 8,
      "sectionTitle": "Binary Search Trees & AVL Trees",
      "question": "An AVL tree has how many single rotations and double rotations respectively?",
      "rawQuestion": "Q134. An AVL tree has how many single rotations and double rotations respectively?",
      "options": [
        {
          "key": "A",
          "text": "2 single (LL, RR) and 2 double (LR, RL)",
          "raw": "A) 2 single (LL, RR) and 2 double (LR, RL)"
        },
        {
          "key": "B",
          "text": "4 single and 0 double",
          "raw": "B) 4 single and 0 double"
        },
        {
          "key": "C",
          "text": "1 single and 3 double",
          "raw": "C) 1 single and 3 double"
        },
        {
          "key": "D",
          "text": "0 single and 4 double",
          "raw": "D) 0 single and 4 double"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "LL aur RR single rotations hain (1 rotation around root). LR aur RL double rotations hain (2 rotations: child then root).",
      "trap": "LR and RL are composite double rotations."
    },
    {
      "id": 135,
      "originalNum": 135,
      "sectionId": 8,
      "sectionTitle": "Binary Search Trees & AVL Trees",
      "question": "In a BST, the maximum key is always located at:",
      "rawQuestion": "Q135. In a BST, the maximum key is always located at:",
      "options": [
        {
          "key": "A",
          "text": "The root node",
          "raw": "A) The root node"
        },
        {
          "key": "B",
          "text": "The rightmost node",
          "raw": "B) The rightmost node"
        },
        {
          "key": "C",
          "text": "The leftmost node",
          "raw": "C) The leftmost node"
        },
        {
          "key": "D",
          "text": "Any leaf node",
          "raw": "D) Any leaf node"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "BST property ke mutabiq bade elements hamesha right mein hote hain, isliye root se lagaatar right pointers follow karne par rightmost node maximum element hota hai.",
      "trap": "Minimum element leftmost node par hota hai."
    },
    {
      "id": 136,
      "originalNum": 136,
      "sectionId": 8,
      "sectionTitle": "Binary Search Trees & AVL Trees",
      "question": "What is the maximum height of an AVL tree with n nodes?",
      "rawQuestion": "Q136. What is the maximum height of an AVL tree with n nodes?",
      "options": [
        {
          "key": "A",
          "text": "log2(n)",
          "raw": "A) log2(n)"
        },
        {
          "key": "B",
          "text": "1.44 log2(n)",
          "raw": "B) 1.44 log2(n)"
        },
        {
          "key": "C",
          "text": "n - 1",
          "raw": "C) n - 1"
        },
        {
          "key": "D",
          "text": "2 * log2(n)",
          "raw": "D) 2 * log2(n)"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "AVL tree height formula: h <= 1.4404 * log2(n + 2) - 0.328 ~= 1.44 log2 n.",
      "trap": "Red-Black tree has maximum height 2 log2(n + 1); AVL is tighter at 1.44 log2 n."
    },
    {
      "id": 137,
      "originalNum": 137,
      "sectionId": 8,
      "sectionTitle": "Binary Search Trees & AVL Trees",
      "question": "Which of the following is true regarding AVL Trees compared to Red-Black Trees?",
      "rawQuestion": "Q137. Which of the following is true regarding AVL Trees compared to Red-Black Trees?",
      "options": [
        {
          "key": "A",
          "text": "AVL trees are more rigidly balanced, making search faster but insertion/deletion slower due to more rotations",
          "raw": "A) AVL trees are more rigidly balanced, making search faster but insertion/deletion slower due to more rotations"
        },
        {
          "key": "B",
          "text": "Red-Black trees are strictly more balanced than AVL trees",
          "raw": "B) Red-Black trees are strictly more balanced than AVL trees"
        },
        {
          "key": "C",
          "text": "AVL trees require more storage space for colors",
          "raw": "C) AVL trees require more storage space for colors"
        },
        {
          "key": "D",
          "text": "AVL trees have O(n) search time",
          "raw": "D) AVL trees have O(n) search time"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Difficult",
      "explanation": "AVL trees strictly height balanced hoti hain (BF <= 1), isliye AVL mein search faster hota hai. Red-Black trees thodi loose hoti hain (height <= 2 log n), jisse insertion/deletion mein kam rotations lagte hain.",
      "trap": "AVL is preferred for lookup-intensive systems; Red-Black for insert/delete-intensive systems."
    },
    {
      "id": 138,
      "originalNum": 138,
      "sectionId": 8,
      "sectionTitle": "Binary Search Trees & AVL Trees",
      "question": "What is the Balance Factor of a leaf node in any AVL tree?",
      "rawQuestion": "Q138. What is the Balance Factor of a leaf node in any AVL tree?",
      "options": [
        {
          "key": "A",
          "text": "0",
          "raw": "A) 0"
        },
        {
          "key": "B",
          "text": "1",
          "raw": "B) 1"
        },
        {
          "key": "C",
          "text": "-1",
          "raw": "C) -1"
        },
        {
          "key": "D",
          "text": "2",
          "raw": "D) 2"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "Leaf node ka left child bhi NULL hota hai (height -1) aur right child bhi NULL (height -1). BF = (-1) - (-1) = 0.",
      "trap": "Leaf node has balance factor exactly 0."
    },
    {
      "id": 139,
      "originalNum": 139,
      "sectionId": 8,
      "sectionTitle": "Binary Search Trees & AVL Trees",
      "question": "In a BST, what is the Inorder Successor of a node with a non-empty right subtree?",
      "rawQuestion": "Q139. In a BST, what is the Inorder Successor of a node with a non-empty right subtree?",
      "options": [
        {
          "key": "A",
          "text": "The minimum node in its right subtree (leftmost child of right subtree)",
          "raw": "A) The minimum node in its right subtree (leftmost child of right subtree)"
        },
        {
          "key": "B",
          "text": "Its parent node",
          "raw": "B) Its parent node"
        },
        {
          "key": "C",
          "text": "The maximum node in its left subtree",
          "raw": "C) The maximum node in its left subtree"
        },
        {
          "key": "D",
          "text": "The root node",
          "raw": "D) The root node"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Medium",
      "explanation": "Inorder successor means the immediately next larger element. Agar right subtree exist karta hai, toh right subtree ka sabse chhota element (leftmost node) hi Inorder Successor hota hai.",
      "trap": "If right subtree is empty, Inorder successor is the deepest ancestor whose left child is also an ancestor."
    },
    {
      "id": 140,
      "originalNum": 140,
      "sectionId": 8,
      "sectionTitle": "Binary Search Trees & AVL Trees",
      "question": "Inserting keys into a BST in strictly descending order results in what shape of tree?",
      "rawQuestion": "Q140. Inserting keys into a BST in strictly descending order results in what shape of tree?",
      "options": [
        {
          "key": "A",
          "text": "Perfect binary tree",
          "raw": "A) Perfect binary tree"
        },
        {
          "key": "B",
          "text": "Left-skewed binary tree",
          "raw": "B) Left-skewed binary tree"
        },
        {
          "key": "C",
          "text": "Right-skewed binary tree",
          "raw": "C) Right-skewed binary tree"
        },
        {
          "key": "D",
          "text": "Full binary tree",
          "raw": "D) Full binary tree"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Har naya key pichhle key se chhota hoga, isliye har naya element left child banta chala jayega (Left-Skewed Tree).",
      "trap": "Ascending order creates Right-Skewed; Descending creates Left-Skewed."
    },
    {
      "id": 141,
      "originalNum": 141,
      "sectionId": 8,
      "sectionTitle": "Binary Search Trees & AVL Trees",
      "question": "What is the minimum number of nodes in an AVL tree of height h = 4?",
      "rawQuestion": "Q141. What is the minimum number of nodes in an AVL tree of height h = 4?",
      "options": [
        {
          "key": "A",
          "text": "12",
          "raw": "A) 12"
        },
        {
          "key": "B",
          "text": "16",
          "raw": "B) 16"
        },
        {
          "key": "C",
          "text": "20",
          "raw": "C) 20"
        },
        {
          "key": "D",
          "text": "15",
          "raw": "D) 15"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Medium",
      "explanation": "N(0)=1, N(1)=2, N(2)=4, N(3)=7, N(4) = N(3) + N(2) + 1 = 7 + 4 + 1 = 12 nodes.",
      "trap": "Follow recurrence: N(h) = N(h-1) + N(h-2) + 1."
    },
    {
      "id": 142,
      "originalNum": 142,
      "sectionId": 8,
      "sectionTitle": "Binary Search Trees & AVL Trees",
      "question": "Which rotation is performed when a node is inserted into the left subtree of the left child?",
      "rawQuestion": "Q142. Which rotation is performed when a node is inserted into the left subtree of the left child?",
      "options": [
        {
          "key": "A",
          "text": "Single Right Rotation (LL Rotation)",
          "raw": "A) Single Right Rotation (LL Rotation)"
        },
        {
          "key": "B",
          "text": "Single Left Rotation (RR Rotation)",
          "raw": "B) Single Left Rotation (RR Rotation)"
        },
        {
          "key": "C",
          "text": "Double LR Rotation",
          "raw": "C) Double LR Rotation"
        },
        {
          "key": "D",
          "text": "Double RL Rotation",
          "raw": "D) Double RL Rotation"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "LL case: Left child ke Left subtree mein insertion causes right-leaning push, which is balanced by a Single Right Rotation around the unbalanced node.",
      "trap": "LL imbalance is resolved by RIGHT rotation; RR imbalance by LEFT rotation."
    },
    {
      "id": 143,
      "originalNum": 143,
      "sectionId": 8,
      "sectionTitle": "Binary Search Trees & AVL Trees",
      "question": "Can a BST contain duplicate keys in its standard textbook implementation?",
      "rawQuestion": "Q143. Can a BST contain duplicate keys in its standard textbook implementation?",
      "options": [
        {
          "key": "A",
          "text": "No, all keys must be distinct",
          "raw": "A) No, all keys must be distinct"
        },
        {
          "key": "B",
          "text": "Yes, duplicates are allowed in both subtrees simultaneously",
          "raw": "B) Yes, duplicates are allowed in both subtrees simultaneously"
        },
        {
          "key": "C",
          "text": "Only at the root",
          "raw": "C) Only at the root"
        },
        {
          "key": "D",
          "text": "Yes, but only in red-black trees",
          "raw": "D) Yes, but only in red-black trees"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "Standard BST formal definition specifies strict inequalities: Left < Root < Right. Duplicates are either disallowed or handled with a counter in the node.",
      "trap": "If duplicates are allowed, a convention (e.g. <= left) must be consistently maintained."
    },
    {
      "id": 144,
      "originalNum": 144,
      "sectionId": 8,
      "sectionTitle": "Binary Search Trees & AVL Trees",
      "question": "How many rotations are required in the WORST case after an insertion in an AVL tree?",
      "rawQuestion": "Q144. How many rotations are required in the WORST case after an insertion in an AVL tree?",
      "options": [
        {
          "key": "A",
          "text": "At most 1 single or double rotation",
          "raw": "A) At most 1 single or double rotation"
        },
        {
          "key": "B",
          "text": "O(log n) rotations",
          "raw": "B) O(log n) rotations"
        },
        {
          "key": "C",
          "text": "O(n) rotations",
          "raw": "C) O(n) rotations"
        },
        {
          "key": "D",
          "text": "Exactly 4 rotations",
          "raw": "D) Exactly 4 rotations"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Difficult",
      "explanation": "Beautiful property of AVL trees: Single insertion requires AT MOST ONE rotation (either single or double) to restore balance to the entire tree! Deletion, however, may require up to O(log n) rotations along the path to root.",
      "trap": "Insertion needs at most 1 rotation; Deletion may propagate O(log n) rotations."
    },
    {
      "id": 145,
      "originalNum": 145,
      "sectionId": 8,
      "sectionTitle": "Binary Search Trees & AVL Trees",
      "question": "What is the time complexity to find the minimum element in an AVL tree with n nodes?",
      "rawQuestion": "Q145. What is the time complexity to find the minimum element in an AVL tree with n nodes?",
      "options": [
        {
          "key": "A",
          "text": "O(1)",
          "raw": "A) O(1)"
        },
        {
          "key": "B",
          "text": "O(log n)",
          "raw": "B) O(log n)"
        },
        {
          "key": "C",
          "text": "O(n)",
          "raw": "C) O(n)"
        },
        {
          "key": "D",
          "text": "O(n log n)",
          "raw": "D) O(n log n)"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Leftmost leaf tak traverse karna hota hai. Since AVL tree height is strictly bounded by O(log n), finding minimum takes O(log n) time.",
      "trap": "In regular skewed BST it can take O(n), but in AVL it is strictly O(log n)."
    },
    {
      "id": 146,
      "originalNum": 146,
      "sectionId": 9,
      "sectionTitle": "B-Trees & B+ Trees",
      "question": "In a B-Tree of order m, what is the maximum number of keys an internal node can hold?",
      "rawQuestion": "Q146. In a B-Tree of order m, what is the maximum number of keys an internal node can hold?",
      "options": [
        {
          "key": "A",
          "text": "m",
          "raw": "A) m"
        },
        {
          "key": "B",
          "text": "m - 1",
          "raw": "B) m - 1"
        },
        {
          "key": "C",
          "text": "ceil(m / 2)",
          "raw": "C) ceil(m / 2)"
        },
        {
          "key": "D",
          "text": "2m",
          "raw": "D) 2m"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Order m ka matlab max children = m. Ek node mein keys ki sankhya hamesha children se 1 kam hoti hai: Max Keys = m - 1.",
      "trap": "Max children is m, but Max keys is m - 1."
    },
    {
      "id": 147,
      "originalNum": 147,
      "sectionId": 9,
      "sectionTitle": "B-Trees & B+ Trees",
      "question": "In a B-Tree of order 5, what is the minimum number of keys that a non-root internal node must contain?",
      "rawQuestion": "Q147. In a B-Tree of order 5, what is the minimum number of keys that a non-root internal node must contain?",
      "options": [
        {
          "key": "A",
          "text": "1",
          "raw": "A) 1"
        },
        {
          "key": "B",
          "text": "2",
          "raw": "B) 2"
        },
        {
          "key": "C",
          "text": "3",
          "raw": "C) 3"
        },
        {
          "key": "D",
          "text": "4",
          "raw": "D) 4"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "Min keys formula = ceil(m / 2) - 1. For m = 5: ceil(5 / 2) - 1 = ceil(2.5) - 1 = 3 - 1 = 2 keys.",
      "trap": "ceil(5/2) = 3 gives the minimum CHILDREN; subtract 1 to get minimum KEYS (3 - 1 = 2)."
    },
    {
      "id": 148,
      "originalNum": 148,
      "sectionId": 9,
      "sectionTitle": "B-Trees & B+ Trees",
      "question": "Where are data records and pointers stored in a B+ Tree?",
      "rawQuestion": "Q148. Where are data records and pointers stored in a B+ Tree?",
      "options": [
        {
          "key": "A",
          "text": "In internal nodes only",
          "raw": "A) In internal nodes only"
        },
        {
          "key": "B",
          "text": "In all nodes equally",
          "raw": "B) In all nodes equally"
        },
        {
          "key": "C",
          "text": "ONLY in the leaf nodes",
          "raw": "C) ONLY in the leaf nodes"
        },
        {
          "key": "D",
          "text": "In the root node only",
          "raw": "D) In the root node only"
        }
      ],
      "correctAnswer": "C",
      "difficulty": "Easy",
      "explanation": "B+ Tree mein actual data pointers sirf aur sirf LEAF NODES mein store hote hain. Internal nodes sirf router/index keys store karte hain.",
      "trap": "In standard B-Trees, data is stored in both internal and leaf nodes."
    },
    {
      "id": 149,
      "originalNum": 149,
      "sectionId": 9,
      "sectionTitle": "B-Trees & B+ Trees",
      "question": "Why are leaf nodes linked together as a linked list in a B+ Tree?",
      "rawQuestion": "Q149. Why are leaf nodes linked together as a linked list in a B+ Tree?",
      "options": [
        {
          "key": "A",
          "text": "To reduce height",
          "raw": "A) To reduce height"
        },
        {
          "key": "B",
          "text": "To enable extremely efficient range queries and sequential scanning",
          "raw": "B) To enable extremely efficient range queries and sequential scanning"
        },
        {
          "key": "C",
          "text": "To prevent deletion",
          "raw": "C) To prevent deletion"
        },
        {
          "key": "D",
          "text": "To store negative numbers",
          "raw": "D) To store negative numbers"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Database queries jaise `WHERE age BETWEEN 20 AND 30` ke liye B+ tree direct leaf linked list ko linearly traverse kar leta hai bina root par wapas jaye.",
      "trap": "Range search efficiency is the primary reason databases use B+ Trees over B-Trees."
    },
    {
      "id": 150,
      "originalNum": 150,
      "sectionId": 9,
      "sectionTitle": "B-Trees & B+ Trees",
      "question": "In a B-Tree of order m, what is the minimum number of children the ROOT node can have (if not a leaf)?",
      "rawQuestion": "Q150. In a B-Tree of order m, what is the minimum number of children the ROOT node can have (if not a leaf)?",
      "options": [
        {
          "key": "A",
          "text": "1",
          "raw": "A) 1"
        },
        {
          "key": "B",
          "text": "2",
          "raw": "B) 2"
        },
        {
          "key": "C",
          "text": "ceil(m / 2)",
          "raw": "C) ceil(m / 2)"
        },
        {
          "key": "D",
          "text": "m - 1",
          "raw": "D) m - 1"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "Root node ke liye special exception hota hai: Root must have AT LEAST 2 children (unless the tree has only 1 node). It does NOT need to satisfy the ceil(m/2) rule.",
      "trap": "Internal nodes require ceil(m/2) children, but the ROOT only requires at least 2 children."
    },
    {
      "id": 151,
      "originalNum": 151,
      "sectionId": 9,
      "sectionTitle": "B-Trees & B+ Trees",
      "question": "All leaf nodes in a B-Tree are located at:",
      "rawQuestion": "Q151. All leaf nodes in a B-Tree are located at:",
      "options": [
        {
          "key": "A",
          "text": "Different levels depending on balance",
          "raw": "A) Different levels depending on balance"
        },
        {
          "key": "B",
          "text": "The EXACT same level (depth)",
          "raw": "B) The EXACT same level (depth)"
        },
        {
          "key": "C",
          "text": "Level 1",
          "raw": "C) Level 1"
        },
        {
          "key": "D",
          "text": "Alternating levels",
          "raw": "D) Alternating levels"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "B-Tree hamesha perfectly height balanced hoti hai: Saare leaf nodes exact same depth par hote hain.",
      "trap": "Leaves can never be at different levels in a B-Tree."
    },
    {
      "id": 152,
      "originalNum": 152,
      "sectionId": 9,
      "sectionTitle": "B-Trees & B+ Trees",
      "question": "Why are B-Trees preferred over Binary Search Trees for disk-based databases?",
      "rawQuestion": "Q152. Why are B-Trees preferred over Binary Search Trees for disk-based databases?",
      "options": [
        {
          "key": "A",
          "text": "B-Trees have shorter height and larger node capacity, minimizing expensive disk I/O operations",
          "raw": "A) B-Trees have shorter height and larger node capacity, minimizing expensive disk I/O operations"
        },
        {
          "key": "B",
          "text": "BST uses too much RAM",
          "raw": "B) BST uses too much RAM"
        },
        {
          "key": "C",
          "text": "B-Trees don't need sorting",
          "raw": "C) B-Trees don't need sorting"
        },
        {
          "key": "D",
          "text": "B-Trees are faster in CPU cache",
          "raw": "D) B-Trees are faster in CPU cache"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Medium",
      "explanation": "Disk block reading bohot slow hoti hai. B-Tree ek hi disk block mein multiple keys fit kar deta hai, jisse tree ki height bohot kam hoti hai (2-3 levels for millions of records), minimizing disk reads.",
      "trap": "Disk access time is the bottleneck, not CPU cycles."
    },
    {
      "id": 153,
      "originalNum": 153,
      "sectionId": 9,
      "sectionTitle": "B-Trees & B+ Trees",
      "question": "When a node overflows in a B-Tree during insertion, what operation is performed?",
      "rawQuestion": "Q153. When a node overflows in a B-Tree during insertion, what operation is performed?",
      "options": [
        {
          "key": "A",
          "text": "Rotation",
          "raw": "A) Rotation"
        },
        {
          "key": "B",
          "text": "Node Splitting and pushing the median key up to the parent",
          "raw": "B) Node Splitting and pushing the median key up to the parent"
        },
        {
          "key": "C",
          "text": "Deletion of root",
          "raw": "C) Deletion of root"
        },
        {
          "key": "D",
          "text": "Rehashing",
          "raw": "D) Rehashing"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Jab node mein m keys ho jaati hain, node split hota hai do halves mein aur median key parent node mein push ho jaati hai.",
      "trap": "B-Trees grow from the leaves towards the root via node splitting."
    },
    {
      "id": 154,
      "originalNum": 154,
      "sectionId": 9,
      "sectionTitle": "B-Trees & B+ Trees",
      "question": "In a B-Tree of order 4 (2-3-4 Tree), what is the maximum number of children an internal node can have?",
      "rawQuestion": "Q154. In a B-Tree of order 4 (2-3-4 Tree), what is the maximum number of children an internal node can have?",
      "options": [
        {
          "key": "A",
          "text": "2",
          "raw": "A) 2"
        },
        {
          "key": "B",
          "text": "3",
          "raw": "B) 3"
        },
        {
          "key": "C",
          "text": "4",
          "raw": "C) 4"
        },
        {
          "key": "D",
          "text": "5",
          "raw": "D) 5"
        }
      ],
      "correctAnswer": "C",
      "difficulty": "Easy",
      "explanation": "Order m = 4 means maximum number of children is m = 4.",
      "trap": "Order defines maximum children."
    },
    {
      "id": 155,
      "originalNum": 155,
      "sectionId": 9,
      "sectionTitle": "B-Trees & B+ Trees",
      "question": "In a B-Tree of order 4, what are the possible numbers of keys an internal non-root node can contain?",
      "rawQuestion": "Q155. In a B-Tree of order 4, what are the possible numbers of keys an internal non-root node can contain?",
      "options": [
        {
          "key": "A",
          "text": "1, 2, or 3 keys",
          "raw": "A) 1, 2, or 3 keys"
        },
        {
          "key": "B",
          "text": "Exactly 4 keys",
          "raw": "B) Exactly 4 keys"
        },
        {
          "key": "C",
          "text": "2 or 3 keys",
          "raw": "C) 2 or 3 keys"
        },
        {
          "key": "D",
          "text": "0 keys",
          "raw": "D) 0 keys"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Medium",
      "explanation": "Min keys = ceil(4 / 2) - 1 = 2 - 1 = 1 key. Max keys = 4 - 1 = 3 keys. So node can hold 1, 2, or 3 keys.",
      "trap": "A 2-3-4 tree node can have 1, 2, or 3 keys (having 2, 3, or 4 children)."
    },
    {
      "id": 156,
      "originalNum": 156,
      "sectionId": 9,
      "sectionTitle": "B-Trees & B+ Trees",
      "question": "What happens when a key is deleted from a leaf in a B-Tree and causes underflow?",
      "rawQuestion": "Q156. What happens when a key is deleted from a leaf in a B-Tree and causes underflow?",
      "options": [
        {
          "key": "A",
          "text": "Tree crashes",
          "raw": "A) Tree crashes"
        },
        {
          "key": "B",
          "text": "The node borrows a key from an immediate sibling or merges with a sibling",
          "raw": "B) The node borrows a key from an immediate sibling or merges with a sibling"
        },
        {
          "key": "C",
          "text": "The root is automatically deleted",
          "raw": "C) The root is automatically deleted"
        },
        {
          "key": "D",
          "text": "Tree converts to BST",
          "raw": "D) Tree converts to BST"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "Underflow handle karne ke liye pehle sibling se borrow (key redistribution) ki koshish karte hain. Agar sibling ke paas bhi minimum keys hon, toh dono siblings parent key ke saath merge ho jaate hain.",
      "trap": "Borrow first, merge if borrowing is impossible."
    },
    {
      "id": 157,
      "originalNum": 157,
      "sectionId": 9,
      "sectionTitle": "B-Trees & B+ Trees",
      "question": "In a B+ Tree, search keys present in internal nodes:",
      "rawQuestion": "Q157. In a B+ Tree, search keys present in internal nodes:",
      "options": [
        {
          "key": "A",
          "text": "Never appear in leaf nodes",
          "raw": "A) Never appear in leaf nodes"
        },
        {
          "key": "B",
          "text": "MUST also appear in leaf nodes along with their associated data records",
          "raw": "B) MUST also appear in leaf nodes along with their associated data records"
        },
        {
          "key": "C",
          "text": "Are encrypted",
          "raw": "C) Are encrypted"
        },
        {
          "key": "D",
          "text": "Store actual file contents",
          "raw": "D) Store actual file contents"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "B+ Tree internal nodes serve only as routers/indices. Every search key must ultimately reside in a leaf node where the actual record pointer is stored.",
      "trap": "Key duplication between internal and leaf nodes is an inherent feature of B+ Trees."
    },
    {
      "id": 158,
      "originalNum": 158,
      "sectionId": 9,
      "sectionTitle": "B-Trees & B+ Trees",
      "question": "What is the order of growth for search time in a B-Tree with n keys and order m?",
      "rawQuestion": "Q158. What is the order of growth for search time in a B-Tree with n keys and order m?",
      "options": [
        {
          "key": "A",
          "text": "O(log_m n)",
          "raw": "A) O(log_m n)"
        },
        {
          "key": "B",
          "text": "O(n)",
          "raw": "B) O(n)"
        },
        {
          "key": "C",
          "text": "O(m * n)",
          "raw": "C) O(m * n)"
        },
        {
          "key": "D",
          "text": "O(n^2)",
          "raw": "D) O(n^2)"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "Tree height is proportional to log base m of n. Search takes O(log_m n) disk operations.",
      "trap": "Since m is large (often 100 to 1000 in DBs), log_m n is extremely small (2 to 4)."
    },
    {
      "id": 159,
      "originalNum": 159,
      "sectionId": 9,
      "sectionTitle": "B-Trees & B+ Trees",
      "question": "Which popular database storage engine uses B+ Trees for primary clustered indexing?",
      "rawQuestion": "Q159. Which popular database storage engine uses B+ Trees for primary clustered indexing?",
      "options": [
        {
          "key": "A",
          "text": "MySQL InnoDB",
          "raw": "A) MySQL InnoDB"
        },
        {
          "key": "B",
          "text": "Redis",
          "raw": "B) Redis"
        },
        {
          "key": "C",
          "text": "Memcached",
          "raw": "C) Memcached"
        },
        {
          "key": "D",
          "text": "Apache Kafka",
          "raw": "D) Apache Kafka"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "MySQL InnoDB, PostgreSQL, aur Oracle tables primary index ke liye B+ Trees use karte hain.",
      "trap": "Redis is an in-memory hash/skiplist store; InnoDB is standard B+ Tree."
    },
    {
      "id": 160,
      "originalNum": 160,
      "sectionId": 9,
      "sectionTitle": "B-Trees & B+ Trees",
      "question": "If a B-Tree of order m = 3 has 3 levels (root at level 1), what is the maximum number of keys it can hold?",
      "rawQuestion": "Q160. If a B-Tree of order m = 3 has 3 levels (root at level 1), what is the maximum number of keys it can hold?",
      "options": [
        {
          "key": "A",
          "text": "8",
          "raw": "A) 8"
        },
        {
          "key": "B",
          "text": "26",
          "raw": "B) 26"
        },
        {
          "key": "C",
          "text": "27",
          "raw": "C) 27"
        },
        {
          "key": "D",
          "text": "13",
          "raw": "D) 13"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Difficult",
      "explanation": "Max keys formula: m^h - 1. For m = 3, h = 3: 3^3 - 1 = 27 - 1 = 26 keys. (Level 1: 2 keys, Level 2: 3 nodes * 2 = 6 keys, Level 3: 9 nodes * 2 = 18 keys. Total = 2 + 6 + 18 = 26).",
      "trap": "Formula is m^h - 1, not m^h."
    },
    {
      "id": 161,
      "originalNum": 161,
      "sectionId": 9,
      "sectionTitle": "B-Trees & B+ Trees",
      "question": "What distinguishes a B* Tree from a standard B-Tree?",
      "rawQuestion": "Q161. What distinguishes a B* Tree from a standard B-Tree?",
      "options": [
        {
          "key": "A",
          "text": "B* Tree internal nodes must be at least 2/3 full instead of 1/2 full",
          "raw": "A) B* Tree internal nodes must be at least 2/3 full instead of 1/2 full"
        },
        {
          "key": "B",
          "text": "B* Tree has no leaves",
          "raw": "B) B* Tree has no leaves"
        },
        {
          "key": "C",
          "text": "B* Tree stores characters only",
          "raw": "C) B* Tree stores characters only"
        },
        {
          "key": "D",
          "text": "B* Tree is unbalanced",
          "raw": "D) B* Tree is unbalanced"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Difficult",
      "explanation": "B* Tree node fill factor ko increase karta hai: Non-root nodes must be at least 2/3 full (floor((2m-1)/3) keys), reducing node splits and increasing disk space utilization.",
      "trap": "Standard B-Tree is 1/2 full; B* Tree is 2/3 full."
    },
    {
      "id": 162,
      "originalNum": 162,
      "sectionId": 9,
      "sectionTitle": "B-Trees & B+ Trees",
      "question": "Can a B-Tree grow taller from the leaves?",
      "rawQuestion": "Q162. Can a B-Tree grow taller from the leaves?",
      "options": [
        {
          "key": "A",
          "text": "Yes, by adding leaves at the bottom",
          "raw": "A) Yes, by adding leaves at the bottom"
        },
        {
          "key": "B",
          "text": "No, B-Trees grow upwards towards the root when the root splits",
          "raw": "B) No, B-Trees grow upwards towards the root when the root splits"
        },
        {
          "key": "C",
          "text": "B-Trees never change height",
          "raw": "C) B-Trees never change height"
        },
        {
          "key": "D",
          "text": "Only when elements are deleted",
          "raw": "D) Only when elements are deleted"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "B-Tree hamesha leaves par insert karta hai. Jab root full ho kar split hota hai, tab ek naya root banta hai aur tree ki height 1 level badhti hai (Grows from root upwards).",
      "trap": "Binary trees grow downwards; B-Trees grow upwards!"
    },
    {
      "id": 163,
      "originalNum": 163,
      "sectionId": 9,
      "sectionTitle": "B-Trees & B+ Trees",
      "question": "In a B-Tree of order 7, what is the minimum number of children for a non-root internal node?",
      "rawQuestion": "Q163. In a B-Tree of order 7, what is the minimum number of children for a non-root internal node?",
      "options": [
        {
          "key": "A",
          "text": "3",
          "raw": "A) 3"
        },
        {
          "key": "B",
          "text": "4",
          "raw": "B) 4"
        },
        {
          "key": "C",
          "text": "5",
          "raw": "C) 5"
        },
        {
          "key": "D",
          "text": "6",
          "raw": "D) 6"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "Min children = ceil(m / 2) = ceil(7 / 2) = ceil(3.5) = 4 children.",
      "trap": "ceil(7/2) is 4."
    },
    {
      "id": 164,
      "originalNum": 164,
      "sectionId": 10,
      "sectionTitle": "Hashing & Collision Resolution",
      "question": "What is the Load Factor (alpha) of a Hash Table with n keys and table size m?",
      "rawQuestion": "Q164. What is the Load Factor (alpha) of a Hash Table with n keys and table size m?",
      "options": [
        {
          "key": "A",
          "text": "m / n",
          "raw": "A) m / n"
        },
        {
          "key": "B",
          "text": "n / m",
          "raw": "B) n / m"
        },
        {
          "key": "C",
          "text": "n * m",
          "raw": "C) n * m"
        },
        {
          "key": "D",
          "text": "n + m",
          "raw": "D) n + m"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Load Factor alpha = n / m (Number of keys / Table size). Yeh table ki fullness ko measure karta hai.",
      "trap": "Do not invert: it is n / m, not m / n."
    },
    {
      "id": 165,
      "originalNum": 165,
      "sectionId": 10,
      "sectionTitle": "Hashing & Collision Resolution",
      "question": "Which collision resolution technique suffers from Primary Clustering?",
      "rawQuestion": "Q165. Which collision resolution technique suffers from Primary Clustering?",
      "options": [
        {
          "key": "A",
          "text": "Separate Chaining",
          "raw": "A) Separate Chaining"
        },
        {
          "key": "B",
          "text": "Linear Probing",
          "raw": "B) Linear Probing"
        },
        {
          "key": "C",
          "text": "Quadratic Probing",
          "raw": "C) Quadratic Probing"
        },
        {
          "key": "D",
          "text": "Double Hashing",
          "raw": "D) Double Hashing"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Linear probing mein agar kisi index par collision hota hai toh consecutive occupied slots ka cluster ban jata hai (Primary Clustering), jisse search time dramatically badh jata hai.",
      "trap": "Quadratic probing causes Secondary Clustering; Linear probing causes Primary Clustering."
    },
    {
      "id": 166,
      "originalNum": 166,
      "sectionId": 10,
      "sectionTitle": "Hashing & Collision Resolution",
      "question": "What is the probe sequence formula in Double Hashing for probe attempt i?",
      "rawQuestion": "Q166. What is the probe sequence formula in Double Hashing for probe attempt i?",
      "options": [
        {
          "key": "A",
          "text": "(h1(k) + i * h2(k)) % m",
          "raw": "A) (h1(k) + i * h2(k)) % m"
        },
        {
          "key": "B",
          "text": "(h1(k) * h2(k) + i) % m",
          "raw": "B) (h1(k) * h2(k) + i) % m"
        },
        {
          "key": "C",
          "text": "(h1(k) + i^2) % m",
          "raw": "C) (h1(k) + i^2) % m"
        },
        {
          "key": "D",
          "text": "(h1(k) + h2(k)) % m",
          "raw": "D) (h1(k) + h2(k)) % m"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Medium",
      "explanation": "Double Hashing probe sequence: `hash(k, i) = (h1(k) + i * h2(k)) % m`. Yahan step size `h2(k)` key par depend karta hai, eliminating clustering.",
      "trap": "h2(k) must never evaluate to 0 and must be relatively prime to m."
    },
    {
      "id": 167,
      "originalNum": 167,
      "sectionId": 10,
      "sectionTitle": "Hashing & Collision Resolution",
      "question": "In Open Addressing hashing, what is the maximum possible value of the Load Factor alpha?",
      "rawQuestion": "Q167. In Open Addressing hashing, what is the maximum possible value of the Load Factor alpha?",
      "options": [
        {
          "key": "A",
          "text": "alpha can be any value > 1",
          "raw": "A) alpha can be any value > 1"
        },
        {
          "key": "B",
          "text": "alpha <= 1",
          "raw": "B) alpha <= 1"
        },
        {
          "key": "C",
          "text": "alpha must be 0",
          "raw": "C) alpha must be 0"
        },
        {
          "key": "D",
          "text": "alpha = 2",
          "raw": "D) alpha = 2"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "Open Addressing mein har slot mein maximum 1 key store ho sakti hai. Isliye total keys n kabhi bhi table size m se zyada nahi ho sakti: n <= m, so alpha <= 1.",
      "trap": "Separate chaining can have alpha > 1, but open addressing CANNOT exceed 1."
    },
    {
      "id": 168,
      "originalNum": 168,
      "sectionId": 10,
      "sectionTitle": "Hashing & Collision Resolution",
      "question": "Given hash function h(k) = k mod 7. Keys 15, 22, 8 are inserted using Linear Probing in an array of size 7 (indices 0..6). What is the index of key 8?",
      "rawQuestion": "Q168. Given hash function h(k) = k mod 7. Keys 15, 22, 8 are inserted using Linear Probing in an array of size 7 (indices 0..6). What is the index of key 8?",
      "options": [
        {
          "key": "A",
          "text": "1",
          "raw": "A) 1"
        },
        {
          "key": "B",
          "text": "2",
          "raw": "B) 2"
        },
        {
          "key": "C",
          "text": "3",
          "raw": "C) 3"
        },
        {
          "key": "D",
          "text": "4",
          "raw": "D) 4"
        }
      ],
      "correctAnswer": "C",
      "difficulty": "Medium",
      "explanation": "Table size m = 7.\n• Insert 15: 15 % 7 = 1 -> slot 1 is empty -> stored at index 1.\n• Insert 22: 22 % 7 = 1 -> collision at slot 1! Linear probe checks slot 2 -> empty -> stored at index 2.\n• Insert 8: 8 % 7 = 1 -> collision at slot 1! Probe slot 2 -> collision! Probe slot 3 -> empty -> stored at index 3.\nFinal index of 8 = 3.",
      "trap": "Trace each collision probe sequentially: index 1 occupied, index 2 occupied, goes into index 3."
    },
    {
      "id": 169,
      "originalNum": 169,
      "sectionId": 10,
      "sectionTitle": "Hashing & Collision Resolution",
      "question": "What is the worst-case search time complexity in a Hash Table of size m containing n keys implemented using Separate Chaining?",
      "rawQuestion": "Q169. What is the worst-case search time complexity in a Hash Table of size m containing n keys implemented using Separate Chaining?",
      "options": [
        {
          "key": "A",
          "text": "O(1)",
          "raw": "A) O(1)"
        },
        {
          "key": "B",
          "text": "O(log n)",
          "raw": "B) O(log n)"
        },
        {
          "key": "C",
          "text": "O(n)",
          "raw": "C) O(n)"
        },
        {
          "key": "D",
          "text": "O(m)",
          "raw": "D) O(m)"
        }
      ],
      "correctAnswer": "C",
      "difficulty": "Easy",
      "explanation": "Worst case tab hota hai jab sabhi n keys same hash slot par collide ho jayein. Saare elements ek single linked list mein chale jaate hain, resulting in O(n) linear search time.",
      "trap": "Average case is O(1), but WORST case is strictly O(n)."
    },
    {
      "id": 170,
      "originalNum": 170,
      "sectionId": 10,
      "sectionTitle": "Hashing & Collision Resolution",
      "question": "What is the desirable property of a good hash function?",
      "rawQuestion": "Q170. What is the desirable property of a good hash function?",
      "options": [
        {
          "key": "A",
          "text": "Minimizes collisions by distributing keys uniformly across the table",
          "raw": "A) Minimizes collisions by distributing keys uniformly across the table"
        },
        {
          "key": "B",
          "text": "Maps all keys to index 0",
          "raw": "B) Maps all keys to index 0"
        },
        {
          "key": "C",
          "text": "Is as complex and slow as possible",
          "raw": "C) Is as complex and slow as possible"
        },
        {
          "key": "D",
          "text": "Produces negative indices",
          "raw": "D) Produces negative indices"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "Uniform hashing distribution minimizes collisions and ensures near O(1) average performance.",
      "trap": "Uniform distribution and low computation overhead are the primary criteria."
    },
    {
      "id": 171,
      "originalNum": 171,
      "sectionId": 10,
      "sectionTitle": "Hashing & Collision Resolution",
      "question": "Secondary clustering in quadratic probing occurs because:",
      "rawQuestion": "Q171. Secondary clustering in quadratic probing occurs because:",
      "options": [
        {
          "key": "A",
          "text": "Keys that hash to different positions follow the same probe sequence",
          "raw": "A) Keys that hash to different positions follow the same probe sequence"
        },
        {
          "key": "B",
          "text": "Keys that hash to the same initial position follow the exact same probe sequence",
          "raw": "B) Keys that hash to the same initial position follow the exact same probe sequence"
        },
        {
          "key": "C",
          "text": "The table size is prime",
          "raw": "C) The table size is prime"
        },
        {
          "key": "D",
          "text": "Elements are deleted",
          "raw": "D) Elements are deleted"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Difficult",
      "explanation": "Agar do alag-alag keys ka initial hash value same ho `h'(k1) == h'(k2)`, toh unka quadratic probe offset sequence `(i, i^2)` identical hota hai. This is called Secondary Clustering.",
      "trap": "Secondary clustering is milder than primary clustering, but still degrades performance."
    },
    {
      "id": 172,
      "originalNum": 172,
      "sectionId": 10,
      "sectionTitle": "Hashing & Collision Resolution",
      "question": "Why is the table size m usually chosen as a prime number in the division hash method h(k) = k mod m?",
      "rawQuestion": "Q172. Why is the table size m usually chosen as a prime number in the division hash method h(k) = k mod m?",
      "options": [
        {
          "key": "A",
          "text": "To make modulo calculation faster",
          "raw": "A) To make modulo calculation faster"
        },
        {
          "key": "B",
          "text": "To reduce patterns and common factors between keys and table size, minimizing collisions",
          "raw": "B) To reduce patterns and common factors between keys and table size, minimizing collisions"
        },
        {
          "key": "C",
          "text": "To allow negative numbers",
          "raw": "C) To allow negative numbers"
        },
        {
          "key": "D",
          "text": "Because computers prefer prime numbers",
          "raw": "D) Because computers prefer prime numbers"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "Agar m prime nahi hoga (e.g. power of 2), toh hash values sirf lower-order bits par depend karengi, leading to frequent collisions for structured keys.",
      "trap": "Prime modulo distributes clustered keys evenly."
    },
    {
      "id": 173,
      "originalNum": 173,
      "sectionId": 10,
      "sectionTitle": "Hashing & Collision Resolution",
      "question": "In separate chaining, what data structure is maintained at each slot of the hash table?",
      "rawQuestion": "Q173. In separate chaining, what data structure is maintained at each slot of the hash table?",
      "options": [
        {
          "key": "A",
          "text": "Stack",
          "raw": "A) Stack"
        },
        {
          "key": "B",
          "text": "Linked List",
          "raw": "B) Linked List"
        },
        {
          "key": "C",
          "text": "Binary Tree",
          "raw": "C) Binary Tree"
        },
        {
          "key": "D",
          "text": "Circular Array",
          "raw": "D) Circular Array"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Each bucket in separate chaining maintains a Singly Linked List of colliding keys.",
      "trap": "Some modern implementations like Java 8 HashMap convert linked list to Red-Black Tree when chain length exceeds 8, but classical definition is Linked List."
    },
    {
      "id": 174,
      "originalNum": 174,
      "sectionId": 10,
      "sectionTitle": "Hashing & Collision Resolution",
      "question": "In Quadratic Probing, the probe sequence is defined as:",
      "rawQuestion": "Q174. In Quadratic Probing, the probe sequence is defined as:",
      "options": [
        {
          "key": "A",
          "text": "(h(k) + i) % m",
          "raw": "A) (h(k) + i) % m"
        },
        {
          "key": "B",
          "text": "(h(k) + c1*i + c2*i^2) % m",
          "raw": "B) (h(k) + c1*i + c2*i^2) % m"
        },
        {
          "key": "C",
          "text": "(h(k) * i^2) % m",
          "raw": "C) (h(k) * i^2) % m"
        },
        {
          "key": "D",
          "text": "(h(k) + 2^i) % m",
          "raw": "D) (h(k) + 2^i) % m"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Quadratic probing quadratic polynomial function use karta hai: `(h(k) + c1*i + c2*i^2) % m`. Usually c1 = 1, c2 = 1.",
      "trap": "Linear uses i; Quadratic uses i^2."
    },
    {
      "id": 175,
      "originalNum": 175,
      "sectionId": 10,
      "sectionTitle": "Hashing & Collision Resolution",
      "question": "What is Rehashing?",
      "rawQuestion": "Q175. What is Rehashing?",
      "options": [
        {
          "key": "A",
          "text": "Re-running the hash function twice",
          "raw": "A) Re-running the hash function twice"
        },
        {
          "key": "B",
          "text": "Dynamically allocating a larger hash table (typically double the size) and re-inserting all existing keys when load factor exceeds a threshold",
          "raw": "B) Dynamically allocating a larger hash table (typically double the size) and re-inserting all existing keys when load factor exceeds a threshold"
        },
        {
          "key": "C",
          "text": "Deleting the hash table",
          "raw": "C) Deleting the hash table"
        },
        {
          "key": "D",
          "text": "Using two hash functions",
          "raw": "D) Using two hash functions"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "Jab hash table ka load factor threshold (e.g. 0.75) cross karta hai, performance degrade hone lagti hai. Naya double-sized table banakar sabhi keys ko naye table size par re-insert karne ko Rehashing kehte hain.",
      "trap": "Rehashing takes O(n) time, but amortized insertion remains O(1)."
    },
    {
      "id": 176,
      "originalNum": 176,
      "sectionId": 10,
      "sectionTitle": "Hashing & Collision Resolution",
      "question": "How is deletion typically handled in an Open Addressing hash table using Linear Probing?",
      "rawQuestion": "Q176. How is deletion typically handled in an Open Addressing hash table using Linear Probing?",
      "options": [
        {
          "key": "A",
          "text": "Directly setting the slot to NULL/empty",
          "raw": "A) Directly setting the slot to NULL/empty"
        },
        {
          "key": "B",
          "text": "Marking the slot with a special \"DELETED\" (tombstone) flag so subsequent searches do not terminate prematurely",
          "raw": "B) Marking the slot with a special \"DELETED\" (tombstone) flag so subsequent searches do not terminate prematurely"
        },
        {
          "key": "C",
          "text": "Shifting all subsequent elements left",
          "raw": "C) Shifting all subsequent elements left"
        },
        {
          "key": "D",
          "text": "Deletion is impossible",
          "raw": "D) Deletion is impossible"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Difficult",
      "explanation": "Agar slot ko direct empty (NULL) kar denge, toh search algorithm wahan search stop kar dega aur uske aage probe hui keys kabhi nahi milengi. Isliye slot ko tombstone marker se mark kiya jata hai.",
      "trap": "Directly setting to NULL breaks probe sequences for keys inserted after collisions."
    },
    {
      "id": 177,
      "originalNum": 177,
      "sectionId": 10,
      "sectionTitle": "Hashing & Collision Resolution",
      "question": "In the Mid-Square hash method, if key k = 45, what is the hash code using the middle two digits of k^2?",
      "rawQuestion": "Q177. In the Mid-Square hash method, if key k = 45, what is the hash code using the middle two digits of k^2?",
      "options": [
        {
          "key": "A",
          "text": "20",
          "raw": "A) 20"
        },
        {
          "key": "B",
          "text": "02",
          "raw": "B) 02"
        },
        {
          "key": "C",
          "text": "25",
          "raw": "C) 25"
        },
        {
          "key": "D",
          "text": "45",
          "raw": "D) 45"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Mid-Square method mein key ka square calculate karte hain: k = 45 => 45^2 = 2025. 2025 ke 4 digits [2, 0, 2, 5] hain, jisme middle two digits 02 hain. Isliye hash address 02 (ya 2) hoga.",
      "trap": "Calculate square first: 45 * 45 = 2025, then extract the middle digits 02."
    },
    {
      "id": 178,
      "originalNum": 178,
      "sectionId": 10,
      "sectionTitle": "Hashing & Collision Resolution",
      "question": "What is the average number of probes for a successful search in an open addressing hash table with uniform hashing?",
      "rawQuestion": "Q178. What is the average number of probes for a successful search in an open addressing hash table with uniform hashing?",
      "options": [
        {
          "key": "A",
          "text": "(1 / alpha) * ln(1 / (1 - alpha))",
          "raw": "A) (1 / alpha) * ln(1 / (1 - alpha))"
        },
        {
          "key": "B",
          "text": "1 / (1 - alpha)",
          "raw": "B) 1 / (1 - alpha)"
        },
        {
          "key": "C",
          "text": "alpha",
          "raw": "C) alpha"
        },
        {
          "key": "D",
          "text": "O(n)",
          "raw": "D) O(n)"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Difficult",
      "explanation": "Standard Knuth formula: Average probes for successful search is `(1 / alpha) * ln(1 / (1 - alpha))`. For unsuccessful search it is `1 / (1 - alpha)`.",
      "trap": "1 / (1 - alpha) is for UNSUCCESSFUL search; the ln form is for SUCCESSFUL search."
    },
    {
      "id": 179,
      "originalNum": 179,
      "sectionId": 10,
      "sectionTitle": "Hashing & Collision Resolution",
      "question": "Which collision resolution method requires no dynamic memory allocation at runtime?",
      "rawQuestion": "Q179. Which collision resolution method requires no dynamic memory allocation at runtime?",
      "options": [
        {
          "key": "A",
          "text": "Separate Chaining",
          "raw": "A) Separate Chaining"
        },
        {
          "key": "B",
          "text": "Open Addressing (Linear Probing, Quadratic Probing, Double Hashing)",
          "raw": "B) Open Addressing (Linear Probing, Quadratic Probing, Double Hashing)"
        },
        {
          "key": "C",
          "text": "Binary Search Tree hashing",
          "raw": "C) Binary Search Tree hashing"
        },
        {
          "key": "D",
          "text": "Skip list hashing",
          "raw": "D) Skip list hashing"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Open Addressing ek pre-allocated static array ke andar hi probes dhoondti hai, so no dynamic pointer allocation (malloc) is needed.",
      "trap": "Separate chaining continuously allocates new nodes via malloc."
    },
    {
      "id": 180,
      "originalNum": 180,
      "sectionId": 10,
      "sectionTitle": "Hashing & Collision Resolution",
      "question": "If a hash table has size m = 11 and 7 keys are inserted, what is the load factor?",
      "rawQuestion": "Q180. If a hash table has size m = 11 and 7 keys are inserted, what is the load factor?",
      "options": [
        {
          "key": "A",
          "text": "11 / 7",
          "raw": "A) 11 / 7"
        },
        {
          "key": "B",
          "text": "7 / 11 = 0.636",
          "raw": "B) 7 / 11 = 0.636"
        },
        {
          "key": "C",
          "text": "77",
          "raw": "C) 77"
        },
        {
          "key": "D",
          "text": "4 / 11",
          "raw": "D) 4 / 11"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "alpha = n / m = 7 / 11 ~= 0.636.",
      "trap": "alpha = keys / table_size."
    },
    {
      "id": 181,
      "originalNum": 181,
      "sectionId": 10,
      "sectionTitle": "Hashing & Collision Resolution",
      "question": "What is the folding method of hashing?",
      "rawQuestion": "Q181. What is the folding method of hashing?",
      "options": [
        {
          "key": "A",
          "text": "Dividing key into multiple parts, adding the parts together, and taking modulo m",
          "raw": "A) Dividing key into multiple parts, adding the parts together, and taking modulo m"
        },
        {
          "key": "B",
          "text": "Folding the array into 2D",
          "raw": "B) Folding the array into 2D"
        },
        {
          "key": "C",
          "text": "Inverting the bits",
          "raw": "C) Inverting the bits"
        },
        {
          "key": "D",
          "text": "Multiplying by 2",
          "raw": "D) Multiplying by 2"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "Example: Telephone number 9876543210 -> parts: 987 + 654 + 321 + 0 = sum, then sum % m.",
      "trap": "Boundary folding folds digits like accordion paper, shift folding adds directly."
    },
    {
      "id": 182,
      "originalNum": 182,
      "sectionId": 10,
      "sectionTitle": "Hashing & Collision Resolution",
      "question": "What is the time complexity to insert a new element in Separate Chaining at the head of the chain?",
      "rawQuestion": "Q182. What is the time complexity to insert a new element in Separate Chaining at the head of the chain?",
      "options": [
        {
          "key": "A",
          "text": "O(1) after computing hash function",
          "raw": "A) O(1) after computing hash function"
        },
        {
          "key": "B",
          "text": "O(n)",
          "raw": "B) O(n)"
        },
        {
          "key": "C",
          "text": "O(log n)",
          "raw": "C) O(log n)"
        },
        {
          "key": "D",
          "text": "O(m)",
          "raw": "D) O(m)"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "Hash compute karna O(1) hai, aur bucket ke head par node insert karna O(1) hai. Total time = O(1).",
      "trap": "Inserting at head avoids traversing the existing linked list chain."
    },
    {
      "id": 183,
      "originalNum": 183,
      "sectionId": 11,
      "sectionTitle": "Graph Theory & Traversals",
      "question": "According to the Handshaking Lemma, the sum of degrees of all vertices in an undirected graph is equal to:",
      "rawQuestion": "Q183. According to the Handshaking Lemma, the sum of degrees of all vertices in an undirected graph is equal to:",
      "options": [
        {
          "key": "A",
          "text": "|E|",
          "raw": "A) |E|"
        },
        {
          "key": "B",
          "text": "2 * |E|",
          "raw": "B) 2 * |E|"
        },
        {
          "key": "C",
          "text": "|V| - 1",
          "raw": "C) |V| - 1"
        },
        {
          "key": "D",
          "text": "2 * |V|",
          "raw": "D) 2 * |V|"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Har edge do vertices par incident hoti hai, isliye har edge total degree mein 2 contribute karti hai: Sum deg(v) = 2 * |E|.",
      "trap": "Sum is 2 * E, not 2 * V."
    },
    {
      "id": 184,
      "originalNum": 184,
      "sectionId": 11,
      "sectionTitle": "Graph Theory & Traversals",
      "question": "Can a simple undirected graph have 5 vertices, each having degree 3?",
      "rawQuestion": "Q184. Can a simple undirected graph have 5 vertices, each having degree 3?",
      "options": [
        {
          "key": "A",
          "text": "Yes, always",
          "raw": "A) Yes, always"
        },
        {
          "key": "B",
          "text": "No, because the sum of degrees would be odd (15), which violates the Handshaking Lemma",
          "raw": "B) No, because the sum of degrees would be odd (15), which violates the Handshaking Lemma"
        },
        {
          "key": "C",
          "text": "Yes, if it is complete",
          "raw": "C) Yes, if it is complete"
        },
        {
          "key": "D",
          "text": "Yes, if it has cycles",
          "raw": "D) Yes, if it has cycles"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "Sum of degrees = 5 * 3 = 15. Handshaking theorem says Sum deg(v) = 2E (must be an even number). 15 is odd, so such a graph is mathematically IMPOSSIBLE!",
      "trap": "The number of vertices with odd degree MUST always be even!"
    },
    {
      "id": 185,
      "originalNum": 185,
      "sectionId": 11,
      "sectionTitle": "Graph Theory & Traversals",
      "question": "How many edges are in a complete undirected graph Kn with n vertices?",
      "rawQuestion": "Q185. How many edges are in a complete undirected graph Kn with n vertices?",
      "options": [
        {
          "key": "A",
          "text": "n",
          "raw": "A) n"
        },
        {
          "key": "B",
          "text": "n(n - 1)",
          "raw": "B) n(n - 1)"
        },
        {
          "key": "C",
          "text": "n(n - 1) / 2",
          "raw": "C) n(n - 1) / 2"
        },
        {
          "key": "D",
          "text": "2n - 1",
          "raw": "D) 2n - 1"
        }
      ],
      "correctAnswer": "C",
      "difficulty": "Easy",
      "explanation": "Har vertex baaki n - 1 vertices se connect hota hai: n * (n - 1) / 2.",
      "trap": "For directed graph it is n(n - 1), for undirected it is n(n - 1) / 2."
    },
    {
      "id": 186,
      "originalNum": 186,
      "sectionId": 11,
      "sectionTitle": "Graph Theory & Traversals",
      "question": "An undirected graph has an Eulerian Circuit if and only if it is connected and:",
      "rawQuestion": "Q186. An undirected graph has an Eulerian Circuit if and only if it is connected and:",
      "options": [
        {
          "key": "A",
          "text": "Every vertex has an odd degree",
          "raw": "A) Every vertex has an odd degree"
        },
        {
          "key": "B",
          "text": "Every vertex has an even degree",
          "raw": "B) Every vertex has an even degree"
        },
        {
          "key": "C",
          "text": "Exactly two vertices have odd degree",
          "raw": "C) Exactly two vertices have odd degree"
        },
        {
          "key": "D",
          "text": "It has no cycles",
          "raw": "D) It has no cycles"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "Eulerian circuit visits every edge exactly once and returns to the start vertex. Yeh tabhi possible hai jab har vertex ki degree EVEN ho.",
      "trap": "If exactly 2 vertices have odd degree, it has an Eulerian PATH, not an Eulerian CIRCUIT."
    },
    {
      "id": 187,
      "originalNum": 187,
      "sectionId": 11,
      "sectionTitle": "Graph Theory & Traversals",
      "question": "What is the space complexity of representing a graph with V vertices and E edges using an Adjacency Matrix?",
      "rawQuestion": "Q187. What is the space complexity of representing a graph with V vertices and E edges using an Adjacency Matrix?",
      "options": [
        {
          "key": "A",
          "text": "O(V + E)",
          "raw": "A) O(V + E)"
        },
        {
          "key": "B",
          "text": "O(V^2)",
          "raw": "B) O(V^2)"
        },
        {
          "key": "C",
          "text": "O(E^2)",
          "raw": "C) O(E^2)"
        },
        {
          "key": "D",
          "text": "O(V log V)",
          "raw": "D) O(V log V)"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Adjacency Matrix ek V x V 2D array allocate karti hai, isliye memory hamesha O(V^2) hoti hai, chahe graph mein 0 edges hon ya maximum edges.",
      "trap": "Adjacency List takes O(V + E), Adjacency Matrix takes O(V^2)."
    },
    {
      "id": 188,
      "originalNum": 188,
      "sectionId": 11,
      "sectionTitle": "Graph Theory & Traversals",
      "question": "Which traversal algorithm can be used to find the shortest path between two vertices in an unweighted graph?",
      "rawQuestion": "Q188. Which traversal algorithm can be used to find the shortest path between two vertices in an unweighted graph?",
      "options": [
        {
          "key": "A",
          "text": "Depth-First Search (DFS)",
          "raw": "A) Depth-First Search (DFS)"
        },
        {
          "key": "B",
          "text": "Breadth-First Search (BFS)",
          "raw": "B) Breadth-First Search (BFS)"
        },
        {
          "key": "C",
          "text": "Inorder Traversal",
          "raw": "C) Inorder Traversal"
        },
        {
          "key": "D",
          "text": "Preorder Traversal",
          "raw": "D) Preorder Traversal"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "BFS level-by-level explore karta hai, isliye unweighted graph mein source se kisi bhi target tak pehli baar pahunchne wala path guaranteed shortest path hota hai.",
      "trap": "DFS goes deep and does NOT find the shortest path in unweighted graphs."
    },
    {
      "id": 189,
      "originalNum": 189,
      "sectionId": 11,
      "sectionTitle": "Graph Theory & Traversals",
      "question": "What is the time complexity of BFS or DFS on a graph represented using an Adjacency List?",
      "rawQuestion": "Q189. What is the time complexity of BFS or DFS on a graph represented using an Adjacency List?",
      "options": [
        {
          "key": "A",
          "text": "O(V^2)",
          "raw": "A) O(V^2)"
        },
        {
          "key": "B",
          "text": "O(V + E)",
          "raw": "B) O(V + E)"
        },
        {
          "key": "C",
          "text": "O(V * E)",
          "raw": "C) O(V * E)"
        },
        {
          "key": "D",
          "text": "O(log V)",
          "raw": "D) O(log V)"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Har vertex ek baar visit hota hai (O(V)) aur har edge Adjacency List mein traverse hoti hai (O(E)). Total time: O(V + E).",
      "trap": "If using Adjacency Matrix, the time complexity is O(V^2)."
    },
    {
      "id": 190,
      "originalNum": 190,
      "sectionId": 11,
      "sectionTitle": "Graph Theory & Traversals",
      "question": "According to Euler's formula for connected planar graphs, the relationship between vertices (V), edges (E), and faces/regions (F) is:",
      "rawQuestion": "Q190. According to Euler's formula for connected planar graphs, the relationship between vertices (V), edges (E), and faces/regions (F) is:",
      "options": [
        {
          "key": "A",
          "text": "V - E + F = 2",
          "raw": "A) V - E + F = 2"
        },
        {
          "key": "B",
          "text": "V + E - F = 2",
          "raw": "B) V + E - F = 2"
        },
        {
          "key": "C",
          "text": "V - E - F = 2",
          "raw": "C) V - E - F = 2"
        },
        {
          "key": "D",
          "text": "V + E + F = 2",
          "raw": "D) V + E + F = 2"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "Euler's Planar Graph Formula: V - E + F = 2.",
      "trap": "Remember the signs: V (positive), E (negative), F (positive): V - E + F = 2."
    },
    {
      "id": 191,
      "originalNum": 191,
      "sectionId": 11,
      "sectionTitle": "Graph Theory & Traversals",
      "question": "In a directed graph, if node 4 has 3 incoming edges and 3 outgoing edges, what are its in-degree, out-degree, and total degree?",
      "rawQuestion": "Q191. In a directed graph, if node 4 has 3 incoming edges and 3 outgoing edges, what are its in-degree, out-degree, and total degree?",
      "options": [
        {
          "key": "A",
          "text": "In-degree = 3, Out-degree = 6, Total = 9",
          "raw": "A) In-degree = 3, Out-degree = 6, Total = 9"
        },
        {
          "key": "B",
          "text": "In-degree = 3, Out-degree = 3, Total degree = 6",
          "raw": "B) In-degree = 3, Out-degree = 3, Total degree = 6"
        },
        {
          "key": "C",
          "text": "In-degree = 6, Out-degree = 3, Total = 9",
          "raw": "C) In-degree = 6, Out-degree = 3, Total = 9"
        },
        {
          "key": "D",
          "text": "In-degree = 6, Out-degree = 6, Total = 12",
          "raw": "D) In-degree = 6, Out-degree = 6, Total = 12"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "In-degree = incoming edges = 3. Out-degree = outgoing edges = 3. Total degree = In-degree + Out-degree = 6. (Note: Original course slide had a typo stating outdegree 6).",
      "trap": "Do not confuse total degree (6) with outdegree (3)."
    },
    {
      "id": 192,
      "originalNum": 192,
      "sectionId": 11,
      "sectionTitle": "Graph Theory & Traversals",
      "question": "What is the chromatic number of a complete graph Kn with n vertices?",
      "rawQuestion": "Q192. What is the chromatic number of a complete graph Kn with n vertices?",
      "options": [
        {
          "key": "A",
          "text": "1",
          "raw": "A) 1"
        },
        {
          "key": "B",
          "text": "2",
          "raw": "B) 2"
        },
        {
          "key": "C",
          "text": "n",
          "raw": "C) n"
        },
        {
          "key": "D",
          "text": "n - 1",
          "raw": "D) n - 1"
        }
      ],
      "correctAnswer": "C",
      "difficulty": "Medium",
      "explanation": "Kn mein har vertex har doosre vertex se adjacent hota hai. Isliye kisi bhi do vertices ko same color nahi mil sakta. Hence, chromatic number = n colors.",
      "trap": "Every vertex in Kn requires a distinct unique color."
    },
    {
      "id": 193,
      "originalNum": 193,
      "sectionId": 11,
      "sectionTitle": "Graph Theory & Traversals",
      "question": "A bipartite graph can be colored using how many minimum colors?",
      "rawQuestion": "Q193. A bipartite graph can be colored using how many minimum colors?",
      "options": [
        {
          "key": "A",
          "text": "1",
          "raw": "A) 1"
        },
        {
          "key": "B",
          "text": "2",
          "raw": "B) 2"
        },
        {
          "key": "C",
          "text": "3",
          "raw": "C) 3"
        },
        {
          "key": "D",
          "text": "4",
          "raw": "D) 4"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Bipartite graph ke vertices do disjoint sets mein divide hote hain aur edges sirf ek set se doosre set ke beech hoti hain. Set 1 ko color A aur Set 2 ko color B de sakte hain. Chromatic number = 2.",
      "trap": "A graph is bipartite if and only if it has no odd-length cycles and can be 2-colored."
    },
    {
      "id": 194,
      "originalNum": 194,
      "sectionId": 11,
      "sectionTitle": "Graph Theory & Traversals",
      "question": "In an undirected graph with 10 vertices and 15 edges, what is the sum of degrees of all vertices?",
      "rawQuestion": "Q194. In an undirected graph with 10 vertices and 15 edges, what is the sum of degrees of all vertices?",
      "options": [
        {
          "key": "A",
          "text": "15",
          "raw": "A) 15"
        },
        {
          "key": "B",
          "text": "30",
          "raw": "B) 30"
        },
        {
          "key": "C",
          "text": "25",
          "raw": "C) 25"
        },
        {
          "key": "D",
          "text": "45",
          "raw": "D) 45"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "By Handshaking Lemma: Sum deg(v) = 2 * |E| = 2 * 15 = 30.",
      "trap": "Number of vertices (10) is irrelevant here; sum is strictly 2 * E."
    },
    {
      "id": 195,
      "originalNum": 195,
      "sectionId": 11,
      "sectionTitle": "Graph Theory & Traversals",
      "question": "What is a Hamiltonian Cycle in a graph?",
      "rawQuestion": "Q195. What is a Hamiltonian Cycle in a graph?",
      "options": [
        {
          "key": "A",
          "text": "A cycle that visits every edge exactly once",
          "raw": "A) A cycle that visits every edge exactly once"
        },
        {
          "key": "B",
          "text": "A closed loop that visits every VERTEX exactly once and returns to starting vertex",
          "raw": "B) A closed loop that visits every VERTEX exactly once and returns to starting vertex"
        },
        {
          "key": "C",
          "text": "A tree with no leaves",
          "raw": "C) A tree with no leaves"
        },
        {
          "key": "D",
          "text": "A path of length 2",
          "raw": "D) A path of length 2"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Eulerian visits every EDGE once; Hamiltonian visits every VERTEX once.",
      "trap": "Eulerian = Edges; Hamiltonian = Vertices."
    },
    {
      "id": 196,
      "originalNum": 196,
      "sectionId": 11,
      "sectionTitle": "Graph Theory & Traversals",
      "question": "What is a Spanning Tree of a connected undirected graph G with V vertices?",
      "rawQuestion": "Q196. What is a Spanning Tree of a connected undirected graph G with V vertices?",
      "options": [
        {
          "key": "A",
          "text": "A subgraph that connects all V vertices and has exactly V - 1 edges with no cycles",
          "raw": "A) A subgraph that connects all V vertices and has exactly V - 1 edges with no cycles"
        },
        {
          "key": "B",
          "text": "A tree with V edges",
          "raw": "B) A tree with V edges"
        },
        {
          "key": "C",
          "text": "The complete graph",
          "raw": "C) The complete graph"
        },
        {
          "key": "D",
          "text": "A disconnected subgraph",
          "raw": "D) A disconnected subgraph"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "Spanning tree graph ke sabhi V vertices ko bina kisi cycle ke connect karta hai, containing exactly V - 1 edges.",
      "trap": "Number of edges in any spanning tree of V vertices is strictly V - 1."
    },
    {
      "id": 197,
      "originalNum": 197,
      "sectionId": 11,
      "sectionTitle": "Graph Theory & Traversals",
      "question": "Which algorithm is used to find the Minimum Spanning Tree (MST) of a weighted graph using a greedy edge-by-edge approach with cycle checking?",
      "rawQuestion": "Q197. Which algorithm is used to find the Minimum Spanning Tree (MST) of a weighted graph using a greedy edge-by-edge approach with cycle checking?",
      "options": [
        {
          "key": "A",
          "text": "Kruskal's Algorithm (using Disjoint Set Union)",
          "raw": "A) Kruskal's Algorithm (using Disjoint Set Union)"
        },
        {
          "key": "B",
          "text": "Dijkstra's Algorithm",
          "raw": "B) Dijkstra's Algorithm"
        },
        {
          "key": "C",
          "text": "Floyd-Warshall",
          "raw": "C) Floyd-Warshall"
        },
        {
          "key": "D",
          "text": "Bellman-Ford",
          "raw": "D) Bellman-Ford"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Medium",
      "explanation": "Kruskal's algorithm edges ko weight ke ascending order mein sort karta hai aur cycle avoid karte hue MST banata hai (using Union-Find). Time: O(E log E).",
      "trap": "Dijkstra finds Single Source Shortest Path, not MST."
    },
    {
      "id": 198,
      "originalNum": 198,
      "sectionId": 11,
      "sectionTitle": "Graph Theory & Traversals",
      "question": "What is the maximum number of edges in a connected planar simple graph with V >= 3 vertices?",
      "rawQuestion": "Q198. What is the maximum number of edges in a connected planar simple graph with V >= 3 vertices?",
      "options": [
        {
          "key": "A",
          "text": "3V - 6",
          "raw": "A) 3V - 6"
        },
        {
          "key": "B",
          "text": "2V - 4",
          "raw": "B) 2V - 4"
        },
        {
          "key": "C",
          "text": "V(V-1)/2",
          "raw": "C) V(V-1)/2"
        },
        {
          "key": "D",
          "text": "3V",
          "raw": "D) 3V"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Difficult",
      "explanation": "Planar graph theorem: Har face kam se kam 3 edges se bound hota hai (2E >= 3F). Euler formula V - E + F = 2 mein substitute karne par: E <= 3V - 6.",
      "trap": "If the planar graph is bipartite (no triangles, 2E >= 4F), E <= 2V - 4."
    },
    {
      "id": 199,
      "originalNum": 199,
      "sectionId": 11,
      "sectionTitle": "Graph Theory & Traversals",
      "question": "What is a Cut Vertex (Articulation Point) in a graph?",
      "rawQuestion": "Q199. What is a Cut Vertex (Articulation Point) in a graph?",
      "options": [
        {
          "key": "A",
          "text": "A vertex with degree 0",
          "raw": "A) A vertex with degree 0"
        },
        {
          "key": "B",
          "text": "A vertex whose removal increases the number of connected components (disconnects the graph)",
          "raw": "B) A vertex whose removal increases the number of connected components (disconnects the graph)"
        },
        {
          "key": "C",
          "text": "A leaf node",
          "raw": "C) A leaf node"
        },
        {
          "key": "D",
          "text": "The root of a tree",
          "raw": "D) The root of a tree"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "Articulation point woh critical vertex hota hai jisko remove karne par graph disconnected ho jata hai. Discovered via DFS in O(V + E).",
      "trap": "Bridge is the equivalent concept for an EDGE whose removal disconnects the graph."
    },
    {
      "id": 200,
      "originalNum": 200,
      "sectionId": 11,
      "sectionTitle": "Graph Theory & Traversals",
      "question": "Topological Sort can only be performed on which type of graph?",
      "rawQuestion": "Q200. Topological Sort can only be performed on which type of graph?",
      "options": [
        {
          "key": "A",
          "text": "Undirected Graphs",
          "raw": "A) Undirected Graphs"
        },
        {
          "key": "B",
          "text": "Directed Acyclic Graphs (DAG)",
          "raw": "B) Directed Acyclic Graphs (DAG)"
        },
        {
          "key": "C",
          "text": "Graphs with negative cycles",
          "raw": "C) Graphs with negative cycles"
        },
        {
          "key": "D",
          "text": "Complete Graphs Kn",
          "raw": "D) Complete Graphs Kn"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Topological sort linear ordering deta hai jisme har directed edge u -> v ke liye u hamesha v se pehle aata hai. Yeh sirf DAGs par possible hai.",
      "trap": "If the graph has a directed cycle, topological sort is impossible."
    },
    {
      "id": 201,
      "originalNum": 201,
      "sectionId": 11,
      "sectionTitle": "Graph Theory & Traversals",
      "question": "What is the time complexity of Dijkstra's algorithm using a Min-Heap (Priority Queue)?",
      "rawQuestion": "Q201. What is the time complexity of Dijkstra's algorithm using a Min-Heap (Priority Queue)?",
      "options": [
        {
          "key": "A",
          "text": "O(V^2)",
          "raw": "A) O(V^2)"
        },
        {
          "key": "B",
          "text": "O((V + E) log V)",
          "raw": "B) O((V + E) log V)"
        },
        {
          "key": "C",
          "text": "O(V * E)",
          "raw": "C) O(V * E)"
        },
        {
          "key": "D",
          "text": "O(V^3)",
          "raw": "D) O(V^3)"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "Min-Heap ke saath Dijkstra Single Source Shortest Path find karta hai in O((V + E) log V) time.",
      "trap": "With simple array it is O(V^2); with binary heap it is O((V + E) log V)."
    },
    {
      "id": 202,
      "originalNum": 202,
      "sectionId": 11,
      "sectionTitle": "Graph Theory & Traversals",
      "question": "An undirected graph is called regular if:",
      "rawQuestion": "Q202. An undirected graph is called regular if:",
      "options": [
        {
          "key": "A",
          "text": "It has no cycles",
          "raw": "A) It has no cycles"
        },
        {
          "key": "B",
          "text": "Every vertex has the exact same degree",
          "raw": "B) Every vertex has the exact same degree"
        },
        {
          "key": "C",
          "text": "It is planar",
          "raw": "C) It is planar"
        },
        {
          "key": "D",
          "text": "It has an even number of vertices",
          "raw": "D) It has an even number of vertices"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "k-regular graph mein har vertex ki degree k hoti hai (e.g. Petersen graph is 3-regular).",
      "trap": "Complete graph Kn is (n-1)-regular."
    },
    {
      "id": 203,
      "originalNum": 203,
      "sectionId": 12,
      "sectionTitle": "Searching & Sorting Algorithms",
      "question": "Which sorting algorithm makes the minimum number of memory swaps (exactly O(n)) in the worst case?",
      "rawQuestion": "Q203. Which sorting algorithm makes the minimum number of memory swaps (exactly O(n)) in the worst case?",
      "options": [
        {
          "key": "A",
          "text": "Bubble Sort",
          "raw": "A) Bubble Sort"
        },
        {
          "key": "B",
          "text": "Selection Sort",
          "raw": "B) Selection Sort"
        },
        {
          "key": "C",
          "text": "Insertion Sort",
          "raw": "C) Insertion Sort"
        },
        {
          "key": "D",
          "text": "Quick Sort",
          "raw": "D) Quick Sort"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "Selection sort har pass mein exactly ek swap karta hai minimum element ko uske position par laane ke liye. Total swaps = n - 1 = O(n). Isliye jab memory writes expensive hon (jaise EEPROM/Flash), Selection Sort prefer hota hai.",
      "trap": "Comparisons are O(n^2), but SWAPS are strictly O(n)!"
    },
    {
      "id": 204,
      "originalNum": 204,
      "sectionId": 12,
      "sectionTitle": "Searching & Sorting Algorithms",
      "question": "What is the worst-case time complexity of Quick Sort, and under what condition does it occur?",
      "rawQuestion": "Q204. What is the worst-case time complexity of Quick Sort, and under what condition does it occur?",
      "options": [
        {
          "key": "A",
          "text": "O(n log n), when array is randomly shuffled",
          "raw": "A) O(n log n), when array is randomly shuffled"
        },
        {
          "key": "B",
          "text": "O(n^2), when array is already sorted and first/last element is picked as pivot",
          "raw": "B) O(n^2), when array is already sorted and first/last element is picked as pivot"
        },
        {
          "key": "C",
          "text": "O(n), when all elements are distinct",
          "raw": "C) O(n), when all elements are distinct"
        },
        {
          "key": "D",
          "text": "O(n log n), when array has duplicates",
          "raw": "D) O(n log n), when array has duplicates"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Jab array already sorted ya reverse-sorted ho aur pehla ya aakhiri element pivot chuna jaye, toh partition completely unbalanced (0 aur n-1) hota hai. Recurrence: T(n) = T(n-1) + O(n) = O(n^2).",
      "trap": "Quick sort is NOT O(n log n) in all cases; its worst case is O(n^2)."
    },
    {
      "id": 205,
      "originalNum": 205,
      "sectionId": 12,
      "sectionTitle": "Searching & Sorting Algorithms",
      "question": "Which of the following sorting algorithms is STABLE and has a worst-case time complexity of O(n log n)?",
      "rawQuestion": "Q205. Which of the following sorting algorithms is STABLE and has a worst-case time complexity of O(n log n)?",
      "options": [
        {
          "key": "A",
          "text": "Quick Sort",
          "raw": "A) Quick Sort"
        },
        {
          "key": "B",
          "text": "Heap Sort",
          "raw": "B) Heap Sort"
        },
        {
          "key": "C",
          "text": "Merge Sort",
          "raw": "C) Merge Sort"
        },
        {
          "key": "D",
          "text": "Selection Sort",
          "raw": "D) Selection Sort"
        }
      ],
      "correctAnswer": "C",
      "difficulty": "Easy",
      "explanation": "Merge Sort guarantees O(n log n) in best, average, and worst cases, and it is STABLE (preserves relative order of equal keys). Heap sort and Quick sort are unstable.",
      "trap": "Heap sort is O(n log n) worst case, but it is UNSTABLE."
    },
    {
      "id": 206,
      "originalNum": 206,
      "sectionId": 12,
      "sectionTitle": "Searching & Sorting Algorithms",
      "question": "What is the best-case time complexity of Insertion Sort, and when does it occur?",
      "rawQuestion": "Q206. What is the best-case time complexity of Insertion Sort, and when does it occur?",
      "options": [
        {
          "key": "A",
          "text": "O(n^2), when array is reverse sorted",
          "raw": "A) O(n^2), when array is reverse sorted"
        },
        {
          "key": "B",
          "text": "O(n), when array is already sorted",
          "raw": "B) O(n), when array is already sorted"
        },
        {
          "key": "C",
          "text": "O(n log n), when array has random order",
          "raw": "C) O(n log n), when array has random order"
        },
        {
          "key": "D",
          "text": "O(1), when array has 10 elements",
          "raw": "D) O(1), when array has 10 elements"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Jab array already sorted hota hai, Insertion Sort har element ko sirf ek comparison ke baad aage badha deta hai (0 inner loop shifts). Total comparisons = n - 1 = O(n).",
      "trap": "Insertion sort is an adaptive sorting algorithm."
    },
    {
      "id": 207,
      "originalNum": 207,
      "sectionId": 12,
      "sectionTitle": "Searching & Sorting Algorithms",
      "question": "How much auxiliary (extra) memory does Merge Sort require to sort an array of size n?",
      "rawQuestion": "Q207. How much auxiliary (extra) memory does Merge Sort require to sort an array of size n?",
      "options": [
        {
          "key": "A",
          "text": "O(1)",
          "raw": "A) O(1)"
        },
        {
          "key": "B",
          "text": "O(log n)",
          "raw": "B) O(log n)"
        },
        {
          "key": "C",
          "text": "O(n)",
          "raw": "C) O(n)"
        },
        {
          "key": "D",
          "text": "O(n^2)",
          "raw": "D) O(n^2)"
        }
      ],
      "correctAnswer": "C",
      "difficulty": "Easy",
      "explanation": "Merge sort ko arrays merge karne ke liye ek temporary array allocate karni padti hai jiska size n hota hai. Auxiliary space = O(n). This makes it an OUT-OF-PLACE sort for arrays.",
      "trap": "Merge sort is in-place for Linked Lists, but out-of-place (O(n) space) for Arrays."
    },
    {
      "id": 208,
      "originalNum": 208,
      "sectionId": 12,
      "sectionTitle": "Searching & Sorting Algorithms",
      "question": "What is the time complexity to build a Binary Max-Heap from an unsorted array of n elements (Build-Heap operation)?",
      "rawQuestion": "Q208. What is the time complexity to build a Binary Max-Heap from an unsorted array of n elements (Build-Heap operation)?",
      "options": [
        {
          "key": "A",
          "text": "O(n log n)",
          "raw": "A) O(n log n)"
        },
        {
          "key": "B",
          "text": "O(n)",
          "raw": "B) O(n)"
        },
        {
          "key": "C",
          "text": "O(n^2)",
          "raw": "C) O(n^2)"
        },
        {
          "key": "D",
          "text": "O(log n)",
          "raw": "D) O(log n)"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "Mathematical analysis of bottom-up heap construction shows that sum of heights over all nodes converges: Sum (n / 2^(h+1)) * O(h) = O(n). Building a heap takes linear O(n) time, NOT O(n log n).",
      "trap": "Inserting elements one by one takes O(n log n), but Build-Heap bottom-up takes strictly O(n)!"
    },
    {
      "id": 209,
      "originalNum": 209,
      "sectionId": 12,
      "sectionTitle": "Searching & Sorting Algorithms",
      "question": "Which sorting algorithm is UNSTABLE among the following?",
      "rawQuestion": "Q209. Which sorting algorithm is UNSTABLE among the following?",
      "options": [
        {
          "key": "A",
          "text": "Bubble Sort",
          "raw": "A) Bubble Sort"
        },
        {
          "key": "B",
          "text": "Insertion Sort",
          "raw": "B) Insertion Sort"
        },
        {
          "key": "C",
          "text": "Selection Sort",
          "raw": "C) Selection Sort"
        },
        {
          "key": "D",
          "text": "Merge Sort",
          "raw": "D) Merge Sort"
        }
      ],
      "correctAnswer": "C",
      "difficulty": "Easy",
      "explanation": "Selection sort long-distance swaps karta hai jo equal keys ke relative order ko change kar deta hai (e.g. sorting [4a, 4b, 2] -> 2 swaps with 4a -> [2, 4b, 4a]).",
      "trap": "Remember the unstable trio: Quick Sort, Heap Sort, Selection Sort."
    },
    {
      "id": 210,
      "originalNum": 210,
      "sectionId": 12,
      "sectionTitle": "Searching & Sorting Algorithms",
      "question": "What is the maximum number of comparisons required to search for an element in a sorted array of 1024 elements using Binary Search?",
      "rawQuestion": "Q210. What is the maximum number of comparisons required to search for an element in a sorted array of 1024 elements using Binary Search?",
      "options": [
        {
          "key": "A",
          "text": "10",
          "raw": "A) 10"
        },
        {
          "key": "B",
          "text": "11",
          "raw": "B) 11"
        },
        {
          "key": "C",
          "text": "1024",
          "raw": "C) 1024"
        },
        {
          "key": "D",
          "text": "512",
          "raw": "D) 512"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "Max comparisons = floor(log2(n)) + 1. For n = 1024: log2(1024) = 10. Maximum comparisons = 10 + 1 = 11 comparisons (in worst case when element is not found or at the leaf).",
      "trap": "log2(1024) is 10, but in worst case (not found) it performs 11 comparisons."
    },
    {
      "id": 211,
      "originalNum": 211,
      "sectionId": 12,
      "sectionTitle": "Searching & Sorting Algorithms",
      "question": "Which sorting algorithm has the best average-case time complexity of O(n + k), where k is the range of input values?",
      "rawQuestion": "Q211. Which sorting algorithm has the best average-case time complexity of O(n + k), where k is the range of input values?",
      "options": [
        {
          "key": "A",
          "text": "Counting Sort",
          "raw": "A) Counting Sort"
        },
        {
          "key": "B",
          "text": "Quick Sort",
          "raw": "B) Quick Sort"
        },
        {
          "key": "C",
          "text": "Heap Sort",
          "raw": "C) Heap Sort"
        },
        {
          "key": "D",
          "text": "Bubble Sort",
          "raw": "D) Bubble Sort"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "Counting sort non-comparison based algorithm hai jo element frequencies count karke O(n + k) time mein sort karta hai.",
      "trap": "It is efficient only when range k is not significantly larger than n."
    },
    {
      "id": 212,
      "originalNum": 212,
      "sectionId": 12,
      "sectionTitle": "Searching & Sorting Algorithms",
      "question": "In Max-Heap, where is the second largest element always located?",
      "rawQuestion": "Q212. In Max-Heap, where is the second largest element always located?",
      "options": [
        {
          "key": "A",
          "text": "At the root",
          "raw": "A) At the root"
        },
        {
          "key": "B",
          "text": "At index 1 or index 2 (children of root)",
          "raw": "B) At index 1 or index 2 (children of root)"
        },
        {
          "key": "C",
          "text": "At any leaf node",
          "raw": "C) At any leaf node"
        },
        {
          "key": "D",
          "text": "At the bottom right",
          "raw": "D) At the bottom right"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "Root contains the largest element. Second largest element can only be one of the immediate children of the root (Level 1, index 1 or 2).",
      "trap": "It cannot be at level 2 because root's children are larger than their respective subtrees."
    },
    {
      "id": 213,
      "originalNum": 213,
      "sectionId": 12,
      "sectionTitle": "Searching & Sorting Algorithms",
      "question": "What is an In-Place sorting algorithm?",
      "rawQuestion": "Q213. What is an In-Place sorting algorithm?",
      "options": [
        {
          "key": "A",
          "text": "An algorithm that requires no CPU registers",
          "raw": "A) An algorithm that requires no CPU registers"
        },
        {
          "key": "B",
          "text": "An algorithm that requires O(1) or O(log n) auxiliary space beyond the input array",
          "raw": "B) An algorithm that requires O(1) or O(log n) auxiliary space beyond the input array"
        },
        {
          "key": "C",
          "text": "An algorithm that sorts in O(n) time",
          "raw": "C) An algorithm that sorts in O(n) time"
        },
        {
          "key": "D",
          "text": "An algorithm that does not modify the original array",
          "raw": "D) An algorithm that does not modify the original array"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "In-place sorting algorithm input array ke andar hi elements ko rearrange karta hai and requires negligible extra space (O(1) auxiliary memory).",
      "trap": "Merge sort is out-of-place because it needs O(n) auxiliary space."
    },
    {
      "id": 214,
      "originalNum": 214,
      "sectionId": 12,
      "sectionTitle": "Searching & Sorting Algorithms",
      "question": "Radix Sort uses which underlying stable sorting algorithm to sort keys digit by digit?",
      "rawQuestion": "Q214. Radix Sort uses which underlying stable sorting algorithm to sort keys digit by digit?",
      "options": [
        {
          "key": "A",
          "text": "Counting Sort",
          "raw": "A) Counting Sort"
        },
        {
          "key": "B",
          "text": "Quick Sort",
          "raw": "B) Quick Sort"
        },
        {
          "key": "C",
          "text": "Heap Sort",
          "raw": "C) Heap Sort"
        },
        {
          "key": "D",
          "text": "Selection Sort",
          "raw": "D) Selection Sort"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "Radix sort least significant digit (LSD) se most significant digit tak sort karta hai. Digit sorting ke liye Counting Sort use hota hai kyunki digits 0..9 limited range ki hoti hain aur Counting Sort stable hai.",
      "trap": "Radix sort requires a STABLE subroutine; unstable sort will destroy previous digit ordering."
    },
    {
      "id": 215,
      "originalNum": 215,
      "sectionId": 12,
      "sectionTitle": "Searching & Sorting Algorithms",
      "question": "If an array is already sorted, which algorithm will perform the MAXIMUM number of comparisons?",
      "rawQuestion": "Q215. If an array is already sorted, which algorithm will perform the MAXIMUM number of comparisons?",
      "options": [
        {
          "key": "A",
          "text": "Insertion Sort",
          "raw": "A) Insertion Sort"
        },
        {
          "key": "B",
          "text": "Selection Sort",
          "raw": "B) Selection Sort"
        },
        {
          "key": "C",
          "text": "Bubble Sort with flag",
          "raw": "C) Bubble Sort with flag"
        },
        {
          "key": "D",
          "text": "Binary Search",
          "raw": "D) Binary Search"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "Selection sort input order check nahi karta; woh hamesha poore unsorted part ko scan karta hai: exactly n(n-1)/2 comparisons in ALL cases! Insertion sort and Bubble sort with flag will only make n-1 comparisons.",
      "trap": "Selection sort is NOT adaptive: it works equally hard on sorted data!"
    },
    {
      "id": 216,
      "originalNum": 216,
      "sectionId": 12,
      "sectionTitle": "Searching & Sorting Algorithms",
      "question": "What is the recurrence relation for the best-case of Quick Sort with equal partitioning?",
      "rawQuestion": "Q216. What is the recurrence relation for the best-case of Quick Sort with equal partitioning?",
      "options": [
        {
          "key": "A",
          "text": "T(n) = 2T(n/2) + O(n)",
          "raw": "A) T(n) = 2T(n/2) + O(n)"
        },
        {
          "key": "B",
          "text": "T(n) = T(n - 1) + O(n)",
          "raw": "B) T(n) = T(n - 1) + O(n)"
        },
        {
          "key": "C",
          "text": "T(n) = 2T(n/2) + O(1)",
          "raw": "C) T(n) = 2T(n/2) + O(1)"
        },
        {
          "key": "D",
          "text": "T(n) = T(n/2) + O(1)",
          "raw": "D) T(n) = T(n/2) + O(1)"
        }
      ],
      "correctAnswer": "A",
      "difficulty": "Easy",
      "explanation": "Best case partition array ko do equal halves (n/2 aur n/2) mein baant ta hai with O(n) partition work: T(n) = 2T(n/2) + O(n) = O(n log n).",
      "trap": "Worst case recurrence is T(n) = T(n-1) + O(n)."
    },
    {
      "id": 217,
      "originalNum": 217,
      "sectionId": 12,
      "sectionTitle": "Searching & Sorting Algorithms",
      "question": "What is the time complexity of Heapify operation on a binary heap of size n?",
      "rawQuestion": "Q217. What is the time complexity of Heapify operation on a binary heap of size n?",
      "options": [
        {
          "key": "A",
          "text": "O(1)",
          "raw": "A) O(1)"
        },
        {
          "key": "B",
          "text": "O(log n)",
          "raw": "B) O(log n)"
        },
        {
          "key": "C",
          "text": "O(n)",
          "raw": "C) O(n)"
        },
        {
          "key": "D",
          "text": "O(n log n)",
          "raw": "D) O(n log n)"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Easy",
      "explanation": "Heapify node ko downwards push karta hai till leaf. Maximum path length tree height hoti hai: O(log n).",
      "trap": "Build-Heap is O(n), but single Heapify is O(log n)."
    },
    {
      "id": 218,
      "originalNum": 218,
      "sectionId": 12,
      "sectionTitle": "Searching & Sorting Algorithms",
      "question": "What is the lower bound on the number of comparisons for ANY comparison-based sorting algorithm in the worst case?",
      "rawQuestion": "Q218. What is the lower bound on the number of comparisons for ANY comparison-based sorting algorithm in the worst case?",
      "options": [
        {
          "key": "A",
          "text": "Omega(n)",
          "raw": "A) Omega(n)"
        },
        {
          "key": "B",
          "text": "Omega(n log n)",
          "raw": "B) Omega(n log n)"
        },
        {
          "key": "C",
          "text": "Omega(n^2)",
          "raw": "C) Omega(n^2)"
        },
        {
          "key": "D",
          "text": "Omega(log n)",
          "raw": "D) Omega(log n)"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "Decision tree model theorem: An n-element array has n! permutations. Decision tree height must be at least log2(n!) = Omega(n log n). No comparison-based sort can beat Omega(n log n) worst case.",
      "trap": "Non-comparison sorts (Counting, Radix) can achieve O(n) because they do not use comparisons."
    },
    {
      "id": 219,
      "originalNum": 219,
      "sectionId": 12,
      "sectionTitle": "Searching & Sorting Algorithms",
      "question": "In an array representation of a binary heap with 0-based indexing, where is the right child of element at index i?",
      "rawQuestion": "Q219. In an array representation of a binary heap with 0-based indexing, where is the right child of element at index i?",
      "options": [
        {
          "key": "A",
          "text": "2 * i",
          "raw": "A) 2 * i"
        },
        {
          "key": "B",
          "text": "2 * i + 1",
          "raw": "B) 2 * i + 1"
        },
        {
          "key": "C",
          "text": "2 * i + 2",
          "raw": "C) 2 * i + 2"
        },
        {
          "key": "D",
          "text": "floor((i - 1) / 2)",
          "raw": "D) floor((i - 1) / 2)"
        }
      ],
      "correctAnswer": "C",
      "difficulty": "Easy",
      "explanation": "In 0-based indexing: Left child = 2i + 1, Right child = 2i + 2, Parent = floor((i - 1) / 2).",
      "trap": "In 1-based indexing, right child is 2i + 1. In 0-based indexing, it is 2i + 2."
    },
    {
      "id": 220,
      "originalNum": 220,
      "sectionId": 12,
      "sectionTitle": "Searching & Sorting Algorithms",
      "question": "Which algorithm is best suited for sorting a linked list efficiently without random access?",
      "rawQuestion": "Q220. Which algorithm is best suited for sorting a linked list efficiently without random access?",
      "options": [
        {
          "key": "A",
          "text": "Quick Sort",
          "raw": "A) Quick Sort"
        },
        {
          "key": "B",
          "text": "Merge Sort",
          "raw": "B) Merge Sort"
        },
        {
          "key": "C",
          "text": "Heap Sort",
          "raw": "C) Heap Sort"
        },
        {
          "key": "D",
          "text": "Binary Search",
          "raw": "D) Binary Search"
        }
      ],
      "correctAnswer": "B",
      "difficulty": "Medium",
      "explanation": "Merge sort does not require random access (it splits list using slow/fast pointers in O(n) and merges sequentially in O(n)), and can be done IN-PLACE on linked lists without extra array allocation. Ideal for Linked Lists!",
      "trap": "Quick sort and Heap sort require random indexing and are inefficient for linked lists."
    }
  ]
};
