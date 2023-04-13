for (var a = 1; a < 3; a++) {
	((a) => setTimeout(() => {
		console.log(a)
	}, 1000))(a)
}