
const filterBasedOnVal = () => {
    results = ['a', 'b', 'c'].filter(input.value())
    
    return results
  }
  
  filterBasedOnVal.map((item) => <div>{item}</div>)