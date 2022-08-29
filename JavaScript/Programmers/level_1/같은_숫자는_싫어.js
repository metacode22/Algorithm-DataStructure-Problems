function solution(arr)
{
    const result = new Array();
    const stack = new Array();
    const newArr = [...arr];
    
    newArr.map((element) => {
        if (stack[stack.length - 1] != element) {
            result.push(element);
        }
        
        stack.push(element);
    })
    
    return result;
}