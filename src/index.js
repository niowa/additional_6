module.exports = function zeros(expression) {
	let arr = expression.split('*');
	let multArr = arr.map((item) => {
		return (item + '').slice(((item + '').length - 2)) == '!!' ? func2(parseInt(item)) : func(parseInt(item));
	});
	let mult = 1;
	for (let i = 0; i < multArr.length; i++) {
		mult = multiply(multArr[i] + '', mult + '');
	}
	let count = 0;
	for (let i = mult.length - 1; i > 0; i--) {
		if (mult.charAt(i) === '0') count++
		else i = 0;
	} 
	return count;
}

function multiply(first, second) {
  let line = [], args = [[]], result = [];
  let one = first.split(''),
      two = second.split('');
  let i = 0;
  two.forEach((top) => {
    one.forEach((bottom) => {
      line.push(top * bottom);
    });
    args[i] = Array(i).fill(0);
    args[i].push(...line);
    line.length = 0;
    i++;
  })
  let sizeX = args.length,
      sizeY = args[sizeX - 1].length,
      sumLine = 0;
  for (let i = sizeY - 1; i >= 0; i--) {
    for (let j = sizeX - 1; j >= 0; j--) {
      if (args[j][i] == undefined) {
        args[j][i] = 0;
      }
      sumLine += args[j][i];
    }
    result.unshift(sumLine);
    sumLine = 0;
  }
  result.reverse();
  let solut = result.map((item, i) => {
    if (i === result.length - 1) return item;
    if ((item + '').length == 1) {
      return item;
    }
    result[i + 1] += +((item + '').substr(0, (item + '').length - 1));
    return +((item + '').charAt(((item + '').length - 1)));
  })
  return solut.reverse()
              .join('');
}

let func = function fact(n) {
	let result = 1;
	for (let i = 1; i <= n; i++) {
		result = multiply(result + '', i + '');
	}
	return result;
	//return n ? n * fact(n - 1) : 1;
}

let func2 = function doubleFact(n) {
	let mult = n % 2 === 0 ? 2 : 1;
	let result = 1;
	for (let i = mult; i <= n; i += 2) {
		result = multiply(result + '', i + '');
	}
	return result;
	// let mult = n % 2 === 0 ? 2 : 1; 
	// return n <= mult ? n : n * doubleFact(n - 2);
}
