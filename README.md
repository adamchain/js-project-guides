#JS Project Guides
---
A beginner-to-intermediate JavaScript project/guide generator designed to help you build better projects by focusing more on things like execution order and control flow, as opposed to syntax memorization.
---
[editor_POV.png](https://github.com/adamchain/js-via-first-principles/blob/main/editor_screenshot.png)

Built on OPENAI GPT-4o-2024-08-06 model, structured output.

Why I Built This: I'm a rookie. I started learning to code in November, but quickly developed a personal opinion that focusing on the "why" as opposed to the "how" helped me learn. 
I built this for myself, for the reasons above, but after receiving requests to share it publicly, I decided to publish it.
This is my first repository, so feedback is highly appreciated: achain123@gmail.com.


#Dependencies:
To get started, ensure you have the following installed:
	•	npm
	•	node
	•	openai
	•	zod
	•	jspdf

#Features
1. Random Project Ideas: Generate step-by-step project guides for beginner-to-intermediate JavaScript projects.
2. Logic-Driven Outlines: Focus on the reasoning behind each component and why it’s needed—minimal code hints for better learning.
3. Export Options: Automatically downloads project outlines as PDF and TXT for offline use.

#Sample Output (single step)

{
  "Next": "For user interaction, such as marking tasks as completed, you will need to update the task's state. You can add a 'completed' property to each task object in the array and toggle this value when a task is clicked. Conditional statements help manage these state changes.",
  "output": "State Management: Task Completion"
}

Thank you for exploring my first little program. Whether you’re just starting out like me or not, I hope this tool inspires your next creation! Feedback and suggestions are always welcome.
