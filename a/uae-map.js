// <uae-map> — the United Arab Emirates from real Natural Earth geometry, divided
// into seven directly clickable emirate regions (Voronoi partition around each
// emirate's capital, clipped to the real coastline — indicative territory, not
// surveyed borders). Keyed 01–07 with a legend, blueprint style.
// Dispatches a bubbling 'emirate-select' CustomEvent.
(function () {
  const TOPO = 'https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json';
  let topoPromise = null;
  let uid = 0;

  const EMIRATES = [
    { key: 'abudhabi', n: '01', name: 'Abu Dhabi', from: '15,500', lon: 54.05, lat: 23.9 },
    { key: 'dubai', n: '02', name: 'Dubai', from: '12,500', lon: 55.27, lat: 25.05 },
    { key: 'sharjah', n: '03', name: 'Sharjah', from: '5,750', lon: 55.58, lat: 25.3 },
    { key: 'ajman', n: '04', name: 'Ajman', from: '6,900', lon: 55.47, lat: 25.41 },
    { key: 'uaq', n: '05', name: 'Umm Al Quwain', from: '9,000', lon: 55.64, lat: 25.56 },
    { key: 'rak', n: '06', name: 'Ras Al Khaimah', from: '6,500', lon: 56.0, lat: 25.85 },
    { key: 'fujairah', n: '07', name: 'Fujairah', from: '9,500', lon: 56.31, lat: 25.1 }
  ];

  const T = {
    water: '#f2f2f3', coast: '#2c455d', badge: '#5980a6', badgeText: '#f5f5f8',
    region: 'rgba(89,128,166,0.09)', regionOn: 'rgba(89,128,166,0.5)', regionHover: 'rgba(89,128,166,0.22)',
    regionStroke: 'rgba(44,69,93,0.45)',
    keyText: '#424244', keyTextOn: '#1d2d3d', keyPrice: '#7a7a7d',
    labelFont: "600 12px 'Barlow', system-ui, sans-serif",
    keyFont: "600 15px 'Barlow Condensed', system-ui, sans-serif",
    keyPriceFont: "12px 'Barlow', system-ui, sans-serif"
  };

  const W = 760, H = 520;
  const SVGNS = 'http://www.w3.org/2000/svg';
  const el = (n, attrs) => {
    const e = document.createElementNS(SVGNS, n);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  };

  function waitForLibs() {
    return new Promise(res => {
      const tick = () => (window.d3 && window.topojson) ? res() : setTimeout(tick, 40);
      tick();
    });
  }

  function loadTopo() {
    if (!topoPromise) topoPromise = waitForLibs().then(() => window.d3.json(TOPO));
    return topoPromise;
  }

  class UaeMap extends HTMLElement {
    static get observedAttributes() { return ['selected']; }

    connectedCallback() {
      if (this._built) return;
      this._built = true;
      this._id = 'uae-clip-' + (++uid);
      this.style.display = 'block';
      loadTopo().then(topo => this.render(topo)).catch(() => { this.textContent = ''; });
    }

    attributeChangedCallback(name) {
      if (name === 'selected') this.paint();
    }

    fire(key) {
      this.dispatchEvent(new CustomEvent('emirate-select', { bubbles: true, composed: true, detail: { key: key } }));
    }

    render(topo) {
      const d3 = window.d3, topojson = window.topojson;
      const countries = topojson.feature(topo, topo.objects.countries).features;
      const uae = countries.find(f => f.properties && f.properties.name === 'United Arab Emirates');
      if (!uae) return;
      const projection = d3.geoMercator().fitExtent([[24, 24], [W - 24, H - 24]], uae);
      const path = d3.geoPath(projection);
      const uaePath = path(uae) || '';

      this.textContent = '';
      const svg = el('svg', { viewBox: '0 0 ' + W + ' ' + H, width: '100%', role: 'group', 'aria-label': 'Map of the United Arab Emirates, seven selectable emirates' });
      svg.style.display = 'block';
      svg.style.background = T.water;

      const defs = el('defs');
      const clip = el('clipPath', { id: this._id });
      clip.appendChild(el('path', { d: uaePath }));
      defs.appendChild(clip);
      svg.appendChild(defs);

      const pts = EMIRATES.map(em => projection([em.lon, em.lat]));
      const voronoi = d3.Delaunay.from(pts).voronoi([0, 0, W, H]);

      this._hot = {};
      const regions = el('g', { 'clip-path': 'url(#' + this._id + ')' });
      svg.appendChild(regions);

      EMIRATES.forEach((em, i) => {
        const cell = el('path', { d: voronoi.renderCell(i), fill: T.region, stroke: T.regionStroke, 'stroke-width': 1 });
        cell.style.cursor = 'pointer';
        cell.style.transition = 'fill 140ms';
        cell.addEventListener('click', () => this.fire(em.key));
        cell.addEventListener('mouseenter', () => { if (em.key !== this.getAttribute('selected')) cell.setAttribute('fill', T.regionHover); });
        cell.addEventListener('mouseleave', () => this.paint());
        regions.appendChild(cell);
        this._hot[em.key] = { cell };
      });

      svg.appendChild(el('path', { d: uaePath, fill: 'none', stroke: T.coast, 'stroke-width': 1.6, 'stroke-linejoin': 'round', 'pointer-events': 'none' }));

      EMIRATES.forEach((em, i) => {
        const [x, y] = pts[i];
        const g = el('g', { role: 'button', tabindex: '0', 'aria-label': em.name + ', from AED ' + em.from });
        g.style.cursor = 'pointer';
        const box = el('rect', { x: x - 11, y: y - 11, width: 22, height: 22, fill: T.badge, stroke: T.coast, 'stroke-width': 0.8 });
        const num = el('text', { x: x, y: y + 4, fill: T.badgeText, 'text-anchor': 'middle' });
        num.style.font = T.labelFont;
        num.style.letterSpacing = '0.04em';
        num.textContent = em.n;
        g.appendChild(box); g.appendChild(num);
        g.addEventListener('click', () => this.fire(em.key));
        g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.fire(em.key); } });
        svg.appendChild(g);
        Object.assign(this._hot[em.key], { box: box, num: num });
      });

      this.appendChild(svg);

      const legend = document.createElement('div');
      legend.style.display = 'grid';
      legend.style.gridTemplateColumns = 'repeat(4, 1fr)';
      legend.style.marginTop = '10px';
      EMIRATES.forEach(em => {
        const row = document.createElement('button');
        row.type = 'button';
        row.style.cssText = 'display:flex;align-items:baseline;gap:8px;text-align:left;background:none;border:0;border-left:1px solid rgba(29,31,32,0.16);padding:6px 10px;cursor:pointer;transition:background 140ms;';
        row.innerHTML = '<span style="font:600 12px \'Barlow\', system-ui, sans-serif;letter-spacing:.04em;color:' + T.badge + '">' + em.n + '</span>' +
          '<span><span style="display:block;font:' + T.keyFont + ';text-transform:uppercase;letter-spacing:.04em;color:' + T.keyText + '">' + em.name + '</span>' +
          '<span style="display:block;font:' + T.keyPriceFont + ';color:' + T.keyPrice + ';font-variant-numeric:tabular-nums">from AED ' + em.from + '</span></span>';
        row.addEventListener('click', () => this.fire(em.key));
        legend.appendChild(row);
        this._hot[em.key].row = row;
      });
      this.appendChild(legend);
      this.paint();
    }

    paint() {
      if (!this._hot) return;
      const sel = this.getAttribute('selected');
      Object.keys(this._hot).forEach(k => {
        const h = this._hot[k], on = k === sel;
        h.cell.setAttribute('fill', on ? T.regionOn : T.region);
        h.cell.setAttribute('stroke-width', on ? 1.6 : 1);
        h.box.setAttribute('fill', on ? '#1d2d3d' : T.badge);
        h.row.style.background = on ? 'rgba(89,128,166,0.14)' : 'none';
        h.row.querySelectorAll('span')[1].style.color = on ? T.keyTextOn : T.keyText;
      });
    }
  }

  if (!customElements.get('uae-map')) customElements.define('uae-map', UaeMap);
})();
