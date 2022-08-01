// 간단한 익명함수.. 외부에서 사용하기 위해선 exports라는 모듈을 변수(abs)이름앞에 붙여 사용
exports.abs = function (number) {
    if (number > 0) {
        return number;
    } else {
        return -number;
    }
}

exports.circleArea = function (radius) {
    return radius * radius * Math.PI;
}