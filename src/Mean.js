
function Mean(data){
    var sum=0;

    data.forEach((value)=> sum+=value)
    return sum/data.length;
}

export default Mean;