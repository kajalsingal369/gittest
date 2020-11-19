const math = require('../math')
 describe('math calculation check',()=>{
    test("adding ",()=>{
        expect(math.sum(1,1)).toBe(2)
    })
    
    test("multiplying ",()=>{
        expect(math.mul(1,2)).toBe(2)
    })
    
    test("subtraction ",()=>{
        expect(math.sub(1,1)).toBe(0)
    })
    
    test("dividing ",()=>{
        expect(math.div(1,1)).toBe(1)
    })
    

 })
