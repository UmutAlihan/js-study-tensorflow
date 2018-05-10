//CREATE TENSORS
const shape = [2, 3]; // 2 rows, 3 columns
const a = tf.tensor([1.0, 2.0, 3.0, 10.0, 20.0, 30.0], shape);
//a.print();

const b = tf.tensor([[1,2,3], [4,5,6]])
//b.print();

const c = tf.tensor2d([[2,3,4],[1,2,5]]);
//c.print();

const d  = tf.tensor3d([[[1], [2]], [[3], [4]]])
//d.print();

const zeros = tf.zeros([5,15]);
const ones = tf.ones([1,100]);
//ones.print();


//CREATE VARS AND ASSIGN TENSORS
const initialVariables = tf.zeros([5]);  //initialize tensor
const biases = tf.variable(initialVariables); //initialize var
//biases.print();

const updatedValues = tf.tensor1d([0,1,0,1,0]);
biases.assign(updatedValues); //update values of var
//biases.print();

//PRACTICE
const empty = tf.zeros([3]);
//empty.print();

//const e = tf.tensor3d([[[1,1,1],[1,1,1]],[1,1,1],[1,1,1]]]);
const emptyVar = tf.variable(empty)
//emptyVar.print();
array = [1,1,1];
const f = tf.tensor1d(array);
//f.print();
