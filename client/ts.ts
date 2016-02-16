interface IBar {
	baz: string
}

var foo: {
	[property: string]: IBar
}

foo = {
	foobar: {
		baz: 'Hi there!'
	}
};

export = {
  foo: foo
}
