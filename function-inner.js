$(document).ready(function () {
  var table = $("#backtesting").DataTable({
  initComplete: function () {
    var api = this.api();

    var filterHtml = `
      <div class="dt-center-filters">
        <select id="statusFilter" class="dt-filter">
          <option value="">Status</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>

        <select id="createdByFilter" class="dt-filter">
          <option value="">Created By</option>
          <option value="Salil">Salil</option>
          <option value="Admin">Admin</option>
        </select>

        <select id="createdDateFilter" class="dt-filter">
          <option value="">Created Date</option>
        </select>
      </div>
    `;

    const topRow = $("#backtesting_wrapper .dt-layout-row").first();
    topRow.addClass("dt-top-flex");
    topRow.find(".dt-layout-start").after(filterHtml);

    // Populate Created Date dropdown dynamically from column 8
    api.column(7).data().unique().sort().each(function (d) {
      $("#createdDateFilter").append(`<option value="${d}">${d}</option>`);
    });

    // Hook filters into DataTables search
    $("#statusFilter").on("change", function () {
      api.column(4).search(this.value).draw();
    });
    $("#createdByFilter").on("change", function () {
      api.column(7).search(this.value).draw();
    });
    $("#createdDateFilter").on("change", function () {
      api.column(8).search(this.value).draw();
    });
  }
});



  // Open sidebar on .test click
  $(".view-backtesting-details").on("click", function () {
  $("#sidebarOverlayDetail").removeClass("d-none"); // show sidebar
  $(".backdrop").removeClass("d-none");             // show backdrop
  $("body").css("overflow", "hidden");              // disable page scroll
});

// Close sidebar on #closeSidebar click
$("#closeSidebar").on("click", function () {
  $("#sidebarOverlayDetail").addClass("d-none");    // hide sidebar
  $(".backdrop").addClass("d-none");                // hide backdrop
  $("body").css("overflow", "");                    // enable page scroll
});

// Optional: clicking backdrop also closes sidebar
$(".backdrop").on("click", function () {
  $("#sidebarOverlayDetail").addClass("d-none");
  $(".backdrop").addClass("d-none");
  $("body").css("overflow", "");                    // enable page scroll
});


});
