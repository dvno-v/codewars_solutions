//using regex
function solution(string) {
    return string.split(/(?=[A-Z])/).join(" ");
}
  

solution("addDasdD");