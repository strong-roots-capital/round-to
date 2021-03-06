import test from 'ava';
import m from '.';

test('roundTo()', t => {
	t.is(m(0.129, 3), 0.129);
	t.is(m(0.129, 2), 0.13);
	t.is(m(0.129, 1), 0.1);
	t.is(m(1.005, 2), 1.01);
	t.is(m(1.005, 0), 1);
	t.is(m(111.1, -2), 100);
	t.is(m(-0.375, 2), -0.38);
	t.false(Number.isNaN(m(10000000000000, 8)));
	t.is(m(0.37542323423423432432432432432, 8), 0.37542323);
});

test('roundTo.up()', t => {
	t.is(m.up(0.111, 3), 0.111);
	t.is(m.up(0.111, 2), 0.12);
	t.is(m.up(0.111, 1), 0.2);
	t.is(m.up(1.004, 2), 1.01);
	t.is(m.up(1.111, 0), 2);
	t.is(m.up(111.1, -2), 200);
	t.is(m.up(-0.375, 2), -0.37);
});

test('roundTo.down()', t => {
	t.is(m.down(0.666, 3), 0.666);
	t.is(m.down(0.666, 2), 0.66);
	t.is(m.down(0.666, 1), 0.6);
	t.is(m.down(1.006, 2), 1.00);
	t.is(m.down(1.006, 0), 1);
	t.is(m.down(111.6, -2), 100);
	t.is(m.down(-0.375, 2), -0.38);
});
