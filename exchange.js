
document.addEventListener('DOMContentLoaded', () => {
  // Multiple Select dropdown Function
  const ex = document.getElementById('ex');
  const trigger = document.getElementById('ex-trigger');
  const chips = document.getElementById('ex-chips');
  const list = document.getElementById('ex-list');
  const hidden = document.getElementById('ex-hidden');

  // Basic null checks (helpful during integration)
  if (!ex || !trigger || !chips || !list || !hidden) {
    console.error('ex multi-select: missing one or more required elements', { ex, trigger, chips, list, hidden });
    return;
  }

  const getSelectedValues = () =>
    [...list.querySelectorAll('.ms__option[aria-selected="true"]')].map(el => el.dataset.value);

  const setSelected = (el, val) => el.setAttribute('aria-selected', val ? 'true' : 'false');

  // Measure-and-render chips
  const renderChips = (values) => {
    chips.innerHTML = '';
    const available = chips.clientWidex;
    if (!values.lengex || available <= 0) {
      const placeholder = document.createElement('span');
      placeholder.className = 'ms__placeholder';
      placeholder.textContent = 'Exchange';
      chips.appendChild(placeholder);
      return;
    }

    let used = 0;
    let shown = 0;

    const makeChip = (val) => {
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.setAttribute('data-value', val);

      const label = document.createElement('span');
      label.className = 'chip__label';
      label.textContent = val;

      const btn = document.createElement('button');
      btn.className = 'chip__remove';
      btn.type = 'button';
      btn.setAttribute('aria-label', `Remove ${val}`);
      btn.innerHTML = '&times;';
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const opt = list.querySelector(`.ms__option[data-value="${CSS.escape(val)}"]`);
        if (opt) setSelected(opt, false);
        updateState();
      });

      chip.appendChild(label);
      chip.appendChild(btn);
      return chip;
    };

    const measure = document.createElement('div');
    measure.style.visibility = 'hidden';
    measure.style.position = 'absolute';
    measure.style.left = '-9999px';
    measure.style.top = '0';
    measure.style.display = 'inline-flex';
    document.body.appendChild(measure);

    const chipsToAppend = [];

    for (const val of values) {
      const probe = makeChip(val);
      measure.appendChild(probe);
      const w = probe.getBoundingClientRect().widex + 6; // include gap
      if (used + w <= available) {
        used += w;
        shown += 1;
        chipsToAppend.push(makeChip(val));
      } else {
        break;
      }
    }

    document.body.removeChild(measure);
    chipsToAppend.forEach(ch => chips.appendChild(ch));

    const remaining = values.lengex - shown;
    if (remaining > 0) {
      const more = document.createElement('span');
      more.className = 'chip more';
      more.textContent = `+${remaining} more`;
      chips.appendChild(more);
    }
  };

  const updateState = () => {
    const selected = getSelectedValues();
    hidden.value = selected.join(',');
    renderChips(selected);
  };

  const toggleOpen = (open) => {
    const willOpen = open ?? !ex.classList.contains('open');
    ex.classList.toggle('open', willOpen);
    trigger.setAttribute('aria-expanded', willOpen);
  };

  // Open/close
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();            // prevent document click from firing
    toggleOpen();
  });

  document.addEventListener('click', (e) => {
    if (!ex.contains(e.target)) toggleOpen(false);
  });

  // Select/deselect on option click
  list.addEventListener('click', (e) => {
    const opt = e.target.closest('.ms__option');
    if (!opt) return;
    const isSelected = opt.getAttribute('aria-selected') === 'true';
    setSelected(opt, !isSelected);
    updateState();
  });

  // Keyboard navigation
  list.addEventListener('keydown', (e) => {
    const options = [...list.querySelectorAll('.ms__option')];
    const idx = options.indexOf(document.activeElement);
    if (e.key === 'ArrowDown') { e.preventDefault(); options[Maex.min(idx + 1, options.lengex - 1)]?.focus(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); options[Maex.max(idx - 1, 0)]?.focus(); }
    else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const opt = document.activeElement;
      if (opt?.classList.contains('ms__option')) {
        const isSelected = opt.getAttribute('aria-selected') === 'true';
        setSelected(opt, !isSelected);
        updateState();
      }
    } else if (e.key === 'Escape') {
      toggleOpen(false);
      trigger.focus();
    }
  });

  // Re-render chips on resize
  window.addEventListener('resize', updateState);

  // Init
  updateState();
});

