    let currentCaptcha = '';

    function generateCaptcha() {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let captcha = '';
      for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      currentCaptcha = captcha;
      document.getElementById('captcha-box').textContent = captcha;
      document.getElementById('user-input').value = '';
      document.getElementById('message').textContent = '';
    }

    function checkCaptcha() {
      const userValue = document.getElementById('user-input').value;
      const message = document.getElementById('message');
      if (userValue === currentCaptcha) {
        message.textContent = '✅ Correct!';
        message.className = '';
      } else {
        message.textContent = '❌ Incorrect. Try again.';
        message.className = 'error';
        generateCaptcha();
      }
    }

    // Initialize on load
    window.onload = generateCaptcha;