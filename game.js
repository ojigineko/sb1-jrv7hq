const gameData = {
    currentScene: 0,
    playerStats: {
        charm: 50,
        intelligence: 50,
        sociability: 50
    },
    scenes: [
        {
            character: "ナレーター",
            dialogue: "春、桜が舞う中、HARUKI君は新しい学校生活をスタートさせました。",
            background: "https://picsum.photos/800/600?random=1",
            characterImage: "",
            choices: []
        },
        {
            character: "HARUKI",
            dialogue: "よし、新しい学校生活だ。頑張るぞ！",
            background: "https://picsum.photos/800/600?random=2",
            characterImage: "https://pbs.twimg.com/profile_images/1840394037406343168/NANyxYfx_400x400.jpg",
            choices: [
                { text: "教室に向かう", nextScene: 2, effect: { sociability: 5 } },
                { text: "校庭を散策する", nextScene: 3, effect: { charm: 5 } }
            ]
        },
        {
            character: "クラスメイト",
            dialogue: "あ、君が新入生のHARUKIくんだね。よろしく！",
            background: "https://picsum.photos/800/600?random=4",
            characterImage: "https://picsum.photos/300/400?random=5",
            choices: [
                { text: "明るく挨拶する", nextScene: 4, effect: { sociability: 10 } },
                { text: "控えめに挨拶する", nextScene: 5, effect: { intelligence: 5 } }
            ]
        },
        {
            character: "ナレーター",
            dialogue: "HARUKIは校庭で桜の木の下に立ち、新しい学校生活への期待に胸を膨らませました。",
            background: "https://picsum.photos/800/600?random=6",
            characterImage: "https://pbs.twimg.com/profile_images/1840394037406343168/NANyxYfx_400x400.jpg",
            choices: [
                { text: "教室に戻る", nextScene: 2, effect: { sociability: 5 } }
            ]
        },
        {
            character: "HARUKI",
            dialogue: "よろしく！これからよろしくお願いします！",
            background: "https://picsum.photos/800/600?random=8",
            characterImage: "https://pbs.twimg.com/profile_images/1840394037406343168/NANyxYfx_400x400.jpg",
            choices: [
                { text: "クラスメイトと仲良くなる", nextScene: 6, effect: { sociability: 15 } },
                { text: "一人で過ごす", nextScene: 7, effect: { intelligence: 10 } }
            ]
        },
        {
            character: "HARUKI",
            dialogue: "あ、はい。よろしくお願いします。",
            background: "https://picsum.photos/800/600?random=10",
            characterImage: "https://pbs.twimg.com/profile_images/1840394037406343168/NANyxYfx_400x400.jpg",
            choices: [
                { text: "クラスメイトと仲良くなる", nextScene: 6, effect: { sociability: 10 } },
                { text: "一人で過ごす", nextScene: 7, effect: { intelligence: 15 } }
            ]
        },
        {
            character: "ナレーター",
            dialogue: "HARUKIはクラスメイトと積極的に交流し、多くの友人ができました。",
            background: "https://picsum.photos/800/600?random=12",
            characterImage: "",
            choices: [
                { text: "次へ", nextScene: 8, effect: { charm: 10 } }
            ]
        },
        {
            character: "ナレーター",
            dialogue: "HARUKIは一人で過ごすことが多く、クラスメイトとの交流が少なくなりました。",
            background: "https://picsum.photos/800/600?random=13",
            characterImage: "",
            choices: [
                { text: "次へ", nextScene: 9, effect: { intelligence: 20 } }
            ]
        },
        {
            character: "ナレーター",
            dialogue: "時が経ち、HARUKIは素敵な彼女ができました。二人の関係は順調に進展しています。",
            background: "https://picsum.photos/800/600?random=14",
            characterImage: "https://pbs.twimg.com/profile_images/1840394037406343168/NANyxYfx_400x400.jpg",
            choices: [
                { text: "エンディングへ", nextScene: 10, effect: { charm: 20 } }
            ]
        },
        {
            character: "ナレーター",
            dialogue: "時が経ちましたが、HARUKIは彼女ができずに童貞のまま過ごしています。",
            background: "https://picsum.photos/800/600?random=16",
            characterImage: "https://pbs.twimg.com/profile_images/1840394037406343168/NANyxYfx_400x400.jpg",
            choices: [
                { text: "エンディングへ", nextScene: 11, effect: {} }
            ]
        },
        {
            character: "ナレーター",
            dialogue: "ハッピーエンド：HARUKIは素敵な彼女と幸せな関係を築き、充実した学園生活を送りました。",
            background: "https://picsum.photos/800/600?random=18",
            characterImage: "https://example.com/kiss_image.jpg",
            choices: []
        },
        {
            character: "ナレーター",
            dialogue: "バッドエンド：HARUKIは彼女ができずに童貞のまま学園生活を終えました。",
            background: "https://picsum.photos/800/600?random=19",
            characterImage: "https://pbs.twimg.com/profile_images/1840394037406343168/NANyxYfx_400x400.jpg",
            choices: []
        }
    ]
};

const characterNameElement = document.getElementById("character-name");
const dialogueTextElement = document.getElementById("dialogue-text");
const choicesElement = document.getElementById("choices");
const sceneImageElement = document.getElementById("scene-image");
const characterImageElement = document.getElementById("character-image");
const debugElement = document.getElementById("debug-info");

function updatePlayerStats(effect) {
    for (const [stat, value] of Object.entries(effect)) {
        gameData.playerStats[stat] += value;
        gameData.playerStats[stat] = Math.max(0, Math.min(100, gameData.playerStats[stat]));
    }
}

function displayScene(sceneIndex) {
    const scene = gameData.scenes[sceneIndex];
    characterNameElement.textContent = scene.character;
    dialogueTextElement.textContent = scene.dialogue;
    
    sceneImageElement.style.backgroundImage = `url('${scene.background}')`;
    
    if (scene.characterImage) {
        characterImageElement.style.backgroundImage = `url('${scene.characterImage}')`;
        characterImageElement.style.display = 'block';
    } else {
        characterImageElement.style.backgroundImage = 'none';
        characterImageElement.style.display = 'none';
    }
    
    choicesElement.innerHTML = "";
    scene.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.addEventListener("click", () => {
            updatePlayerStats(choice.effect);
            displayScene(choice.nextScene);
        });
        choicesElement.appendChild(button);

        const debugInfo = document.createElement("p");
        debugInfo.textContent = `Debug: ${JSON.stringify(choice.effect)}`;
        debugInfo.style.fontSize = "12px";
        debugInfo.style.color = "#666";
        choicesElement.appendChild(debugInfo);
    });

    if (scene.choices.length === 0 && sceneIndex < gameData.scenes.length - 1) {
        const nextButton = document.createElement("button");
        nextButton.textContent = "次へ";
        nextButton.addEventListener("click", () => displayScene(sceneIndex + 1));
        choicesElement.appendChild(nextButton);
    }

    debugElement.textContent = `Debug: ${JSON.stringify(gameData.playerStats)}`;
}

displayScene(0);