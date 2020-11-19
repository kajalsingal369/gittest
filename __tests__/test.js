const filterByTerm= require('../filtered')

describe("Filter function", () => {
    it("it should filter by a search term (link)", () => {
        const input = [
            { id: 1, url: "https://www.url1.com" },
            { id: 2, url: "https://www.url2.com" },
            { id: 3, url: "https://www.link3.com" }
        ];

        const output = [{ id: 3, url: "https://www.link3.com" }];

        expect(filterByTerm(input, "link")).toEqual(output);

        expect(filterByTerm(input, "LINK")).toEqual(output);
    });
});











//import jest from 'jest-cli'

//jest.unmock('../sum')

/*describe('Example of  jest',()=>{
    it(' Sum Quality',()=>{
        const sum = require('../sum')
        expect(sum(1,2)).toBe(3)
        
    })
})*/




