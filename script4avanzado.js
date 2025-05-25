    function generateTable() {
      const num = parseInt(document.getElementById("numberInput").value);
      const outputDiv = document.getElementById("output");

      if (isNaN(num)) {
        outputDiv.innerHTML = "<p style='color:red;'>Please enter a valid number.</p>";
        return;
      }

      let html = "<table><tr><th>Expression</th><th>Result</th></tr>";
      for (let i = 1; i <= 10; i++) {
        html += `<tr><td>${num} × ${i}</td><td>${num * i}</td></tr>`;
      }
      html += "</table>";
      outputDiv.innerHTML = html;
    }