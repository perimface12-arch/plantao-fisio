/* Abertura: "Ana Livia – The Game". Ilustração em SVG desenhada à mão, inspirada na foto. */
(function () {
  const AVATAR = `
<svg class="sp-avatar" viewBox="0 0 240 260" role="img" aria-label="Ana Livia em cartoon, de jaleco e estetoscópio">
  <defs>
    <radialGradient id="spbg" cx="50%" cy="40%" r="60%"><stop offset="0" stop-color="#1D5763"/><stop offset="1" stop-color="#0B2329"/></radialGradient>
    <linearGradient id="sphair" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4A2E1E"/><stop offset="1" stop-color="#2B1910"/></linearGradient>
    <linearGradient id="spskin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F8D9C2"/><stop offset="1" stop-color="#EFC3A2"/></linearGradient>
    <linearGradient id="spscrub" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#23B5A8"/><stop offset="1" stop-color="#14857C"/></linearGradient>
    <clipPath id="spclip"><circle cx="120" cy="130" r="118"/></clipPath>
  </defs>
  <circle cx="120" cy="130" r="118" fill="url(#spbg)"/>
  <g clip-path="url(#spclip)">
    <!-- cabelo de trás, longo até os ombros -->
    <g class="sp-hair-back">
      <path d="M62 112c-6-46 22-80 62-80 40 0 66 30 62 78-2 24 6 48 14 66 6 14-2 30-18 30-22 0-30-14-34-30H90c-4 18-14 32-34 32-16 0-22-18-14-32 10-18 22-38 20-64z" fill="url(#sphair)"/>
    </g>
    <!-- pescoço e ombros -->
    <path d="M104 172h32v26c0 8-32 8-32 0z" fill="#E9B896"/>
    <path d="M30 262c4-40 30-62 74-66h32c44 4 70 26 74 66z" fill="url(#spscrub)"/>
    <path d="M104 196l16 28 16-28" fill="#E9B896"/>
    <path d="M104 196l16 28 16-28" fill="none" stroke="#0F6E66" stroke-width="3" stroke-linejoin="round"/>
    <!-- coraçãozinho tatuado na clavícula -->
    <path d="M94 210c-2-3 2-5 3-2 1-3 5-1 3 2l-3 3z" fill="none" stroke="#9C6B57" stroke-width="1"/>
    <!-- estetoscópio -->
    <path d="M84 200c-6 18 2 36 18 40M156 200c6 18-2 36-18 40" fill="none" stroke="#2F3F46" stroke-width="5" stroke-linecap="round"/>
    <path d="M102 240c6 4 30 4 36 0" fill="none" stroke="#2F3F46" stroke-width="5" stroke-linecap="round"/>
    <circle cx="120" cy="246" r="9" fill="#C9D6DA" stroke="#2F3F46" stroke-width="3"/>
    <!-- crachá -->
    <rect x="150" y="222" width="30" height="20" rx="3" fill="#F4F8F9"/><rect x="154" y="227" width="14" height="3" rx="1.5" fill="#23B5A8"/><rect x="154" y="233" width="20" height="2.5" rx="1.2" fill="#9AB"/>
    <!-- rosto -->
    <path d="M78 110c0-34 18-56 42-56s42 22 42 56c0 36-20 66-42 66s-42-30-42-66z" fill="url(#spskin)"/>
    <ellipse cx="78" cy="122" rx="7" ry="11" fill="#EFC3A2"/><ellipse cx="162" cy="122" rx="7" ry="11" fill="#EFC3A2"/>
    <!-- bochechas -->
    <ellipse cx="96" cy="140" rx="10" ry="6" fill="#F2A3A0" opacity=".35"/><ellipse cx="144" cy="140" rx="10" ry="6" fill="#F2A3A0" opacity=".35"/>
    <!-- sobrancelhas arqueadas -->
    <path d="M90 106c6-7 16-9 24-5" fill="none" stroke="#3A2418" stroke-width="4.2" stroke-linecap="round"/>
    <path d="M126 101c8-4 18-2 24 5" fill="none" stroke="#3A2418" stroke-width="4.2" stroke-linecap="round"/>
    <!-- olhos (piscam) -->
    <g class="sp-eyes">
      <path d="M90 113q13-12 26-1M124 112q13-11 26 1" fill="none" stroke="#B07C86" stroke-width="5" opacity=".28" stroke-linecap="round"/>
      <path d="M91 121q12-12 24 0q-12 8-24 0z" fill="#fff"/>
      <path d="M125 121q12-12 24 0q-12 8-24 0z" fill="#fff"/>
      <circle cx="103" cy="120.5" r="5.6" fill="#5B3A22"/><circle cx="137" cy="120.5" r="5.6" fill="#5B3A22"/>
      <circle cx="103" cy="120.5" r="2.6" fill="#1C110A"/><circle cx="137" cy="120.5" r="2.6" fill="#1C110A"/>
      <circle cx="105.2" cy="118.4" r="1.6" fill="#fff"/><circle cx="139.2" cy="118.4" r="1.6" fill="#fff"/>
      <path d="M89 121q14-15 27-1M89 121l-4-4" fill="none" stroke="#1C110A" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M124 120q13-14 27 1M151 121l4-4" fill="none" stroke="#1C110A" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <!-- nariz -->
    <path d="M120 126c-2 8-4 14-1 17 2 1 5 1 7-1" fill="none" stroke="#D49C7E" stroke-width="2" stroke-linecap="round"/>
    <!-- lábios com sorriso -->
    <path d="M104 150q8-4 16-1q8-3 16 1q-16 4-32 0z" fill="#C97479"/>
    <path d="M104 150q16 4 32 0q-5 12-16 12t-16-12z" fill="#D88C90"/>
    <path d="M112 156q8 3 16 0" fill="none" stroke="#fff" stroke-width="1.4" opacity=".45" stroke-linecap="round"/>
    <path d="M102 149q2 2 3 1M138 149q-2 2-3 1" fill="none" stroke="#C48E78" stroke-width="1.4" stroke-linecap="round"/>
    <!-- cabelo da frente: risca lateral, mecha caindo no rosto -->
    <g class="sp-hair-front">
      <path d="M134 50c-30-4-60 14-62 54-1 18 2 30 6 44 2-24 6-40 18-52 14-14 32-20 42-30 8 12 20 22 30 40 4-30-8-52-34-56z" fill="url(#sphair)"/>
      <path d="M140 54c20 10 28 34 24 66 6-10 10-30 4-46-6-14-16-20-28-20z" fill="#3A2418"/>
      <path d="M96 70c10-10 24-14 36-14" fill="none" stroke="#6B4630" stroke-width="2" stroke-linecap="round" opacity=".7"/>
    </g>
  </g>
  <circle cx="120" cy="130" r="118" fill="none" stroke="#38D6F5" stroke-width="3" opacity=".5"/>
</svg>`;

  const css = `
.splash{position:fixed;inset:0;z-index:100;display:grid;place-items:center;overflow:hidden;cursor:pointer;
  background:radial-gradient(80% 50% at 50% 30%,#123A43 0%,#060D10 70%);color:#EEF6F5;
  padding:env(safe-area-inset-top,0px) max(18px,env(safe-area-inset-right,0px)) env(safe-area-inset-bottom,0px) max(18px,env(safe-area-inset-left,0px));
  transition:opacity .5s ease, transform .5s ease}
.splash.out{opacity:0;transform:scale(1.04)}
.sp-in{display:grid;justify-items:center;gap:10px;text-align:center;width:100%;max-width:420px}
.sp-stage{position:relative;width:min(64vw,260px);aspect-ratio:240/260;max-width:100%}
.sp-avatar{width:100%;height:100%;display:block;animation:spPop 1s cubic-bezier(.2,1.4,.4,1) .35s both;filter:drop-shadow(0 18px 40px rgba(56,214,245,.25))}
.sp-ring{position:absolute;inset:-8%;border-radius:50%;border:2px solid rgba(56,214,245,.45);animation:spRing 2.4s ease-out 1.1s infinite}
.sp-ring.b{animation-delay:2.3s}
.sp-eyes{transform-origin:120px 120px;animation:spBlink 4.5s 2s infinite}
.sp-hair-front,.sp-hair-back{transform-origin:120px 60px;animation:spSway 6s ease-in-out 1.4s infinite}
.sp-ecg{width:100%;height:56px;margin-top:-6px}
.sp-ecg path{stroke-dasharray:640;stroke-dashoffset:640;animation:spDraw 1.6s ease-out .2s forwards, spGlow 1.2s ease-in-out 1.8s infinite alternate}
.sp-name{font:800 clamp(38px,11vw,54px)/1 "Plus Jakarta Sans",system-ui,sans-serif;letter-spacing:-.03em;margin:0;color:#fff;text-shadow:0 0 28px rgba(56,214,245,.55)}
.sp-name span{display:inline-block;animation:spLetter .6s cubic-bezier(.2,1.2,.4,1) both}
.sp-game{font:700 clamp(15px,4.4vw,19px)/1 "Barlow Condensed","Arial Narrow",sans-serif;letter-spacing:.55em;padding-left:.55em;color:#FFC857;
  animation:spFade .8s ease 1.9s both;text-shadow:0 0 18px rgba(255,200,87,.5)}
.sp-sub{font:500 11px/1 "IBM Plex Mono",monospace;letter-spacing:.18em;text-transform:uppercase;color:#93AAA8;animation:spFade .8s ease 2.2s both}
.sp-start{margin-top:18px;font:700 16px/1 "Plus Jakarta Sans",system-ui,sans-serif;color:#031A20;padding:16px 28px;border-radius:99px;border:0;
  background:linear-gradient(135deg,#38D6F5,#6E8BFF);box-shadow:0 10px 30px -8px rgba(56,214,245,.7);animation:spFade .6s ease 2.5s both, spBreath 1.8s ease-in-out 3.1s infinite}
@keyframes spPop{from{opacity:0;transform:scale(.4) rotate(-8deg)}}
@keyframes spRing{from{opacity:.9;transform:scale(.85)}to{opacity:0;transform:scale(1.35)}}
@keyframes spBlink{0%,94%,100%{transform:scaleY(1)}97%{transform:scaleY(.1)}}
@keyframes spSway{0%,100%{transform:rotate(0)}50%{transform:rotate(1.2deg)}}
@keyframes spDraw{to{stroke-dashoffset:0}}
@keyframes spGlow{from{filter:drop-shadow(0 0 2px #4BE38A)}to{filter:drop-shadow(0 0 8px #4BE38A)}}
@keyframes spLetter{from{opacity:0;transform:translateY(24px) scale(.8)}}
@keyframes spFade{from{opacity:0;transform:translateY(8px)}}
@keyframes spBreath{50%{transform:scale(1.05)}}
`;
  window.mostrarAbertura = function () {
    return new Promise(res => {
      const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
      const nome = "Ana Livia";
      const d = document.createElement("div");
      d.className = "splash"; d.setAttribute("role", "dialog"); d.setAttribute("aria-label", "Abertura do jogo");
      d.innerHTML = `<div class="sp-in">
        <div class="sp-stage"><span class="sp-ring"></span><span class="sp-ring b"></span>${AVATAR}</div>
        <svg class="sp-ecg" viewBox="0 0 320 56" preserveAspectRatio="none" aria-hidden="true"><path d="M0 34h86l8-4 6 4h18l6-26 10 46 8-30 6 10h18l10-6 10 6h134" fill="none" stroke="#4BE38A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <h1 class="sp-name" aria-label="${nome}">${[...nome].map((ch, i) => `<span style="animation-delay:${1.1 + i * .06}s">${ch === " " ? "&nbsp;" : ch}</span>`).join("")}</h1>
        <div class="sp-game">THE GAME</div>
        <div class="sp-sub">Plantão de fisioterapia hospitalar</div>
        <button class="sp-start" type="button">Toque para começar</button>
      </div>`;
      document.body.appendChild(d);
      const sair = () => {
        d.onclick = null;
        try { window.ac && window.ac(); } catch (e) {}
        d.classList.add("out");
        setTimeout(() => { d.remove(); res(); }, 480);
      };
      d.onclick = sair;
    });
  };
})();
