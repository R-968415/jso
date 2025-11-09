<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Foto Acak Bertambah</title>
  <style>
    html,body {
      margin:0;
      padding:0;
      height:100%;
      background:#000;
      overflow:hidden;
    }
    body { position:relative; }
    img {
      position:absolute;
      border-radius:12px;
      box-shadow:0 0 25px rgba(255,255,255,0.25);
      opacity:0;
      transform:scale(0.5) rotate(0deg);
      transition:opacity 0.8s ease,transform 0.8s ease;
    }
    img.show {
      opacity:1;
      transform:scale(1) rotate(var(--rot));
    }
  </style>
</head>
<body>
  <script>
    const imageLink = "https://i.top4top.io/p_3600eh07c0.png";

    function randomPosition() {
      const x = Math.random() * (window.innerWidth - 100);
      const y = Math.random() * (window.innerHeight - 100);
      const r = Math.floor(Math.random() * 360) + 'deg';
      const size = 80 + Math.random() * 220;
      return { x, y, r, size };
    }

    function addImage() {
      const img = document.createElement('img');
      img.src = imageLink;
      const pos = randomPosition();
      img.style.left = pos.x + 'px';
      img.style.top = pos.y + 'px';
      img.style.width = pos.size + 'px';
      img.style.height = 'auto';
      img.style.setProperty('--rot', pos.r);
      document.body.appendChild(img);
      setTimeout(() => img.classList.add('show'), 50);
    }

    addImage();
    setInterval(addImage, 1000);
  </script>
</body>
</html>
