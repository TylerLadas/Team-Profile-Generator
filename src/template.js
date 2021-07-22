//function to create manager card
let generateManagerCard = manager => {
    return `
    <div class="col-3"
        <div class="card" style="width: 18rem;">
        <div class="card-header">
            {{ name }}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: {{ id }}</li>
            <li class="list-group-item">Email: <a href="mailto:{{ email }}">{{ email }}</a></li>
            <li class="list-group-item">Office Number: {{ office }}</li>
        </ul>
        </div>
    </div>
    `;
}

//function to create engineer card
let generateEngineerCard = engineer => {
    return `
    <div class="col-3"
        <div class="card" style="width: 18rem;">
        <div class="card-header">
            {{ name }}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: {{ id }}</li>
            <li class="list-group-item">Email: <a href="mailto:{{ email }}">{{ email }}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/{{ github }}" target="_blank">{{ github }}</a></li>
        </ul>
        </div>
    </div>
    `;
}

//function to create intern card
let generateInternCard = intern => {
    return `
    <div class="col-3"
        <div class="card" style="width: 18rem;">
        <div class="card-header">
            {{ name }}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: {{ id }}/li>
            <li class="list-group-item">Email: <a href="mailto:{{ email }}">{{ email }}</a></li>
            <li class="list-group-item">School: {{ school }}</li>
        </ul>
        </div>
    </div>
    `;
}

//function to generate html for dist/index.html
let generateHTML = data => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>My Team</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <div class="row">

    </div>
</body>
</html>
`;
};

module.exports = generateHTML;