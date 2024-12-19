#JS Project Guides
---
A beginner-to-intermediate JavaScript project/guide generator designed to help you build better projects by focusing more on things like execution order and control flow, as opposed to syntax memorization.
---

Built on OPENAI GPT-4o-2024-08-06 model, structured output. Auto-downloaded PDFs right in your project folder.

![editor_POV.png](https://github.com/adamchain/js-via-first-principles/blob/main/example_output.png)

##Why I Built This
I'm a beginner who started learning to code in November. Early on, I realized that focusing on the "why"—understanding the purpose—rather than just the "how" of implementation helped me learn more effectively.

I initially built this project for myself to reinforce that approach. However, after receiving requests to share it publicly, I decided to publish it here. This is my first repository, and I welcome any feedback or suggestions! Feel free to reach out at achain123@gmail.com.


#Dependencies:
To get started, ensure you have the following installed: 
npm
node
openai
zod
jspdf

#Features
1. Random Project Ideas: Generate step-by-step project guides for beginner-to-intermediate JavaScript projects.
2. Logic-Driven Outlines: Focus on the reasoning behind each component and why it’s needed—minimal code hints for better learning.
3. PDFs: A PDF copy of your guide will be automatically downloaded & stored in whatever folder you are currently in  

#How to use:
//Notes:
//npm install openai zod jspdf fs
//get openAI API key: https://openai.com/index/openai-api/ 
//on line 49, add whatever js concepts you want to practice, so output can include them in the project. Pre-set to "random" as fallback

//if you are unsure how to use:
//    1. download/open VS Code
//    2. create new js file, e.g. "projectMaker.js"
//    3. copy code here, paste it to your new .js file
//    4. on line 22, replace OPENAI_API_KEY with your unqiue key
//    5. open terminal (in VS code, click "toggle panel" button in top right corner, select terminal from bottom panel top nav
//    6. type "node projectMaker.js" (or whatever your new js file is named) then hit enter
//    OUTPUT will be generated in the terminal and PDF & TXT files will be created in whatever folder you are working in

Thank you for exploring my first public program. Whether you’re just starting out like me or not, I hope this tool inspires your next creation! As mentioned, I made this for myself so feedback and suggestions are always welcome.
