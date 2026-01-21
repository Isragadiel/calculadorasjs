const sumar=require('../src/suma');
test('suma2 +4 deeria ser 6',()=>{
    expect(sumar(2,4)).toBe(6);
});

test('suma -1+1 se espera 0',()=>{
    expect(sumar(1,-1)).toBe(0)
});

test('sumar 0 mas 0 deve ser 0',()=>{
    expect(sumar(0,0)).toBe(0)
})

test('sumar 50 mas 50 debe ser 100',()=>{
    expect(sumar(50,50)).toBe(100)
})