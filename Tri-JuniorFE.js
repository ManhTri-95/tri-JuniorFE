class JewelsStones 
{
    constructor(stones, jewels) {
        this.stones = stones.split('')
        this.jewels = jewels.split('');
        this.regX = new RegExp("([A-Za-z])");
    }
    
    isLetters = (s) => s.reduce((a,c) => a & this.regX.test(c), true);

    getTotal = () => {
      if(!this.isLetters(this.stones))
         throw 'the stones ..... character'
      if(this.stones.length > 50)
         throw 'the stone should have only max 50 characters'
      
      if(!this.isLetters(this.jewels))
         throw 'the jewels ..... character'
      if(this.jewels.length > 50)
         throw 'the jewels should have only max 50 characters'
      
      return this.jewels.reduce((a,c) => this.stones.includes(c) ? a + 1 : a, 0);  
    } 
    
}

const test1 = new JewelsStones('aA', 'aAAbbbb');
console.log(test1.getTotal());

const test2 = new JewelsStones('z', 'ZZ');
console.log(test2.getTotal());