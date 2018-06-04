function setup() {
	noCanvas();

	const values = [];
	for (let i = 0; i < 30; i++) {
		values[i] = random(0,100);
	}

	const shape = [2,5,3];

	const tense = tf.tensor3d(values, shape, 'int32');

	//console.log(data.toString());
	/*tense.data().then(function(stuff) {
		//console.log(stuff);
	});*/

	//tense.dataSync();
	
	//tense.get(1);

}