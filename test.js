import test from 'ava';
import hexCheck from '.';

test('Hex check numbers', t => {
	t.is(hexCheck(0x0000), true);
	t.is(hexCheck(0xFFFFFFFFFF), true);
	t.is(hexCheck(0x000012AB), true);
	t.is(hexCheck(0x01234567890ABCDEF), true);
});

test('Hex check strings', t => {
	t.is(hexCheck('AABBCC120918123'), true);
	t.is(hexCheck('AAAAAAAAAAFFFFFFFFF'), true);
	t.is(hexCheck('CCCCEEEEEEE4444FF'), true);
	t.is(hexCheck('CC44FFEE54CD'), true);
});

test('Hex check other', t => {
	t.is(hexCheck('a12c4d12f'), true);
	t.is(hexCheck('B12c4d1245G'), false);
	t.is(hexCheck('0x1234'), false);
	t.is(hexCheck('example'), false);
	t.is(hexCheck('1337'), true);
	t.is(hexCheck('1c4c5d0981O'), false);
});
