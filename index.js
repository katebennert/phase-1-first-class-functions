const receivesAFunction = foo => foo();

const returnsANamedFunction = () => function foo() {return 5 + 2};

const returnsAnAnonymousFunction = () => function () {return "boo!"};