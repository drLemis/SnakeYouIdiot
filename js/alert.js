drawAlert();
function drawAlert() {
	var backgroundImage = new Image();
	backgroundImage.src = "data:image/gif;base64,R0lGODlh3ABNAIABAAAAAP///yH5BAEKAAEALAAAAADcAE0AAAL+hI+py+0Po5y02ouzhqH7D3ZL6F3kiQZHyo7sq27yHMGhgpp2uu534svRhsReUIQQVo4kIzPmfEKLVI0UaVBSrqWsFtdl8Kpk4tfbRP+WZ047GQafyvRZW/l+jLd5Y2NfF2jBhdX3Z+gy5/BxqCj4OEEIhZgYJNYH0pgGyalHGMU4yHR5tUjZ+SgJGhc5WumquYY6C7dZu3YKlLtqGZtJC6z2q7u5y4vVyuUbGkx752gsPJxsK4dMXN3M+VzsyOctAWg9hS2rvQ0uHRYNIF6DyTw+fQ7JjZv+ju+pL7zMSi/I3jBV6o4cI1fO3zWAgQQyI9juU8GFtxAeZIguW8T+bsom+rgYS6FFjGQcrpO4sZRHU/9AknwJM6bMmTRr2hQlJJQUj2kg6hwT72anFil5Av2YcqcankuFziL601Uvn12gtnTa8CgSpVNRRlUUFKvYsWSNSjqLNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW75sbh/mzS+s7PgWthxnxxuQhptHanRjGabzUUytOrEvljBcVGITWzbskWZbUvQdOjdm2p1PW9Qo3HLFXm6O40s+WXTrRnagC6ajMaFn64GxZ5aegftg76il8yYu3i/50Muvikyf95Va0OXhH5afln5w+4XX8aPVDxx/48mhgzsRlSSgXokU+AyCCeK1IE4NVvFgfARK+Nx521VYV4TL+bffabbJw2FcHoICInAigpFiiWyd2FSLzjnoolwwFrXbd6+xVuNcN7KXFHIahtejjRe2ZxCLJP5WpIJHHvSZkuY51ySET/ZGlC4gylhlWz+i5BqQXd71ZUdhuoflmBDVsiRzmgGJpJprlanSm2hOKed/VwaZjY7FVdRmnmv6gec/frrTp6D5Ucfjfmc8quhZIZVWH6SWRloneBsymWiWUGL6Z5ybUolalHFyWAAAOw=="

	const backgroundColor = "#FF3030";

	const canvas = document.getElementById("canvasAlert");
	const ctx = canvas.getContext("2d");

	var offsetTopBase = 45

	var offsetLeftMin = 125
	var offsetLeftMax = 195
	var offsetLeftCurrent = offsetLeftMin

	var charSize = 3;
	var lineMax = 5;
	var lineNumber = 0;

	drawBackground();

	setInterval(() => {
		drawLine();
	}, 20)

	setInterval(() => {
		drawDigits();
	}, 50)


	function drawBackground() {
		ctx.fillRect(20, 94, 180, 3);
		ctx.fillRect(20, 159, 180, 3);

		ctx.drawImage(backgroundImage, 0, 5);
	}

	function drawLine() {
		if (offsetLeftCurrent > offsetLeftMax) {
			offsetLeftCurrent = offsetLeftMin;
			if (lineNumber < lineMax) {
				lineNumber++;
			} else {
				var imgData = ctx.getImageData(offsetLeftMin, offsetTopBase + (charSize * 2), offsetLeftMax - offsetLeftMin + charSize, lineMax * charSize * 2 + charSize);
				ctx.putImageData(imgData, offsetLeftMin, offsetTopBase);
			}
		}

		var rnd = Math.random();
		if (rnd < 0.85) {
			ctx.fillStyle = "#000000";
		} else {
			ctx.fillStyle = backgroundColor;
		}

		ctx.fillRect(offsetLeftCurrent, offsetTopBase + lineNumber * (charSize * 2), charSize, charSize);
		offsetLeftCurrent += charSize;
	}

	function drawDigits() {
		ctx.fillStyle = backgroundColor;
		var topOffsetText = 158;
		ctx.fillRect(20, 97, 185, 62);

		ctx.font = "90px Digital-7 Mono";

		ctx.fillStyle = "#00000033"

		ctx.fillText("0",20,topOffsetText);
		ctx.fillText("0",60,topOffsetText);
		ctx.fillText(".",90,topOffsetText);
		ctx.fillText("0",120,topOffsetText);
		ctx.fillText("0",160,topOffsetText);

		ctx.fillStyle = "#000000"

		var rnd = Math.floor(Math.random() * 9) + 1
		ctx.fillText(rnd,20,topOffsetText);
		rnd = Math.floor(Math.random() * 9) + 1
		ctx.fillText(rnd,60,topOffsetText);
		ctx.fillText(".",90,topOffsetText);
		rnd = Math.floor(Math.random() * 9) + 1
		ctx.fillText(rnd,120,topOffsetText);
		rnd = Math.floor(Math.random() * 9) + 1
		ctx.fillText(rnd,160,topOffsetText);
	}

}
