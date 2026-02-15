function generateScript() {
let topic = document.getElementById("topic").value;

let prompt = `Create a powerful 30-second YouTube Shorts script about ${topic}. Make it emotional, shocking, and informative. Include a strong hook in first 3 seconds.`;

document.getElementById("output").innerText = prompt;
}

function generateScenes() {
let topic = document.getElementById("topic").value;

let scenes = `
Scene 1: Shocking Hook about ${topic}
Scene 2: Explain problem visually
Scene 3: Real life example
Scene 4: Emotional impact
Scene 5: Strong Call to Action
`;

document.getElementById("output").innerText = scenes;
}

function openStock() {
let topic = document.getElementById("topic").value;

window.open(`https://www.pexels.com/search/videos/${topic}/`);
}

function voiceGuide() {
let guide = `
Voice Style:
- Serious tone
- Slow and emotional
- Pause after important words
- Strong ending sentence
`;

document.getElementById("output").innerText = guide;
            }
