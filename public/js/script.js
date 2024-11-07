(function () {
  let a;
  const b = async () => {
    try {
      const c =
        window.document.currentScript?.getAttribute("data-domain") ??
        document
          .querySelector("script[data-domain]")
          ?.getAttribute("data-domain");
      const d = `https://api.popupr.com/domain-messages?domain=${c}`;
      const e = await fetch(d);
      const { dd } = await e.json();
      console.log(dd);
      if (dd) {
        if (dd && dd.messages.length > 0) h(dd);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const i = async () => {
    const j = "https://popupr.com/css/style.css";
    const k = await fetch(j);
    const l = await k.text();
    const m = document.createElement("style");
    m.innerHTML = l;
    document.head.appendChild(m);
  };

  const n = (o, p) => {
    console.log(p);
    if (p > 1) {
      document
        .getElementById(`popup-message-${p - 1}`)
        ?.classList.replace("animate-slideIn", "animate-appearFromRight");
    }
    const q = document.createElement("div");
    q.className = `popup-message animate-slideIn`;
    q.id = `popup-message-${p}`;
    q.innerHTML = `
      <div class="popup-message-image">
        <img src="${o.image}" alt="${o.title}" loading="lazy" decoding="async">
      </div>
      <div class="popup-message-content">
        <h2>${o.title}</h2>
        <p>${o.message}</p>
      </div>
      <div class="popup-times">
        <p class="text-sm text-gray-600">${o.time}</p>
      </div>
    `;
    a.appendChild(q);
  };

  const r = () => {
    a.firstElementChild?.remove();
  };

  const h = ({ hide, messages, send, start }) => {
    const s = document.createElement("div");
    s.classList.add("popup-container");
    a = document.createElement("div");
    a.classList.add("popup-messages");
    s.appendChild(a);
    const t = () => {
      let u = 0;
      const v = setInterval(() => {
        if (u < messages.length) {
          const w = messages[u++];
          n(w, u);
          setTimeout(() => {
            r();
          }, hide);
        } else {
          clearInterval(v);
        }
      }, send);
    };
    const x = () => {
      const y = (z = 0) => {
        n(messages[z], z);
        setTimeout(() => {
          r();
          setTimeout(() => y(z + 1), 100);
        }, hide);
      };
      y();
    };

    i();
    setTimeout(() => {
      if (window.innerWidth <= 768) {
        x();
      } else {
        t();
      }
    }, start);
    document.body.appendChild(s);
  };

  window.addEventListener("load", b);
})();
