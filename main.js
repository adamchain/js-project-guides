import OpenAI from "openai";
import { z } from "zod";
import { zodResponseFormat } from "openai/helpers/zod";
import { jsPDF } from "jspdf"; 
import fs from "fs"; 

const apiKey = 'OPENAI_API_KEY';

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

// function, async, fetch res, handle output
async function getJsGuide() {
    try {
        const completion = await openai.beta.chat.completions.parse({
            model: "gpt-4o-2024-08-06",
            messages: [
                {
                    role: "system",
                    content: "You are a knowledgeable JavaScript guide. Based on the user's input, create a detailed step-by-step project development guide. For each step, explain the purpose (WHY) and the task (WHAT) clearly, and provide minimal code hints. Highlight the relevant JavaScript components used in each step (e.g., Functions, Arrays, Variables, etc.). Ensure the guidance is beginner-friendly and focused on learning."
                },
                {
                    role: "user",
                    content: "Provide a unique JavaScript project idea along with a detailed step-by-step implementation guide."
                },
            ],
            response_format: zodResponseFormat(jsGuide, "math_reasoning"),
        });

        const jsGuideResponse = completion.choices[0].message.parsed;

        console.log("Guide Response:", jsGuideResponse);

        // save as txt file
        const responseFileName = "JavaScript_Guide.txt";
        fs.writeFileSync(responseFileName, JSON.stringify(jsGuideResponse, null, 2));
        console.log(`Guide saved to ${responseFileName}`);

        // create PDF
        const doc = new jsPDF();
        const responseString = JSON.stringify(jsGuideResponse, null, 2); // Format JSON
        const lines = doc.splitTextToSize(responseString, 180); // Wrap text within page width
        doc.text(lines, 10, 10); // Add text to PDF
        const pdfFileName = "JavaScript_Guide.pdf";

        // save PDF
        doc.save(pdfFileName);
        console.log(`PDF saved as ${pdfFileName}`);
    } catch (error) {
        console.error("Error fetching JavaScript guide:", error);
    }
}

// call 
getJsGuide();
