const generatePage = () => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>Document</title>
</head>
<div class="jumbotron jumbotron-fluid bg-danger ">
    <div class="container">
        <h1 class="display-5 text-center text-white">My Team</h1>
    </div>
</div>

<body>
    <div class="container">
        <div class="row">
            <div class="col-4 mb-5">
                <div class="card shadow-lg" style="width: 18rem;">
                    <div class="card-header text-white bg-primary">
                        <h3 class="card-title">Jared</h3>
                        <h5>Manager</h5>
                    </div>
                    <div class="card-body">
                        <div class="card">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID:</li>
                                <li class="list-group-item">Email:</li>
                                <li class="list-group-item">Office Number:</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            
            <div class="col-4 mb-5">
                <div class="card shadow-lg" style="width: 18rem;">
                    <div class="card-header text-white bg-primary">
                        <h3 class="card-title">Alec</h3>
                        <h5>Engineer</h5>
                    </div>
                    <div class="card-body">
                        <div class="card">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID</li>
                                <li class="list-group-item">Email</li>
                                <li class="list-group-item">Github:</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-4 mb-5">
                <div class="card shadow-lg" style="width: 18rem;">
                    <div class="card-header text-white bg-primary">
                        <h3 class="card-title">Tammer</h3>
                        <h5>Intern</h5>
                    </div>
                    <div class="card-body">
                        <div class="card">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID</li>
                                <li class="list-group-item">Email</li>
                                <li class="list-group-item">School:</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>

</html>
    `;
};

module.exports = generatePage;