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

import OpenAI from "openai";
import { z } from "zod";
import { zodResponseFormat } from "openai/helpers/zod";
import { jsPDF } from "jspdf";
import fs from "fs"; 

// add your API key
const apiKey = 'OPENAI_API_KEY';

if (!apiKey) {
    throw new Error("API key is missing.");
}


if (!apiKey) {
    throw new Error("API key is missing.");
}

const openai = new OpenAI({ apiKey });

const Step = z.object({
    explanation: z.string(),
    output: z.string(),
});

const jsGuide = z.object({
    steps: z.array(Step),
    final_answer: z.string(),
});

//****
    //ADD CONCEPTS TO PRACTICE
    //separate by comma, e.g. "setTimeout, eventListener"
//****
const conceptToPractice = 'random';

// function, async, fetch res, handle output
async function getJsGuide() {
    try {
        const completion = await openai.beta.chat.completions.parse({
            model: "gpt-4o-2024-08-06",
            messages: [
                {
                    role: "system",
                    content: "You are a knowledgeable JavaScript guide. Based on the user's input, create a detailed step-by-step project development guide without including any javascript code, just instructions. For each step, explain the purpose (WHY) and the task (WHAT) clearly, and provide minimal code hints. Highlight the relevant JavaScript components used in each step (e.g., Functions, Arrays, Variables, etc.). Ensure the guidance is beginner-friendly and focused on learning. Lastly, start the final_answer section with a unique project name, followed by a colon:"
                },
                {
                    role: "user",
                    content: `Provide a unique JavaScript project (with ${conceptToPractice} concept(s) included for practice) idea along with a detailed step-by-step implementation guide.`
                },
            ],
            response_format: zodResponseFormat(jsGuide, "math_reasoning"),
        });

        const jsGuideResponse = completion.choices[0].message.parsed;

        console.log("Guide Response:", jsGuideResponse);

        // create project title 
        let projectTitle = jsGuideResponse.final_answer
            ?.split(":")[0] 
            ?.trim() 
            ?.replace(/[^a-zA-Z0-9\s]/g, "") 
            ?.replace(/\s+/g, "_"); 

        // fallback to timestamp
        const uniqueId = projectTitle || `Project_${new Date().toISOString().replace(/[:.]/g, "-")}`;

        // Generate unique filenames
        const responseFileName = `${uniqueId}.txt`;
        const pdfFileName = `${uniqueId}.pdf`;

        const cleanOutput = JSON.stringify(jsGuideResponse, null, 2).replace(/\n+/g, " ");

        // Save as .txt 
        fs.writeFileSync(responseFileName, JSON.stringify(jsGuideResponse, null, 2));
        console.log(`Guide saved to ${responseFileName}`);

        // Create .pdf
        const doc = new jsPDF();
        const responseString = JSON.stringify(jsGuideResponse, null, 2); // format json
        const pageHeight = doc.internal.pageSize.height; // pg height
        let cursorY = 10; // y position start

        const lines = doc.splitTextToSize(responseString, 180); // txt within pg width

        //handling page breaks
        lines.forEach((line) => {
            if (cursorY + 10 > pageHeight) { 
                doc.addPage();
                cursorY = 10;  
            }
            doc.text(line, 10, cursorY);
            cursorY += 10;
        });

        // Save PDF
        doc.save(pdfFileName);
        console.log(`PDF saved as ${pdfFileName}`);

    } catch (error) {
        console.error("Error fetching JavaScript guide:", error);
    }
}

// call 
getJsGuide();
