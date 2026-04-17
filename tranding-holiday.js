
// document.addEventListener('DOMContentLoaded', () => {
//   const th = document.getElementById('th');
//   const trigger = document.getElementById('th-trigger');
//   const chips = document.getElementById('th-chips');
//   const list = document.getElementById('th-list');
//   const hidden = document.getElementById('TradingHolidayCalendar');

//   if (!th || !trigger || !chips || !list || !hidden) {
//     console.error('th multi-select: missing one or more required elements', { th, trigger, chips, list, hidden });
//     return;
//   }

//   const getSelectedValues = () =>
//     [...list.querySelectorAll('.ms__option[aria-selected="true"]')].map(el => el.dataset.value);

//   const setSelected = (el, val) => el.setAttribute('aria-selected', val ? 'true' : 'false');

//   const renderChips = (values) => {
//     chips.innerHTML = '';
//     const available = chips.clientWidth;
//     if (!values.length || available <= 0) {
//       const placeholder = document.createElement('span');
//       placeholder.className = 'ms__placeholder';
//       placeholder.textContent = 'Custom';
//       chips.appendChild(placeholder);
//       return;
//     }

//     let used = 0;
//     let shown = 0;

//     const makeChip = (val) => {
//       const chip = document.createElement('span');
//       chip.className = 'chip';
//       chip.setAttribute('data-value', val);

//       const label = document.createElement('span');
//       label.className = 'chip__label';
//       label.textContent = val;

//       const btn = document.createElement('button');
//       btn.className = 'chip__remove';
//       btn.type = 'button';
//       btn.setAttribute('aria-label', `Remove ${val}`);
//       btn.innerHTML = '&times;';
//       btn.addEventListener('click', (e) => {
//         e.stopPropagation();
//         const opt = list.querySelector(`.ms__option[data-value="${CSS.escape(val)}"]`);
//         if (opt) setSelected(opt, false);
//         updateState();
//       });

//       chip.appendChild(label);
//       chip.appendChild(btn);
//       return chip;
//     };

//     const measure = document.createElement('div');
//     measure.style.visibility = 'hidden';
//     measure.style.position = 'absolute';
//     measure.style.left = '-9999px';
//     measure.style.top = '0';
//     measure.style.display = 'inline-flex';
//     document.body.appendChild(measure);

//     const chipsToAppend = [];

//     for (const val of values) {
//       const probe = makeChip(val);
//       measure.appendChild(probe);
//       const w = probe.getBoundingClientRect().width + 6;
//       if (used + w <= available) {
//         used += w;
//         shown += 1;
//         chipsToAppend.push(makeChip(val));
//       } else {
//         break;
//       }
//     }

//     document.body.removeChild(measure);
//     chipsToAppend.forEach(ch => chips.appendChild(ch));

//     const remaining = values.length - shown;
//     if (remaining > 0) {
//       const more = document.createElement('span');
//       more.className = 'chip more';
//       more.textContent = `+${remaining} more`;
//       chips.appendChild(more);
//     }
//   };

//   const updateState = () => {
//     const selected = getSelectedValues();
//     hidden.value = selected.join(',');
//     renderChips(selected);
//   };

//   const toggleOpen = (open) => {
//     const willOpen = open ?? !th.classList.contains('open');
//     th.classList.toggle('open', willOpen);
//     trigger.setAttribute('aria-expanded', willOpen);
//   };

//   trigger.addEventListener('click', (e) => {
//     e.stopPropagation();
//     toggleOpen();
//   });

//   document.addEventListener('click', (e) => {
//     if (!th.contains(e.target)) toggleOpen(false);
//   });

//   list.addEventListener('click', (e) => {
//     const opt = e.target.closest('.ms__option');
//     if (!opt) return;
//     const isSelected = opt.getAttribute('aria-selected') === 'true';
//     setSelected(opt, !isSelected);
//     updateState();
//   });

//   list.addEventListener('keydown', (e) => {
//     const options = [...list.querySelectorAll('.ms__option')];
//     const idx = options.indexOf(document.activeElement);
//     if (e.key === 'ArrowDown') { e.preventDefault(); options[Math.min(idx + 1, options.length - 1)]?.focus(); }
//     else if (e.key === 'ArrowUp') { e.preventDefault(); options[Math.max(idx - 1, 0)]?.focus(); }
//     else if (e.key === 'Enter' || e.key === ' ') {
//       e.preventDefault();
//       const opt = document.activeElement;
//       if (opt?.classList.contains('ms__option')) {
//         const isSelected = opt.getAttribute('aria-selected') === 'true';
//         setSelected(opt, !isSelected);
//         updateState();
//       }
//     } else if (e.key === 'Escape') {
//       toggleOpen(false);
//       trigger.focus();
//     }
//   });

//   window.addEventListener('resize', updateState);

//   updateState();
// });


document.addEventListener('DOMContentLoaded', () => {
  function initMultiSelect(root) {
    const trigger = root.querySelector('.ms__trigger');
    const chips = root.querySelector('.ms__chips');
    const list = root.querySelector('.ms__list');
    const hiddenId = root.dataset.ms;
    const hidden = document.getElementById(hiddenId);

    if (!trigger || !chips || !list || !hidden) return;

    const getSelectedValues = () =>
      [...list.querySelectorAll('.ms__option[aria-selected="true"]')].map(el => el.dataset.value);

    const setSelected = (el, val) => el.setAttribute('aria-selected', val ? 'true' : 'false');

    const renderChips = (values) => {
      chips.innerHTML = '';
      if (!values.length) {
        const placeholder = document.createElement('span');
        placeholder.className = 'ms__placeholder';
        placeholder.textContent = 'Choose one or more…';
        chips.appendChild(placeholder);
        return;
      }
      values.forEach(val => {
        const chip = document.createElement('span');
        chip.className = 'chip';
        chip.textContent = val;
        chip.addEventListener('click', () => {
          const opt = list.querySelector(`.ms__option[data-value="${CSS.escape(val)}"]`);
          if (opt) setSelected(opt, false);
          updateState();
        });
        chips.appendChild(chip);
      });
    };

    const updateState = () => {
      const selected = getSelectedValues();
      hidden.value = selected.join(',');
      renderChips(selected);
    };

    const toggleOpen = (open) => {
      const willOpen = open ?? !root.classList.contains('open');
      root.classList.toggle('open', willOpen);
      trigger.setAttribute('aria-expanded', willOpen);
    };

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleOpen();
    });

    document.addEventListener('click', (e) => {
      if (!root.contains(e.target)) toggleOpen(false);
    });

    list.addEventListener('click', (e) => {
      const opt = e.target.closest('.ms__option');
      if (!opt) return;
      const isSelected = opt.getAttribute('aria-selected') === 'true';
      setSelected(opt, !isSelected);
      updateState();
    });

    window.addEventListener('resize', updateState);

    updateState();
  }

  // Initialize all multi-selects automatically
  document.querySelectorAll('.ms[data-ms]').forEach(initMultiSelect);
});

