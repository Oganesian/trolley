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
      <form name="time">
        <select id="names">
          <option>name 1</option>
          <option>name 2</option>
          <option>name 3</option>
          <option>name 4</option>
        </select>
        <input type="text" name="shifts" id="shifts_id" required/>
        <input type="number" name="number_of_shifts" id="number_of_shifts_id" required/>
        <input type="submit" />
      </form>

      <div>
        <table id="myTable">
          <tr>
            <th>Имя</th>
            <th>Смены</th>
          </tr>
        </table>
      </div>
    </div>
  </section>

</body>

</html>
