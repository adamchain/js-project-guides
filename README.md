# js-project-guides
Beginner-intermediate random Javascript project guide generator
Built on OPENAI API model: gpt-4o-2024-08-06
Structured Output
---
I wrote this for myself but received requests to publish
*My first public repository, criticism very welcome: achain123@gmail.com
---
Dependencies:
npm node openai zod jspdf
---
Features:
1. Generate beginner-intermediate project ideas step-by-step outline
2. Outlines focused on logic/reason & why a particular component is needed, minimal code hints
---
Example {
      "explanation": "For user interaction, such as marking tasks as
completed, you will need to update the task's state. You can add a
'completed' property to each task object in the array and toggle this
value when a task is clicked. Conditional statements help manage these
state changes.",
      "output": "State Management: Task Completion"
    }
-- 
4. Output auto-downloads project outlines as PDF & TXT
   
