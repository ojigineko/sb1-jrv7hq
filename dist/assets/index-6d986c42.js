(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const c of e)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const c={};return e.integrity&&(c.integrity=e.integrity),e.referrerPolicy&&(c.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?c.credentials="include":e.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(e){if(e.ep)return;e.ep=!0;const c=o(e);fetch(e.href,c)}})();const m={currentScene:0,scenes:[{character:"ナレーター",dialogue:"春、桜が舞う中、HARUKI君は新しい学校生活をスタートさせました。",background:"https://picsum.photos/800/600?random=1",characterImage:"",choices:[]},{character:"HARUKI",dialogue:"よし、新しい学校生活だ。頑張るぞ！",background:"https://picsum.photos/800/600?random=2",characterImage:"https://picsum.photos/300/400?random=3",choices:[{text:"教室に向かう",nextScene:2},{text:"校庭を散策する",nextScene:3}]},{character:"クラスメイト",dialogue:"あ、君が新入生のHARUKIくんだね。よろしく！",background:"https://picsum.photos/800/600?random=4",characterImage:"https://picsum.photos/300/400?random=5",choices:[{text:"明るく挨拶する",nextScene:4},{text:"控えめに挨拶する",nextScene:5}]},{character:"ナレーター",dialogue:"HARUKIは校庭で桜の木の下に立ち、新しい学校生活への期待に胸を膨らませました。",background:"https://picsum.photos/800/600?random=6",characterImage:"https://picsum.photos/300/400?random=7",choices:[{text:"教室に戻る",nextScene:2}]},{character:"HARUKI",dialogue:"よろしく！これからよろしくお願いします！",background:"https://picsum.photos/800/600?random=8",characterImage:"https://picsum.photos/300/400?random=9",choices:[{text:"次へ",nextScene:6}]},{character:"HARUKI",dialogue:"あ、はい。よろしくお願いします。",background:"https://picsum.photos/800/600?random=10",characterImage:"https://picsum.photos/300/400?random=11",choices:[{text:"次へ",nextScene:6}]},{character:"ナレーター",dialogue:"こうしてHARUKIの新しい学園生活が始まりました。",background:"https://picsum.photos/800/600?random=12",characterImage:"",choices:[]}]},u=document.getElementById("character-name"),h=document.getElementById("dialogue-text"),i=document.getElementById("choices"),l=document.getElementById("scene-image"),a=document.getElementById("character-image");function d(r){const t=m.scenes[r];if(u.textContent=t.character,h.textContent=t.dialogue,l.style.backgroundImage=`url('${t.background}')`,t.characterImage?(a.style.backgroundImage=`url('${t.characterImage}')`,a.style.display="block"):(a.style.backgroundImage="none",a.style.display="none"),i.innerHTML="",t.choices.forEach(o=>{const n=document.createElement("button");n.textContent=o.text,n.addEventListener("click",()=>d(o.nextScene)),i.appendChild(n)}),t.choices.length===0&&r<m.scenes.length-1){const o=document.createElement("button");o.textContent="次へ",o.addEventListener("click",()=>d(r+1)),i.appendChild(o)}}d(0);
