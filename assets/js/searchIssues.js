
let searchIssueForm = document.getElementById('search-issue-form');
let searchJson = document.getElementById('issue-data').getAttribute('data');
let searchIssues = JSON.parse(searchJson);
let searchList = document.getElementById('issues-list');

searchIssueForm.addEventListener('submit', function (e) {
  e.preventDefault();

  let searchedIssues = [];

  let titleValue = searchIssueForm.querySelector('input[name="tie"]').value;
  let descriptionValue =
    searchIssueForm.querySelector('input[name="des"]').value;

  searchIssues.map((el) => {
    if (el.title == titleValue || el.description == descriptionValue) {
      if (!searchedIssues.includes(el)) {
        searchedIssues.push(el);
      }
    }
  });
  searchList.innerHTML = '';
  for (let issue of searchedIssues) {
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
    searchList.appendChild(Div);
  }
});
