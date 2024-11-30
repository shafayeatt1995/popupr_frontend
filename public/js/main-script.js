(function () {
  let a;
  const cleanDomain = (domain) =>
    domain.startsWith("www.") ? domain.slice(4) : domain;

  const b = async () => {
    try {
      const c =
        document.currentScript?.getAttribute("data-domain") ??
        document
          .querySelector("script[data-domain]")
          ?.getAttribute("data-domain");

      const locationHostname =
        cleanDomain(location.hostname) +
        (location.pathname.length > 1 ? location.pathname : "");
      if (c === locationHostname) {
        const d = `https://api.popupr.com/domain-messages?domain=${c}`;
        const e = await fetch(d);
        const { dd } = await e.json();
        if (dd) {
          if (dd && dd.messages.length > 0) h(dd);
        }
      }
    } catch (err) {}
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
    if (p > 1) {
      document
        .getElementById(`popupr-message-${p - 1}`)
        ?.classList.replace("animate-slideIn", "animate-appearFromRight");
    }
    const q = document.createElement("div");
    q.className = `popupr-message animate-slideIn`;
    q.id = `popupr-message-${p}`;
    q.innerHTML = `
      <div class="popupr-message-image">
        <img src="${o.image}" alt="${o.title}">
      </div>
      <div class="popupr-message-content">
        <h2>${o.title}</h2>
        <p>${o.message}</p>
      </div>
      <div class="popupr-times">
        <p class="text-sm text-gray-600">${o.time}</p>
      </div>
    `;
    a.appendChild(q);
  };

  const r = () => {
    a.firstElementChild?.remove();
  };

  const h = ({ hide, messages, send, start }) => {
    const o = [...messages].reverse();
    const s = document.createElement("div");
    s.classList.add("popupr-container");
    a = document.createElement("div");
    a.classList.add("popupr-messages");
    s.appendChild(a);
    const t = () => {
      let u = 0;
      const v = setInterval(() => {
        if (u < o.length) {
          const w = o[u++];
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
        n(o[z], z);
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
