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

//Model
//created empty architecture
const model = tf.sequential();


//create hidden layer
//need to specify configuration options
//dense is a fully connected layer
const hidden = tf.layers.dense({
	units: 4,   //number of nodes
	inputShape: [2],  
	activation: 'sigmoid'   //activation function
});
//Add the layer
model.add(hidden);


//create another layer
const output = tf.layers.dense({
	units: 1,  //input shaoe 
	 //input shape is inferred from previous layer
	activation: 'sigmoid'
});
//Add the layer
model.add(output);


//Optimizer using gradient descent
//training tf using stochastic gradient descent optimizer
const sgdOpt = tf.train.sgd(0.1);

//done configuring model and compile it
model.compile({
	optimizer: sgdOpt,
	loss: tf.losses.meanSquaredError
});


const xs = tf.tensor2d([
	[0, 0],
	[0.5, 0.5],
	[1, 1]
]);

const ys = tf.tensor2d([
	[1],
	[0.5],
	[0],
]);

/*const config = {
	//verbose: true,
	epochs: 100
}*/

train().then(() => {
	console.log('training complete');
	let outputs = model.predict(xs);
	outputs.print();
});

//history: object returns information about
//await -> do this and the run next line of code
async function train(){
	for (let i = 0; i < 1000; i++) {
		const config = {
			shuttle: true,
			epochs: 10
		}
		const response = await model.fit(xs, ys, config);
		console.log(response.history.loss[0]);
	}
} 



