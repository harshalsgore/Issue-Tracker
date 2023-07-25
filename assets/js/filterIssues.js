let filterIssueForm = document.getElementById('filter-issue-form');
let issuesJson = document.getElementById('issue-data').getAttribute('data');
let issues = JSON.parse(issuesJson);
let issueList = document.getElementById('issues-list');

filterIssueForm.addEventListener('submit', function (e) {
  e.preventDefault();

  let filteredIssues = [];

  let labelsList = filterIssueForm.querySelectorAll('input[type=checkbox]');
  let labelsElements = [...labelsList].filter((Element) => Element.checked);

  let authorVal = filterIssueForm.querySelector(
    'input[type=radio][name=author]:checked'
  ).value;

  let [...labelsArr] = labelsElements.map((Element) => Element.value);

  issues.map((el) => {
    if (el.author == authorVal) {
      if (!filteredIssues.includes(el)) {
        filteredIssues.push(el);
      }
    }
    labelsArr.map((label) => {
      if (el.labels.includes(label)) {
        if (!filteredIssues.includes(el)) {
          filteredIssues.push(el);
        }
      }
    });
  });
  issueList.innerHTML = '';
  for (let issue of filteredIssues) {
    let Div = document.createElement('div');
    Div.style = 'none';
    Div.innerHTML = `
      <div class="card w-100" >
      <div class="card-body" >
      <h4 class="card-title">Title : ${issue.title} </h4>
      <h5 class="card-subtitle">Author : ${issue.author}</h5>
      <h6 class="card-subtitle mt-1">
        Description : ${issue.description}
      </h6>
      <a href="/project/delete/${issue._id}" class="btn btn-md btn-danger" style="margin-left: 600px;">Delete Issue</a>
    </div>
  </div>
  `;
    issueList.appendChild(Div);
  }
});
