<!DOCTYPE html>
<html lang="ru">

<head>
  <title>title</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="src/css/normalize.css">
  <link rel="stylesheet" type="text/css" href="src/css/styles.css">
  <script type="text/javascript" src="src/js/jquery-min.js"></script>
  <script type="text/javascript" src="src/js/script.js"></script>
</head>

<body>

  <section id="main">
    <div class="main-row">
      <div class="form-container">
        <form name="time">
          <select class="form-item" id="names">
            <option>name 1</option>
            <option>name 2</option>
            <option>name 3</option>
            <option>name 4</option>
          </select>
          <input type="text" class="form-item" name="shifts" id="shifts_id" required/>
          <input type="number" class="form-item" name="number_of_shifts" id="number_of_shifts_id" required/>
          <input type="submit" class="submit" value="Add"/>
        </form>
      </div>
      <div>
        <div class="table-container">
          <table id="myTable">
              <tr>
                <th>Name</th>
                <th>Shifts</th>
              </tr>
          </table>
        </div>
        <div class="container-center">
          <button class="submit" id="start-button">Start</button>
        </div>
      </div>
      <div class="container-center" id="temp-container">
        <table id="temp-shifts">
          <thead>
            <tr>
              <th>Name</th>
              <th>Number of Shifts</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <button class="submit" disabled="true" id="next-shift">Next shift</button>
      </div>
      <div class="container-center" id="result-container">
        <table id="result-shifts">
          <thead>
            <tr>
              <th>Name-1</th>
              <th>Name-2</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <table id="stats">
          <thead>
            <tr>
              <th>Name</th>
              <th>Shifts in this month</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  </section>

</body>

</html>
