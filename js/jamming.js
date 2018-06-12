drawJamming();
function drawJamming() {
	var backgroundImage = new Image();
	backgroundImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAABOCAYAAABL9HjJAAAACXBIWXMAAAsTAAALEwEAmpwYAAADKklEQVR42u3dy3rrIAyFUatf3v+VdUZn1qTxFQnWP21jLmKjDbZxbNuWG4BHeBWvX3z4Wx783becvX6ebGcWL++K3+zt37wx3mf79Ct+JpxEosh1omh9Y5L4VGnP0oKrFswoVt+YLE7RbYD+ENsw0T1d35gsXtFxkL4WEtuZNVmc9PNxcL3Tpbyr6tliHSbD9ZoUYtLylspUq2e4LoENg3lYpjvSF3YpYULsDMGB6AgORGcN151cNcgF4xCrxl+GQ7XJb2ruynCh01E001nDLTyTZ/PyZDqCayO6nKQ8oitgKfHZPuVk5VW2l0FwBTviwUGVk5ZnTcdSLm+fcuL+SYIDiI7gQHRViM39MECGA2ZkttsCe3a58s1v8sC1zpY5+lp7bNsV/fVX38twAAgOIDgA79c8dikBGQ4AAAAAAAAAAAAAgL9x4vBnUn+B4MYJTp/1ilW5mL0Gd0THieXI6VL5UP3ygX7yjYYTeJay7ySChjgI9u8ZPy/MdBgziT2R+csI7qpPvQbRlR/47KYMd7voOrXhN2EQAsEtJ7o8IR4sLrgqg/KOQftOdDZRIMMVWpN2bF/ubP9d6+5vr3Fm/fjYhOm2ACDDDWXvzD5Dlr7rLP+rsl7eFNOpBffpA4GxM1B7RJEXCjEubPNRm3bFoIsGk8CU5bKUTWfKxdoxjbt4Ne3AGDxYYxLRrX57IVYRXPUg5CID4r/oQlxYShaGvZwuxjLcvTNq5w/aZ8HB3T7LxYDAzti2LNKWb3dC88T/VI1FiwenWUqApcSCeB9uoP3b+4RCVV8fhQbd3W3yADdLOfWsDZZyKfHs2cg4Y0m8+0ZwQzJBNhfrkVdEomhbKthvlhLsJVjKDpnuiexG8AT3dnDNskt5x5ruqRhUsobZqP0y3OBBfOQMlCggNtv/1nBtRad+aJfhsliZuXNQ50ABxIP9mwReX3Ar2JTY2LHRGXp4/7OU7BsIblpxzX6DH8Us5Zn3uo5mhxFPcJw9PWzErYMr3rmTxWW4NplNppPhSpENyrv6XMwVDqXtNi6WEVyVIF5xTr2byixleVvWQWxA2zVcqA8A4DD/ALBqstGrhEu4AAAAAElFTkSuQmCC"

	const backgroundColor = "#00e040";

	const canvas = document.getElementById("canvasJamming");
	const ctx = canvas.getContext("2d");

	var offsetTopBase = 95

	var offsetLeftMin = 20
	var offsetLeftMax = 195
	var offsetLeftCurrent = offsetLeftMin

	var charSize = 3;
	var lineMax = 7;
	var lineNumber = 0;

	drawBackground();

	setInterval(() => {
		drawLine();
	}, 20)


	function drawBackground() {
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
}
