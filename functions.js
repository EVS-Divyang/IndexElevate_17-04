// Tooltip Enable
document.addEventListener("DOMContentLoaded", function () {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

// Handle tab list active state
const tabLists = document.querySelectorAll(".tab-list");
tabLists.forEach((list) => {
  const items = list.querySelectorAll("li");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      // remove active from all items in this list
      items.forEach((li) => li.classList.remove("active"));
      // add active to the clicked one
      item.classList.add("active");
    });
  });
});

// Sidebar expand/collapse
const sidebar = document.querySelector(".sidebar");
const middle = document.querySelector(".contentArea");
const btn = document.querySelector(".nav-angle");
const angleIcon = btn.querySelector(".anglesvg");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("expanded");

  if (sidebar.classList.contains("expanded")) {
    // expanded state
    sidebar.style.minWidth = "250px";
    middle.style.minWidth = "calc(100% - 250px)";
    angleIcon.classList.add("rotate");
    // show nav labels
    document.querySelectorAll(".nav-lable").forEach((label) => {
      label.style.display = "inline-block";
    });
  } else {
    // collapsed state
    sidebar.style.minWidth = "64px";
    middle.style.minWidth = "calc(100% - 64px)";
    angleIcon.classList.remove("rotate");
    // hide nav labels
    document.querySelectorAll(".nav-lable").forEach((label) => {
      label.style.display = "none";
    });
  }
});

const switchInput = document.getElementById("flexSwitchCheckChecked");
const targetDiv = document.getElementById("targetDiv");

// initial state: hide if unchecked, show if checked
//disbaled on 2nd Dec - changes as per Arti
// targetDiv.style.display = switchInput.checked ? "block" : "none";
// switchInput.addEventListener("change", () => {
//   if (switchInput.checked) {
//     targetDiv.style.display = "block";
//   } else {
//     targetDiv.style.display = "none";
//   }
// });
/*Sidebar Window*/
const openBtn = document.getElementsByClassName("opensidebar1")[0];
const closeBtn = document.getElementById("closeSidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const backdrop = document.getElementById("backdrop");

openBtn.addEventListener("click", () => {
  sidebarOverlay.classList.remove("d-none"); // show sidebar
  backdrop.classList.remove("d-none"); // show backdrop
});

closeBtn.addEventListener("click", () => {
  sidebarOverlay.classList.add("d-none"); // hide sidebar
  backdrop.classList.add("d-none"); // hide backdrop
});

// Optional: clicking backdrop also closes sidebar
backdrop.addEventListener("click", () => {
  sidebarOverlay.classList.add("d-none");
  backdrop.classList.add("d-none");
});

// Sidebar Window 2
const openBtn2 = document.getElementById("openSidebar2");
const closeBtn2 = document.getElementById("closeSidebar2");
const sidebarOverlay2 = document.getElementById("sidebarOverlay2");
const backdrop2 = document.getElementById("backdrop2");
const scheduleLoader = document.getElementById("scheduleLoader");
const scheduleContent = document.getElementById("scheduleContent");

let scheduleLoaderTimer = null;

function openScheduleSidebar() {
  sidebarOverlay2.classList.remove("d-none");
  backdrop2.classList.remove("d-none");

  requestAnimationFrame(() => {
    sidebarOverlay2.classList.add("is-open");
    backdrop2.classList.add("is-open");
  });

  if (scheduleLoader) {
    scheduleLoader.classList.remove("d-none");
  }

  if (scheduleContent) {
    scheduleContent.classList.add("d-none");
    scheduleContent.classList.remove("is-visible");
  }

  if (scheduleLoaderTimer) {
    clearTimeout(scheduleLoaderTimer);
  }

  scheduleLoaderTimer = setTimeout(() => {
    if (scheduleLoader) {
      scheduleLoader.classList.add("d-none");
    }

    if (scheduleContent) {
      scheduleContent.classList.remove("d-none");
      requestAnimationFrame(() => {
        scheduleContent.classList.add("is-visible");
      });
    }
  }, 1200);
}

function closeScheduleSidebar() {
  if (scheduleLoaderTimer) {
    clearTimeout(scheduleLoaderTimer);
    scheduleLoaderTimer = null;
  }

  if (scheduleContent) {
    scheduleContent.classList.remove("is-visible");
  }

  sidebarOverlay2.classList.remove("is-open");
  backdrop2.classList.remove("is-open");

  setTimeout(() => {
    sidebarOverlay2.classList.add("d-none");
    backdrop2.classList.add("d-none");
  }, 320);
}

openBtn2.addEventListener("click", () => {
  openScheduleSidebar();
});

closeBtn2.addEventListener("click", () => {
  closeScheduleSidebar();
});

// Optional: clicking backdrop also closes sidebar
backdrop2.addEventListener("click", () => {
  closeScheduleSidebar();
});

// Sidebar Window 3
const openBtn3 = document.getElementById("openSidebar3");
const openBtn4 = document.getElementById("openSidebar4");
const closeBtn3 = document.getElementById("closeSidebar3");
const closeBtn4 = document.getElementById("closeSidebar4");
const sidebarOverlay3 = document.getElementById("sidebarOverlay3");
const sidebarOverlay4 = document.getElementById("sidebarOverlay4");
const backdrop3 = document.getElementById("backdrop3");
const backdrop4 = document.getElementById("backdrop4");
const viewLogicLoader = document.getElementById("viewLogicLoader");
const viewLogicContent = document.getElementById("viewLogicContent");

let viewLogicLoaderTimer = null;

function openViewLogicSidebar() {
  sidebarOverlay4.classList.remove("d-none");
  backdrop4.classList.remove("d-none");

  requestAnimationFrame(() => {
    sidebarOverlay4.classList.add("is-open");
    backdrop4.classList.add("is-open");
  });

  if (viewLogicLoader) {
    viewLogicLoader.classList.remove("d-none");
  }
  if (viewLogicContent) {
    viewLogicContent.classList.add("d-none");
    viewLogicContent.classList.remove("is-visible");
  }

  if (viewLogicLoaderTimer) {
    clearTimeout(viewLogicLoaderTimer);
  }

  viewLogicLoaderTimer = setTimeout(() => {
    if (viewLogicLoader) {
      viewLogicLoader.classList.add("d-none");
    }
    if (viewLogicContent) {
      viewLogicContent.classList.remove("d-none");
      requestAnimationFrame(() => {
        viewLogicContent.classList.add("is-visible");
      });
    }
  }, 3000);
}

function closeViewLogicSidebar() {
  if (viewLogicLoaderTimer) {
    clearTimeout(viewLogicLoaderTimer);
    viewLogicLoaderTimer = null;
  }

  if (viewLogicContent) {
    viewLogicContent.classList.remove("is-visible");
  }

  sidebarOverlay4.classList.remove("is-open");
  backdrop4.classList.remove("is-open");

  setTimeout(() => {
    sidebarOverlay4.classList.add("d-none");
    backdrop4.classList.add("d-none");
  }, 320);
}

openBtn3.addEventListener("click", () => {
  sidebarOverlay3.classList.remove("d-none"); // show sidebar
  backdrop3.classList.remove("d-none"); // show backdrop
});
openBtn4.addEventListener("click", () => {
  openViewLogicSidebar();
});

closeBtn3.addEventListener("click", () => {
  sidebarOverlay3.classList.add("d-none"); // hide sidebar
  backdrop3.classList.add("d-none"); // hide backdrop
});
closeBtn4.addEventListener("click", () => {
  closeViewLogicSidebar();
});

// Optional: clicking backdrop also closes sidebar
backdrop3.addEventListener("click", () => {
  sidebarOverlay3.classList.add("d-none");
  backdrop3.classList.add("d-none");
});

backdrop4.addEventListener("click", () => {
  closeViewLogicSidebar();
});

//Auto Save logic
window.addEventListener("load", () => {
  const autosave = document.querySelector(".autosave");
  const autosaveText = document.querySelector(".autosave-text");

  function runPopup() {
    // Step 1: show "Saving changes..."
    autosaveText.textContent = "Saving changes...";
    autosave.classList.add("show");

    // Step 2: after 2.5s, change text
    setTimeout(() => {
      autosaveText.textContent = "Changes auto saved";

      // Step 3: after 2s, hide popup
      setTimeout(() => {
        autosave.classList.remove("show");
      }, 2000);
    }, 2500);
  }

  // Run only once, 5 seconds after page load
  setTimeout(runPopup, 5000);
});



const dateInput = document.getElementById("dateInput");

// attach native date picker on focus
// dateInput.addEventListener("focus", () => {
//   dateInput.type = "date"; // switch to date picker
// });

// when user leaves the field
// dateInput.addEventListener("blur", () => {
//   if (!dateInput.value) {
//     // if no date selected, revert to text with placeholder
//     dateInput.type = "text";
//     dateInput.placeholder = "Select date";
//   }
// });
//Accordion

$(document).ready(function () {
   $(".form-heading").addClass("collapsed");
   $(".form-heading").next(".container-fluid").addClass("hidden");
   $(".form-heading").next(".filterBlock2").addClass("hidden");

   // toggle on click
   $(".form-heading").on("click", function (e) {
  // allow clicks on either the heading or the expand-collapse span
  if ($(e.target).closest(".expand-collapse, .form-heading").length) {
    const heading = $(this);
    const content = heading.next(".container-fluid");
    const content2 = heading.next(".filterBlock2");

    // Smooth jQuery slide animation for .container-fluid
    if (content.length) {
      if (content.hasClass("hidden")) {
        content.removeClass("hidden");
        content.slideDown(340);
      } else {
        content.slideUp(340, function() {
          content.addClass("hidden");
        });
      }
    }

    // Smooth jQuery slide animation for .filterBlock2
    if (content2.length) {
      if (content2.hasClass("hidden2")) {
        content2.removeClass("hidden2");
        content2.slideDown(340);
      } else {
        content2.slideUp(340, function() {
          content2.addClass("hidden2");
        });
      }
    }

    heading.toggleClass("collapsed");
    heading.find(".expand-collapse img").toggleClass("ico-rotated");
  }
});


  
  $('#viewUnderlineData').on('click', function (e) {
  e.preventDefault(); // prevent default link/button behavior if any

  const $filter = $('#filterData');
  const $underline = $('#underlineData');

  // If filterData is visible, hide it
  if ($filter.is(':visible')) {
    $filter.hide();
  }

  // Always show underlineData
  $underline.show();
});


  $('#close-underlying').on('click', function() {
    $("#underlineData").hide();
  });
  $('#editview').on('click', function() {
    $("#filterData").show();
    $("#underlineData").hide();
  });
  $('.closeFilter, #closeFilter2').on('click', function() {
    $("#filterData").hide();
    $("#secondTabData").hide();
    $("#markettype, #geography, #bench, #exchan").prop("selectedIndex", 0);
  });

  $('.my-select').on('change', function() {
    if ($(this).prop('selectedIndex') === 1) {
      $('#secondTabData').show();
    } else {
      $('#secondTabData').hide();
    }
  });
  $('.uploaduniverse').on('change', function() {
    // check if the selected option is the 3rd one
    if ($(this).prop('selectedIndex') === 3) {
      $("#selectnse").hide();
      $("#uploaduniversebtn").show();
      $("#downloadbtn").show();
      $("#downloadDataRow").show();
    } else {
      
    }
  });
  $("#updateSidebar").on('click', function() {
    $("#sidebarOverlay, #backdrop").addClass("d-none");
  });

  

  $(".data-suff-check").on('click', function() {
    $("#data-suff-view").toggle();
  });
 
// Multiple Select dropdown Function
const ms = document.getElementById('ms');
const trigger = document.getElementById('ms-trigger');
const chips = document.getElementById('ms-chips');
const list = document.getElementById('ms-list');
const hidden = document.getElementById('TradingHolidayCalendar');

  const getSelectedValues = () =>
    [...list.querySelectorAll('.ms__option[aria-selected="true"]')].map(el => el.dataset.value);

  const setSelected = (el, val) => el.setAttribute('aria-selected', val ? 'true' : 'false');

  // Measure-and-render chips that fit in the available width; add +N more if needed
  const renderChips = (values) => {
    chips.innerHTML = '';
    const available = chips.clientWidth; // width available inside trigger
    if (!values.length || available <= 0) {
      const placeholder = document.createElement('span');
      placeholder.className = 'ms__placeholder';
      placeholder.textContent = 'Custom';
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

    // Temp element to measure chip widths without layout thrash
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
      const w = probe.getBoundingClientRect().width + 6; // include gap
      if (used + w <= available) {
        used += w;
        shown += 1;
        chipsToAppend.push(makeChip(val)); // re-create for real container
      } else {
        break;
      }
    }

    // Clean measure node
    document.body.removeChild(measure);

    chipsToAppend.forEach(ch => chips.appendChild(ch));

    const remaining = values.length - shown;
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
    ms.classList.toggle('open', open ?? !ms.classList.contains('open'));
    trigger.setAttribute('aria-expanded', ms.classList.contains('open'));
  };



  // Open/close
  trigger.addEventListener('click', () => toggleOpen());
  document.addEventListener('click', (e) => {
    if (!ms.contains(e.target)) toggleOpen(false);
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
    if (e.key === 'ArrowDown') { e.preventDefault(); options[Math.min(idx + 1, options.length - 1)]?.focus(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); options[Math.max(idx - 1, 0)]?.focus(); }
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

  // Re-render chips on resize to keep truncation correct
  window.addEventListener('resize', updateState);

  // Init
  updateState();
});

// Show only the section that matches the clicked button
  document.querySelector('.ub-btns').addEventListener('click', (e) => {
    const btn = e.target.closest('.rec-btn');
    if (!btn) return;

    const targetId = btn.dataset.target; // e.g., 'rec-b'
    document.querySelectorAll('.record').forEach(sec => {
      sec.hidden = (sec.id !== targetId);
    });
  });

  

$('#close-exchange').on('click', function() {
    $('#secondTabData').hide(); // hides the element instantly
  });


/* For Custom Builder*/
$('.input-daterange').datepicker({
    format: "yyyy-mm-dd",
    autoclose: true,
    todayHighlight: true
  });

  // Get today's date
  var today = new Date();

  // Set default date for each start/end input
  $('.input-daterange').each(function() {
    $(this).find('input[name="start"]').datepicker('setDate', today);
    $(this).find('input[name="end"]').datepicker('setDate', today);
  });

$('.js-example-basic-multiple').each(function () {
  var $select = $(this);

  $select.select2({
    closeOnSelect: false,
    placeholder: "Select Options",
    allowClear: true,
    templateSelection: function (data) {
      return data.text ? data.text.substring(0, 3) : '';
    }
  });

  $select.on('change', function () {
    var selected = $select.select2('data');
    var $container = $select.next('.select2').find('.select2-selection__rendered');
    $container.empty();

    if (selected.length === 0) {
      return;
    }

    // Show only first 2 items truncated
    selected.slice(0, 2).forEach(function (item) {
      $container.append(
        '<li class="select2-selection__choice">' +
          '<span class="select2-selection__choice__display">' +
            item.text.substring(0, 3) +
          '</span>' +
        '</li>'
      );
    });

    // If more than 2 selected, show "+N more"
    if (selected.length > 2) {
      var moreCount = selected.length - 2;
      $container.append(
        '<li class="select2-selection__choice">' +
          '<span class="select2-selection__choice__display">+' + moreCount + ' more</span>' +
        '</li>'
      );
    }
  });

  // Trigger initial render for this select
  $select.trigger('change');
});


// Corporate Action selection
$(".tagsInner span").on("click", function() {
    $(this).toggleClass("selected");
});

//Rebalance selection logic
//$(".customselected").show();
$(".showCustom").hide(); 
 $(".select-frequency").on("change", function() {
  var val = $(this).val();

  if (val === "daily") {
    $(".week-of-month, .daily-select, .weekday").addClass("is-disabled");
    $(".monthly-select").prop("disabled", true);
    $(".showCustom").hide();
  }
  if (val === "weekly") {
      $(".week-of-month, .monthly-select").addClass("is-disabled");
      $(".daily-select,  .weekday").removeClass("is-disabled");
      $(".showCustom").hide(); 
  } 
  if (val === "monthly") {
      $(".monthly-select").removeClass("is-disabled");
      $(".week-of-month, .weekday, .selection-date").removeClass("is-disabled");
      $(".monthly-select").prop("disabled", false);
      $(".showCustom").hide();  
  }
  if (val === "quarterly") {
    $(".monthly-select").removeClass("is-disabled");
    $(".week-of-month, .weekday, .selection-date").removeClass("is-disabled");
    $(".monthly-select").val(["1","4","7","9"]).trigger("change");
    $(".showCustom").hide();   
  }
  if (val === "semiannual") {
    // enable monthly-select for quarterly
    $(".monthly-select").removeClass("is-disabled");
    $(".week-of-month, .weekday, .selection-date").removeClass("is-disabled");
    $(".monthly-select").val(["1","6"]).trigger("change");
    $(".showCustom").hide(); 
  }
  if (val === "annual") {
    $(".monthly-select").removeClass("is-disabled");
    $(".week-of-month, .weekday, .selection-date").removeClass("is-disabled");
    $(".monthly-select").val(["1"]).trigger("change");
    $(".showCustom").hide();  
  }
  if (val === "custom") {
    $(".monthly-select").removeClass("is-disabled");
    $(".week-of-month, .weekday, .selection-date").addClass("is-disabled");
    $(".monthly-select").prop("disabled", true);
    $(".showCustom").show(); 
  }
});
// checkbox
$('.bufferInput').hide();
$('.bufferselection').on('change', function() {
  if ($(this).is(':checked')) {
    $('.bufferInput').show();
  } else {
    $('.bufferInput').hide();
  }
});

$('.showscenario').on('click', function() {
  const $scenarioBlock = $('.scenariosBlocl');
  
  if ($scenarioBlock.hasClass('d-none')) {
    // Remove d-none and add animation class
    $scenarioBlock.removeClass('d-none').addClass('scenario-expand-in');
    
    // Trigger animation on next frame
    setTimeout(function() {
      $scenarioBlock.addClass('is-visible');
    }, 10);
  } else {
    // Collapse animation
    $scenarioBlock.removeClass('is-visible');
    
    setTimeout(function() {
      $scenarioBlock.addClass('d-none').removeClass('scenario-expand-in is-visible');
    }, 360);
  }
});
function htmlToPlainText(html) {
  return html
    // Headings → double line break
    .replace(/<h3[^>]*>/gi, "\n\n")
    .replace(/<\/h3>/gi, "\n\n")
    // Paragraphs → line break
    .replace(/<p[^>]*>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    // Strong → keep text but remove tags
    .replace(/<strong[^>]*>/gi, "")
    .replace(/<\/strong>/gi, "")
    // List items → bullet points
    .replace(/<li[^>]*>/gi, "- ")
    .replace(/<\/li>/gi, "\n")
    // UL/OL → remove tags
    .replace(/<\/?(ul|ol)[^>]*>/gi, "\n")
    // Subscript → keep content
    .replace(/<sub[^>]*>/gi, "_")
    .replace(/<\/sub>/gi, "_")
    // Remove any other tags
    .replace(/<\/?[^>]+(>|$)/g, "")
    // Trim extra spaces
    .trim();
}

let interpreterTypingTimer = null;

function clearInterpreterTyping() {
  if (interpreterTypingTimer) {
    clearTimeout(interpreterTypingTimer);
    interpreterTypingTimer = null;
  }
}

function nextTypingDelay(char, baseSpeed) {
  let delay = baseSpeed;

  if (char === "\n") {
    delay += 55;
  } else if (/\s/.test(char)) {
    delay += 10;
  }

  if (/[,.;:!?]/.test(char)) {
    delay += 90;
  }

  // Add subtle human-like variation so typing is less robotic.
  const jitter = Math.floor(Math.random() * 19) - 9; // -9ms to +9ms
  delay += jitter;

  return Math.max(14, delay);
}

function typeTextToEditor(text, baseSpeed = 20) {
  const editorEl = document.getElementById('editor');
  if (!editorEl) return;

  clearInterpreterTyping();

  let cursor = 0;
  editorEl.value = "";
  editorEl.classList.add("is-typing");

  function typeNext() {
    if (cursor >= text.length) {
      clearInterpreterTyping();
      editorEl.classList.remove("is-typing");
      return;
    }

    const nextChar = text.charAt(cursor);
    editorEl.value += nextChar;
    cursor += 1;
    editorEl.scrollTop = editorEl.scrollHeight;

    interpreterTypingTimer = setTimeout(
      typeNext,
      nextTypingDelay(nextChar, baseSpeed)
    );
  }

  interpreterTypingTimer = setTimeout(typeNext, 70);
}

$('#runBtn').on('click', function() {
  const rawHtml = "<p><strong>Low Volatility Equity Strategy</strong></p><br><br><p><strong>Section 1 — Purpose &amp; Scope</strong></p><br><br><p><strong>1.1 Objective.</strong> Construct a scalable, tradable equity portfolio that emphasizes low realized risk while maintaining high liquidity and diversification.</p><br><br><p><strong>1.2 Application.</strong> Applies to portfolio construction, daily monitoring, and periodic rebalancing for mandates using this methodology.</p><br><br><p><strong>Section 2 — Definitions</strong></p><br><br><ul><li><strong>ADVT (3M):</strong> Average Daily Value Traded in USD over the last 63 trading days (≈3 months).</li><li><strong>Volatility (Annualized):</strong> Std. dev. of daily log returns over 63 trading days × √252.</li><li><strong>Volatility Z Score:</strong> Cross sectional z score of annualized volatility within the eligible universe.</li><li><strong>Float Market Cap:</strong> Market cap available for public trading (excluding strategic/insider holdings).</li><li><strong>Bounded Simplex:</strong> The feasible set of portfolio weights where ∑w<sub>i</sub>=1 and 0.01 ≤ w<sub>i</sub> ≤ 0.05.</li></ul><p><strong>Section 3 — Data &amp; Universe</strong></p><br><br><p><strong>3.1 Instruments.</strong> Common stocks from the approved universe (region/global as per mandate).</p><br><br><p><strong>3.2 Required Data Files.</strong></p><br><br><ul><li><code>securities.csv</code>: ticker, market_cap_usd, float_market_cap_usd</li><li><code>prices.csv</code>: date, ticker, close_usd, volume</li></ul><p><strong>3.3 Currency.</strong> All inputs/outputs in USD; convert non‑USD securities using prevailing FX at close.</p><br><br><p><strong>3.4 Corporate Actions.</strong> Use split‑adjusted prices; splice series for mergers/spinoffs per data vendor standards.</p><br><br><p><strong>Section 4 — Eligibility Rules (Screens)</strong></p><br><br><p><strong>Rule 4.1 Liquidity Screen.</strong> Include only securities with ADVT (3M) &gt; USD 1,000,000.</p><br><br><p><strong>Rule 4.2 Size Screen.</strong> Include only securities with Market Cap &gt; USD 500,000,000.</p><br><br><p><strong>Rule 4.3 Data Sufficiency.</strong> Require ≥ 40 valid trading days in the 63 day window for volatility; else exclude.</p><br><br><p><strong>Rule 4.4 Trading Status.</strong> Exclude suspended, halted, or delisted names; re‑admit upon relisting and data sufficiency.</p><br><br><p><strong>Section 5 — Risk Metric Computation</strong></p><br><br><p><strong>Rule 5.1 Returns.</strong> Compute daily log returns r<sub>t</sub> = ln(close<sub>t</sub>/close<sub>t−1</sub>).</p><br><br><p><strong>Rule 5.2 Volatility.</strong> Annualize: σ<sub>ann</sub> = stdev(r<sub>t</sub>) × √252.</p><br><br><p><strong>Rule 5.3 Z Score.</strong> z<sub>i</sub> = (σ<sub>ann,i</sub> − μσ) / σσ across eligible names, for diagnostics only.</p><br><br><p><strong>Section 6 — Ranking &amp; Selection</strong></p><br><br><p><strong>Rule 6.1 Rank Order.</strong> Sort eligible securities by ascending σ<sub>ann</sub> (lower = better).</p><br><br><p><strong>Rule 6.2 Selection Count.</strong> Select Top 50 securities (or fewer if eligibility &lt; 50).</p><br><br><p><strong>Rule 6.3 Ties.</strong> Break ties by higher ADVT (3M); if still tied, break by larger float market cap.</p><br><br><p><strong>Section 7 — Initial Weights</strong></p><br><br><p><strong>Rule 7.1 Base Weights.</strong> Set initial weights proportional to Float Market Cap: w<sup>(0)</sup><sub>i</sub> = FloatMktCap<sub>i</sub> / ∑<sub>j∈S</sub> FloatMktCap<sub>j</sub>.</p><br><br><p><strong>Rule 7.2 Fallback.</strong> If aggregate float data is missing/zero for &gt;20% names, use total Market Cap for those tickers.</p><br><br><p><strong>Section 8 — Optimization &amp; Constraints</strong></p><br><br><p><strong>Rule 8.1 Feasible Set.</strong></p><br><br><ul><li>Full Investment: ∑w<sub>i</sub>=1</li><li>Floor: w<sub>i</sub> ≥ 1%</li><li>Cap: w<sub>i</sub> ≤ 5%</li></ul><p><strong>Rule 8.2 Objective.</strong> Minimize ∥w − w(0)∥² subject to Rule 8.1.</p><br><br><p><strong>Rule 8.3 Method.</strong> Apply iterative projection onto the bounded simplex (clip, redistribute, normalize).</p><br><br><p><strong>Rule 8.4 Feasibility Guardrails.</strong></p><br><br><ul><li>If N × 5% &lt; 100% (i.e., N &lt; 20), set cap to max(5%, 1/N).</li><li>If N × 1% &gt; 100%, reduce floor uniformly to 1/N.</li></ul><p><strong>Rule 8.5 Output Weights.</strong> Persist both weight_init and weight_opt for auditability.</p><br><br><p><strong>Section 9 — Rebalance &amp; Trading</strong></p><br><br><p><strong>Rule 9.1 Frequency.</strong> Quarterly rebalancing (last business day of Mar/Jun/Sep/Dec). Optionally Monthly if mandated.</p><br><br><p><strong>Rule 9.2 Trade Window.</strong> Execute at/near closing auction on rebalance date to match measurement window.</p><br><br><p><strong>Rule 9.3 Turnover Control.</strong> If turnover &gt; 25%, permit staged trading over T+3 with slippage monitoring.</p><br><br><p><strong>Rule 9.4 Corporate Actions Between Rebalances.</strong></p><br><br><ul><li>Dividends: reinvest cash per policy or hold as cash until next rebalance.</li><li>Splits/spinoffs: recompute weights the next business day; enforce bounds.</li><li>M&amp;A: replace target with next ranked security if Top 50 falls below 50.</li></ul>";
  const plainText = htmlToPlainText(rawHtml);
  typeTextToEditor(plainText);
});

// Store form data to Json
// $("#openSidebar2").click(function() {
//   let formArray = $("#rebalance-form").serializeArray();
//   let formData = {};
//   $.map(formArray, function(n){
//     formData[n['name']] = n['value'];
//   });
//   formData["rebalance-months"] = $(".monthly-select").val();
//   let rangeValues = $(".rangeControl").map(function() {
//     return $(this).val();
//   }).get();

//   formData["rebalance-date-range"] = {
//     start: rangeValues[0],
//     end: rangeValues[1]
//   };
//   let jsonString = JSON.stringify(formData, null, 2);
//   let blob = new Blob([jsonString], { type: "application/json" });
//   let link = document.createElement("a");
//   link.href = URL.createObjectURL(blob);
//   link.download = "formData.json";
//   link.click();
// });

function buildScheduleExportData() {
  const formData = {};

  // Serialize both forms
  $("#rebalance-form1").serializeArray().forEach(n => formData[n.name] = n.value);
  $("#rebalance-form2").serializeArray().forEach(n => formData[n.name] = n.value);

  // Hidden inputs
  $("#TradingHolidayCalendar, #CalcHolidayCalender").each(function () {
    const fieldName = $(this).attr("name");
    const fieldValue = $(this).val() || "";
    formData[fieldName] = fieldValue;
  });

  // Other fields
  formData["rebalance-months"] = $(".monthly-select").val() || "";
  const rangeValues = $(".rangeControl").map(function () { return $(this).val(); }).get();
  formData["rebalance-date-range"] = { start: rangeValues[0] || "", end: rangeValues[1] || "" };

  // StrategyName for filename
  let strategyName = $("[name='StrategyName']").val() || "";
  strategyName = strategyName.trim()
    .replace(/[\s]+/g, "_")
    .replace(/[^A-Za-z0-9._-]/g, "");
  if (!strategyName) strategyName = "formData";

  // Append current date/time
  const now = new Date();
  const timestamp = now.getFullYear() + "-" +
                    String(now.getMonth() + 1).padStart(2, "0") + "-" +
                    String(now.getDate()).padStart(2, "0") + "_" +
                    String(now.getHours()).padStart(2, "0") + "-" +
                    String(now.getMinutes()).padStart(2, "0") + "-" +
                    String(now.getSeconds()).padStart(2, "0");

  const filename = `${strategyName}_${timestamp}.json`;

  const jsonString = JSON.stringify(formData, null, 2);

  return { filename, jsonString };
}

function triggerScheduleDownload() {
  const { filename, jsonString } = buildScheduleExportData();

  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

$("#openSidebar2").on("click", function () {
  triggerScheduleDownload();
});

$(document).on("click", ".downloadSchedule[data-bs-title='Download']", function (e) {
  e.preventDefault();
  triggerScheduleDownload();
});




// Load JSON from external file (rebalance.json)
$.getJSON("rebalance-data.json", function (data) {
  const schedule = data["Rebalance Schedule"];
  const keys = Object.keys(schedule);

  // Build table header dynamically
  const $theadRow = $("<tr/>");
  keys.forEach((key) => {
    $theadRow.append($("<th/>").text(key));
  });
  $("#scheduleTable thead").append($theadRow);

  // Find max length of arrays
  const maxLen = Math.max(...keys.map((k) => schedule[k].length));

  // Build rows dynamically
  for (let i = 0; i < maxLen; i++) {
    const $row = $("<tr/>");
    keys.forEach((key) => {
      $row.append($("<td/>").text(schedule[key][i] || ""));
    });
    $("#scheduleTable tbody").append($row);
  }
}).fail(function () {
  console.error("Could not load JSON file.");
});

$('.view-prompts').on('click', function() {
  $('.prompts').addClass('d-flex')
});

  $(".prompts span").on("click", function () {
    // get clicked span text
    let currentText = $(this).text();

    // put text into textarea
    $("#cardInput").val(currentText);

    // update span text when textarea value changes
    $("#cardInput").on("input", () => {
      $(this).text($("#cardInput").val());
    });

    // optional: remove class from parent
    $(this).parent(".prompts").removeClass("d-flex");
  });

/* Logic for Tab Show/hide */
  // by default: Index + Equity active, show index-equity div
  $(".menu-item.index, .menu-item.equity").addClass("active");
  $(".index-equity").show();
  $(".index-derivatives").hide();

  $(".menu-item").on("click", function () {
    let isIndex = $(this).hasClass("index");
    let isEquity = $(this).hasClass("equity");
    let isDerivatives = $(this).hasClass("derivatives");

    // Always keep Index active
    $(".menu-item.index").addClass("active");

    if (isEquity) {
      // activate Equity, deactivate Derivatives
      $(".menu-item.equity").addClass("active");
      $(".menu-item.derivatives").removeClass("active");

      // show index-equity div, hide index-derivatives
      $(".index-equity").show();
      $(".index-derivatives").hide();
    }

    if (isDerivatives) {
      // activate Derivatives, deactivate Equity
      $(".menu-item.derivatives").addClass("active");
      $(".menu-item.equity").removeClass("active");

      // show index-derivatives div, hide index-equity
      $(".index-derivatives").show();
      $(".index-equity").hide();
    }
  });

//Timepicker
$('.timepicker').timepicker({
  interval: 1, // dropdown shows every 15 minutes 
  dynamic: true, 
  dropdown: true, 
  scrollbar: true
});

$(".filterBlock .menu-item").on("click", function () {
  const $this = $(this);

  // If it's in the Asset Class group
  if ($this.closest(".filterBlocktab").find(".equity, .futures, .commodities, .derivatives, .ioi").length) {
    // clear active only in Asset Class group
    $this.closest(".filterBlocktab").find(".menu-item").removeClass("active");
    $this.addClass("active");

    // special case: derivatives → force Index active in Strategy group
    if ($this.hasClass("derivatives")) {
      $(".filterBlock .menu-item.index").addClass("active");
      $(".filterBlock .menu-item.basket").removeClass("active");
    }
  }

  // If it's in the Strategy Type group
  if ($this.closest(".filterBlocktab").find(".index, .basket").length) {
    // clear active only in Strategy group
    $this.closest(".filterBlocktab").find(".menu-item").removeClass("active");
    $this.addClass("active");
  }

  // Animate wrapper transitions for smoother section changes.
  const toggleAnimationDuration = 220;

  $(".intraday-wrapper, .hourly-wrapper").stop(true, true).slideUp(toggleAnimationDuration);
  if ($this.hasClass("intraday")) {
    $(".intraday-wrapper").stop(true, true).slideDown(toggleAnimationDuration);
  }
  if ($this.hasClass("hourly")) {
    $(".hourly-wrapper").stop(true, true).slideDown(toggleAnimationDuration);
  }

  $(".intraday-wrapper2, .hourly-wrapper2").stop(true, true).slideUp(toggleAnimationDuration);
  if ($this.hasClass("intraday2")) {
    $(".intraday-wrapper2").stop(true, true).slideDown(toggleAnimationDuration);
  }
  if ($this.hasClass("hourly2")) {
    $(".hourly-wrapper2").stop(true, true).slideDown(toggleAnimationDuration);
  }

});


// $(function () {
//   $(".menu-item").on("click", function () {
//     $(".menu-item").removeClass("active");
//     $(this).addClass("active");

//     // hide the custom div by default
//     $(".custom-wrapper").hide();

//     // show only if Custom clicked
//     if ($(this).hasClass("custom")) {
//       $(".custom-wrapper").show();
//     }
//   });
// });

$("#selectDataSourceWrapper").removeClass("d-flex").addClass("d-none");
$(".selectDataSource .menu-items").on("click", function () {
  // remove active from all and add to clicked
  $(".selectDataSource .menu-items").removeClass("active");
  $(this).addClass("active");

  // hide by default
  $("#selectDataSourceWrapper").removeClass("d-flex").addClass("d-none");
  $("#selectDataSourceWrapperHedging").removeClass("d-flex").addClass("d-none");

  // show only if custom clicked
  if ($(this).hasClass("custom")) {
    $("#selectDataSourceWrapper").removeClass("d-none").addClass("d-flex");
  }
  if ($(this).hasClass("custom2")) {
    $("#selectDataSourceWrapperHedging").removeClass("d-none").addClass("d-flex");
  }
});

$("#deltaHedging").on("change", function () {
  if ($(this).is(":checked")) {
    $("#deltaHedgingWrapper").removeClass("d-none").addClass("d-block");
  } else {
    $("#deltaHedgingWrapper").removeClass("d-block").addClass("d-none");
  }
});

$('select[name="IndexFamily"]').on("change", function () {
  var value = $(this).val();

  // reset everything
  $(".target-col").removeClass("col-8 col-10").addClass("col-12");
  $(".input-col").addClass("d-none");

  if (value === "top-n-option") {
    // target col shrinks to col-10
    $(".target-col").removeClass("col-12").addClass("col-10");
    // show only first input
    $(".input-1").removeClass("d-none");
  } else if (value === "range") {
    // target col shrinks to col-8
    $(".target-col").removeClass("col-12").addClass("col-8");
    // show both inputs
    $(".input-col").removeClass("d-none");
  }
});
