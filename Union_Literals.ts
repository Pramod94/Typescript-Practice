
// Union types
type InputUnion = number | string;

let input: InputUnion = 10;
input = 'Hello';

// throws error because acceptable is not of type boolean
//input = true;

// type literals

type Literals = 20 | 40 | 60;

let input2: Literals = 20;
input2 = 40;

// throws error because can't accept of value 50
//input2 = 50;
