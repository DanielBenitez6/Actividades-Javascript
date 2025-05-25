console.log("Running script...");
function runCode() {
      const code = document.getElementById("codeArea").value;
      const iframe = document.getElementById("resultFrame");
      iframe.srcdoc = code;
    }