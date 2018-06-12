drawEvasion();
function drawEvasion() {
	var backgroundImage = new Image();
	backgroundImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAABOCAYAAABL9HjJAAAACXBIWXMAAAsTAAALEwEAmpwYAAACMUlEQVR42u3cwXaDIBAFUOnx/395uuuqSU1BGId714lRyHMGbNOO44gDmOIcdJw24Vzj4mfGoHONCdccCcY3Osdm5ty3gePaOufkX77cc5beYJqhTD0/AldwMoVuo9AJXI5JFLpNxvWc/HlRfPKi4/1twHoqq1gYjpZpjFQ4VLrCFW724M7eTdMa5v5exG6Bq9QmPfnuHUKnwvV8adoNx0TorOHgya2/Xcp519cWjlW7uM6tNA+ew8HuN3eBQ+gKt5Tb9OoTz91Gz4Pay7PQoGZYKyF0WkrIcmPN+uBbJarVNrdEoVt6LiocKp3AQc3QCRxCN7m3tjYCFQ7qqfbg+5MdqFe/BBX/OFbvZ64+1ift14jx+mvsVThA4EDggNdrHruUoMIBAAAAAAAAAADsauUvGMUG4xEPmQsmOQ1BmhvKq59wC8Gswx8v56receE4/rtDS6mlXHBdKp2W8jFfpOh8feu8prjpGoRQS6llBIHrr7pCR4mWMnPoYlHo3rWk2kgVbqtKBwIndGgp9widZ2c8OnBxc0COTcYALSWocMxrQ1UugSu5hqrMIwKBY9CNRAUUuG3F4vcjcCRsqUnMLiUIHGgptXHWY6hwoMKpgu+fj92142kzReAYECS0lIDAgZZy+9br6vleXetZq6lwgMCBlvIj2idUOEDgQEu5Ka0wAtchLr5G0NBSJgsmKpwvbGf7GBMrnQfiArf9Wu230IGW8oawqTCocDeH62p7CT++AeWqZL2h4AonAAAAAElFTkSuQmCC"

	const backgroundColor = "#cccc30";

	const canvas = document.getElementById("canvasEvasion");
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
