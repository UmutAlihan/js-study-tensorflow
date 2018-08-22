//Codintrain tutorials, URL: 
/*
create tf squential obj
configure some layers
add them to that model
configure the optimizer, loss func
compile
*/
//tf.sequential()  -> output of one layer is the input to another layer
//tf.layers.dense() -> term for fully connected layer
//optimized -> minimizes the loss function

//created empty architecture
const model = tf.sequential();

//need to specify configuration options
const hidden = tf.layers.dense({
	units: 4,
	inputShape: [2],
	activation: 'sigmoid'
});
const output = tf.layers.dense({
	units: 3,
//	inputShape: [4],
	activation: 'sigmoid'
});

 
model.add(hidden);
model.add(output);

//training tf using stochastic gradient descent optimizer
const sgdOpt = tf.train.sgd(0.1);
model.compile({
	optimizer: sgdOpt,
	loss: tf.losses.meanSquaredError
}
);






