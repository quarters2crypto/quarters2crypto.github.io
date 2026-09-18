/* Quarters2Crypto — progressive content loader.
   Every page ships with static fallback markup; these functions replace or
   enhance it only when the corresponding content JSON loads successfully.
   If a fetch fails, the fallback stays visible. No framework, no build step. */

(function () {
  "use strict";

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function fetchJSON(url) {
    return fetch(url).then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    });
  }

  function formatDate(iso) {
    try {
      return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
        year: "numeric", month: "short", day: "numeric", timeZone: "UTC"
      });
    } catch (e) {
      return iso;
    }
  }

  /* ---------- Dispatches ---------- */
  function dispatchCard(post) {
    var card = el("article", "card");
    var meta = el("p", "meta", (post.kind || "Dispatch") + " · " + formatDate(post.date || ""));
    var h3 = el("h3");
    var a = el("a", null, post.title);
    a.href = post.url;
    a.target = "_blank";
    a.rel = "noopener";
    h3.appendChild(a);
    card.appendChild(meta);
    card.appendChild(h3);
    if (post.description) card.appendChild(el("p", null, post.description));
    var link = el("a", "card-link", "Read on Substack →");
    link.href = post.url;
    link.target = "_blank";
    link.rel = "noopener";
    link.setAttribute("aria-label", "Read “" + post.title + "” on Substack");
    card.appendChild(link);
    return card;
  }

  function renderDispatches(data) {
    document.querySelectorAll("[data-dispatches]").forEach(function (host) {
      var limit = parseInt(host.getAttribute("data-dispatches"), 10) || data.posts.length;
      var list = el("div", "card-list");
      data.posts.slice(0, limit).forEach(function (post) {
        list.appendChild(dispatchCard(post));
      });
      host.replaceChildren(list);
    });
  }

  /* ---------- Projects ---------- */
  function projectCard(project) {
    var card = el("article", "card");
    var meta = el("p", "meta");
    meta.appendChild(el("span", "pill pill-" + (project.status || "paused"), project.status || "unknown"));
    meta.appendChild(document.createTextNode("  ·  " + (project.category || "Experiment")));
    var h3 = el("h3", null, project.title);
    card.appendChild(meta);
    card.appendChild(h3);
    if (project.description) card.appendChild(el("p", null, project.description));
    if (project.link) {
      var link = el("a", "card-link", (project.link_label || "Open") + " →");
      link.href = project.link;
      if (/^https?:/.test(project.link)) {
        link.target = "_blank";
        link.rel = "noopener";
      }
      card.appendChild(link);
    }
    return card;
  }

  function renderProjects(data) {
    document.querySelectorAll("[data-projects]").forEach(function (host) {
      var mode = host.getAttribute("data-projects");
      var items = data.projects;
      if (mode === "featured") items = items.filter(function (p) { return p.featured; });
      var grid = el("div", "project-grid");
      items.forEach(function (p) { grid.appendChild(projectCard(p)); });
      host.replaceChildren(grid);
    });
  }

  /* ---------- PHASEONE state ---------- */
  function applyPhaseoneState(site) {
    var cfg = site.nav && site.nav.phaseone;
    if (!cfg) return;
    document.querySelectorAll("[data-phaseone]").forEach(function (host) {
      var link = host.querySelector("a.phaseone-cta");
      var badge = host.querySelector("[data-phaseone-status]");
      if (badge) badge.textContent = cfg.live ? "Live" : (cfg.status_label || "Launching Soon");
      if (link && !cfg.live) {
        link.removeAttribute("href");
        link.setAttribute("aria-disabled", "true");
        link.textContent = (cfg.status_label || "Launching Soon");
      }
    });
  }

  /* ---------- Boot ---------- */
  var wantsDispatches = document.querySelector("[data-dispatches]");
  var wantsProjects = document.querySelector("[data-projects]");
  var wantsPhaseone = document.querySelector("[data-phaseone]");

  if (wantsDispatches) {
    fetchJSON("/content/dispatches.json").then(renderDispatches).catch(function () {});
  }
  if (wantsProjects) {
    fetchJSON("/content/projects.json").then(renderProjects).catch(function () {});
  }
  if (wantsPhaseone) {
    fetchJSON("/content/site.json").then(applyPhaseoneState).catch(function () {});
  }

  document.querySelectorAll("[data-year]").forEach(function (node) {
    node.textContent = String(new Date().getFullYear());
  });
})();
