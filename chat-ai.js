
function addActionpromt(option) {
  var actionPromt = document.getElementById('actionPromt');
  switch(option) {
  case 1:
    actionPromt.innerHTML = `<div class="a-handler-d-block">
    <div class="a-handler-child-components-wrapper">
      <div class="a-handler-new-action-wrapper a-handler-pos-rel">
        <h4 class="a-handler-configListHeading">Update Action</h4>
        <hr class="a-handler-divider">
        <div class="a-handler-form-group">
          <div class="a-handler-form-row">
            <label class="fontBold a-handler-d-block a-handler-form-label">
              Add New Action
            </label>
            <input type="text" class="a-handler-config-panel-input a-handler-w-100" placeholder="Company Profile">
          </div>
          <div class="a-handler-form-row a-handler-w-50 a-handler-pos-rel a-handler-form-selectbox">
            <label class="fontBold a-handler-d-block a-handler-form-label">
              Control Type
            </label>
            <select class="a-handler-config-panel-input a-handler-d-block a-handler-w-100">
              <option>Checkbox</option>
              <option>Radio</option>
            </select>
          </div>
          <div class="a-handler-form-row">
            <label class="fontBold a-handler-d-flex align-item-center a-handler-form-label">
              Add Prompt
              <img src="images/alert_black.png" class="p-element a-handler-config-panel-tooltip-icon">
            </label>
            <textarea class="a-handler-config-panel-textarea a-handler-d-block a-handler-w-100" cols="50" row="4" placeholder="As a research analyst, create a company profile on [Company Name]. The response should be in detail along with sources, and in a professional tone. Also, highlight the sections in bold. "></textarea>
          </div>
          <div class="a-handler-form-button-wrapper a-handler-pos-fixed a-handler-d-block a-handler-w-100">
            <button type="reset" class="a-handler-configbutton a-handler-reset-button">Reset</button>
            <button class="a-handler-configbutton a-handler-save-button">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>`
    break;
    case 2:
    actionPromt.innerHTML = `<div class="a-handler-d-block">
    <div class="a-handler-child-components-wrapper">
      <div class="a-handler-new-action-wrapper a-handler-pos-rel">
        <h4 class="a-handler-configListHeading">Update Action</h4>
        <hr class="a-handler-divider">
        <div class="a-handler-form-group">
          <div class="a-handler-form-row">
            <label class="fontBold a-handler-d-block a-handler-form-label">
              Add New Action
            </label>
            <input type="text" class="a-handler-config-panel-input a-handler-w-100" placeholder="Industry Research">
          </div>
          <div class="a-handler-form-row a-handler-w-50 a-handler-pos-rel a-handler-form-selectbox">
            <label class="fontBold a-handler-d-block a-handler-form-label">
              Control Type
            </label>
            <select class="a-handler-config-panel-input a-handler-d-block a-handler-w-100">
              <option>Checkbox</option>
              <option>Radio</option>
            </select>
          </div>
          <div class="a-handler-form-row">
            <label class="fontBold a-handler-d-flex align-item-center a-handler-form-label">
              Add Prompt
              <img src="images/alert_black.png" class="p-element a-handler-config-panel-tooltip-icon">
            </label>
            <textarea class="a-handler-config-panel-textarea a-handler-d-block a-handler-w-100" cols="50" row="4" placeholder="As a research analyst, create an industry overview on [Industry Name]. The response should be in detail along with sources, and in a professional tone. Also, highlight the sections in bold. "></textarea>
          </div>
          <div class="a-handler-form-button-wrapper a-handler-pos-fixed a-handler-d-block a-handler-w-100">
            <button type="reset" class="a-handler-configbutton a-handler-reset-button">Reset</button>
            <button class="a-handler-configbutton a-handler-save-button">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>`
    break;
    case 3:
    actionPromt.innerHTML = `<div class="a-handler-d-block">
    <div class="a-handler-child-components-wrapper">
      <div class="a-handler-new-action-wrapper a-handler-pos-rel">
        <h4 class="a-handler-configListHeading">Update Action</h4>
        <hr class="a-handler-divider">
        <div class="a-handler-form-group">
          <div class="a-handler-form-row">
            <label class="fontBold a-handler-d-block a-handler-form-label">
              Add New Action
            </label>
            <input type="text" class="a-handler-config-panel-input a-handler-w-100" placeholder="M&A Case study">
          </div>
          <div class="a-handler-form-row a-handler-w-50 a-handler-pos-rel a-handler-form-selectbox">
            <label class="fontBold a-handler-d-block a-handler-form-label">
              Control Type
            </label>
            <select class="a-handler-config-panel-input a-handler-d-block a-handler-w-100">
              <option>Checkbox</option>
              <option>Radio</option>
            </select>
          </div>
          <div class="a-handler-form-row">
            <label class="fontBold a-handler-d-flex align-item-center a-handler-form-label">
              Add Prompt
              <img src="images/alert_black.png" class="p-element a-handler-config-panel-tooltip-icon">
            </label>
            <textarea class="a-handler-config-panel-textarea a-handler-d-block a-handler-w-100" cols="50" row="4" placeholder="As a research analyst, create a transaction case study on [Acquiror Name, Target Name]. The response should be in detail along with sources, and in a professional tone. Also, highlight the sections in bold."></textarea>
          </div>
          <div class="a-handler-form-button-wrapper a-handler-pos-fixed a-handler-d-block a-handler-w-100">
            <button type="reset" class="a-handler-configbutton a-handler-reset-button">Reset</button>
            <button class="a-handler-configbutton a-handler-save-button">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>`
    break;
    default:
      actionPromt.innerHTML = "";
    }
  }
function showParagraph(option) {
  var paragraph = document.getElementById('paragraph');
  switch(option) {
  case 1:
    paragraph.innerHTML = `<div class="a-handler-prompt">
    <h4 class="a-handler-heading">
      Business Overview 
    </h4>
    <div class="a-handler-prompt-message">
      Create a section on Business Overview for a company,<input type="text" class="dynamicInput" placeholder="[Company Name]" size="12"> 
      on KPIs such as revenue, headquarters, founding year and total liabilities in a tabular format where Y-axis are the KPIs. Include 
      the information on company’s description: products/services offerings, key investments in last 3 months and geographical footprint in bullet points. 
    </div>`
    break;
  case 2:
    paragraph.innerHTML = `<div class="a-handler-prompt">
    <h4 class="a-handler-heading">
    Key Management
    </h4>
    <div class="a-handler-prompt-message">
    Create bio profiles on executive management for a company, <input type="text" class="dynamicInput" placeholder="[Company Name]" size="12">
    including information on their current role, historical experience in different companies and education background in bullet points utilizing "company website", "companies UK house" and "LinkedIn" as sources. 
    </div>`;
    break;
    case 3:
    paragraph.innerHTML = `<div class="a-handler-prompt">
    <h4 class="a-handler-heading">
    Recent News
    </h4>
    <div class="a-handler-prompt-message">
    Mention all the developments or news or updates of <input type="text" class="dynamicInput" placeholder="[Company Name]" size="12">
    in bullet points in last 2 years. Please mention the date and then the event". 
    </div>`;
    break;
    case 4:
    paragraph.innerHTML = `<div class="a-handler-prompt">
    <h4 class="a-handler-heading">
    Products & Services 
    </h4>
    <div class="a-handler-prompt-message">
    Write about all products or services or solutions offered by <input type="text" class="dynamicInput" placeholder="[Company Name]" size="12">
    in a structured manner. Provide quantifiable details as well.
    </div>`;
    break;
    case 5:
    paragraph.innerHTML = `<div class="a-handler-prompt">
    <h4 class="a-handler-heading">
    Key Trends and Challenges  
    </h4>
    <div class="a-handler-prompt-message">
    Analyze the industry trends for Industry<input type="text" class="dynamicInput" placeholder="[Industry Name]" size="12"> 
    for the past 12 months and compare it to the same period last year. Present your detailed findings in a report.
    </div>`;
    break;
    case 6:
    paragraph.innerHTML = `<div class="a-handler-prompt">
    <h4 class="a-handler-heading">
    Industry Overview 
    </h4>
    <div class="a-handler-prompt-message">
    Summarize the <input type="text" class="dynamicInput" placeholder="[Industry  Name]" size="12">
    overview from all sources. Provide response in 3 major headings
    </div>`;
    break;
    case 7:
    paragraph.innerHTML = `<div class="a-handler-prompt">
    <h4 class="a-handler-heading">
    SWOT Analysis   
    </h4>
    <div class="a-handler-prompt-message">
    Summarize the key strengths and weakness of Industry<input type="text" class="dynamicInput" placeholder="[Company Name]" size="12"> 
    and identify the key opportunities available for the industry.
    </div>`;
    break;
    case 8:
    paragraph.innerHTML = `<div class="a-handler-prompt">
    <h4 class="a-handler-heading">
    Key Developments    
    </h4>
    <div class="a-handler-prompt-message">
    Mention all the recent developments in the <input type="text" class="dynamicInput" placeholder="[Industry Name]" size="12">
    industry.
    </div>`;
    break;
    case 9:
    paragraph.innerHTML = `<div class="a-handler-prompt">
    <h4 class="a-handler-heading">
    Transaction Overview     
    </h4>
    <div class="a-handler-prompt-message">
    Provide detailed overview of the transaction including which company acquired the target company. What are the key highlights of the transaction. please provide response in bullet points
    </div>`;
    break;
    case 10:
    paragraph.innerHTML = `<div class="a-handler-prompt">
    <h4 class="a-handler-heading">
    Synergies     
    </h4>
    <div class="a-handler-prompt-message">
    What are the expected synergies from the transaction and how these synergies will be accrued over the period of time

  .
    </div>`;
    break;
    case 11:
    paragraph.innerHTML = `<div class="a-handler-prompt">
    <h4 class="a-handler-heading">
    Key Strategy     
    </h4>
    <div class="a-handler-prompt-message">
    Create a key strategy for a company<input type="text" class="dynamicInput" placeholder="[Company Name]" size="12"> 
  ],including information on the company’s growth strategy, expansion plans, launch of new products/service, new acquisitions in detail, new client addition (mention the name of the clients) in bullet points and what are they planning to achieve through that. I would like to prioritize the sources from "company website", "company’s annual report", and "investor presentations".

  .
    </div>`;
    break;
    case 12:
    paragraph.innerHTML = `<div class="a-handler-prompt">
    <h4 class="a-handler-heading">
    Deal Structure     
    </h4>
    <div class="a-handler-prompt-message">
    Please explain the structure of the deal along with stats, in bullet points.
    </div>`;
    break;
    case 13:
    paragraph.innerHTML = `<div class="a-handler-prompt">
    <h4 class="a-handler-heading">
    Strategic Rationale     
    </h4>
    <div class="a-handler-prompt-message">
    Please elaborate the strategic rationale of the deal in bullet points
    </div>`;
    break;
  default:
    paragraph.innerText = "";
  }
}



$(document).ready(function () {

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


  $('.genrate_button').attr("disabled", "disabled");

  /*$('.businesOverview').hide();

  $('#businessOverview').click(function(){
    $('.businesOverview').show();
  });*/

  $('.manageSourcesection').hide();
  $('.manageTitleIcon').click(function(){
    $('.manageSourcesection').show();
  });

  $('.manageSource-section').hide();
  $('.manageSource').click(function(){
    $('.manageSource-section').show();
  });
  $('.manageOutput').hide();
  $('.manageOutput-type').click(function(){
    $('.manageOutput').show();
  });
  $('.updateAction').hide();
  $('.a-handler-edit').click(function(){
    $('.updateAction').show();
  });
  $('.companyProfileRecord').hide();
  $('.a-handler-add-section').click(function(){
    $('.selection-newAction').hide();
    $('.companyProfileRecord').show();
    $('#selectActiondrop').prop('disabled', true);
  });
  $('.manageAction').hide();
  $('.manageActionIcon').click(function(){
    $('.manageAction').show();
    $('.configurationValue').hide();
  });
  $('.addAction').hide();
  $('.addActionIcon').click(function(){
    $('.addAction').show();
    $('.newAdd_action').show();
    $('input:radio[name=action]:nth(0)').prop('checked',true);
    $('input:radio[name=action]:nth(1)').prop('checked',false);
    $('.configurationValue').hide();

  });
  $('.back-button').click(function(){
    $('.addAction').hide();
    $('.manageAction').hide();
    $('.updateAction').hide();
    $('.configurationValue').show();
    $('.manageOutput').hide();
    $('.manageSource-section').hide();
    $('.manageSourcesection').hide();
    $('.companyProfileRecord').hide();
    $('input:radio[name=action]:nth(0)').prop('checked',true);
    $('input:radio[name=action]:nth(1)').prop('checked',false);
    $('#selectActiondrop').prop('disabled', false);
    $('.companyProfileRecord').hide();
    $('#companyProfileId').hide();
    $('.existingAdd_action').hide();
    $('#selectActiondrop').val('');
  })
  
  $('.closeBrowseAction').click(function(){
    $('#gai_chat-bot_browser_action').hide();
    $('.gai_welcome-message').show();
    $('.gai_chat-bot_input-form').removeAttr("disabled");
    $('.foot_filter_right').removeAttr("disabled");
  });

  $('.gai_source_panel').hide();
  $('#newLibrarydrop').hide();
  $('#documentDrop').hide();
  $('.a-handler-source-placeholder').click(function(){
    $('.gai_source_panel').show();
    $('#newLibrarydrop').show();
    $('#documentDrop').hide();
    $('input #0').attr('checked', true);
    $('input #1').attr('checked', false);
    $('input #3').attr('checked', false);
  });
  $('.gai_source_panel_close').click(function(){
    $('.gai_source_panel').hide();
  });
  $('#documentTitle').click(function(){
    $('#documentDrop').show();
    $('#newLibrarydrop').hide();
    $('input #0').attr('checked', false);
    $('input #1').attr('checked', true);
    $('input #3').attr('checked', false);
  });
  $('#newLibrary').click(function(){
    $('#newLibrarydrop').show();
    $('#documentDrop').hide();
  });
  $('#webDetails').click(function(){
    $('#newLibrarydrop').hide();
    $('#documentDrop').hide();
  });

  $('.selection-newAction').hide();
  $('.companyProfileId').hide();
  $('#selectActiondrop').change(function(){
    $('#' + $(this).val()).show();
});

  $('#selectActiondrop').click(function(){
    $('.companyProfileId').show();
  });

  $('.existingAdd_action').hide();
  $('.existingAction').click(function(){
    $('.newAdd_action').hide();
    $('.existingAdd_action').show();
    $('input:radio[name=action]:nth(0)').prop('checked',false);
    $('input:radio[name=action]:nth(1)').prop('checked',true);
  });
 $('.newAction').click(function(){
    $('.newAdd_action').show();
    $('.existingAdd_action').hide();
    $('#selectActiondrop').prop('disabled', false);
    $('.companyProfileRecord').hide();
    $('#companyProfileId').hide();
    $('#selectActiondrop').val('');

  });

  $('.gi_icon').click(function (){
    $('.gai_chat-bot_message-list').hide();
    $('#gai_chat-bot_browser_action').css("display", "none");
    $('.gai_welcome-message').show();
    $('.gai_chat-bot_input-form').removeAttr("disabled");
    $('.foot_filter_right').removeAttr("disabled");
  });

  $('.p-multiselect-trigger').click(function(){
    $('.p-multiselect-panel').toggle();
  });

  $(".selectAllinput").click(function () {
    $(".checkBoxClass").prop('checked', $(this).prop('checked'));
  });

  $('ul.a-handler-dropdown-list').hide();
  $('.a-handler-selected-item').click(function(){
    $('ul.a-handler-dropdown-list') .toggle();
  });

  $('.a-handler-prompt').hide();
  $('.select_all').click(function(){
    $('.a-handler-prompt').show();
    $('.a-handler-no-record').hide();
  });

  $('.checkBoxClass').click(function(){
    $('.a-handler-prompt').show();
    $('.a-handler-no-record').hide();
  });

  $('.a-handler-checkbox-wrapper').click(function(){
    /*$(':input').removeAttr('placeholder');*/
    $('.a-handler-button-wrapper button').attr("disabled", false);
  });

  $('.a-handler-input-wrapper').click(function(){
    /*$(':input').removeAttr('placeholder');*/
    $('.a-handler-button-wrapper button').attr("disabled", true);
  });

  $('.gai_chatbot_reference_popup').hide();
  $("#showReferenceBox").click(function(){
    $('.gai_chatbot_reference_popup').show();
  });

  $('.gai_reference_postion_top_secondQuestion').hide();
  $('.gai_chatbot_reference_icon_secondquestion').click(function(){
    $('.gai_reference_postion_top_secondQuestion').toggle();
  });

  $('#gai_chat-bot_browser_action').hide();
  $('.gai_browse_actions').click(function(){
    $('#gai_chat-bot_browser_action').show();
    $('.gai_welcome-message').hide();
    $('.gai_chat-bot_message-list').hide();
    $('.gai_chat-bot_input-form').attr("disabled", "disabled");
    $('.foot_filter_right').attr("disabled", "disabled");
  });

  $("#companyProfile").click(function () {
    $(".companyprofile").addClass("active");
    $(".newcompanyprofile").removeClass("active");
    $(".maCasestudy").removeClass("active");
    $('.a-handler-section').show();
    $('.company_profile').show();
    $('.newCompany_profile').hide();
    $('.a-handler-prompt-wrapper').show();
    $('.newcompanyPro').hide();
    $('.a-handler-prompt').hide();
    $('.a-handler-no-record').show();
    $('.macase_study-active').hide();
  });
  $("#newCompanyprofile").click(function () {
    $(".companyprofile").removeClass("active");
    $(".newcompanyprofile").addClass("active");
    $(".maCasestudy").removeClass("active");
    $('.a-handler-prompt').hide();
    $('.a-handler-no-record').show();
    $('.selectAllinput').prop('checked', false);
    $('.checkBoxClass').prop('checked', false);
    $('.newcompanyPro').show();
    $('.macase_study-active').hide();
    $('.a-handler-section').show();
  });
  $("#maCasestudy").click(function () {
    $(".companyprofile").removeClass("active");
    $(".newcompanyprofile").removeClass("active");
    $(".maCasestudy").addClass("active");
    $('.a-handler-section').show();
    $('.company_profile').hide();
    $('.newCompany_profile').hide();
    $('.a-handler-prompt-wrapper').show();
    $('.newcompanyPro').hide();
    $('.a-handler-prompt').hide();
    $('.a-handler-no-record').show();
    $('.macase_study-active').show();

  });

  $('.a-handler-section').hide();
  $('.newCompany_profile').hide();
  $('.company_profile').hide();
  $('.a-handler-prompt-wrapper').hide();
  $('.macase_study-active').hide();
 
  $('#newCompanyprofile').click(function(){
    $('.a-handler-section').show();
    $('.company_profile').hide();
    $('.newCompany_profile').show();
    $('.a-handler-prompt-wrapper').show();
    $('.macase_study-active').hide();
  });


  $("#showReferenceBoxsecond").click(function(){
    $('.gai_chatbot_reference_popup').toggleClass();
  });

  $("#gai_chatbot_reference_popup_cross_icon").click(function(){
    $('.gai_chatbot_reference_popup').hide();
  });

  $(".hamburger, .sideBarFixedMenuOverlayWrapper").on("click", function () {
    $("body").toggleClass("sideBarFixedMenuOpen");
  });

  $('[data-toggle="tooltip"]').tooltip();

  //$("#sidebarNavScroll").slimscroll({ height: "100vh" });

  //**********************Search*******************************//

  var trigger = $(".pplPicker")[0];
  var dropdown = $(".submenuTop");
  $(".pplPicker").click(function () {
    dropdown.toggle();
  });
  $(document).on("click", function (event) {
    if (
      dropdown !== event.target &&
      !dropdown.has(event.target).length &&
      trigger !== event.target
    ) {
      $(".submenuTop").hide();
    }
  });
  $(".root li a").click(function () {
    $(".root li a").removeClass("selected");
    $(this).addClass("selected");
    $(".submenuTop").hide();
  });

  //**********************Search*******************************//

  if (
    $(
      "#datepicker, #datepicker1, #datepicker2, #datepicker3, #datepicker4, #datepicker5, #datepicker6, #datepicker7, #datepicker8"
    ).length
  ) {
    $(
      "#datepicker, #datepicker1, #datepicker2, #datepicker3, #datepicker4, #datepicker5, #datepicker6, #datepicker7, #datepicker8"
    ).datepicker();

    $(".timepicker").timepicker({
      timeFormat: "hh:mm p",
      interval: 60,
      startTime: "10:00",
      dynamic: false,
      ampm: true,
    });
  }

  /* Add Row & Delete Row Function */

  var i = 0;
  var rowCount = 3;
  $("#addRow").click(function () {
    if (i < 3) {
      $("#delTblRreq tr:last").after(
        '<tr class="labelRows"><td scope="row"><label>Equity and Debt comps</label></td><td><label>Debt comps</label></td><td>1</td><td class="actionItems"><a href="javascript:void(0)" class="fa-pen editIcon" data-toggle="tooltip" data-placement="top" title="Edit"></a><a href="javascript:void(0)" class="fa-times cancelIcon" data-toggle="tooltip" data-placement="top" title="Cancel"></a></td></tr><tr class="controlRows"><td scope="row"><select class="form-control slate"><option selected="selected">Select</option><option>Equity and Debt comps</option><option>Transaction Data</option><option>Industry Slides</option><option>Other</option></select></td><td><select class="form-control slate"><option selected="selected">Select</option><option>Debt comps</option><option>Equity comps</option><option>Trading levels</option></select></td><td><input type="number" class="form-control"></td><td class="actionItems"><a href="javascript:void(0)" class="fa-check checkIcon" data-toggle="tooltip" data-placement="top" title="Update"></a><a href="javascript:void(0)" class="fa-times cancelIcon" data-toggle="tooltip" data-placement="top" title="Cancel"></a></td></tr>'
      );
      i++;
    }
  });
  $("#addRow2").on("click", function () {
    var contentClone = $(".controlRows").parent().html();
    console.log(contentClone);
    $(".controlRows").after(contentClone);
  });
  $("#addRow3").on("click", function () {
    var contentClone = $(".controlRows").parent().html();
    console.log(contentClone);
    $(".controlRows").after(contentClone);
  });
  $(document).on("click", "#delTblRreq .fa-times", function () {
    $(this).closest("tr").hide();
  });

  $(document).on("click", "#delTblRreq .controlRows .fa-check", function () {
    $(this).closest("tr").prev(".labelRows").show();
    $(this).closest("tr").hide();
  });

  $(document).on(
    "click",
    "#delTblRreq .labelRows .fa-pen,#delTblRreq .labelRows .fa-times",
    function () {
      $(this).closest("tr").next(".controlRows").show();
      $(this).closest("tr").hide();
    }
  );

  /* Add Row & Delete Row Function */

  /* Jquery Multiple File Uploader Function */
  var uploadElement = $("#thefiles, #thefiles2");
  if (uploadElement.length) {
    uploadElement.FancyFileUpload({
      params: {
        // editable file name?
        edit: false,
        // max file size
        maxfilesize: 3,
        // max file size
        preview: null,
      },
    });
  }
  /* Jquery Multiple File Uploader Function */

  /* Jquery Text Editor Function */
  var editorElem = $(
    "#txtEditor, #txtEditor2, #txtEditor3, #txtEditorVRD, #txtEditor5, #txtEditor11"
  );
  if (editorElem.length) {
    $("#txtEditor").Editor();
    $("#txtEditor2").Editor();
    $("#txtEditor3").Editor();
    $("#txtEditor5").Editor();
    $("#txtEditor6").Editor();
    $("#txtEditor7").Editor();
    $("#txtEditor8").Editor();
    $("#txtEditor9").Editor();
    $("#txtEditor10").Editor();
    $("#txtEditor11").Editor();
    $("#txtEditor12").Editor();
    $("#txtEditorVRD").Editor();
    // $("#txtEditor2").Editor("setText", "");
    // $("#txtEditor5").Editor(
    //   "setText",
    //   "Hi Team,<br><br>Can you please update the presentation / charts with the information / instructions on the page.<br><br>I attached the comps / NTM files that should be used for this. PLease note that the PFG NTM tab is manually adjusted. Can you please for the brokers named in that tab send me the latest research reports too?<br><br>I also attached the Master Comps file that has the outputs for page. Please include the output in the PFG comps file and update it for the companies outlined in the tab. Please keep them in that order.<br><br>Best,<br>Amanda Brufman"
    // );
  }
  /* Jquery Text Editor Function */

  function respTable() {
    if ($(window).width() < 1025) {
      $("#viewRequestTable").addClass("table-responsive");
    } else {
      $("#viewRequestTable").removeClass("table-responsive");
    }
  }
  /* Jquery DataTable Function */

  if ($("#viewRequestTable").length) {
    $("#viewRequestTable").DataTable({
      responsive: false,
      columnDefs: [{ orderable: false, targets: 8 }],
    });
    respTable();
    $(window).resize(function () {
      //respTable();
      //$("#viewRequestTable").removeClass('table-responsive');
    });
  }
  $(".more-nav").each(function (index) {
    $(this).on("click", function () {
      $(this).parent().find(".global_grid_actions_Container__child").toggle();
    });
  });
  /* Jquery DataTable Function */

  $(".more-nav").each(function (index) {
    $(this).on("click", function () {
      $(this).parent().find(".global_grid_actions_Container__child").toggle();
    });
  });

  $(".toggleFilter").on("click", function () {
    $(".filtersBox").toggle();
  });

  $(".applybtn").on("click", function () {
    $(".filtersBox").toggle()
    $("#knowledgeDoc_table1").hide();
    $("#knowledgeDoc_table2").show();
  });
  $("#knowledgeDoc_table2").hide();

  if (
    $(
      "#example, #example1, #example2, #example3, #example4, #example5, #example6, #example7, #example8, #example9"
    ).length
  ) {
    $(
      "#example, #example1, #example2, #example3, #example4, #example5, #example6, #example7, #example8, #example9"
    ).DataTable({
      aaSorting: [],
      //"aaSorting" : [[]]
      responsive: true,
      ordering: false,
      columnDefs: [
        {
          responsivePriority: 1,
          targets: 0,
        },
        {
          responsivePriority: 2,
          targets: -1,
        },
      ],
    });
  }
  $(".dataTables_filter input").attr("placeholder", "").css({
    width: "160px",
    display: "inline-block",
  });

  $('[data-toggle="tooltip"]').tooltip();

  $(".sorting").css("cursor", "default");
  $(".sorting_asc, .sorting_desc").on("click", function (e) {
    e.preventDefault(e);
    e.stopPropagation(e);
  });

  //Report table
  // $("#report-table1, #report-table2").DataTable({
  //   aaSorting: [],
  //   //"aaSorting" : [[]]
  //   responsive: true,
  //   ordering: false,
  //   columnDefs: [
  //     {
  //       responsivePriority: 1,
  //       targets: 0,
  //     },
  //     {
  //       responsivePriority: 2,
  //       targets: -1,
  //     },
  //   ],
  // });

});

//star rating js//

$(document).ready(function () {
  /* 1. Visualizing things on Hover - See next part for action on click */
  $("#stars a")
    .on("mouseover", function () {
      var onStar = parseInt($(this).data("value"), 10); // The star currently mouse on

      // Now highlight all the stars that's not after the current hovered star
      $(this)
        .parent()
        .children("a.star")
        .each(function (e) {
          if (e < onStar) {
            $(this).addClass("hover");
          } else {
            $(this).removeClass("hover");
          }
        });
    })
    .on("mouseout", function () {
      $(this)
        .parent()
        .children("a.star")
        .each(function (e) {
          $(this).removeClass("hover");
        });
    });

  /* 2. Action to perform on click */
  $("#stars a").on("click", function () {
    var onStar = parseInt($(this).data("value"), 10); // The star currently selected
    var stars = $(this).parent().children("a.star");

    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass("selected");
    }

    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass("selected");
    }

    // JUST RESPONSE (Not needed)
    var ratingValue = parseInt($("#stars a.selected").last().data("value"), 10);
    var msg = "";
    if (ratingValue > 1) {
      msg = "Thanks! You rated this " + ratingValue + " stars.";
    } else {
      msg =
        "We will improve ourselves. You rated this " + ratingValue + " stars.";
    }
    // responseMessage(msg);
  });
  //hide timesheet icon
  // $(".timesheet").parent().parent().parent().addClass("d-none");

  $(".overlayemail-overlay").on("click", function () {
    $(".overlayemail").css("transform", "translateX(100%)");
    $(".overlayemail-overlay").hide();
  });

  //$("#sidebarNavScroll ul li:nth-child(10)").hide();
  
  
  
 
});

function GIopenNav() {
  document.getElementById("GIsidenav").style.marginRight = "0px";
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
  document.getElementById("GIsidenav").style.transition = "all 0.5s";
}
 
function GIclosed() {
  document.getElementById("GIsidenav").style.marginRight = "-100%";
  document.getElementById("GIsidenav").style.transition = "all 0.5s";
  document.getElementsByTagName("body")[0].style.overflow = "auto";
  document.getElementById("layoutEditorpan").style.right = "-100%";
  document.getElementById("layoutEditorpan").style.transition = "all 0.5s";
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
}


function cValueOpen() {
  document.getElementById("layoutEditorpan").style.right = "0%";
  document.getElementById("layoutEditorpan").style.transition = "all 0.5s";
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
}

function cValueclose() {
  document.getElementById("layoutEditorpan").style.right = "-100%";
  document.getElementById("layoutEditorpan").style.transition = "all 0.5s";
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
}



function getAnswers() {
  // var userQuestions = document.getElementById("ask_question").value.trim().toLowerCase();
  // //Define set of questions and answers
  // var qaPairs = {
  // "what is your name?": "My name is Chatbot",
  // "how does it work?": "It works on the basis of predefined questions and answers"
  // };
  // if(qaPairs.hasOwnProperty(userQuestions)) {
  //   //display corresponding answers
  //   var questionAnswerString = "<span class='initials'>CS </span> " + userQuestions + "<br>Answer: " + qaPairs[userQuestions] + "<br>";
  //   document.getElementById("questionAnwerResult").innerHTML = questionAnswerString;
  //   $(".gai_welcome-message").hide();
  //   document.getElementById("ask_question").value = "";
  // }
  // else {
  //   //document.getElementById("answerResult").innerText = "Answer: I don't have an answer for that question";
    
  // }
}
// Function to handle keypress event
// function handleKeyPress(event) {
//   if(event.keyCode === 13) {
//     event.preventDefault();
//     getAnswers();
//   }
// }
//document.getElementById("ask_question").addEventListener("keypress", handleKeyPress);
function showAnswers(event) {
  //event.preventDefault();
  $("#gai_chat-bot_message-list").show();
  $(".gai_welcome-message").hide();
  setTimeout(function() {
    $("#bot_loader").hide();
    $("#bot-message-text1").show();
    $("#questionBox").val("");
    $(".gai_submit_btn_icon").addClass("secondQuestion");
  }, 2000);
  $(".prompts").hide();
}

$('#showRef').click(function(){
  $(".gai_reference_postion_top").toggle();
});
$('#showReferenceBox').click(function(){
  $(".gai_reference_postion_top").toggle();
});

$('body').on('click', '.secondQuestion', function(e){
  setTimeout(function() {
    $("#bot-message-text2").show();
    $("#query1").removeClass("d-none");
    $("#query1").show();
    $("#questionBox").val("");
    $('#gai_chat-bot_message-list').animate({scrollTop:$(document).height()}, 'slow');
    return false;
  }, 2000);
});
$("#overlay_panel").hide();
$(".gai_filter_ico_wrapper").click(function(){
  $("#overlay_panel").show();
  $('.gai_source_panel').hide();
});
$("#overlay_panel_close").click(function(){
  $("#overlay_panel").hide();
});

$(".multiselect-1").hide();
$("#multiselect-library").click(function(){
  $(".multiselect-2").toggle();
});
$(".multiselect-2").hide();
$("#coverage-group").click(function(){
  $(".multiselect-1").toggle();
});

$(".p-overlaypanel-close").click(function() {
  $("#overlay_panel").hide();
})

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('.manageActiontoggle-btn').click(function() {
  var $block = $(this).closest('.block');
  $block.find('.manageTitle').toggleClass('managecontent');
  $block.find('.manageTitle-edit').toggleClass('managecontent');

});

$(".gi_closed").click(function () {
  location.reload(true);
});

  
