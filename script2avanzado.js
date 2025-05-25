function updateStyles() {
      const output = document.getElementById("output");
      const color = document.getElementById("textColor").value;
      const bgColor = document.getElementById("bgColor").value;
      const fontSize = document.getElementById("fontSize").value + "px";
      const fontFamily = document.getElementById("fontFamily").value;
      const text = document.getElementById("textValue").value;

      output.style.color = color;
      output.style.backgroundColor = bgColor;
      output.style.fontSize = fontSize;
      output.style.fontFamily = fontFamily;
      output.innerHTML = text;
    }

    // Set default values on load
    window.onload = () => {
      document.getElementById("textColor").value = "#008080";
      document.getElementById("bgColor").value = "#ecffec";
      updateStyles();
    };